// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = `<i class="icon-${isDark ? 'sun' : 'moon'}"></i>`;
}

// Initialize theme
setTheme(prefersDark.matches);

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
});

// Random Seeds
const seeds = [
    "A empatia é a ponte que conecta ilhas separadas pelo oceano da indiferença.",
    "Uma pequena ação sustentável hoje planta a semente de um amanhã possível.",
    "Quando escutamos genuinamente, criamos espaço para que novas ideias possam florescer.",
    "A diversidade não é apenas sobre diferenças visíveis, mas sobre o valor único que cada perspectiva traz ao mundo.",
    "Nas crises mais profundas, frequentemente nascem as transformações mais necessárias."
];

const randomSeedButton = document.getElementById('random-seed');
const seedContent = document.getElementById('seed-content');

randomSeedButton.addEventListener('click', () => {
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)];
    seedContent.textContent = randomSeed;
    seedContent.classList.remove('hidden');
    
    // Animate button
    randomSeedButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        randomSeedButton.style.transform = 'scale(1)';
    }, 200);
});

// Tab Navigation
const tabItems = document.querySelectorAll('.tab-item');

tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabItems.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});