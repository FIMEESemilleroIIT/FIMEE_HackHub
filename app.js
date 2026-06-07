// Datos de los 18 retos
const challenges = [
    {
        id: 1,
        entity: "UNSA",
        entityFull: "Universidad Nacional San Agustín",
        title: "Conecta UNSA: oportunidades laborales inteligentes para egresados",
        description: "¿Cómo podríamos ayudar a los egresados de la UNSA que buscan empleo activamente en plataformas externas a encontrar oportunidades laborales relevantes y confiables desde el canal institucional, de forma que se sientan reconocidos como profesionales específicos y acompañados en su transición al mercado laboral?",
        tags: ["empleo", "IA", "plataforma"],
        category: "universidad",
        emoji: "🎓",
        fimeeRecommends: false
    },
    {
        id: 2,
        entity: "UNMSM",
        entityFull: "Universidad Nacional Mayor de San Marcos",
        title: "Sin luz no hay clases: resolviendo los cortes eléctricos en la Ciudad Universitaria",
        description: "¿Cómo podríamos ayudar a la comunidad universitaria de la UNMSM a saber en tiempo real cuándo y dónde hay cortes de luz o zonas sin iluminación, mediante herramientas inteligentes para un smart campus y a reportar fallas para que sean atendidas oportunamente?",
        tags: ["energía", "smart campus", "IoT"],
        category: "universidad",
        emoji: "🔌",
        fimeeRecommends: true
    },
    {
        id: 3,
        entity: "UNCP",
        entityFull: "Universidad Nacional del Centro del Perú",
        title: "Construyendo soluciones junto a las comunidades",
        description: "¿Cómo podríamos ayudar a los representantes de comunidades campesinas, urbanas y gobiernos locales de Huancayo a comprender qué apoyo pueden solicitar a la UNCP, con quién comunicarse y cómo iniciar una solicitud de proyección social, sin tener que acudir presencialmente para orientarse?",
        tags: ["proyección social", "chatbot"],
        category: "universidad",
        emoji: "🤝",
        fimeeRecommends: false
    },
    {
        id: 4,
        entity: "SAT Lima",
        entityFull: "Servicio de Administración Tributaria de Lima",
        title: "Papeletas al día: cero complicaciones",
        description: "¿Cómo podríamos ayudar al ciudadano a conocer, comprender y resolver a tiempo una deuda por infracción de tránsito, evitando trámites presenciales, recargos y ejecución de medidas cautelares?",
        tags: ["tránsito", "pagos", "trámites"],
        category: "gobierno",
        emoji: "🚘",
        fimeeRecommends: false
    },
    {
        id: 5,
        entity: "Serpost",
        entityFull: "Servicios Postales del Perú",
        title: "Soluciones innovadoras para reducir tiempos de espera en admisión de envíos internacionales",
        description: "¿Cómo podríamos ayudar a los clientes ocasionales de SERPOST a preparar y registrar sus envíos internacionales de forma simple, rápida y sin errores, reduciendo tiempos de atención y dependencia de orientación presencial en ventanilla?",
        tags: ["logística", "UX", "formularios"],
        category: "gobierno",
        emoji: "📦",
        fimeeRecommends: false
    },
    {
        id: 6,
        entity: "OSINFOR",
        entityFull: "Organismo de Supervisión de los Recursos Forestales y de Fauna Silvestre",
        title: "Huella de origen: tecnología digital para acreditar la madera legal en el Perú",
        description: "¿Cómo podríamos ayudar a los productores forestales, que comercializan madera, a demostrar el origen legal del producto de forma que el mercado nacional e internacional los perciba confiables?",
        tags: ["trazabilidad", "IoT", "blockchain"],
        category: "medio-ambiente",
        emoji: "🌳",
        fimeeRecommends: true
    },
    {
        id: 7,
        entity: "MININTER",
        entityFull: "Ministerio del Interior",
        title: "Que denunciar avance desde el primer intento",
        description: "¿Cómo podríamos ayudar al ciudadano que intenta denunciar por primera vez un robo o hurto facilitándole completar el proceso, sabiendo el estado de su proceso en todo momento, sin necesidad de acudir presencialmente ni repetir el intento?",
        tags: ["seguridad", "app", "seguimiento"],
        category: "ciudad",
        emoji: "🚔",
        fimeeRecommends: false
    },
    {
        id: 8,
        entity: "MRE",
        entityFull: "Ministerio de Relaciones Exteriores",
        title: "Orientación digital para apostillar sin adivinar",
        description: "¿Cómo podríamos ayudar al ciudadano que necesita apostillar o legalizar un documento a conocer y verificar los pasos exactos de la cadena de certificación requerida para su caso, antes de acudir al MRE, de forma que no dependa de tener experiencia previa, conocidos informados ni intermediarios para lograrlo?",
        tags: ["trámites", "orientación", "UX"],
        category: "gobierno",
        emoji: "📄",
        fimeeRecommends: false
    },
    {
        id: 9,
        entity: "MVCS",
        entityFull: "Ministerio de Vivienda, Construcción y Saneamiento",
        title: "Más agua, menos retrasos: innovación para llevar servicios de agua y saneamiento a más familias",
        description: "¿Cómo podríamos ayudar a los funcionarios del MVCS a reducir los retrasos y paralizaciones en las obras de agua y saneamiento, fortaleciendo la transparencia, optimizando los costos asociados a demoras e ineficiencias y que más familias de las zonas periféricas de Piura accedan oportunamente a servicios de agua potable y alcantarillado?",
        tags: ["agua", "saneamiento", "infra"],
        category: "ciudad",
        emoji: "💧",
        fimeeRecommends: true
    },
    {
        id: 10,
        entity: "MDLP",
        entityFull: "Municipalidad Distrital de La Punta",
        title: "Innovación para la 'Poza de la Arenilla': inclusivo, autónomo e inteligente",
        description: "¿Cómo podríamos ayudar a los visitantes de la Poza de la Arenilla a conectarse con las más de 100 especies que alberga, de forma autónoma, sin depender de un guía ni de paneles que solo funcionan de cerca?",
        tags: ["IoT", "biodiversidad", "turismo"],
        category: "medio-ambiente",
        emoji: "🦆",
        fimeeRecommends: true
    },
    {
        id: 11,
        entity: "MDCGAL",
        entityFull: "Municipalidad Distrital Cnel. Gregorio Albarración Lanchipa",
        title: "Alerta Albarracina: respuesta rápida para ciudadanos protegidos",
        description: "¿Cómo podríamos ayudar al ciudadano albarracino a reportar de forma rápida, sencilla y segura una incidencia de alteración del orden público asociada al consumo de alcohol, evitando que pierda minutos críticos buscando números de contacto, explicando verbalmente su ubicación y esperando sin saber si recibirá atención?",
        tags: ["alerta", "seguridad", "geoloc"],
        category: "ciudad",
        emoji: "🚨",
        fimeeRecommends: true
    },
    {
        id: 12,
        entity: "MDM",
        entityFull: "Municipalidad Distrital de Miraflores",
        title: "Presupuesto participativo para todos",
        description: "¿Cómo podríamos facilitar la formulación de proyectos técnicamente viables y comprensibles para los agentes participativos, de modo que puedan cumplir con los criterios de evaluación y participar de manera más equitativa en el proceso de presupuesto participativo de Miraflores?",
        tags: ["participación", "datos", "civictech"],
        category: "gobierno",
        emoji: "📊",
        fimeeRecommends: false
    },
    {
        id: 13,
        entity: "INEN",
        entityFull: "Instituto Nacional de Enfermedades Neoplásicas",
        title: "OncoRuta Mujer Inteligente: Experiencia de diagnóstico oportuno, equitativo, inclusivo e intercultural",
        description: "¿Cómo podríamos ayudar a las mujeres de 30 a 65 años en situación de vulnerabilidad con sospecha de cáncer de mama y cérvix atendidas en el INEN de Lima a superar las demoras y la fragmentación del proceso diagnóstico, que garantice una atención oportuna, equitativa, inclusiva, intercultural y continua, para lograr diagnósticos más tempranos?",
        tags: ["salud", "diagnóstico", "IA"],
        category: "salud",
        emoji: "🏥",
        fimeeRecommends: false
    },
    {
        id: 14,
        entity: "IREN Centro",
        entityFull: "Instituto Regional de Enfermedades Neoplásicas",
        title: "Acompañar y acelerar para sanar",
        description: "¿Cómo podríamos ayudar a las pacientes mujeres con diagnóstico de cáncer de cuello uterino referidas al IREN Centro (Junín) a transitar su ruta médica con total claridad y acompañamiento, optimizando la coordinación de sus pasos asistenciales para recortar drásticamente el tiempo de espera hasta el inicio de su cirugía o radioterapia?",
        tags: ["salud", "rutas", "optimización"],
        category: "salud",
        emoji: "🩺",
        fimeeRecommends: false
    },
    {
        id: 15,
        entity: "GORE Cusco",
        entityFull: "Gobierno Regional de Cusco",
        title: "Ventanilla inclusiva: Autonomía digital para la ciudadanía",
        description: "¿Cómo podríamos ayudar a los ciudadanos con discapacidad visual de la región Cusco a acceder de forma autónoma a los trámites del Gobierno Regional de Cusco, sin depender de intermediarios o terceros?",
        tags: ["accesibilidad", "discapacidad"],
        category: "gobierno",
        emoji: "♿",
        fimeeRecommends: true
    },
    {
        id: 16,
        entity: "DP",
        entityFull: "Despacho Presidencial",
        title: "El Despacho Presidencial te responde a cualquier hora y desde donde estés",
        description: "¿Cómo podríamos ayudar a los ciudadanos que tienen un trámite ante el Despacho Presidencial a saber el estado de sus expedientes y recibir orientación oportuna, sin necesidad de acudir a las ventanillas de atención al ciudadano y sin importar si es domingo a medianoche o sin tener que viajar a Lima?",
        tags: ["chatbot", "IA", "24/7"],
        category: "gobierno",
        emoji: "🏛️",
        fimeeRecommends: false
    },
    {
        id: 17,
        entity: "CEPLAN",
        entityFull: "Centro Nacional de Planeamiento Estratégico",
        title: "Voz joven sin barreras",
        description: "¿Cómo podríamos facilitar que jóvenes de 18 a 25 años de los sectores periféricos de Lima Metropolitana, que no pertenecen a organizaciones juveniles, puedan expresar e incidir en políticas nacionales que afectan su vida cotidiana, de manera accesible y sin costos de traslado, intermediarios ni barreras institucionales?",
        tags: ["juventud", "participación"],
        category: "gobierno",
        emoji: "🗣️",
        fimeeRecommends: false
    },
    {
        id: 18,
        entity: "BN",
        entityFull: "Banco de la Nación",
        title: "Construyendo una experiencia financiera más cercana e inclusiva",
        description: "¿Cómo podríamos ayudar a los pensionistas y beneficiarios de programas sociales a acceder y gestionar sus servicios financieros de manera simple, segura y autónoma, sin que su nivel de alfabetización digital represente una barrera?",
        tags: ["fintech", "inclusión", "UX"],
        category: "finanzas",
        emoji: "🏦",
        fimeeRecommends: false
    }
];

