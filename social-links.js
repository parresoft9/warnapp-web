/**
 * WarnApp Social Media Links Component
 * Centralizes social media icons and stats across all pages
 */

(function() {
    'use strict';

    // Social media configuration
    const SOCIAL_CONFIG = {
        email: {
            href: 'mailto:hello@warnapp.es',
            title: 'Email',
            svg: '<path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>'
        },
        whatsapp: {
            href: 'https://wa.me/34711214428',
            title: 'WhatsApp',
            svg: '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"/>'
        },
        instagram: {
            href: 'https://www.instagram.com/_warnapp',
            title: 'Instagram',
            class: 'instagram-link',
            hasBadge: true,
            badgeId: 'instagramBadge',
            defaultBadge: '1.5K',
            svg: '<path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"/>'
        },
        tiktok: {
            href: 'https://www.tiktok.com/@warnapp',
            title: 'TikTok',
            class: 'tiktok-link',
            hasBadge: true,
            badgeId: 'tiktokBadge',
            defaultBadge: '980',
            svg: '<path d="M16.6 5.82C15.9 5.03 15.44 4 15.44 2.83V2H12.4V14.63C12.4 15.92 11.35 16.97 10.06 16.97C8.77 16.97 7.72 15.92 7.72 14.63C7.72 13.34 8.77 12.29 10.06 12.29C10.33 12.29 10.59 12.34 10.83 12.43V9.32C10.59 9.28 10.33 9.26 10.06 9.26C7.07 9.26 4.65 11.68 4.65 14.67C4.65 17.66 7.07 20.08 10.06 20.08C13.05 20.08 15.47 17.66 15.47 14.67V8.91C16.77 9.87 18.38 10.44 20.11 10.44V7.41C18.59 7.41 17.24 6.82 16.6 5.82Z"/>'
        }
    };

    // Generate HTML for social links
    function generateSocialLinksHTML() {
        let html = '<div class="social-links">';
        
        for (const [key, config] of Object.entries(SOCIAL_CONFIG)) {
            const extraClass = config.class ? ` ${config.class}` : '';
            const dataTooltip = config.hasBadge ? ' data-tooltip="Cargando..."' : '';
            
            html += `
            <a href="${config.href}" class="social-link${extraClass}"${dataTooltip} title="${config.title}"${key !== 'email' ? ' target="_blank"' : ''}>`;
            
            if (config.hasBadge) {
                html += `
                <span class="follower-badge" id="${config.badgeId}">${config.defaultBadge}</span>`;
            }
            
            html += `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    ${config.svg}
                </svg>
            </a>`;
        }
        
        html += '\n        </div>';
        return html;
    }

    // Inject CSS styles
    function injectStyles() {
        // Check if styles already exist
        if (document.getElementById('warnapp-social-styles')) return;

        const style = document.createElement('style');
        style.id = 'warnapp-social-styles';
        style.textContent = `
        .social-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;
            flex-wrap: wrap;
        }

        .social-link {
            position: relative;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.1);
            border: 2px solid var(--primary-color, #FFD700);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            text-decoration: none;
            color: var(--primary-color, #FFD700);
        }

        .social-link svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .social-link:hover {
            background: var(--primary-color, #FFD700);
            color: var(--secondary-color, #1C1C1E);
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }

        .follower-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background: linear-gradient(135deg, #E1306C 0%, #FF6B6B 100%);
            color: white;
            font-size: 0.65rem;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 10px;
            border: 2px solid var(--secondary-color, #1C1C1E);
            pointer-events: none;
            z-index: 2;
            min-width: 32px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .social-link.tiktok-link .follower-badge {
            background: linear-gradient(135deg, #00F2EA 0%, #00D9D0 100%);
        }

        .social-link[data-tooltip]:hover::before {
            content: attr(data-tooltip);
            position: absolute;
            bottom: calc(100% + 10px);
            left: 50%;
            transform: translateX(-50%);
            padding: 0.5rem 0.75rem;
            background: rgba(28, 28, 30, 0.95);
            color: var(--primary-color, #FFD700);
            border: 1px solid var(--primary-color, #FFD700);
            border-radius: 8px;
            font-size: 0.75rem;
            white-space: nowrap;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .social-link[data-tooltip]:hover::after {
            content: '';
            position: absolute;
            bottom: calc(100% + 2px);
            left: 50%;
            transform: translateX(-50%);
            border: 8px solid transparent;
            border-top-color: var(--primary-color, #FFD700);
            pointer-events: none;
            z-index: 999;
        }

        .social-link.instagram-link[data-tooltip]:hover::before {
            background: linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FD1D1D 100%);
            border-color: rgba(225, 48, 108, 0.3);
            color: white;
        }

        .social-link.instagram-link[data-tooltip]:hover::after {
            border-top-color: #E1306C;
        }

        .social-link.tiktok-link[data-tooltip]:hover::before {
            background: linear-gradient(135deg, #00F2EA 0%, #FF0050 100%);
            border-color: rgba(0, 242, 234, 0.3);
            color: white;
        }

        .social-link.tiktok-link[data-tooltip]:hover::after {
            border-top-color: #00F2EA;
        }

        @media (max-width: 768px) {
            .social-links {
                gap: 0.75rem;
                margin: 1.5rem 0;
            }

            .social-link {
                width: 44px;
                height: 44px;
            }

            .social-link svg {
                width: 22px;
                height: 22px;
            }

            .follower-badge {
                font-size: 0.6rem;
                padding: 2px 5px;
                min-width: 28px;
            }

            .social-link[data-tooltip]:hover::before {
                font-size: 0.7rem;
                padding: 0.4rem 0.6rem;
                max-width: 200px;
                white-space: normal;
                text-align: center;
            }
        }
        `;
        document.head.appendChild(style);
    }

    // Update badge with formatted number
    function updateBadge(elementId, count) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        // Format number with K suffix if > 1000
        if (count >= 1000) {
            element.textContent = (count / 1000).toFixed(1) + 'K';
        } else {
            element.textContent = count.toString();
        }
    }

    // Update tooltip with follower count and CTA
    function updateTooltip(className, count, platform, language = 'es') {
        const element = document.querySelector(`.${className}`);
        if (!element) return;
        
        const formattedCount = count.toLocaleString(language === 'de' ? 'de-DE' : language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'es-ES');
        
        const messages = {
            es: `Somos ${formattedCount} seguidores en ${platform}, ¡únete a la comunidad!`,
            en: `We are ${formattedCount} followers on ${platform}, join the community!`,
            fr: `Nous sommes ${formattedCount} abonnés sur ${platform}, rejoignez la communauté!`,
            de: `Wir sind ${formattedCount} Follower auf ${platform}, tritt der Community bei!`
        };
        
        element.setAttribute('data-tooltip', messages[language] || messages.es);
    }

    // Load and update social media stats
    async function loadSocialStats(options = {}) {
        const {
            statsPath = 'social-stats.json',
            language = 'es'
        } = options;

        try {
            const response = await fetch(statsPath);
            const data = await response.json();
            
            // Update Instagram badge and tooltip
            if (data.instagram) {
                updateBadge('instagramBadge', data.instagram.followers);
                updateTooltip('instagram-link', data.instagram.followers, 'Instagram', language);
            }
            
            // Update TikTok badge and tooltip
            if (data.tiktok) {
                updateBadge('tiktokBadge', data.tiktok.followers);
                updateTooltip('tiktok-link', data.tiktok.followers, 'TikTok', language);
            }
        } catch (error) {
            console.log('Could not load social stats:', error);
            // Set default values if load fails
            const instagramBadge = document.getElementById('instagramBadge');
            const tiktokBadge = document.getElementById('tiktokBadge');
            
            if (instagramBadge) instagramBadge.textContent = SOCIAL_CONFIG.instagram.defaultBadge;
            if (tiktokBadge) tiktokBadge.textContent = SOCIAL_CONFIG.tiktok.defaultBadge;
            
            // Set default tooltips
            updateTooltip('instagram-link', 1500, 'Instagram', language);
            updateTooltip('tiktok-link', 980, 'TikTok', language);
        }
    }

    // Initialize social links
    function initSocialLinks(options = {}) {
        const {
            containerId = 'warnapp-social-links',
            loadStats = false,
            statsPath = 'social-stats.json',
            language = 'es'
        } = options;

        // Inject CSS
        injectStyles();

        // Find container
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Social links container #${containerId} not found`);
            return;
        }

        // Insert HTML
        container.innerHTML = generateSocialLinksHTML();

        // Load stats if requested
        if (loadStats) {
            loadSocialStats({ statsPath, language });
        }
    }

    // Auto-initialize on DOM ready if container exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Check if auto-init container exists
            const autoContainer = document.getElementById('warnapp-social-links');
            if (autoContainer) {
                const loadStats = autoContainer.dataset.loadStats === 'true';
                const statsPath = autoContainer.dataset.statsPath || 'social-stats.json';
                const language = autoContainer.dataset.language || 'es';
                initSocialLinks({ loadStats, statsPath, language });
            }
        });
    } else {
        // DOM already loaded
        const autoContainer = document.getElementById('warnapp-social-links');
        if (autoContainer) {
            const loadStats = autoContainer.dataset.loadStats === 'true';
            const statsPath = autoContainer.dataset.statsPath || 'social-stats.json';
            const language = autoContainer.dataset.language || 'es';
            initSocialLinks({ loadStats, statsPath, language });
        }
    }

    // Expose to global scope
    window.WarnAppSocial = {
        init: initSocialLinks,
        loadStats: loadSocialStats,
        updateBadge: updateBadge,
        updateTooltip: updateTooltip
    };

})();
