const siteConfig = Object.freeze({
  email: "info@example.nl",
  linkedInUrl: "https://www.linkedin.com/showcase/dpart-project/",
  mapsUrl: "https://www.google.com/maps/place/Vertigo/@51.4463122,5.485064,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6d91e266d62e9:0xbd166703870cba44!8m2!3d51.4463122!4d5.485064!16s%2Fg%2F11c37nh8nc?entry=ttu"
});

function languageSwitch(extraClass = "") {
  return `
    <div class="language-switch ${extraClass}" role="group" data-i18n-aria-label="languageSelection" aria-label="Taalkeuze">
      <button class="language-button active" type="button" data-language="nl" aria-pressed="true">NL</button>
      <span aria-hidden="true">|</span>
      <button class="language-button" type="button" data-language="en" aria-pressed="false">EN</button>
    </div>`;
}

function navigationLinks(homePage) {
  const prefix = homePage ? "" : "index.html";
  return `
    <a href="${prefix}#about" data-i18n="navAbout">Over het project</a>
    <a href="${prefix}#themes" data-i18n="navThemes">Thema's</a>
    <a href="${prefix}#results" data-i18n="navResults">Resultaten</a>
    <a href="${prefix}#news" data-i18n="navNews">Nieuws &amp; events</a>
    <a href="${prefix}#partners" data-i18n="navPartners">Partners</a>
    <a href="team.html" data-i18n="navTeam">Meet the team</a>
    <a href="${prefix}#contact" data-i18n="navContact">Contact</a>`;
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const homePage = document.body.dataset.page === "home";
    const homeUrl = homePage ? "#main-content" : "index.html";

    this.innerHTML = `
      <a class="skip-link" href="#main-content" data-i18n="skipToContent">Ga naar de inhoud</a>
      <header class="navbar">
        <a class="navbar-logo" href="${homeUrl}" data-i18n-aria-label="homeLabel" aria-label="DPARt home">
          <img src="images/Logo_without_text.png" alt="" width="250" height="250">
        </a>
        <nav class="navbar-menu" data-i18n-aria-label="mainNavigation" aria-label="Hoofdnavigatie">
          ${navigationLinks(homePage)}
          ${languageSwitch()}
        </nav>
        <button class="menu-button" id="menuButton" type="button" data-i18n-aria-label="openMenu" aria-label="Open navigatiemenu" aria-expanded="false" aria-controls="mobileMenu">
          <span></span><span></span><span></span>
        </button>
      </header>
      <nav class="mobile-menu" id="mobileMenu" data-i18n-aria-label="mobileNavigation" aria-label="Mobiele navigatie">
        ${navigationLinks(homePage)}
        ${languageSwitch("mobile-language-switch")}
      </nav>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const homePage = document.body.dataset.page === "home";
    const returnUrl = homePage ? "#main-content" : "index.html";
    const returnKey = homePage ? "backToTop" : "backHome";

    this.innerHTML = `
      <footer id="contact">
        <div class="container footer-content">
          <div>
            <img class="footer-logo" src="images/Logo_DPARt.png" alt="DPARt" width="340" height="379" loading="lazy">
            <p class="footer-note" data-i18n="urbanLabNote">DPARt is onderdeel van het Urban Resilience Lab.</p>
          </div>
          <div class="footer-contact">
            <p data-i18n="contactTitle">Neem contact op</p>
            <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>
            <a class="section-button footer-contact-button" href="contact.html">
              <span data-i18n="viewContactPage">Bekijk de contactpagina</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="footer-details">
            <div>
              <p class="footer-heading" data-i18n="addressTitle">Adres</p>
              <a class="footer-address" href="${siteConfig.mapsUrl}" target="_blank" rel="noopener noreferrer">
                Vertigo, 9th Floor<br>Den Dolech 2<br>5612 AZ Eindhoven
              </a>
            </div>
            <div>
              <p class="footer-heading" data-i18n="followTitle">Volg DPARt</p>
              <a class="linkedin-link" href="${siteConfig.linkedInUrl}" target="_blank" rel="noopener noreferrer" data-i18n-aria-label="linkedInLabel" aria-label="DPARt op LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.6H7v11H3.4v-11Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.6h-3.6v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1H9.2v-11Z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
            <p class="footer-funding" data-i18n="fundingAcknowledgement">Financiering: DPARt wordt gefinancierd door NWO.</p>
          </div>
          <div class="footer-bottom">
            <p>© <span data-current-year></span> DPARt</p>
            <a href="${returnUrl}" data-i18n="${returnKey}">Terug naar ${homePage ? "boven" : "home"} ↑</a>
          </div>
        </div>
      </footer>`;

    this.querySelector("[data-current-year]").textContent = new Date().getFullYear();
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

class SiteEmail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="mailto:${siteConfig.email}">${siteConfig.email}</a>`;
  }
}

customElements.define("site-email", SiteEmail);
