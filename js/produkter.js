/*
 * Shoppens varer og sidens fotos.
 *
 * Varer: Vinterkollektionen (halsedisse, hue, vanter) er klubbens nye produkter.
 * Priser og øvrige varer er eksempler i designforslaget.
 * Produktbilleder: læg filen i img/produkter/ og skriv stien i `billede`,
 * fx 'img/produkter/hue.jpg'. Uden billede vises en lys flade med klublogoet.
 */
window.SKJOLD = window.SKJOLD || {};

SKJOLD.kategorier = { vinter: 'Vinter', spilletoej: 'Spilletøj', fritid: 'Fritid', udstyr: 'Udstyr' };

SKJOLD.produkter = [
  { id: 'halsedisse', navn: 'Halsedisse', besk: 'Sort fleece med klublogo og rød-hvid stribe', kategori: 'vinter', pris: 129, billede: null, stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'hue', navn: 'Hue', besk: 'Sort med opslag, klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: null, stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'vanter', navn: 'Vanter', besk: 'Sorte handsker med klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: null, stoerrelser: ['4–6 år', '7–10 år', '11–14 år', 'Voksen'], ny: true },
  { id: 'hjemmebanetroeje', navn: 'Hjemmebanetrøje', besk: 'Klubbens spilletrøje', kategori: 'spilletoej', pris: 399, billede: null, stoerrelser: ['116', '128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'haettetroeje', navn: 'Hættetrøje', besk: 'Blød hættetrøje med logo', kategori: 'fritid', pris: 449, billede: null, stoerrelser: ['128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'kampbold', navn: 'Kampbold', besk: 'Størrelse 5', kategori: 'udstyr', pris: 249, billede: null, stoerrelser: ['Str. 5'] },
  { id: 'traeningsbold', navn: 'Træningsbold', besk: 'Størrelse 3 og 4', kategori: 'udstyr', pris: 179, billede: null, stoerrelser: ['Str. 3', 'Str. 4'] },
  { id: 'gavekort', navn: 'Gavekort', besk: 'Til klubshoppen', kategori: 'fritid', pris: 200, billede: null, stoerrelser: ['200 kr.', '300 kr.', '500 kr.'] },
];

/*
 * Fotos fra Wikimedia Commons (frie licenser – se `kredit`).
 * Hentes via Special:FilePath, som peger på den aktuelle billedfil.
 */
SKJOLD.fotos = {
  hero: { fil: 'FPYC_Soccer_-_02.JPG', kredit: 'Jarek Tuszyński, CC BY-SA' },
  ungdom: { fil: 'FPYC_Soccer_-_01.JPG', kredit: 'Jarek Tuszyński, CC BY-SA' },
  kamp: { fil: 'FPYC_Soccer_-_03.JPG', kredit: 'Jarek Tuszyński, CC BY-SA' },
  dreng: { fil: 'A-Boy-Playing-Football.jpg', kredit: 'Pavan Prasad, CC0' },
  bold: { fil: 'Football_on_fall_ground_(Unsplash).jpg', kredit: 'Unsplash via Wikimedia Commons, CC0' },
  faelledparken: { fil: 'Fælledparken_og_Parken_stadion_aerial.jpg', kredit: 'Stig Nygaard, CC BY' },
};

SKJOLD.fotoUrl = (navn, bredde = 1600) => {
  const f = SKJOLD.fotos[navn];
  return f ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f.fil)}?width=${bredde}` : null;
};
SKJOLD.fotoSide = (navn) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(SKJOLD.fotos[navn].fil)}`;
