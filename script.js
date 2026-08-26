const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const languageButtons = document.querySelectorAll("[data-language]");
const revealElements = document.querySelectorAll(".reveal");

let currentLanguage = "nl";

const translations = {
  nl: {
    skipToContent: "Ga naar de inhoud",
    homeLabel: "DPARt home",
    mainNavigation: "Hoofdnavigatie",
    mobileNavigation: "Mobiele navigatie",
    languageSelection: "Taalkeuze",
    openMenu: "Open navigatiemenu",
    closeMenu: "Sluit navigatiemenu",
    linkedInLabel: "DPARt op LinkedIn",
    navAbout: "Over het project",
    navThemes: "Thema's",
    navResults: "Resultaten",
    navNews: "Nieuws & events",
    navPartners: "Partners",
    navContact: "Contact",

    heroFullTitle:
      "Digital Pathways for Accelerating Collective Decision-Making of Energy Renovation in the Built Environment.",
    discoverProject: "Ontdek het project",
    heroEyebrow: "Onderzoeksproject",
    heroTitle: "Samen beslissen over duurzame energierenovatie",
    heroDescription:
      "DPARt ontwikkelt digitale hulpmiddelen die VvE-leden, besturen en professionals ondersteunen bij gezamenlijke beslissingen over energierenovatie.",

    aboutLabel: "Over het project",
    aboutTitle: "Betere gezamenlijke beslissingen",
    aboutParagraph1:
      "Gebouwen met Verenigingen van Eigenaars zijn vaak ouder en minder energiezuinig dan andere woningen. Zelfs wanneer enkele eigenaren enthousiast zijn om hun gebouw te verduurzamen, kost besluitvorming vaak veel tijd of worden voorstellen door andere eigenaren afgewezen.",
    aboutParagraph2:
      "Bewoners hebben verschillende wensen, ervaren verschillende belemmeringen en verschillen in kennisniveau. DPARt onderzoekt hoe digitale hulpmiddelen dit proces toegankelijker, begrijpelijker en transparanter kunnen maken.",
    readMoreAbout: "Lees meer over DPARt",

    themesLabel: "Thema's",
    themesTitle: "De belangrijkste onderdelen",
    coCreationTitle: "Co-creatie",
    coCreationText:
      "Bewoners, onderzoekers, gemeenten en professionals ontwerpen de oplossing gezamenlijk.",
    digitalTwinTitle: "Digital Twin",
    digitalTwinText:
      "Renovatiescenario's worden digitaal nagebootst, vergeleken en inzichtelijk gemaakt.",
    aiGamesTitle: "AI en games",
    aiGamesText:
      "Gebruikers leren via AI-tools en spelvormen over kosten, regelgeving en collectieve besluitvorming.",
    exploreTheme: "Ontdek meer →",
    viewResearch: "Bekijk het onderzoek",

    resultsLabel: "Resultaten",
    resultsTitle: "Digitale ondersteuning voor de praktijk",
    resultsParagraph1:
      "Dit project heeft als doel digitale hulpmiddelen op te leveren, waaronder een AI-assistent, simulatiemodellen en een interactief leerplatform.",
    resultsParagraph2:
      "Deze hulpmiddelen helpen bewoners en professionals om renovatiemogelijkheden beter te begrijpen en gezamenlijk afgewogen keuzes te maken.",
    viewResults: "Bekijk de resultaten",

    newsLabel: "Nieuws & events",
    newsTitle: "Blijf op de hoogte",
    newsTypeProject: "Projectupdate",
    newsTypeWorkshop: "Workshop",
    newsTypeResearch: "Onderzoek",
    newsCard1Title: "Welkom bij DPARt",
    newsCard1Text:
      "Volg de ontwikkeling van het project, de website, workshops en toekomstige onderzoeksresultaten.",
    newsCard2Title: "Samenwerking met stakeholders",
    newsCard2Text:
      "DPARt brengt onderzoekers, gemeenten, bedrijven en eindgebruikers samen in co-creatie.",
    newsCard3Title: "Digitale besluitvorming",
    newsCard3Text:
      "Het project combineert Digital Twins, AI en gamification voor ondersteuning van VvE's.",
    viewNews: "Bekijk al het nieuws",

    partnersEyebrow: "Samenwerking",
    partnersTitle: "Projectpartners",
    partnersIntroduction:
      "DPARt wordt uitgevoerd in samenwerking met kennisinstellingen, publieke organisaties en marktpartijen.",
    viewPartners: "Bekijk alle projectpartners",

    contactTitle: "Neem contact op",
    viewContactPage: "Bekijk de contactpagina",
    backToTop: "Terug naar boven ↑",
    backHome: "Terug naar home",
    urbanLabNote: "DPARt is onderdeel van het Urban Resilience Lab.",

    addressTitle: "Adres",
    followTitle: "Volg DPARt",
    fundingAcknowledgement: "Financiering: DPARt wordt gefinancierd door NWO.",

    partnersPageTitle: "Projectpartners",
    partnersPageIntro:
      "DPARt brengt kennisinstellingen, technologiepartners, gemeenten en praktijkorganisaties samen. Iedere partner draagt vanuit een eigen expertise bij aan het project.",
    partnerGroupSocialTitle: "Social Science",
    partnerGroupSocialText: "Burgerbetrokkenheid & participatief ontwerp",
    partnerGroupEngineeringTitle: "Environmental Engineering",
    partnerGroupEngineeringText:
      "Simulatie van collectieve besluitvorming & Digital Twin",
    partnerGroupAiTitle: "AI and IT Experts",
    partnerGroupAiText: "Chatbots & Serious Games",
    partnerGroupCommunityTitle: "Community of Practice",
    partnerGroupCommunityText:
      "Gemeenten, regionale organisaties, energiecoöperaties, VvE-experts en vertegenwoordigers van eindgebruikers",

    aboutPageTitle: "Over DPARt",
    aboutPageIntro:
      "Meer over de aanleiding, doelstellingen en samenwerking binnen het project.",
    aboutDetailTitle1: "Waarom DPARt?",
    aboutDetailText1:
      "Energierenovatie binnen VvE's vraagt om gezamenlijke besluitvorming. Verschillende belangen, kennisniveaus en financiële mogelijkheden kunnen het proces vertragen.",
    aboutDetailTitle2: "Wat wil het project bereiken?",
    aboutDetailText2:
      "DPARt onderzoekt hoe digitale ondersteuningsmiddelen besluitvorming begrijpelijker, transparanter en beter schaalbaar kunnen maken.",
    aboutDetailTitle3: "Samenwerking",
    aboutDetailText3:
      "Het project verbindt universiteiten, hogescholen, gemeenten, IT-bedrijven, VvE-experts en eindgebruikers.",

    researchPageTitle: "Onderzoek",
    researchPageIntro:
      "DPARt combineert co-creatie, Digital Twins, AI en gamification om collectieve besluitvorming rond energierenovatie te ondersteunen.",
    researchCoTitle: "Ontwerpen mét de gebruikers",
    researchCoText:
      "Via interviews, workshops en Living Labs worden behoeften, barrières en voorkeuren van stakeholders meegenomen.",
    researchTwinTitle: "Collectieve besluitvorming simuleren",
    researchTwinText:
      "Het DPARt-project ontwikkelt simulatiemodellen die onderzoeken hoe VvE-leden onder verschillende omstandigheden met elkaar omgaan en collectieve beslissingen nemen over energierenovaties.",
    researchAiTitle: "Leren en beslissen met digitale ondersteuningstools",
    researchAiText:
      "Het project ontwikkelt digitale hulpmiddelen, waaronder toepassingen van AI en gamification, om leren, communicatie en collectieve besluitvorming binnen VvE's te ondersteunen.",

    resultsPageTitle: "Resultaten",
    resultsPageIntro:
      "De belangrijkste digitale hulpmiddelen en kennisproducten die binnen DPARt worden ontwikkeld.",
    resultItem1Title: "AI-assistent",
    resultItem1Text:
      "Een hulpmiddel voor het vinden en begrijpen van technische en juridische informatie.",
    resultItem2Title: "Digital Twin en simulatiemodellen",
    resultItem2Text:
      "Modellen om collectieve besluitvorming en renovatiescenario's inzichtelijk te maken.",
    resultItem3Title: "Interactief leerplatform",
    resultItem3Text:
      "Een gamification-omgeving waarin stakeholders kennis kunnen opbouwen en keuzes kunnen verkennen.",

    newsPageTitle: "Nieuws & events",
    newsPageIntro:
      "Updates over workshops, projectactiviteiten, evenementen en onderzoeksresultaten.",

    contactPageTitle: "Contact",
    contactPageIntro: "Neem contact op met het DPARt-projectteam.",
    contactPageHeading: "Neem contact op met DPARt",
    contactPageText:
      "Voor vragen over het project, samenwerking of communicatie kun je contact opnemen via het onderstaande e-mailadres."
  },

  en: {
    skipToContent: "Skip to content",
    homeLabel: "DPARt home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    languageSelection: "Language selection",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    linkedInLabel: "DPARt on LinkedIn",
    navAbout: "About",
    navThemes: "Research",
    navResults: "Results",
    navNews: "News & events",
    navPartners: "Partners",
    navContact: "Contact",

    heroFullTitle:
      "Digital Pathways for Accelerating Collective Decision-Making of Energy Renovation in the Built Environment.",
    discoverProject: "Discover the project",
    heroEyebrow: "Research project",
    heroTitle: "Making decisions together on sustainable energy renovation",
    heroDescription:
      "DPARt develops digital tools that support homeowners' association members, boards and professionals in making joint decisions about energy renovation.",

    aboutLabel: "About the project",
    aboutTitle: "Better collective decision-making",
    aboutParagraph1:
      "Buildings with homeowners’ associations are often older and less energy efficient than other homes. Even when a few owners are enthusiastic about making their building more sustainable, decision-making often takes a lot of time or proposals get rejected by other owners.",
    aboutParagraph2:
      "Residents have different wishes and barriers they perceive and levels of knowledge. DPARt investigates how digital tools can make this process more accessible, easier to understand and more transparent.",
    readMoreAbout: "Learn more about DPARt",

    themesLabel: "Research",
    themesTitle: "The main components",
    coCreationTitle: "Co-creation",
    coCreationText:
      "Residents, researchers, municipalities and professionals design the solution together.",
    digitalTwinTitle: "Digital Twin",
    digitalTwinText:
      "Renovation scenarios are digitally simulated, compared and presented in an understandable way.",
    aiGamesTitle: "AI and games",
    aiGamesText:
      "Users learn about costs, regulations and collective decision-making through AI tools and playing.",
    exploreTheme: "Explore more →",
    viewResearch: "Explore the research",

    resultsLabel: "Results",
    resultsTitle: "Digital support for real-world use",
    resultsParagraph1:
      "This project aims to deliver digital tools such as an AI assistant, simulation models and an interactive learning platform, among other results.",
    resultsParagraph2:
      "These tools help residents and professionals better understand renovation options and make well-considered decisions together.",
    viewResults: "View the results",

    newsLabel: "News & events",
    newsTitle: "Stay up to date",
    newsTypeProject: "Project update",
    newsTypeWorkshop: "Workshop",
    newsTypeResearch: "Research",
    newsCard1Title: "Welcome to DPARt",
    newsCard1Text:
      "Follow the development of the project, the website, workshops and future research outcomes.",
    newsCard2Title: "Stakeholder collaboration",
    newsCard2Text:
      "DPARt brings researchers, municipalities, companies and end users together through co-creation.",
    newsCard3Title: "Digital decision-making",
    newsCard3Text:
      "The project combines Digital Twins, AI and gamification to support homeowners' associations.",
    viewNews: "View all news",

    partnersEyebrow: "Collaboration",
    partnersTitle: "Project partners",
    partnersIntroduction:
      "DPARt is carried out in collaboration with knowledge institutions, public organisations and private-sector partners.",
    viewPartners: "View all project partners",

    contactTitle: "Get in touch",
    viewContactPage: "View contact page",
    backToTop: "Back to top ↑",
    backHome: "Back to home",
    urbanLabNote: "DPARt is part of the Urban Resilience Lab.",

    addressTitle: "Address",
    followTitle: "Follow DPARt",
    fundingAcknowledgement: "Funding: DPARt is funded by NWO.",

    partnersPageTitle: "Project partners",
    partnersPageIntro:
      "DPARt brings together knowledge institutions, technology partners, municipalities and practice organisations. Each partner contributes its own expertise to the project.",
    partnerGroupSocialTitle: "Social Science",
    partnerGroupSocialText: "Citizen Engagement & Participatory Design",
    partnerGroupEngineeringTitle: "Environmental Engineering",
    partnerGroupEngineeringText:
      "Collective Decision-making Simulation & Digital Twin",
    partnerGroupAiTitle: "AI and IT Experts",
    partnerGroupAiText: "Chatbots & Serious Games",
    partnerGroupCommunityTitle: "Community of Practice",
    partnerGroupCommunityText:
      "Municipalities, regional organisations, energy cooperations, VvE experts and end-user representatives",

    aboutPageTitle: "About DPARt",
    aboutPageIntro:
      "Learn more about the project's motivation, objectives and collaboration.",
    aboutDetailTitle1: "Why DPARt?",
    aboutDetailText1:
      "Energy renovation within homeowners' associations requires collective decision-making. Different interests, knowledge levels and financial possibilities can slow the process down.",
    aboutDetailTitle2: "What does the project aim to achieve?",
    aboutDetailText2:
      "DPARt investigates how digital support tools can make decision-making easier to understand, more transparent and more scalable.",
    aboutDetailTitle3: "Collaboration",
    aboutDetailText3:
      "The project connects universities, universities of applied sciences, municipalities, IT companies, VvE experts and end users.",

    researchPageTitle: "Research",
    researchPageIntro:
      "DPARt combines co-creation, Digital Twins, AI and gamification to support collective decision-making on energy renovation.",
    researchCoTitle: "Designing with users",
    researchCoText:
      "Through interviews, workshops and Living Labs, the needs, barriers and preferences of stakeholders are incorporated.",
    researchTwinTitle: "Simulating collective decision-making",
    researchTwinText:
      "The DPARt project develops simulation models that explore how VvE members interact and make collective decisions about energy renovations under different conditions.",
    researchAiTitle: "Learning and deciding using digital support tools",
    researchAiText:
      "The project develops digital tools, including AI and gamification approaches, to support learning, communication, and collective decision-making in VvEs.",

    resultsPageTitle: "Results",
    resultsPageIntro:
      "The main digital tools and knowledge products being developed within DPARt.",
    resultItem1Title: "AI assistant",
    resultItem1Text:
      "A tool for finding and understanding technical and legal information.",
    resultItem2Title: "Digital Twin and simulation models",
    resultItem2Text:
      "Models for analysing and visualising collective decision-making and renovation scenarios.",
    resultItem3Title: "Interactive learning platform",
    resultItem3Text:
      "A gamification environment in which stakeholders can build knowledge and explore choices.",

    newsPageTitle: "News & events",
    newsPageIntro:
      "Updates on workshops, project activities, events and research outcomes.",

    contactPageTitle: "Contact",
    contactPageIntro: "Get in touch with the DPARt project team.",
    contactPageHeading: "Contact DPARt",
    contactPageText:
      "For questions about the project, collaboration or communication, please use the email address below."
  }
};

