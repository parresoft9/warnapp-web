#!/usr/bin/env node

/**
 * Script de scraping FUNCIONAL usando Puppeteer
 * 
 * ⚠️ ADVERTENCIAS:
 * - Instagram y TikTok pueden bloquear esto en cualquier momento
 * - Pueden requerir CAPTCHA o cambiar su HTML
 * - Usa con moderación para evitar bloqueos de IP
 * 
 * INSTALACIÓN:
 * npm install puppeteer
 * 
 * USO:
 * node scrape-social-stats.js
 */

const fs = require('fs');
const path = require('path');

const STATS_FILE = path.join(__dirname, 'social-stats.json');

console.log('🔍 WarnApp - Social Stats Scraper\n');

// Check if puppeteer is installed
let puppeteer;
try {
    puppeteer = require('puppeteer');
} catch (error) {
    console.error('❌ Puppeteer no está instalado.');
    console.log('\n💡 Instálalo con:');
    console.log('   npm install puppeteer\n');
    console.log('⚠️  Nota: Puppeteer descarga Chromium (~170MB) en la primera instalación\n');
    process.exit(1);
}

// Read current stats
let currentStats;
try {
    const data = fs.readFileSync(STATS_FILE, 'utf8');
    currentStats = JSON.parse(data);
} catch (error) {
    console.error('❌ Error reading stats file:', error.message);
    process.exit(1);
}

/**
 * Scrape Instagram followers
 * Intenta obtener el número desde la página pública
 */
async function getInstagramFollowers(username, browser) {
    console.log(`📷 Scrapeando Instagram @${username}...`);
    
    try {
        const page = await browser.newPage();
        
        // Remove webdriver property to avoid bot detection
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false,
            });
        });
        
        // Set realistic headers to avoid bot detection
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0'
        });
        
        // Set viewport
        await page.setViewport({ width: 1920, height: 1080 });
        
        // Navigate to profile with longer timeout for CI
        await page.goto(`https://www.instagram.com/${username}/`, {
            waitUntil: 'domcontentloaded',
            timeout: 45000
        });
        
        // Wait longer for content to load in CI environments
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Try to extract followers count from meta tags or page content
        const followers = await page.evaluate(() => {
            // Method 1: Try meta tags (most reliable)
            const metaTag = document.querySelector('meta[property="og:description"]');
            if (metaTag) {
                const content = metaTag.getAttribute('content');
                const match = content.match(/(\d+(?:,\d+)*(?:\.\d+)?[KMB]?)\s+Followers/i);
                if (match) {
                    let num = match[1].replace(/,/g, '');
                    if (num.endsWith('K')) return Math.round(parseFloat(num) * 1000);
                    if (num.endsWith('M')) return Math.round(parseFloat(num) * 1000000);
                    if (num.endsWith('B')) return Math.round(parseFloat(num) * 1000000000);
                    return parseInt(num);
                }
            }
            
            // Method 2: Try to find text nodes with "followers"
            const treeWalker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            let currentNode;
            while (currentNode = treeWalker.nextNode()) {
                const text = currentNode.textContent;
                if (text && /followers/i.test(text)) {
                    // Look for number near "followers"
                    const match = text.match(/(\d+(?:,\d+)*(?:\.\d+)?[KMB]?)\s*followers/i);
                    if (match) {
                        let num = match[1].replace(/,/g, '');
                        if (num.endsWith('K')) return Math.round(parseFloat(num) * 1000);
                        if (num.endsWith('M')) return Math.round(parseFloat(num) * 1000000);
                        if (num.endsWith('B')) return Math.round(parseFloat(num) * 1000000000);
                        return parseInt(num);
                    }
                }
            }
            
            // Method 3: Try common selectors
            const selectors = [
                'a[href*="followers"] span',
                'span[title]',
                'header section ul li span',
                'header section ul li:nth-child(2) span'
            ];
            
            for (const selector of selectors) {
                const elements = document.querySelectorAll(selector);
                for (const el of elements) {
                    const text = el.textContent || el.getAttribute('title') || '';
                    const match = text.match(/^(\d+(?:,\d+)*(?:\.\d+)?[KMB]?)$/);
                    if (match) {
                        let num = match[1].replace(/,/g, '');
                        if (num.endsWith('K')) return Math.round(parseFloat(num) * 1000);
                        if (num.endsWith('M')) return Math.round(parseFloat(num) * 1000000);
                        if (num.endsWith('B')) return Math.round(parseFloat(num) * 1000000000);
                        const parsed = parseInt(num);
                        // Sanity check: followers should be > 100 for most accounts
                        if (parsed > 100) return parsed;
                    }
                }
            }
            
            // Method 4: Try JSON-LD structured data
            const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
            for (const script of scripts) {
                try {
                    const data = JSON.parse(script.textContent);
                    if (data.mainEntityofPage?.interactionStatistic) {
                        const followerStat = data.mainEntityofPage.interactionStatistic.find(
                            s => s['@type'] === 'InteractionCounter' && s.interactionType === 'http://schema.org/FollowAction'
                        );
                        if (followerStat?.userInteractionCount) {
                            return parseInt(followerStat.userInteractionCount);
                        }
                    }
                } catch (e) {}
            }
            
            return null;
        });
        
        await page.close();
        
        if (followers) {
            console.log(`   ✅ ${followers.toLocaleString()} seguidores`);
            return followers;
        } else {
            console.log(`   ⚠️  No se pudo extraer el número`);
            return null;
        }
        
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
        return null;
    }
}

