// Get the language select element
var languageSelect = document.getElementById("language-toggle");

// Get the preloader and content elements
var loadingIndicator = document.getElementById("preloader");
var contentContainer = document.getElementById("content");

// Function to display the content and hide the loading indicator
function showContent() {
  document.getElementById("content").style.display = "block";
  document.getElementById("preloader").style.display = "none";
}

// Function to load a language JSON file
function loadLanguage(lang) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET","js/content/"+ lang + ".json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            try {
                var content = JSON.parse(xhr.responseText);
                applyLanguage(content);
                toggleArabicStylesheet(lang)
                showContent();
            } catch (e) {
                console.error("Error parsing JSON for language", lang, e);
            }
        } else {
            console.error("Error loading language file:", xhr.status);
            showContent(); // Show the content even if there's an error
        }
    }
};
xhr.send();
}



// Function to apply the language content to the page
function applyLanguage(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (element.tagName === "INPUT" && key === "placeholder_text") {
      element.placeholder = langData[key];
    } else if (element.tagName === 'IMG') {
      element.src = langData[key];
    } else {
      element.innerHTML = langData[key] || "";
    }
  });
}

// Function to toggle Arabic stylesheet based on language selection
function toggleArabicStylesheet(lang) {
  const stylesheet = document.getElementById('theme-stylesheet');
  const htmlElement = document.documentElement;

  if (lang === 'ur') {
    stylesheet.href = 'styles/css/style-rtl.css';
  } else {
    stylesheet.href = 'styles/css/styles.css';
  }
  languageSelect.value = lang;
  if (lang === 'ar' || lang==='ur') {
    htmlElement.dir = 'rtl';
} else {
    htmlElement.dir = 'ltr';
}
}

// Get the browser's language
var browserLanguage = (navigator.language || navigator.userLanguage || "en").split("-")[0];

// Supported languages
var supportedLanguages = ["en", "fr", "es", "ur", "ar"];

// Determine the initial language
var initialLanguage = supportedLanguages.indexOf(browserLanguage) !== -1 ? browserLanguage : "en";

// Load the initial language
loadLanguage(initialLanguage);

// Set the language select dropdown to the initial language
languageSelect.value = initialLanguage;

// Add an event listener to handle language changes
languageSelect.addEventListener("change", function () {
  var selectedLanguage = languageSelect.value;
  loadLanguage(selectedLanguage);
});

  let items = document.querySelectorAll('.carousel .carousel-item')
  
  items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
          if (!next) {
              // wrap carousel by using first child
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
    });
  
// <!-- prelaoder -->
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Allow for fade-out effect
  }
  });

