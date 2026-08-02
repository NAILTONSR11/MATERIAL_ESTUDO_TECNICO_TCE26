const data = {
    portugues: {
        title: 'Língua Portuguesa',
        topics: [
            { id: 'portugues-compreensao', name: 'Compreensão e interpretação de textos', material: 'https://www.todamateria.com.br/compreensao-e-interpretacao-de-textos/' },
            { id: 'portugues-ortografia', name: 'Ortografia oficial e acentuação', material: 'https://www.todamateria.com.br/ortografia/' },
            { id: 'portugues-coesao', name: 'Coesão, concordância e regência', material: 'https://www.todamateria.com.br/coesao-textual/' }
        ]
    },
    informatica: {
        title: 'Informática e Competências Digitais',
        topics: [
            { id: 'informatica-windows', name: 'Windows e produtividade', material: 'https://support.microsoft.com/pt-br/windows' },
            { id: 'informatica-lgpd', name: 'LGPD e proteção de dados', material: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
            { id: 'informatica-governo-digital', name: 'Governo Digital e serviços públicos', material: 'https://www.gov.br/governodigital/pt-br' }
        ]
    },
    logica: {
        title: 'Raciocínio Lógico',
        topics: [
            { id: 'logica-proposicional', name: 'Lógica proposicional', material: 'https://www.todamateria.com.br/logica-matematica/' },
            { id: 'logica-tabelas', name: 'Tabelas-verdade', material: 'https://www.todamateria.com.br/tabela-verdade/' },
            { id: 'logica-probabilidade', name: 'Probabilidade e problemas quantitativos', material: 'https://www.todamateria.com.br/probabilidade/' }
        ]
    },
    administrativo: {
        title: 'Direito Administrativo',
        topics: [
            { id: 'administrativo-ato', name: 'Ato administrativo', material: 'https://pt.wikipedia.org/wiki/Ato_administrativo' },
            { id: 'administrativo-licitacao', name: 'Licitação', material: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm' },
            { id: 'administrativo-responsabilidade', name: 'Responsabilidade civil do Estado', material: 'https://pt.wikipedia.org/wiki/Responsabilidade_civil_do_Estado' }
        ]
    },
    constitucional: {
        title: 'Direito Constitucional',
        topics: [
            { id: 'constitucional-principios', name: 'Princípios fundamentais', material: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
            { id: 'constitucional-direitos', name: 'Direitos e garantias fundamentais', material: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
            { id: 'constitucional-estado', name: 'Organização do Estado', material: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }
        ]
    },
    controle: {
        title: 'Controle Externo',
        topics: [
            { id: 'controle-conceitos', name: 'Conceitos básicos', material: 'https://portal.tcu.gov.br/controle-externo/' },
            { id: 'controle-financeiro', name: 'Controle financeiro', material: 'https://portal.tcu.gov.br/controle-externo/' },
            { id: 'controle-improbidade', name: 'Lei de improbidade', material: 'https://www.planalto.gov.br/ccivil_03/leis/l8429.htm' }
        ]
    },
    legislacao: {
        title: 'Legislação Específica',
        topics: [
            { id: 'legislacao-regimento', name: 'Regimento Interno do TCE/MA', material: 'https://www.tcema.tc.br/transparencia/legislacao/regimento-interno/' },
            { id: 'legislacao-organica', name: 'Lei Orgânica e competências', material: 'https://www.tcema.tc.br/transparencia/legislacao/lei-organica/' },
            { id: 'legislacao-instrucoes', name: 'INs e normativas atuais', material: 'https://www.tcema.tc.br/transparencia/legislacao/' }
        ]
    },
    historia: {
        title: 'História e Geografia do Maranhão',
        topics: [
            { id: 'historia-fundacao', name: 'Fundação de São Luís e colonização', material: 'https://www.todamateria.com.br/historia-do-maranhao/' },
            { id: 'historia-revoltas', name: 'Revoltas e movimentos sociais', material: 'https://www.todamateria.com.br/historia-do-brasil/' },
            { id: 'geografia-regioes', name: 'Regiões, hidrografia e economia', material: 'https://www.todamateria.com.br/geografia-do-brasil/' }
        ]
    },
    direitosHumanos: {
        title: 'Direitos Humanos',
        topics: [
            { id: 'direitos-universal', name: 'Declaração Universal', material: 'https://www.ohchr.org/pt/human-rights/universal-declaration' },
            { id: 'direitos-igualdade', name: 'Igualdade, acessibilidade e inclusão', material: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12288.htm' },
            { id: 'direitos-agenda', name: 'Agenda 2030 e desenvolvimento sustentável', material: 'https://brasil.un.org/pt-br/sdgs' }
        ]
    },
    especificos: {
        title: 'Conhecimentos Específicos',
        topics: [
            { id: 'especificos-contratos', name: 'Gestão de contratos', material: 'https://www.gov.br/economia/pt-br/assuntos/gestao-de-contratos' },
            { id: 'especificos-orcamento', name: 'Execução orçamentária e financeira', material: 'https://www.gov.br/tesouronacional/pt-br/contabilidade' },
            { id: 'especificos-controle', name: 'Fiscalização e responsabilidade fiscal', material: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm' }
        ]
    }
};

const STORAGE_KEY = 'tceChecklistProgress';
let currentFilter = 'all';
let searchTerm = '';
let expandedByDefault = true;
let expandedDisciplineKeys = new Set();

const disciplinesContainer = document.getElementById('disciplines');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const progressCount = document.getElementById('progressCount');
const searchInput = document.getElementById('searchInput');
const statusMessage = document.getElementById('statusMessage');
const importInput = document.getElementById('importInput');

let progress = loadProgress();

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Erro ao carregar progresso:', error);
        return {};
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    updateSummary();
}

function getDisciplineStatus(disciplineKey) {
    const disciplineProgress = progress[disciplineKey] || {};
    const manual = disciplineProgress.manual || {};
    const simuladosFeitos = Number(manual.simuladosFeitos ?? 0);
    const leituraEmDia = manual.leituraEmDia || 'nao';
    const hasManualProgress = simuladosFeitos > 0 || leituraEmDia === 'sim' || leituraEmDia === 'mais-ou-menos';
    const hasTopicProgress = Boolean(disciplineProgress) && Object.entries(data[disciplineKey].topics).some(([index, topic]) => disciplineProgress[topic.id]);

    return {
        simuladosFeitos,
        leituraEmDia,
        pendente: !hasManualProgress && !hasTopicProgress
    };
}

function updateDisciplineStatus(disciplineKey, field, value) {
    if (!progress[disciplineKey]) progress[disciplineKey] = {};
    if (!progress[disciplineKey].manual) progress[disciplineKey].manual = {};

    if (field === 'pendente') {
        progress[disciplineKey].manual.pendente = value;
    } else {
        progress[disciplineKey].manual[field] = value;
        progress[disciplineKey].manual.pendente = false;
    }

    saveProgress();
    render();
}

function getDisciplineProgress(disciplineKey) {
    const discipline = data[disciplineKey];
    const disciplineProgress = progress[disciplineKey] || {};
    const total = discipline.topics.length;
    const done = discipline.topics.filter(topic => disciplineProgress[topic.id]).length;
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function getAllTopicCount() {
    return Object.values(data).reduce((sum, discipline) => sum + discipline.topics.length, 0);
}

function getCompletedCount() {
    return Object.entries(data).reduce((sum, [disciplineKey, discipline]) => {
        const disciplineProgress = progress[disciplineKey] || {};
        return sum + discipline.topics.filter(topic => disciplineProgress[topic.id]).length;
    }, 0);
}

function updateSummary() {
    const total = getAllTopicCount();
    const done = getCompletedCount();
    const percent = total ? Math.round((done / total) * 100) : 0;

    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
    progressCount.textContent = `${done} de ${total} tópicos concluídos`;
}

function createTopicItem(disciplineKey, topic, checked) {
    const item = document.createElement('div');
    item.className = 'topic-item';

    const main = document.createElement('label');
    main.className = 'topic-main';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.dataset.discipline = disciplineKey;
    checkbox.dataset.topic = topic.id;

    checkbox.addEventListener('change', () => {
        if (!progress[disciplineKey]) progress[disciplineKey] = {};
        progress[disciplineKey][topic.id] = checkbox.checked;

        if (checkbox.checked && !progress[disciplineKey].manual) {
            progress[disciplineKey].manual = {};
        }

        if (checkbox.checked && progress[disciplineKey].manual) {
            progress[disciplineKey].manual.pendente = false;
        }

        saveProgress();
        render();
    });

    const name = document.createElement('span');
    name.className = `topic-name${checked ? ' done' : ''}`;
    name.textContent = topic.name;

    main.appendChild(checkbox);
    main.appendChild(name);

    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'topic-btn';
    action.textContent = topic.material ? 'Abrir material' : 'Sem material';
    action.disabled = !topic.material;

    if (topic.material) {
        action.addEventListener('click', () => window.open(topic.material, '_blank', 'noopener'));
    }

    item.appendChild(main);
    item.appendChild(action);
    return item;
}

function isExpanded(disciplineKey) {
    return expandedByDefault || expandedDisciplineKeys.has(disciplineKey);
}

function render() {
    disciplinesContainer.innerHTML = '';

    const disciplinesEntries = Object.entries(data);
    const visibleDisciplinas = disciplinesEntries.filter(([disciplineKey, discipline]) => {
        const matchesSearch = !searchTerm || `${discipline.title} ${discipline.topics.map(t => t.name).join(' ')}`.toLowerCase().includes(searchTerm.toLowerCase());
        const disciplineProgress = progress[disciplineKey] || {};
        const hasVisibleTopics = discipline.topics.some(topic => {
            const checked = !!disciplineProgress[topic.id];
            if (currentFilter === 'all') return true;
            if (currentFilter === 'pending') return !checked;
            if (currentFilter === 'done') return checked;
            return true;
        });

        return matchesSearch && hasVisibleTopics;
    });

    if (!visibleDisciplinas.length) {
        disciplinesContainer.innerHTML = '<div class="empty-state">Nenhum tópico corresponde à busca ou filtro atual.</div>';
        return;
    }

    visibleDisciplinas.forEach(([disciplineKey, discipline]) => {
        const disciplineProgress = progress[disciplineKey] || {};
        const total = discipline.topics.length;
        const done = discipline.topics.filter(topic => disciplineProgress[topic.id]).length;
        const percent = total ? Math.round((done / total) * 100) : 0;

        const card = document.createElement('article');
        card.className = 'discipline-card';

        const header = document.createElement('div');
        header.className = 'discipline-header';

        const titleWrap = document.createElement('div');
        titleWrap.className = 'discipline-title';

        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'discipline-toggle';
        toggleButton.innerHTML = `<span class="toggle-icon">${isExpanded(disciplineKey) ? '▾' : '▸'}</span><span>${discipline.title}</span>`;
        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (isExpanded(disciplineKey)) {
                expandedDisciplineKeys.delete(disciplineKey);
            } else {
                expandedDisciplineKeys.add(disciplineKey);
            }
            render();
        });

        titleWrap.appendChild(toggleButton);

        const meta = document.createElement('div');
        meta.className = 'discipline-meta';
        meta.innerHTML = `
            <span>${done}/${total} concluídos</span>
            <span>${percent}%</span>
        `;

        header.appendChild(titleWrap);
        header.appendChild(meta);

        const disciplineStatus = getDisciplineStatus(disciplineKey);
        const statusRow = document.createElement('div');
        statusRow.className = 'discipline-status';
        statusRow.innerHTML = `
            <label class="discipline-badge complete">
                <span>Simulados feitos</span>
                <input type="number" min="0" step="1" inputmode="numeric" value="${disciplineStatus.simuladosFeitos}" data-discipline="${disciplineKey}" data-field="simuladosFeitos">
            </label>
            <label class="discipline-badge reading">
                <span>Leitura em dia</span>
                <select data-discipline="${disciplineKey}" data-field="leituraEmDia">
                    <option value="sim" ${disciplineStatus.leituraEmDia === 'sim' ? 'selected' : ''}>Sim</option>
                    <option value="nao" ${disciplineStatus.leituraEmDia === 'nao' ? 'selected' : ''}>Não</option>
                    <option value="mais-ou-menos" ${disciplineStatus.leituraEmDia === 'mais-ou-menos' ? 'selected' : ''}>Mais ou menos</option>
                </select>
            </label>
            <label class="discipline-badge">
                <span>Pendente</span>
                <input type="checkbox" data-discipline="${disciplineKey}" data-field="pendente" ${disciplineStatus.pendente ? 'checked' : ''} disabled>
            </label>
        `;

        statusRow.querySelectorAll('input, select').forEach(control => {
            control.addEventListener('change', (event) => {
                event.stopPropagation();
                const target = event.currentTarget;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                updateDisciplineStatus(target.dataset.discipline, target.dataset.field, value);
            });
        });

        const progressWrap = document.createElement('div');
        progressWrap.className = 'discipline-progress';
        progressWrap.innerHTML = `
            <div class="progress-bar"><span style="width:${percent}%"></span></div>
        `;

        const actions = document.createElement('div');
        actions.className = 'discipline-actions';
        actions.innerHTML = `
            <button type="button" data-action="check">Marcar todos</button>
            <button type="button" data-action="uncheck">Desmarcar todos</button>
        `;

        actions.querySelector('[data-action="check"]').addEventListener('click', (event) => {
            event.stopPropagation();
            discipline.topics.forEach(topic => {
                if (!progress[disciplineKey]) progress[disciplineKey] = {};
                progress[disciplineKey][topic.id] = true;
            });
            saveProgress();
            render();
        });

        actions.querySelector('[data-action="uncheck"]').addEventListener('click', (event) => {
            event.stopPropagation();
            discipline.topics.forEach(topic => {
                if (!progress[disciplineKey]) progress[disciplineKey] = {};
                progress[disciplineKey][topic.id] = false;
            });
            saveProgress();
            render();
        });

        const content = document.createElement('div');
        content.className = `discipline-content${isExpanded(disciplineKey) ? ' open' : ''}`;

        discipline.topics.forEach(topic => {
            const checked = !!(progress[disciplineKey] || {})[topic.id];
            if (currentFilter === 'pending' && checked) return;
            if (currentFilter === 'done' && !checked) return;
            if (searchTerm && !`${discipline.title} ${topic.name}`.toLowerCase().includes(searchTerm.toLowerCase())) return;
            content.appendChild(createTopicItem(disciplineKey, topic, checked));
        });

        card.appendChild(header);
        card.appendChild(statusRow);
        card.appendChild(progressWrap);
        card.appendChild(actions);
        card.appendChild(content);
        disciplinesContainer.appendChild(card);
    });

    updateSummary();
}

function setStatus(message) {
    statusMessage.textContent = message;
}

function applyFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
    render();
}

function clearProgress() {
    if (!confirm('Deseja limpar todo o progresso salvo?')) return;
    progress = {};
    saveProgress();
    render();
    setStatus('Progresso limpo com sucesso.');
}

function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tce-checklist-progresso.json';
    link.click();
    URL.revokeObjectURL(url);
    setStatus('Progresso exportado com sucesso.');
}

function importProgress(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            progress = parsed;
            saveProgress();
            render();
            setStatus('Progresso importado com sucesso.');
        } catch (error) {
            setStatus('Arquivo inválido. Envie um JSON válido.');
            console.error(error);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function expandAll() {
    expandedByDefault = true;
    expandedDisciplineKeys.clear();
    render();
}

function collapseAll() {
    expandedByDefault = false;
    expandedDisciplineKeys.clear();
    render();
}

function toggleSearchMode() {
    currentFilter = 'search';
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'search'));
    render();
}

searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value.trim();
    if (searchTerm) {
        toggleSearchMode();
    } else {
        applyFilter(currentFilter === 'search' ? 'all' : currentFilter);
    }
});

document.querySelectorAll('.filter-pill').forEach(button => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

document.getElementById('searchButton').addEventListener('click', () => {
    toggleSearchMode();
});

document.getElementById('expandAllBtn').addEventListener('click', expandAll);
document.getElementById('collapseAllBtn').addEventListener('click', collapseAll);
document.getElementById('clearProgressBtn').addEventListener('click', clearProgress);
document.getElementById('exportBtn').addEventListener('click', exportProgress);
importInput.addEventListener('change', importProgress);

document.getElementById('markAllBtn').addEventListener('click', () => {
    Object.entries(data).forEach(([disciplineKey, discipline]) => {
        if (!progress[disciplineKey]) progress[disciplineKey] = {};
        discipline.topics.forEach(topic => {
            progress[disciplineKey][topic.id] = true;
        });
    });
    saveProgress();
    render();
    setStatus('Todos os tópicos foram marcados.');
});

updateSummary();
render();
