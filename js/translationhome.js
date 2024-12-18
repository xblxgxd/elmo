var translations = {};

function loadTranslations() {
   return fetch('../json/translationhome.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
      console.log(translations)
    })
    .catch(error => console.error('Error loading translations:', error));
}
const toggle_button = document.getElementById('translateBtn')
toggle_button.addEventListener('click', () =>{
  console.log(29834612976)
  var currentLanguage = document.documentElement.lang || 'EN';
  localStorage.setItem('language','EN');
  if (currentLanguage === 'EN') {
    applyTranslations('ru');
    document.documentElement.lang = 'RU';
    document.getElementById('translateBtn').textContent = 'Русский';
    localStorage.setItem('language','RU');
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'EN';
    document.getElementById('translateBtn').textContent = 'English';
    localStorage.setItem('language','EN');
  }
})
// function toggleLanguage() {
//   console.log(29834612976)
//   var currentLanguage = document.documentElement.lang || 'EN';
//   localStorage.setItem('language','EN');
//   if (currentLanguage === 'EN') {
//     applyTranslations('ru');
//     document.documentElement.lang = 'RU';
//     document.getElementById('translateBtn').textContent = 'Русский';
//     localStorage.setItem('language','RU');
//   } else {
//     applyTranslations('en');
//     document.documentElement.lang = 'EN';
//     document.getElementById('translateBtn').textContent = 'English';
//     localStorage.setItem('language','EN');
//   }
// }

function applyTranslations(lang) {
  var translation = translations[lang];

  var elements = document.querySelectorAll('[id]');
  
  elements.forEach(function(element) {
    var translationKey = element.getAttribute('id');
    
    if (translationKey && translation[translationKey]) {
      element.innerHTML = translation[translationKey];
    }
  });
}

 loadTranslations().then(() => {
  var userLanguage = navigator.language.substr(0, 2); 
  if (localStorage.getItem('language')==='EN') {
    applyTranslations('en');
    document.documentElement.lang = 'EN';
    document.getElementById('translateBtn').textContent = 'English';
    
  } else {
    applyTranslations('ru');
    document.documentElement.lang = 'RU';
    document.getElementById('translateBtn').textContent = 'Русский';
  }
});