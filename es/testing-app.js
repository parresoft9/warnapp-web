// Testing App - Lógica principal
let testState = {};
let currentFilter = 'all';

// Cargar estado desde localStorage
function loadState() {
    const saved = localStorage.getItem('warnapp-testing-state');
    if (saved) {
        try {
            testState = JSON.parse(saved);
        } catch (e) {
            testState = {};
        }
    }
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem('warnapp-testing-state', JSON.stringify(testState));
    updateStats();
}

// Actualizar estadísticas globales
function updateStats() {
    let total = 0;
    let passed = 0;
    let failed = 0;
    let pending = 0;

    Object.keys(testData).forEach(sectionName => {
        const section = testData[sectionName];
        Object.keys(section).forEach(subsectionName => {
            const subsection = section[subsectionName];
            subsection.tests.forEach(test => {
                total++;
                const state = testState[test.id];
                if (state === 'pass') passed++;
                else if (state === 'fail') failed++;
                else pending++;
            });
        });
    });

    const percentage = total > 0 ? Math.round((passed / total) * 100) : 0;

    document.getElementById('totalTests').textContent = total;
    document.getElementById('passedTests').textContent = passed;
    document.getElementById('failedTests').textContent = failed;
    document.getElementById('pendingTests').textContent = pending;
    
    const progressFill = document.getElementById('progressFill');
    progressFill.textContent = percentage + '%';
    progressFill.style.width = percentage + '%';
}

// Actualizar estado de un test
function updateTestStatus(testId, status) {
    if (status === 'pending') {
        delete testState[testId];
    } else {
        testState[testId] = status;
    }
    saveState();
    updateTestUI(testId);
}

// Actualizar UI de un test específico
function updateTestUI(testId) {
    const testElement = document.querySelector(`[data-test-id="${testId}"]`);
    if (!testElement) return;

    const state = testState[testId] || 'pending';
    const passCheckbox = testElement.querySelector('.check-pass');
    const failCheckbox = testElement.querySelector('.check-fail');

    passCheckbox.checked = (state === 'pass');
    failCheckbox.checked = (state === 'fail');

    // Actualizar clase del elemento
    testElement.classList.remove('test-pass', 'test-fail', 'test-pending');
    testElement.classList.add(`test-${state}`);
}

// Renderizar todas las secciones
function renderSections() {
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';

    Object.keys(testData).forEach(sectionName => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        
        // Header de sección
        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `
            <span class="section-title-text">${sectionName}</span>
            <button class="toggle-btn" onclick="event.stopPropagation(); toggleSection(this)">▼</button>
        `;
        header.onclick = function() { toggleSection(this); };
        sectionDiv.appendChild(header);

        // Contenido de sección
        const content = document.createElement('div');
        content.className = 'section-content';

        const section = testData[sectionName];
        Object.keys(section).forEach(subsectionName => {
            const subsection = section[subsectionName];
            
            // Subsección
            const subsectionDiv = document.createElement('div');
            subsectionDiv.className = 'subsection';
            subsectionDiv.innerHTML = `<h3>${subsectionName}</h3>`;

            // Metadatos
            const metaDiv = document.createElement('div');
            metaDiv.className = 'subsection-meta';
            metaDiv.innerHTML = `
                <div class="meta-item">
                    <strong>Build:</strong> 
                    <input type="text" 
                           class="build-input" 
                           placeholder="Ej: 1.6.0-dev+100"
                           data-subsection="${sectionName}|${subsectionName}"
                           value="${subsection.build || ''}"
                           onchange="saveBuild(this)">
                </div>
                <div class="meta-item">
                    <strong>Ambiente:</strong> <span>${subsection.ambiente}</span>
                </div>
            `;
            subsectionDiv.appendChild(metaDiv);

            // Tests
            subsection.tests.forEach(test => {
                const state = testState[test.id] || 'pending';
                const testDiv = document.createElement('div');
                testDiv.className = `test-item test-${state}`;
                testDiv.setAttribute('data-test-id', test.id);
                
                testDiv.innerHTML = `
                    <div class="test-id">${test.id}</div>
                    <div class="test-desc">${test.desc}</div>
                    <div class="test-controls">
                        <label class="checkbox-label">
                            <input type="checkbox" 
                                   class="check-pass" 
                                   ${state === 'pass' ? 'checked' : ''}
                                   onchange="handleCheckbox('${test.id}', 'pass', this)">
                            <span class="label-text">✓ Pass</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" 
                                   class="check-fail"
                                   ${state === 'fail' ? 'checked' : ''}
                                   onchange="handleCheckbox('${test.id}', 'fail', this)">
                            <span class="label-text">✗ Fail</span>
                        </label>
                        ${test.obs ? `<span class="test-obs">💡 ${test.obs}</span>` : ''}
                    </div>
                `;
                
                subsectionDiv.appendChild(testDiv);
            });

            content.appendChild(subsectionDiv);
        });

        sectionDiv.appendChild(content);
        container.appendChild(sectionDiv);
    });

    // Aplicar filtro actual
    applyFilter(currentFilter);
}

