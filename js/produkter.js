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
  { id: 'halsedisse', navn: 'Halsedisse', besk: 'Sort fleece med klublogo og rød-hvid stribe', kategori: 'vinter', pris: 129, billede: 'img/produkter/halsedisse.jpg', stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'hue', navn: 'Hue', besk: 'Sort med opslag, klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: 'img/produkter/hue.jpg', stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'vanter', navn: 'Vanter', besk: 'Sorte handsker med klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: 'img/produkter/vanter.jpg', stoerrelser: ['4–6 år', '7–10 år', '11–14 år', 'Voksen'], ny: true },
  { id: 'kamptroeje', navn: 'Kamptrøje', besk: 'Rød-hvid hjemmebanetrøje med broderet logo', kategori: 'spilletoej', pris: 399, billede: 'img/produkter/kamptroeje.jpg', stoerrelser: ['116', '128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'shorts', navn: 'Kampshorts', besk: 'Sorte shorts med broderet klublogo', kategori: 'spilletoej', pris: 199, billede: 'img/produkter/shorts.jpg', stoerrelser: ['116', '128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'halstoerklaede', navn: 'Halstørklæde', besk: 'Rødt strikket halstørklæde med BK Skjold og logo', kategori: 'fritid', pris: 179, billede: 'img/produkter/halstoerklaede.jpg', stoerrelser: ['One size'] },
  { id: 'mulepose', navn: 'Mulepose', besk: 'Rød mulepose med logo i guld', kategori: 'fritid', pris: 79, billede: 'img/produkter/mulepose.jpg', stoerrelser: ['One size'] },
  { id: 'drikkedunk', navn: 'Drikkedunk', besk: 'Hvid drikkedunk med rødt låg og klublogo', kategori: 'udstyr', pris: 59, billede: 'img/produkter/drikkedunk.jpg', stoerrelser: ['One size'] },
  { id: 'haettetroeje', navn: 'Hættetrøje', besk: 'Blød hættetrøje med logo', kategori: 'fritid', pris: 449, billede: null, stoerrelser: ['128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'kampbold', navn: 'Kampbold', besk: 'Størrelse 5', kategori: 'udstyr', pris: 249, billede: null, stoerrelser: ['Str. 5'] },
  { id: 'traeningsbold', navn: 'Træningsbold', besk: 'Størrelse 3 og 4', kategori: 'udstyr', pris: 179, billede: null, stoerrelser: ['Str. 3', 'Str. 4'] },
  { id: 'gavekort', navn: 'Gavekort', besk: 'Til klubshoppen', kategori: 'fritid', pris: 200, billede: null, stoerrelser: ['200 kr.', '300 kr.', '500 kr.'] },
];

/*
 * Klubbens egne fotos i img/fotos/.
 */
SKJOLD.fotos = {
  fejring: 'img/fotos/fejring.jpg',
  kampdag: 'img/fotos/kampdag.jpg',
  stadion: 'img/fotos/stadion.jpg',
  frokost: 'img/fotos/frokost.jpg',
  medlemmer: 'img/fotos/medlemmer.jpg',
  flag: 'img/fotos/flag.jpg',
  aaretsKlub: 'img/fotos/aarets-klub.jpg',
  boldnet: 'img/fotos/boldnet.jpg',
};
