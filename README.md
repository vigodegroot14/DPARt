# DPARt-website

Statische, tweetalige projectwebsite. Geen framework, installatie of buildstap nodig.

## Snel bekijken

Open `index.html` in je browser. Ververs na wijzigingen met **Ctrl + F5**.
Voor lokaal testen met een webserver kun je vanuit deze map uitvoeren:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open vervolgens <http://127.0.0.1:8000>. Stop de server met Ctrl + C.

## Bestanden en mappen

```text
DPARt_website/
├── index.html             Homepage, inclusief het uitgebreide projectschema
├── about.html             Achtergrond en doelstellingen
├── research.html          Onderzoeksthema's
├── results.html           Beoogde resultaten en hulpmiddelen
├── news.html              Nieuws en evenementen
├── partners.html          Projectpartners per expertisegroep
├── team.html              Acht teamleden
├── contact.html           Contactgegevens
├── assets/
│   ├── css/
│   │   └── style.css      Vormgeving, per onderdeel gegroepeerd
│   ├── js/
│   │   ├── components.js Header, navigatie, footer en centrale contactgegevens
│   │   ├── translations.js Nederlandse/Engelse teksten en paginatitels
│   │   └── main.js        Taalkeuze, mobiel menu en scrollanimaties
│   └── images/
│       ├── branding/     DPARt-logo's en favicon
│       ├── home/         Originele hoofdfoto
│       ├── partners/     Partnerlogo's
│       └── team/         Portretfoto's
├── scripts/
│   └── check-site.js     Controle van verwijzingen, vertalingen en scripts
├── .gitignore            Tijdelijke bestanden buiten versiebeheer houden
└── README.md             Deze handleiding
```

De HTML-pagina's blijven in de hoofdmap, zodat bestaande pagina-adressen blijven werken.
Afbeeldingsnamen zijn consequent klein geschreven, met koppeltekens in plaats van spaties.

## Waar wijzig ik iets?

| Aanpassing | Bestand |
| --- | --- |
| E-mailadres, adreslink of LinkedIn | `assets/js/components.js`, bovenaan in `siteConfig` |
| Hoofdmenu of footer | `assets/js/components.js` |
| Nederlandse en Engelse teksten | `assets/js/translations.js` |
| Inhoud en opbouw van een pagina | Het bijbehorende HTML-bestand |
| Kleuren, afmetingen, kolommen of mobiele weergave | `assets/css/style.css` |
| Taalwisseling, menu of animatielogica | `assets/js/main.js` |
| Hoofdfoto | `assets/images/home/hero.avif` en de verwijzing in `index.html` |

Teksten met `data-i18n` worden door de vertalingen vervangen. Pas bij tekstwijzigingen
zowel de vertaling als de zichtbare standaardtekst in de HTML aan. Controleer beide talen.
De hoofdfoto is de originele versie; deze wordt niet automatisch gecomprimeerd.

De scripts laden met `defer`, in deze volgorde: `components.js`, `translations.js`,
`main.js`. Houd die volgorde aan bij nieuwe pagina's. De taalvoorkeur wordt in de browser
bewaard. De logorij pauzeert bij hover en toetsenbordfocus; animaties respecteren minder beweging.

## Controleren

Met Node.js beschikbaar:

```sh
node scripts/check-site.js
```

Deze controle kijkt naar lokale bestanden en ankers, ongebruikte afbeeldingen, dubbele
HTML-id's, Nederlandse/Engelse vertalingen, JavaScript-syntax en het laden van de scripts.
Externe websites en de visuele weergave worden hiermee niet getest. Bekijk wijzigingen
ook in de browser, op desktop en mobiel.

## Publiceren

Publiceer de acht HTML-bestanden en de volledige map `assets/` samen, met behoud van
de mappenstructuur. `scripts/`, deze handleiding en `.git` zijn niet nodig op de webserver.
Bij een bestaande publicatie kun je de oude `images/`, `style.css`, `script.js` en
`site-components.js` opruimen nadat de nieuwe versie volledig is geplaatst.
