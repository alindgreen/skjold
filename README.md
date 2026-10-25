# BK Skjold – designforslag til ny hjemmeside

Et enkelt, luftigt designforslag til en ny hjemmeside for **Boldklubben Skjold**
på Østerbro – Danmarks største fodboldklub målt på medlemmer – med klubshop.

> Dette er et designforslag og **ikke** BK Skjolds officielle hjemmeside. Den
> officielle side er [bkskjold.dk](https://www.bkskjold.dk).

Opbygningen er inspireret af enkle webshops som elou.dk: hvid baggrund, centreret
logo, få menupunkter, store billeder og et rent produktgitter. Farverne er
næsten kun sort og hvid, så klubbens logo står frem.

## Sider

```
index.html     Forside: stort billede, "Nyt i shoppen" (vinterkollektionen), tre indgange, om klubben
shop/          Klubshop med kategorier (vinter, spilletøj, fritid, udstyr), størrelser og kurv
hold/          Hold og træning (drenge, piger, senior, motion, andet) samt baner
medlem/        Sådan melder du dig ind + kontingent
om/            Historie, bliv træner, bliv partner og kontakt
css/style.css  Design
js/produkter.js  Shoppens varer og stockfotos – ret her for at skifte varer og billeder
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

Stockfotos fra [Unsplash](https://unsplash.com) under Unsplash-licensen (gratis,
ingen kreditering påkrævet). Billederne hentes direkte fra Unsplash i browseren.

## Indhold og forbehold

- Klubfakta (adresse, kontakt, kontingent, indmeldelse, historie, baner, hold)
  er hentet fra bkskjold.dk og offentlige kilder via websøgning og skal
  bekræftes af klubben. Kilden står ved hvert afsnit.
- Varer og priser i shoppen er eksempler.
