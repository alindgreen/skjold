# BK Skjold – designforslag til ny hjemmeside

Et designforslag til en ny hjemmeside for **Boldklubben Skjold** på Østerbro –
Danmarks største fodboldklub målt på medlemmer.

> Dette er et designforslag og **ikke** BK Skjolds officielle hjemmeside. Den
> officielle side er [bkskjold.dk](https://www.bkskjold.dk).

Siden er bygget med forældre og nye medlemmer som den vigtigste målgruppe:
det skal være let at finde sit hold, træningstider, priser og hvordan man
melder sig ind.

## Sider

```
index.html        Forside: bliv medlem, find dit hold, Skjold i tal, nyheder, kampe, sponsorer
hold/             Holdoversigt med filter (drenge, piger, senior, motion, anden aktivitet)
traening/         Baner (Fælledparken, Ryparken, Østerbro Stadion) og træningstider
medlem/           Sådan melder du dig ind + kontingent og betalingsregler
frivillig/        Bliv træner eller frivillig
kampe/            Kampe og resultater (link til DBU)
sponsorer/        Partnere og bliv partner
om/               Historie, kontakt og kontortider
css/style.css     Design i klubbens farver (rød, guld, hvid) – lyst og mørkt tema
js/site.js        Fælles header, menu (mobilvenlig) og footer
img/              Klubbens logo
```

## Kør lokalt

```bash
python3 -m http.server 8000
# åbn http://localhost:8000
```

Ingen build-step. Alle stier er relative, så siden også virker på GitHub Pages.

## Indhold og forbehold

- **Fakta** (adresse, kontakt, kontortider, kontingent, indmeldelse, historie,
  baner, hold) er hentet fra bkskjold.dk og offentlige kilder via websøgning.
  Kilden står ved hvert afsnit. Alt skal bekræftes af klubben før brug.
- **Uenige kilder:** Medlemstallet er sat til "3.500+" efter DBU's opgørelse for
  2023. Kontingentet følger bkskjold.dk/medlemskab, da den ældre kontingentside
  viser andre beløb.
- **Pladsholdere:** Nyheder, træningstider pr. hold, kampprogram og sponsorer
  kunne ikke hentes og er markeret med en gul "Pladsholder"-ramme med link til
  de rigtige sider. Intet indhold er opfundet.
- **Logo:** Klubbens logo er stillet til rådighed til designforslaget.
