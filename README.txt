DPARt website
=============

Statische, tweetalige projectwebsite voor DPARt. Er is geen installatie,
framework of buildstap nodig: publiceer de bestanden in deze map gezamenlijk
op een statische webserver.

Lokaal bekijken
---------------

Gebruik bij voorkeur een lokale webserver in plaats van de HTML-bestanden
rechtstreeks te openen. Bijvoorbeeld met een editor-extensie of een lokale
HTTP-server. Open daarna index.html via localhost.

Structuur
---------

- index.html: homepage
- about.html: achtergrond en doelstellingen
- research.html: onderzoeksthema's
- results.html: resultaten en hulpmiddelen
- news.html: nieuws en evenementen
- partners.html: projectpartners per expertisegroep
- contact.html: contactpagina
- site-components.js: gedeelde header, navigatie, footer en sitegegevens
- script.js: vertalingen, taalkeuze, mobiel menu en scrollanimaties
- style.css: alle vormgeving en responsieve regels
- images/: beeldmateriaal en partnerlogo's

Veelvoorkomende wijzigingen
---------------------------

- Wijzig het e-mailadres één keer in `siteConfig` bovenaan site-components.js.
- Wijzig navigatie, adres, LinkedIn of footer in site-components.js.
- Wijzig Nederlandse en Engelse teksten in script.js. De zichtbare Nederlandse
  tekst in de HTML dient als toegankelijke standaardinhoud.
- Voeg unieke paginainhoud toe aan het bijbehorende HTML-bestand.
- Voeg algemene vormgeving toe aan style.css.

Publicatiecontrole
------------------

- Vervang info@example.nl door het officiële DPARt-adres.
- Controleer beide talen en alle pagina's op desktop en mobiel.
- Controleer nieuwe afbeeldingen op bestandsgrootte en gebruik lazy-loading voor
  afbeeldingen die niet direct bovenaan de pagina zichtbaar zijn.
- Controleer externe links en partnernamen.

Technische uitgangspunten
-------------------------

- Native Web Components voorkomen dubbele headers en footers zonder externe
  afhankelijkheden of een buildproces toe te voegen.
- De taalvoorkeur wordt lokaal in de browser opgeslagen.
- Elke pagina heeft een eigen titel en metabeschrijving; deze worden bij een
  taalwisseling eveneens vertaald.
- Animaties respecteren de systeeminstelling voor minder beweging.
