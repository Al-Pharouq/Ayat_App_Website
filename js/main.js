window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
  preloader.style.opacity = "0";
  setTimeout(() => {
  preloader.style.display = "none";
  }, 500); // Allow for fade-out effect
  }
  });
  
  
  const languageSelect = document.getElementById('language-toggle');
  
  // Language Data
  const languages = {
      "ar": {
        "title": "مصحف آيات",
        "description": "تطبيق يتيح مخطوطات من المصاحف المشهورة في العالم الإسلامي",
        "h-name":"  <div class='h-name-ar'></div>",
        "phone1": "styles/img/lang_img/ar/dark_theme.png",
        "phone2": "styles/img/lang_img/ar/quran_recordings.png",
        "phone3": "styles/img/lang_img/ar/bookmark.png",
        "phone4": "styles/img/lang_img/ar/search.png",
        "phone5": "styles/img/lang_img/ar/quran_version.png",
        "phone-front": "styles/img/lang_img/ar/quran_calig.png",
        "logo": "styles/img/icons/logo.png",
        
        "six_manuscripts": "سـت مخطوطات من المصحــف الشريف في تطبيق واحد",
        "app_desc": "أول تطبيــق فــي العالــم الإسلامــي يجمــع بيــن خصائـص ومميـزات تلبــي احتياجــات المســلم مـن: قراءة وحفظ ومراجعة وتفسيـر وتدبـر واستماع.",
        "dedication": "إهداء جمعية آيات الخيرية",
        "tafseer_title": "التفسير",
        "tafseer_desc": " ربط القارئ بتفسير كل آية عبر مجموعة من التفاسير",
        "khtmata_title": "الختمات",
        "khtmata_desc": " ختمة التلاوة - ختمة الحفـظ ختمة المراجعة - ختمة التدبر ",
        "lesten_ser_title": "الاستماع",
        "lesten_ser_desc": " يمكنك اختيار قارئك المفضل من بين عشرات القراء",
        "memorize_ser_title": "الحفظ",
        "memorize_ser_desc": " تكرار الآية أو السورة إلى عشر مرات مع اختيار القارئ",
        "review_ser_title": "المراجعة",
        "review_ser_desc": " ظهور الآيات والكلمات حسب الرغبة ثم اختفاؤها للتركيز",
        "indexing_title": "الفهرس",
        "indexing_desc": " فهرس بأسماء السور وأرقام الصفحات والأجزاء والأحزاب",
        "copy_title": "النسخ",
        "copy_desc": "نسخ آية أو آيات بالتشكيل أو بدون تشكيل",
        "share_title": "المشاركة",
        "share_desc": " مشاركة آية أو آيات بالتشكيل أو بدون تشكيل",
        "search_title": "البحث",
        "search_desc": "محرك بحث دقيق للبحث عن حرف أو كلمة أو جملة",
        "dark_mode_title": "نمط ليلي",
        "dark_mode_desc": " خاصية القراءة الليلية للراحة البصرية أثناء الظلام",
        "reading_title": "القراءات",
        "reading_desc": " إيجاد الروايات المختلفة حسب القراءات المتواترة",
        "copy_rights": " جميع الحقوق محفوظة لجمعية آيات الخيرية 1446هـ - 2024مـ"
      },
      "en": {
        "title": "Mushaf Ayat",
        "description": "A Platform Providing Manuscripts of Famous Mushafs from the Islamic World ",
        "h-name":"  <div class='h-name-eng'></div>",
        "phone1": "styles/img/lang_img/en/dark_theme.png",
        "phone2": "styles/img/lang_img/en/recordings.png",
        "phone3": "styles/img/lang_img/en/bookmark.png",
        "phone4": "styles/img/lang_img/en/search.png",
        "phone5": "styles/img/lang_img/en/quran_version.png",
        "phone-front": "styles/img/lang_img/en/quran_calig.png", 
        "logo": "styles/img/icons/logo-ltr.png",
        "six_manuscripts": "Six manuscripts of the Holy Qur'an in one application",
        "app_desc": "The first application in the Islamic world that combines characteristics and adventages that meet the needs of Muslims in terms of reading, memorizing, reviewing, interpreting, contemplating and listening",
        "dedication": "Gifting Ayat Charity Association",
        "tafseer_title": "Interpretation",
        "tafseer_desc": "Interpretation of each verse by a group of interpretations<br><br>",
        "khtmata_title": "Alkhatmat",
        "khtmata_desc": "Recitation - Memorization - Revision - Meditation<br><br>",
        "lesten_ser_title": "Listen",
        "lesten_ser_desc": "Your favorite reader among a number of readers<br><br>",
        "memorize_ser_title": "Memorize",
        "memorize_ser_desc": "Repeating the verse or surah with the choice of the reciter<br><br>",
        "review_ser_title": "Review",
        "review_ser_desc": "Verses and words appear as desired, then disappear to focus<br><br>",
        "indexing_title": "Index",
        "indexing_desc": "An index of surah names, page numbers, parts and parties<br><br>",
        "copy_title": "Copying",
        "copy_desc": "Copying a verse or verses with or without diacritics<br><br>",
        "share_title": "Sharing",
        "share_desc": "Share a verse or verses with or without formation<br><br>",
        "search_title": "Research",
        "search_desc": "An accurate search to search for a letter, word or phrase<br><br>",
        "dark_mode_title": "Night mode",
        "dark_mode_desc": "Night mode for visual comfort during the dark<br><br>",
        "reading_title": "Readings",
        "reading_desc": "Finding different novels according to frequent readings<br><br>",
        "copy_rights": "All rights reserved to Ayat Charity Association 1446 - 2024"
      },
      "fr": {
        "title": "Mushaf Ayat",
        "description": "Une application offrant des manuscrits de célèbres Mushafs du monde islamique",
        "h-name":"  <div class='h-name-fr'></div>",
        "phone1": "styles/img/lang_img/fr/dark_theme.png",
        "phone2": "styles/img/lang_img/fr/recordings.png",
        "phone3": "styles/img/lang_img/fr/bookmark.png",
        "phone4": "styles/img/lang_img/fr/search.png",
        "phone5": "styles/img/lang_img/fr/quran_version.png",
        "phone-front": "styles/img/lang_img/fr/quran_calig.png",
        "logo": "styles/img/icons/logo-ltr.png",
        "six_manuscripts": "Six manuscrits du Saint Coran en une seule application",
        "app_desc": "La première application dans le monde islamique qui combine des fonctionnalités qui répondent aux besoins des musulmans de lire, mémorisation, révision, interpréter, méditation et écouter",
        "dedication": "Don d’Ayat Charité",
        "tafseer_title": "Interprétation",
        "tafseer_desc": "Lier le lecteur pour interpréter chaque verset via un ensemble d’interprétations",
        "khtmata_title": "Alkhatmat",
        "khtmata_desc": "Récitation - mémorisation - Révision - Méditation<br><br>",
        "lesten_ser_title": "Écouter",
        "lesten_ser_desc": "Choisissez votre lecteur préféré parmi une douzaine de lecteurs<br><br>",
        "memorize_ser_title": "Mémoriser",
        "memorize_ser_desc": "Répétez le verset ou la Sourate jusqu’à dix fois avec le choix du lecteur",
        "review_ser_title": "Révision",
        "review_ser_desc": "Les versets et les mots apparaissent à volonté, puis disparaissent pour se concentrer",
        "indexing_title": "Contenu",
        "indexing_desc": "Index des noms de Sourate, numéros de page, pièces et parties<br><br>",
        "copy_title": "la copie",
        "copy_desc": "Copiez un ou plusieurs versets avec ou sans signes diacritiques<br><br>",
        "share_title": "Partager",
        "share_desc": "Partagez un ou plusieurs versets avec ou sans signes diacritiques<br><br>",
        "search_title": "Recherche",
        "search_desc": "Un moteur de recherche précis pour rechercher une lettre, un mot ou une phrase",
        "dark_mode_title": "Mode nuit",
        "dark_mode_desc": "Mode nuit pour réduire la fatigue oculaire<br><br>",
        "reading_title": "Lectures",
        "reading_desc": "Trouver des récits différents selon des lectures fréquentes<br><br>",
        "copy_rights": "Tous droits réservés à Ayat Charity Association 1446 - 2024"
      },
      "es": {
        "title": "Mushaf Ayat",
        "description": "Una aplicación que ofrece manuscritos de Mushafes famosos del mundo islámico",
        "six_manuscripts": "Seis manuscritos del Sagrado Corán en una sola aplicación",
        "h-name":"  <div class='h-name-es'></div>",
        "phone1": "styles/img/lang_img/es/dark_theme.png",
        "phone2": "styles/img/lang_img/es/recordings.png",
        "phone3": "styles/img/lang_img/es/bookmark.png",
        "phone4": "styles/img/lang_img/es/search.png",
        "phone5": "styles/img/lang_img/es/quran_versions.png",
        "phone-front": "styles/img/lang_img/es/quran_calig.png",
        "logo": "styles/img/icons/logo-ltr.png",
        "app_desc": "La primera aplicación en el mundo islámico que combina características y beneficios que satisfacen las necesidades del musulmán, como: lectura, memorización, repaso, interpretación, reflexión y escucha.",
        "dedication": "Dedicatoria a la Asociación Ayat benéfica",
        "tafseer_title": "Interpretación",
        "tafseer_desc": "Conectar al lector con la interpretación de cada versículo a través de una colección de tafsirs",
        "khtmata_title": "Finales",
        "khtmata_desc": "Final de recitación - Final de memorización - Final de repaso - Final de reflexión",
        "lesten_ser_title": "Escuchar",
        "lesten_ser_desc": "Puedes elegir tu recitador favorito de entre decenas de recitadores<br><br>",
        "memorize_ser_title": "Memorización",
        "memorize_ser_desc": "Repetir el versículo o la sura hasta diez veces con la opción de elegir el recitador",
        "review_ser_title": "Repaso",
        "review_ser_desc": "Mostrar los versículos y palabras según el deseo y luego desaparecer para concentrarse",
        "indexing_title": "Índice",
        "indexing_desc": "Índice con los nombres de las suras, números de páginas, partes y secciones",
        "copy_title": "Copiar",
        "copy_desc": "Copiar un versículo o varios versículos con o sin vocalización<br><br>",
        "share_title": "Compartir",
        "share_desc": "Compartir un versículo o varios versículos con o sin vocalización<br><br>",
        "search_title": "Buscar",
        "search_desc": "Motor de búsqueda preciso para encontrar una letra, palabra o frase<br><br>",
        "dark_mode_title": "Modo nocturno",
        "dark_mode_desc": "Función de lectura nocturna para comodidad visual en la oscuridad<br><br>",
        "reading_title": "Lecturas",
        "reading_desc": "Encontrar diferentes versiones de acuerdo con las lecturas transmitidas",
        "copy_rights": "Todos los derechos reservados a la Asociación Ayat benéfica 1446H - 2024M"
      },
      "ur": {
        "title": "مصحف آيات",
        "description": "ایک ایپلیکیشن جو اسلامی دنیا کے مشہور مصحف کے مخطوطات فراہم کرتی ہے",
        "h-name":"  <div class='h-name-ur'></div>",
        "phone1": "styles/img/lang_img/ur/dark_theme.png",
        "phone2": "styles/img/lang_img/ur/recordings.png",
        "phone3": "styles/img/lang_img/ur/bookmark.png",
        "phone4": "styles/img/lang_img/ur/search.png",
        "phone5": "styles/img/lang_img/ur/quran_versions.png",
        "phone-front": "styles/img/lang_img/ur/quran_calig.png",
        "logo": "styles/img/icons/logo.png",
        "six_manuscripts": "ایک ایپ میں چھ قرآنی مخطوطات",
        "app_desc": "دنیا کی پہلی اسلامی ایپ جو مسلمان کی ضروریات کو پورا کرنے والی خصوصیات اور خصوصیات کو یکجا کرتی ہے: تلاوت، حفظ، تجدید، تفسیر، تدبر اور سننا۔",
        "dedication": "آیات فلاحی تنظیم کی طرف سے پیشکش",
        "tafseer_title": "تفسیر",
        "tafseer_desc": "ہر آیت کی تفسیر کو مختلف تفاسیر کے ذریعے قاری کے ساتھ جوڑنا",
        "khtmata_title": "ختمات",
        "khtmata_desc": "ختم تلاوت - ختم حفظ - ختم تجدید - ختم تدبر",
        "lesten_ser_title": "سننا",
        "lesten_ser_desc": "آپ اپنے پسندیدہ قاری کو درجنوں قارئین میں سے منتخب کر سکتے ہیں",
        "memorize_ser_title": "حفظ",
        "memorize_ser_desc": "آیت یا سورہ کو دس بار تک دہرانا اور قاری کا انتخاب کرنا",
        "review_ser_title": "تجدید",
        "review_ser_desc": "آیات اور الفاظ کو حسب خواہش دکھائیں اور پھر توجہ مرکوز کرنے کے لیے غائب کریں",
        "indexing_title": "فہرست",
        "indexing_desc": "سورۃ کے ناموں، صفحات، اجزاء اور احزاب کی فہرست",
        "copy_title": "نقل",
        "copy_desc": "آیت یا آیات کو اعراب کے ساتھ یا بغیر اعراب کے نقل کریں",
        "share_title": "شیئر کرنا",
        "share_desc": "آیت یا آیات کو اعراب کے ساتھ یا بغیر اعراب کے شیئر کریں",
        "search_title": "تلاش",
        "search_desc": "ایک حرف، لفظ یا جملے کو تلاش کرنے کے لیے ایک درست سرچ انجن",
        "dark_mode_title": "رات کا موڈ",
        "dark_mode_desc": "اندھیرے میں بصری آرام کے لیے رات کی پڑھائی کی خصوصیت",
        "reading_title": "قراءات",
        "reading_desc": "متواتر قراءتوں کے مطابق مختلف قراءات تلاش کریں",
        "copy_rights": "تمام حقوق محفوظ ہیں آیات فلاحی تنظیم کے نام 1446ہ - 2024م"
      }
    };
  
  // Function to fetch language data
  async function fetchLanguageData(lang) {
    return languages[lang] || languages["en"]; // Fallback to English
  }
  
  // Function to set the language preference
  function setLanguagePreference(lang) {
    localStorage.setItem("language", lang);
  }
  
  // Function to update content based on selected language
  function updateContent(langData) {
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
  
  
    
  
  // Function to handle language change
  async function changeLanguage(lang) {
    setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    toggleArabicStylesheet(lang);
  }
  
  window.addEventListener("DOMContentLoaded", async () => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const userPreferredLanguage = localStorage.getItem("language") || (browserLanguage.startsWith('ar') ? 'ar' : 'en');
    
    // Fallback to 'en' explicitly if an invalid language is detected
    const chosenLanguage = ['ar', 'en'].includes(userPreferredLanguage) ? userPreferredLanguage : 'en';
  
    const langData = await fetchLanguageData(chosenLanguage);
    updateContent(langData);
    toggleArabicStylesheet(chosenLanguage);
  });
  
  
  // // Initialize page content based on user preference or browser settings
  // window.addEventListener("DOMContentLoaded", async () => {
  //   const browserLanguage = navigator.language || navigator.userLanguage;
  //   const userPreferredLanguage = localStorage.getItem("language") || (browserLanguage.startsWith('ar') ? 'ar' : 'en');
  //   const langData = await fetchLanguageData(userPreferredLanguage);
  //   updateContent(langData);
  //   toggleArabicStylesheet(userPreferredLanguage);
  // });
  
  // Add event listener for language selection
  languageSelect.addEventListener('change', async (event) => {
    const selectedLanguage = event.target.value;
    await changeLanguage(selectedLanguage);
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
  })
  