/*
 * Fælles header, footer, kurv og billeder for alle sider.
 * Hver side angiver <body data-side="…" data-rod="./ eller ../">.
 * Billeder: <div class="foto" data-foto="unsplash-id"> eller data-foto-navn="hero".
 */
(function () {
  const S = window.SKJOLD;
  const rod = document.body.dataset.rod || './';
  const side = document.body.dataset.side || '';
  const kr = (n) => `${n.toLocaleString('da-DK')} kr.`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const MENU = [
    ['shop', 'Shop', 'shop/'],
    ['hold', 'Hold', 'hold/'],
    ['medlem', 'Bliv medlem', 'medlem/'],
    ['om', 'Om klubben', 'om/'],
  ];

  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="besked">Designforslag – ikke BK Skjolds officielle side · <a href="https://www.bkskjold.dk">bkskjold.dk</a></div>
    <header class="header">
      <div class="wrap">
        <button class="menu-knap" aria-expanded="false" aria-controls="menu">Menu</button>
        <nav id="menu" aria-label="Hovedmenu">${MENU.map(([id, navn, sti]) => `<a href="${rod}${sti}" class="${side === id ? 'aktiv' : ''}">${navn}</a>`).join('')}</nav>
        <a class="logo" href="${rod}" aria-label="BK Skjold – forside"><img src="${rod}img/logo-192.png" alt="BK Skjold" width="54" height="54"></a>
        <div class="hoejre">
          <a class="skjul-mobil" href="${rod}om/#kontakt">Kontakt</a>
          <button class="kurv-knap" aria-label="Åbn kurven">Kurv<span class="kurv-antal">0</span></button>
        </div>
      </div>
    </header>`
  );

  document.body.insertAdjacentHTML(
    'beforeend',
    `<footer>
      <div class="wrap">
        <div>
          <img class="logo-fod" src="${rod}img/logo-192.png" alt="">
          <p>Boldklubben Skjold<br>Per Henrik Lings Allé 10<br>2100 København Ø</p>
        </div>
        <div><h3>Klubben</h3><a href="${rod}hold/">Hold og træning</a><a href="${rod}medlem/">Bliv medlem</a><a href="${rod}om/">Om klubben</a></div>
        <div><h3>Shop</h3><a href="${rod}shop/">Alle varer</a><a href="${rod}shop/#vinter">Vinter – nyheder</a><a href="${rod}shop/#spilletoej">Spilletøj</a><a href="${rod}shop/#fritid">Fritid</a><a href="${rod}shop/#udstyr">Udstyr</a></div>
        <div><h3>Kontakt</h3><a href="tel:+4535253525">35 25 35 25</a><a href="mailto:bkskjold@bkskjold.dk">bkskjold@bkskjold.dk</a><a href="https://www.facebook.com/bkskjold1915/">Facebook</a></div>
        <p class="kilder">Designforslag. Klubfakta fra bkskjold.dk og offentlige kilder – skal bekræftes af klubben. Varer og priser i shoppen er eksempler. Fotos: Unsplash.</p>
      </div>
    </footer>
    <div class="kurv" id="kurv" aria-hidden="true">
      <div class="slør" data-luk></div>
      <aside class="panel" role="dialog" aria-label="Kurv">
        <div class="top"><h2 style="margin:0;font-size:1.2rem">Kurv</h2><button data-luk aria-label="Luk">×</button></div>
        <div class="linjer"></div>
        <div class="bund"><div class="total"><span>I alt</span><span class="sum">0 kr.</span></div><button class="knap fuld" id="tilkassen">Gå til kassen</button><p class="lille" id="kasse-besked" style="margin:10px 0 0"></p></div>
      </aside>
    </div>`
  );

  // Mobilmenu
  const menuKnap = document.querySelector('.menu-knap');
  const menu = document.getElementById('menu');
  menuKnap.addEventListener('click', () => menuKnap.setAttribute('aria-expanded', String(menu.classList.toggle('aaben'))));

  // Stockfotos
  document.querySelectorAll('[data-foto], [data-foto-navn]').forEach((el) => {
    const id = el.dataset.foto || S.fotos[el.dataset.fotoNavn];
    const img = document.createElement('img');
    img.src = S.foto(id, Number(el.dataset.bredde) || 1400);
    img.alt = el.dataset.alt || '';
    img.loading = el.dataset.ivrig ? 'eager' : 'lazy';
    img.onerror = () => img.remove(); // grå baggrund vises, hvis billedet ikke kan hentes
    el.appendChild(img);
  });

  // Kurv – gemmes i browseren
  let kurv = [];
  try { kurv = JSON.parse(localStorage.getItem('skjold:kurv')) || []; } catch { kurv = []; }
  const gem = () => { try { localStorage.setItem('skjold:kurv', JSON.stringify(kurv)); } catch { /* privat vindue */ } };
  const panel = document.getElementById('kurv');
  const tegnKurv = () => {
    document.querySelector('.kurv-antal').textContent = kurv.reduce((s, l) => s + l.antal, 0);
    const linjer = panel.querySelector('.linjer');
    linjer.innerHTML = kurv.length
      ? kurv.map((l, i) => {
          const p = S.produkter.find((x) => x.id === l.id);
          return `<div class="linje"><div class="foto" style="background-image:url('${S.foto(p.billede, 200)}')"></div>
            <div><div>${esc(p.navn)}</div><div class="lille">${esc(l.str)} · ${l.antal} stk.</div><button data-fjern="${i}">Fjern</button></div>
            <div>${kr(p.pris * l.antal)}</div></div>`;
        }).join('')
      : '<p class="lille" style="padding:20px 0">Kurven er tom.</p>';
    panel.querySelector('.sum').textContent = kr(kurv.reduce((s, l) => s + S.produkter.find((x) => x.id === l.id).pris * l.antal, 0));
    linjer.querySelectorAll('[data-fjern]').forEach((b) => (b.onclick = () => { kurv.splice(Number(b.dataset.fjern), 1); gem(); tegnKurv(); }));
  };
  const aabnKurv = (aaben) => { panel.classList.toggle('aaben', aaben); panel.setAttribute('aria-hidden', String(!aaben)); };
  document.querySelector('.kurv-knap').onclick = () => aabnKurv(true);
  panel.querySelectorAll('[data-luk]').forEach((b) => (b.onclick = () => aabnKurv(false)));
  document.getElementById('tilkassen').onclick = () => {
    document.getElementById('kasse-besked').textContent = kurv.length
      ? 'Designforslag: Her kobles betaling på – fx MobilePay og kort via en webshop-løsning.'
      : 'Læg en vare i kurven først.';
  };
  SKJOLD.lagIKurv = (id, str) => {
    const l = kurv.find((x) => x.id === id && x.str === str);
    if (l) l.antal++;
    else kurv.push({ id, str, antal: 1 });
    gem();
    tegnKurv();
    aabnKurv(true);
  };
  tegnKurv();

  // Produktkort – bruges på forsiden og i shoppen
  SKJOLD.produktkort = (p) => `<article class="produkt" data-kategori="${p.kategori}">
      <div class="foto">${p.ny ? '<span class="maerkat">Nyhed</span>' : ''}<img src="${S.foto(p.billede, 800)}" alt="${esc(p.navn)}" loading="lazy" onerror="this.remove()"></div>
      <h3>${esc(p.navn)}</h3>
      ${p.besk ? `<div class="lille">${esc(p.besk)}</div>` : ''}
      <div class="pris">${kr(p.pris)}</div>
      <div class="valg">
        <select aria-label="Størrelse for ${esc(p.navn)}">${p.stoerrelser.map((s) => `<option>${esc(s)}</option>`).join('')}</select>
        <button class="knap" data-koeb="${p.id}">Læg i kurv</button>
      </div>
    </article>`;
  SKJOLD.bindKoeb = (rodEl) =>
    rodEl.querySelectorAll('[data-koeb]').forEach((b) => (b.onclick = () => SKJOLD.lagIKurv(b.dataset.koeb, b.parentElement.querySelector('select').value)));
})();