// Manejar cambio de checkbox
function handleCheckbox(testId, type, checkbox) {
    if (checkbox.checked) {
        // Desmarcar el otro checkbox
        const testElement = checkbox.closest('.test-item');
        const otherType = type === 'pass' ? 'fail' : 'pass';
        const otherCheckbox = testElement.querySelector(`.check-${otherType}`);
        otherCheckbox.checked = false;
        
        updateTestStatus(testId, type);
    } else {
        updateTestStatus(testId, 'pending');
    }
}

// Guardar build number
function saveBuild(input) {
    const [sectionName, subsectionName] = input.dataset.subsection.split('|');
    if (testData[sectionName] && testData[sectionName][subsectionName]) {
        testData[sectionName][subsectionName].build = input.value;
    }
}

// Guardar versión de la app
function saveVersion(input) {
    localStorage.setItem('warnapp-testing-version', input.value);
}

// Cargar versión de la app
function loadVersion() {
    const saved = localStorage.getItem('warnapp-testing-version');
    if (saved) {
        const versionInput = document.getElementById('app-version-input');
        if (versionInput) {
            versionInput.value = saved;
        }
    }
}

// Guardar fecha del testing
function saveDate(input) {
    localStorage.setItem('warnapp-testing-date', input.value);
}

// Cargar fecha del testing
function loadDate() {
    const saved = localStorage.getItem('warnapp-testing-date');
    if (saved) {
        const dateInput = document.getElementById('test-date-input');
        if (dateInput) {
            dateInput.value = saved;
        }
    }
}

// Toggle sección expandida/colapsada
function toggleSection(element) {
    const section = element.closest('.section');
    const content = section.querySelector('.section-content');
    const button = section.querySelector('.toggle-btn');
    const isExpanded = content.style.display !== 'none';
    
    content.style.display = isExpanded ? 'none' : 'block';
    button.textContent = isExpanded ? '▶' : '▼';
}

// Toggle todas las secciones (expandir/colapsar)
let allExpanded = true;

function toggleAllSections() {
    if (allExpanded) {
        // Colapsar todas
        document.querySelectorAll('.section-content').forEach(content => {
            content.style.display = 'none';
        });
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.textContent = '▶';
        });
        allExpanded = false;
    } else {
        // Expandir todas
        document.querySelectorAll('.section-content').forEach(content => {
            content.style.display = 'block';
        });
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.textContent = '▼';
        });
        allExpanded = true;
    }
}

// Expandir todas las secciones
function expandAll() {
    document.querySelectorAll('.section-content').forEach(content => {
        content.style.display = 'block';
    });
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.textContent = '▼';
    });
    allExpanded = true;
}

// Colapsar todas las secciones
function collapseAll() {
    document.querySelectorAll('.section-content').forEach(content => {
        content.style.display = 'none';
    });
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.textContent = '▶';
    });
    allExpanded = false;
}