/**
 * Scrape TikTok followers
 */
async function getTikTokFollowers(username, browser) {
    console.log(`🎵 Scrapeando TikTok @${username}...`);
    
    try {
        const page = await browser.newPage();
                // Remove webdriver property to avoid bot detection
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false,
            });
        });
                await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        await page.goto(`https://www.tiktok.com/@${username}`, {
            waitUntil: 'networkidle2',
            timeout: 30000
        });
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const followers = await page.evaluate(() => {
            // Try to find followers in the page
            const strongTags = Array.from(document.querySelectorAll('strong'));
            for (let i = 0; i < strongTags.length; i++) {
                const text = strongTags[i].textContent;
                const nextText = strongTags[i].parentElement?.textContent || '';
                
                if (nextText.toLowerCase().includes('followers')) {
                    let num = text.trim().replace(/,/g, '');
                    if (num.endsWith('K')) return Math.round(parseFloat(num) * 1000);
                    if (num.endsWith('M')) return Math.round(parseFloat(num) * 1000000);
                    if (num.endsWith('B')) return Math.round(parseFloat(num) * 1000000000);
                    return parseInt(num);
                }
            }
            
            // Alternative: Try data attributes
            const followerElements = document.querySelectorAll('[data-e2e="followers-count"]');
            if (followerElements.length > 0) {
                const text = followerElements[0].textContent.trim().replace(/,/g, '');
                if (text.endsWith('K')) return Math.round(parseFloat(text) * 1000);
                if (text.endsWith('M')) return Math.round(parseFloat(text) * 1000000);
                return parseInt(text);
            }
            
            return null;
        });
        
        await page.close();
        
        if (followers) {
            console.log(`   ✅ ${followers.toLocaleString()} seguidores`);
            return followers;
        } else {
            console.log(`   ⚠️  No se pudo extraer el número`);
            return null;
        }
        
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
        return null;
    }
}

// Main execution
(async () => {
    console.log('🚀 Iniciando navegador headless...\n');
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--disable-features=IsolateOrigins,site-per-process',
            '--disable-web-security',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu',
            '--window-size=1920,1080'
        ]
    });
    
    try {
        const igFollowers = await getInstagramFollowers(currentStats.instagram.username, browser);
        const ttFollowers = await getTikTokFollowers(currentStats.tiktok.username, browser);
        
        await browser.close();
        
        // Use scraped values or keep current if failed
        const newInstagram = igFollowers || currentStats.instagram.followers;
        const newTikTok = ttFollowers || currentStats.tiktok.followers;
        
        const newStats = {
            instagram: {
                followers: newInstagram,
                username: currentStats.instagram.username,
                url: currentStats.instagram.url
            },
            tiktok: {
                followers: newTikTok,
                username: currentStats.tiktok.username,
                url: currentStats.tiktok.url
            },
            lastUpdated: new Date().toISOString()
        };
        
        fs.writeFileSync(STATS_FILE, JSON.stringify(newStats, null, 2), 'utf8');
        
        console.log('\n✅ Proceso completado!\n');
        console.log('📊 Resultados:');
        console.log(`   Instagram: ${newInstagram.toLocaleString()} ${igFollowers ? '(✓ scraped)' : '(sin cambios)'}`);
        console.log(`   TikTok: ${newTikTok.toLocaleString()} ${ttFollowers ? '(✓ scraped)' : '(sin cambios)'}`);
        
        if (!igFollowers && !ttFollowers) {
            console.log('\n⚠️  No se pudieron obtener stats. Posibles razones:');
            console.log('   - CAPTCHA o verificación requerida');
            console.log('   - Cambios en el HTML de las plataformas');
            console.log('   - Bloqueo por demasiadas peticiones');
            console.log('\n💡 Alternativa: node update-social-stats.js --instagram X --tiktok Y\n');
        } else {
            console.log('\n💡 Los cambios se reflejarán en la web automáticamente\n');
        }
        
    } catch (error) {
        await browser.close();
        console.error('\n❌ Error fatal:', error.message);
        process.exit(1);
    }
})();