// Variables del DOM
const container = document.getElementById('challengesContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('resultsCount');

let currentFilter = 'all';
let currentSearchTerm = '';

// Renderizar tarjetas
function renderChallenges() {
    container.innerHTML = '';
    
    const filtered = challenges.filter(c => {
        // Filtro por categoría o recomendación
        let matchFilter = true;
        if (currentFilter === 'fimee') {
            matchFilter = c.fimeeRecommends;
        } else if (currentFilter !== 'all') {
            matchFilter = c.category === currentFilter;
        }
        
        // Filtro por búsqueda de texto
        let matchSearch = true;
        if (currentSearchTerm) {
            const term = currentSearchTerm.toLowerCase();
            matchSearch = 
                c.title.toLowerCase().includes(term) || 
                c.entity.toLowerCase().includes(term) || 
                c.description.toLowerCase().includes(term) ||
                c.tags.some(tag => tag.toLowerCase().includes(term));
        }
        
        return matchFilter && matchSearch;
    });
    
    // Ordenar: Los recomendados por FIMEE van primero
    filtered.sort((a, b) => {
        if (a.fimeeRecommends === b.fimeeRecommends) return 0;
        return a.fimeeRecommends ? -1 : 1;
    });
    
    resultsCount.textContent = filtered.length;
    
    if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No se encontraron retos que coincidan con tu búsqueda.</div>';
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = `challenge-card ${c.fimeeRecommends ? 'recommended' : ''}`;
        
        // Tags verdes para temas de FIMEE
        const fimeeTagKeywords = ['energía', 'iot', 'smart campus', 'trazabilidad', 'alerta', 'infra', 'blockchain'];
        const tagsHtml = c.tags.map(tag => {
            const isGreen = fimeeTagKeywords.some(kw => tag.toLowerCase().includes(kw));
            return `<span class="tag ${isGreen ? 'tag-green' : ''}">${tag}</span>`;
        }).join('');
        
        const badgeHtml = c.fimeeRecommends ? '<div class="card-badge">⚡ Recomendado</div>' : '';
        
        card.innerHTML = `
            ${badgeHtml}
            <div class="entity-info">
                <span class="entity-icon">${c.emoji}</span>
                <span class="entity-name">${c.entity}</span>
            </div>
            <h3 class="card-title">${c.title}</h3>
            <div class="card-tags">${tagsHtml}</div>
            <button class="btn-expand" onclick="toggleDescription(${c.id}, this)">Ver Enunciado Completo</button>
            <div class="card-description" id="desc-${c.id}">
                ${c.description}
            </div>
        `;
        container.appendChild(card);
    });
}

