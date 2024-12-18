document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const toggleLanguageButton = document.getElementById('toggle-language');
    const heading = document.getElementById('heading');

    // Загрузка настроек из localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
        themeStylesheet.setAttribute('href', savedTheme);
    }

    if (savedLanguage === 'en') {
        heading.textContent = 'Welcome!';
        toggleLanguageButton.textContent = 'Switch Language to Russian';
    }

    
    // Переключение темы
    toggleThemeButton.addEventListener('click', () => {
        const currentTheme = themeStylesheet.getAttribute('href');
        const newTheme = currentTheme === 'dark.css' ? 'light.css' : 'dark.css';
        themeStylesheet.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Переключение языка
    toggleLanguageButton.addEventListener('click', () => {
        if (heading.textContent === 'Добро пожаловать!') {
            heading.textContent = 'Welcome!';
            toggleLanguageButton.textContent = 'Switch Language to Russian';
            localStorage.setItem('language', 'en');
        } else {
            heading.textContent = 'Добро пожаловать!';
            toggleLanguageButton.textContent = 'Сменить язык на английский';
            localStorage.setItem('language', 'ru');
        }
    });
});