// Función de filtro llamada desde los botones HTML
function filterTests(filter) {
    applyFilter(filter);
    
    // Actualizar botones activos manualmente
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Aplicar filtro
function applyFilter(filter) {
    currentFilter = filter;
    
    // Actualizar botones activos (para llamadas programáticas)
    document.querySelectorAll('.filter-btn').forEach((btn, idx) => {
        btn.classList.remove('active');
        const filters = ['all', 'pass', 'fail', 'pending'];
        if (filters[idx] === filter) {
            btn.classList.add('active');
        }
    });

    // Filtrar tests
    document.querySelectorAll('.test-item').forEach(item => {
        const testId = item.dataset.testId;
        const state = testState[testId] || 'pending';
        
        if (filter === 'all') {
            item.style.display = 'flex';
        } else {
            item.style.display = (state === filter) ? 'flex' : 'none';
        }
    });

    // Actualizar visibility de subsecciones y secciones
    document.querySelectorAll('.subsection').forEach(subsection => {
        const visibleTests = subsection.querySelectorAll('.test-item[style="display: flex;"]');
        subsection.style.display = visibleTests.length > 0 ? 'block' : 'none';
    });

    document.querySelectorAll('.section').forEach(section => {
        const visibleSubsections = section.querySelectorAll('.subsection[style="display: block;"]');
        section.style.display = visibleSubsections.length > 0 ? 'block' : 'none';
    });
}

// Resetear testing
function resetTesting() {
    if (confirm('¿Estás seguro de que quieres resetear todo el progreso? Esta acción no se puede deshacer.')) {
        testState = {};
        localStorage.removeItem('warnapp-testing-state');
        renderSections();
        updateStats();
    }
}

// Exportar resultados
function exportResults() {
    const versionInput = document.getElementById('app-version-input');
    const appVersion = versionInput ? versionInput.value : '1.6.0+100';
    
    const dateInput = document.getElementById('test-date-input');
    let testDate = new Date().toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    if (dateInput && dateInput.value) {
        const selectedDate = new Date(dateInput.value + 'T00:00:00');
        testDate = selectedDate.toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    let markdown = '# WarnApp - Resultados de Testing\n\n';
    markdown += `**Versión:** ${appVersion}\n`;
    markdown += `**Fecha:** ${testDate}\n\n`;
    
    const stats = {
        total: parseInt(document.getElementById('totalTests').textContent),
        passed: parseInt(document.getElementById('passedTests').textContent),
        failed: parseInt(document.getElementById('failedTests').textContent),
        pending: parseInt(document.getElementById('pendingTests').textContent)
    };
    
    markdown += '## 📊 Estadísticas\n\n';
    markdown += `- **Total de tests:** ${stats.total}\n`;
    markdown += `- **✅ Pasados:** ${stats.passed} (${Math.round((stats.passed/stats.total)*100)}%)\n`;
    markdown += `- **❌ Fallidos:** ${stats.failed} (${Math.round((stats.failed/stats.total)*100)}%)\n`;
    markdown += `- **⏳ Pendientes:** ${stats.pending} (${Math.round((stats.pending/stats.total)*100)}%)\n\n`;
    
    markdown += '---\n\n';
    
    Object.keys(testData).forEach(sectionName => {
        markdown += `## ${sectionName}\n\n`;
        
        const section = testData[sectionName];
        Object.keys(section).forEach(subsectionName => {
            markdown += `### ${subsectionName}\n\n`;
            
            const subsection = section[subsectionName];
            if (subsection.build) {
                markdown += `**Build:** ${subsection.build}  \n`;
            }
            markdown += `**Ambiente:** ${subsection.ambiente}\n\n`;
            
            subsection.tests.forEach(test => {
                const state = testState[test.id] || 'pending';
                let icon = '⏳';
                if (state === 'pass') icon = '✅';
                else if (state === 'fail') icon = '❌';
                
                markdown += `- ${icon} **${test.id}**: ${test.desc}`;
                if (test.obs) markdown += ` _(${test.obs})_`;
                markdown += '\n';
            });
            
            markdown += '\n';
        });
    });
    
    // Mostrar modal con el resultado
    const modalContent = document.getElementById('exportContent');
    modalContent.textContent = markdown;
    document.getElementById('exportModal').style.display = 'flex';
}

// Cerrar modal
function closeModal() {
    document.getElementById('exportModal').style.display = 'none';
}

// Copiar al portapapeles
function copyToClipboard() {
    const content = document.getElementById('exportContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        alert('✅ Copiado al portapapeles');
    });
}

// Descargar como archivo
function downloadFile() {
    const content = document.getElementById('exportContent').textContent;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `warnapp-testing-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

// Alias para compatibilidad con HTML
function downloadReport() {
    downloadFile();
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    loadVersion(); // Cargar versión guardada
    loadDate(); // Cargar fecha guardada
    renderSections();
    updateStats();
    
    console.log('✅ Testing Guide cargado correctamente');
    console.log(`📝 ${Object.keys(testData).length} secciones disponibles`);
});
