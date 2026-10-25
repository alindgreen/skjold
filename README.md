# BK Skjold – designforslag til ny hjemmeside

Et enkelt, luftigt designforslag til en ny hjemmeside for **Boldklubben Skjold**
på Østerbro – Danmarks største fodboldklub målt på medlemmer – med klubshop.

> Dette er et designforslag og **ikke** BK Skjolds officielle hjemmeside. Den
> officielle side er [bkskjold.dk](https://www.bkskjold.dk).

Udtrykket er lyst og eksklusivt: hvid og sandfarvet baggrund, elegante
serif-overskrifter (Cormorant Garamond), centreret logo, få menupunkter, store
billeder og masser af luft. Der bruges kun sort og hvid, så klubbens logo er
den eneste farve på siden.

## Sider

```
index.html     Forside: stort billede, "Nyt i shoppen" (vinterkollektionen), tre indgange, om klubben
shop/          Klubshop med kategorier (vinter, spilletøj, fritid, udstyr), størrelser og kurv
hold/          Hold og træning (drenge, piger, senior, motion, andet) samt baner
medlem/        Sådan bliver du medlem (7 trin), kontingent og FAQ
om/            Historie, Skjold-modellen, bliv træner og kontakt
partnere/      Bliv partner: eksponering og kontakt
css/style.css  Design
js/produkter.js  Shoppens varer og sidens fotos – ret her for at skifte varer og billeder
js/site.js     Fælles header, footer, kurv og produktkort
img/           Klubbens logo
```

## Kør lokalt

```bash
python3 -m http.server 8000
# åbn http://localhost:8000
```

## Shoppen

- Varerne ligger i `js/produkter.js`. Vinterkollektionen (halsedisse, hue og
  vanter) er markeret `ny: true` og vises på forsiden.
- Et produkt kan bruge et eget billede: læg filen i `img/produkter/` og skriv
  stien i `billede`, fx `'img/produkter/hue.jpg'`.
- Kurven gemmes i browseren. "Gå til kassen" viser, hvor betaling (fx MobilePay
  og kort via en webshop-løsning) skal kobles på.

## Billeder

Klubbens egne fotos ligger i `img/fotos/` og er samlet i `SKJOLD.fotos` i
`js/produkter.js`. Kan et billede ikke hentes, vises en lys flade med klubbens
logo i stedet for et tomt felt. Produkterne vises på samme måde, indtil de får
egne billeder.

## Indhold og forbehold

- Klubfakta (adresse, kontakt, kontingent, indmeldelse, historie, baner, hold)
  er hentet fra bkskjold.dk og offentlige kilder via websøgning og skal
  bekræftes af klubben. Kilden står ved hvert afsnit.
- Varer og priser i shoppen er eksempler.

## Ny version

CSS og JavaScript hentes med et versionsnummer (`?v=…`) i alle HTML-filer, så
browseren ikke bruger en gammel, gemt udgave. Ret nummeret i alle filer, når
`css/style.css`, `js/produkter.js` eller `js/site.js` ændres.