const pageMetadata = {
  nl: {
    home: ["DPARt | Samen beslissen over duurzame energierenovatie", "DPARt ontwikkelt digitale hulpmiddelen voor gezamenlijke besluitvorming over energierenovatie binnen Verenigingen van Eigenaars."],
    about: ["Over DPARt | Duurzame energierenovatie", "Lees waarom DPARt digitale hulpmiddelen ontwikkelt voor transparante en gezamenlijke besluitvorming over energierenovatie."],
    research: ["Onderzoek | DPARt", "Ontdek het DPARt-onderzoek naar co-creatie, Digital Twins, AI en gamification voor gezamenlijke energierenovatie."],
    results: ["Resultaten | DPARt", "Bekijk de digitale hulpmiddelen en kennisproducten die DPARt ontwikkelt voor collectieve besluitvorming over energierenovatie."],
    news: ["Nieuws en evenementen | DPARt", "Lees updates over DPARt-workshops, projectactiviteiten, evenementen en onderzoeksresultaten."],
    partners: ["Projectpartners | DPARt", "Bekijk de kennisinstellingen, technologiepartners, gemeenten en praktijkorganisaties die samenwerken binnen DPARt."],
    contact: ["Contact | DPARt", "Neem contact op met het DPARt-projectteam voor vragen over onderzoek, samenwerking en communicatie."]
  },
  en: {
    home: ["DPARt | Collective decisions on sustainable energy renovation", "DPARt develops digital tools for collective decision-making on energy renovation within homeowners' associations."],
    about: ["About DPARt | Sustainable energy renovation", "Learn why DPARt develops digital tools for transparent, collective decision-making on energy renovation."],
    research: ["Research | DPARt", "Explore DPARt research into co-creation, Digital Twins, AI and gamification for collective energy renovation."],
    results: ["Results | DPARt", "View the digital tools and knowledge products DPARt develops for collective decision-making on energy renovation."],
    news: ["News and events | DPARt", "Read updates about DPARt workshops, project activities, events and research outcomes."],
    partners: ["Project partners | DPARt", "Meet the knowledge institutions, technology partners, municipalities and practice organisations collaborating in DPARt."],
    contact: ["Contact | DPARt", "Contact the DPARt project team with questions about research, collaboration and communications."]
  }
};

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