// Expandir/Colapsar descripción
window.toggleDescription = function(id, btn) {
    const desc = document.getElementById(`desc-${id}`);
    const isExpanded = desc.classList.contains('expanded');
    
    // Opcional: cerrar todos los demás
    // document.querySelectorAll('.card-description').forEach(el => el.classList.remove('expanded'));
    // document.querySelectorAll('.btn-expand').forEach(el => el.textContent = 'Ver Enunciado Completo');
    
    if (isExpanded) {
        desc.classList.remove('expanded');
        btn.textContent = 'Ver Enunciado Completo';
    } else {
        desc.classList.add('expanded');
        btn.textContent = 'Ocultar Enunciado';
    }
}

// Listeners de Filtros y Búsqueda
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    renderChallenges();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderChallenges();
    });
});

// Sistema de Countdown
function initCountdown() {
    // Fecha objetivo: 10 de junio de 2026 a las 23:59:59 (hora peruana)
    const targetDate = new Date('2026-06-10T23:59:59-05:00').getTime();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<div style='color: #ef4444; font-family: var(--font-mono); font-size: 1.5rem; font-weight: bold;'>INSCRIPCIONES CERRADAS</div>";
            document.querySelector('.urgency-badge').style.display = 'none';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderChallenges();
    initCountdown();
});
