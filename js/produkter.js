/*
 * Shoppens varer.
 *
 * EKSEMPELVARER: Navne, priser og billeder er pladsholdere i designforslaget
 * og skal erstattes af klubbens rigtige produkter. Billederne er stockfotos
 * fra Unsplash (gratis under Unsplash-licensen).
 *
 * Felter: id, navn, kategori (vinter | spilletoej | fritid | udstyr), pris (kr.),
 * besk (kort beskrivelse), billede (Unsplash-foto-id eller sti til eget billede
 * – fx 'img/produkter/hue.jpg'), stoerrelser, ny (vises under "Nyt i shoppen").
 */
window.SKJOLD = window.SKJOLD || {};

// Eget billede (sti med '/' eller filendelse) eller Unsplash-foto-id.
SKJOLD.foto = (id, bredde = 1200) =>
  /[/.]/.test(id) ? (document.body.dataset.rod || './') + id : `https://unsplash.com/photos/${id}/download?w=${bredde}`;

SKJOLD.kategorier = { vinter: 'Vinter', spilletoej: 'Spilletøj', fritid: 'Fritid', udstyr: 'Udstyr' };

SKJOLD.produkter = [
  // Skjolds nye vinterprodukter – vises øverst under "Nyt i shoppen" på forsiden.
  { id: 'halsedisse', navn: 'Halsedisse', besk: 'Sort fleece med klublogo, rød-hvid stribe og snøre', kategori: 'vinter', pris: 129, billede: '-zY8KPxe8nQ', stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'hue', navn: 'Hue', besk: 'Sort med opslag, klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: 'y7NBxZuL-_w', stoerrelser: ['Junior', 'Voksen'], ny: true },
  { id: 'vanter', navn: 'Vanter', besk: 'Sorte fingerhandsker med klublogo og rød-hvid stribe', kategori: 'vinter', pris: 149, billede: '5Ke4wx1QzQ0', stoerrelser: ['4–6 år', '7–10 år', '11–14 år', 'Voksen'], ny: true },
  { id: 'hjemmebanetroeje', navn: 'Hjemmebanetrøje', kategori: 'spilletoej', pris: 399, billede: '3vaOgYLFtQs', stoerrelser: ['116', '128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'haettetroeje', navn: 'Hættetrøje', kategori: 'fritid', pris: 449, billede: '_qOlEX0SuuQ', stoerrelser: ['128', '140', '152', 'S', 'M', 'L', 'XL'] },
  { id: 'haettetroeje-dame', navn: 'Hættetrøje, dame', kategori: 'fritid', pris: 449, billede: 'n-yh8Trp0EI', stoerrelser: ['XS', 'S', 'M', 'L'] },
  { id: 'kampbold', navn: 'Kampbold str. 5', kategori: 'udstyr', pris: 249, billede: 'iOITF7T87kU', stoerrelser: ['Str. 5'] },
  { id: 'traeningsbold', navn: 'Træningsbold str. 4', kategori: 'udstyr', pris: 179, billede: 'p7N4GuhFqdU', stoerrelser: ['Str. 4'] },
  { id: 'juniorbold', navn: 'Juniorbold str. 3', kategori: 'udstyr', pris: 149, billede: 'lBhhnhndpE0', stoerrelser: ['Str. 3'] },
  { id: 'sportstaske', navn: 'Sportstaske', kategori: 'udstyr', pris: 299, billede: 'ewfTDxL0iXc', stoerrelser: ['Én størrelse'] },
  { id: 'gavekort', navn: 'Gavekort', kategori: 'fritid', pris: 200, billede: 'bZIbDiD3dnY', stoerrelser: ['200 kr.', '300 kr.', '500 kr.'] },
];

// Øvrige stockfotos brugt på siden (Unsplash-licens).
SKJOLD.fotos = {
  hero: '1OMOf8AAm20', // dreng sparker til bolden
  hold: 'tGEIzxnHNs0', // spillere samlet på banen
  piger: 'otYC4eoGJGg', // kvinder spiller fodbold
  bold: 'jA7YI8Lpobg', // bold på græs
  medlem: '3pWhtpa0l0Q', // dreng sparker til bolden
  stoevler: '4GG0asoE6jg', // fodboldstøvler
};
