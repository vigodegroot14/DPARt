const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const languageButtons = document.querySelectorAll("[data-language]");
const revealElements = document.querySelectorAll(".reveal");

let currentLanguage = "nl";

function getTranslation(key) {
  return translations[currentLanguage]?.[key] ?? translations.nl[key] ?? key;
}

function setLanguage(language) {
  if (!translations[language]) {
    language = "nl";
  }

  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(element.dataset.i18nAriaLabel));
  });

  const page = document.body.dataset.page;
  const metadata = pageMetadata[language]?.[page];
  if (metadata) {
    document.title = metadata[0];
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata[1]);
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("dpart-language", language);
}

function closeMobileMenu() {
  if (!mobileMenu || !menuButton) {
    return;
  }

  mobileMenu.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function toggleMobileMenu() {
  if (!mobileMenu || !menuButton) {
    return;
  }

  const isOpen = mobileMenu.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", getTranslation(isOpen ? "closeMenu" : "openMenu"));
  document.body.classList.toggle("menu-open", isOpen);
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll(".navbar-menu a, .mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1050) {
    closeMobileMenu();
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

const savedLanguage = localStorage.getItem("dpart-language");
const browserLanguage = navigator.language
  .toLowerCase()
  .startsWith("en")
  ? "en"
  : "nl";

setLanguage(savedLanguage || browserLanguage);
