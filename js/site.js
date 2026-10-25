/*
 * Fælles header, footer, kurv, fotos og produktkort.
 * Hver side angiver <body data-side="…" data-rod="./ eller ../">.
 * Fotos: <div class="foto" data-foto="hero"> (navn fra SKJOLD.fotos).
 */
(function () {
  const S = window.SKJOLD;
  const rod = document.body.dataset.rod || './';
  const side = document.body.dataset.side || '';
  const kr = (n) => `${n.toLocaleString('da-DK')} kr.`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Skrifttyper (Google Fonts)
  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400;500&display=swap">'
  );

  const MENU = [
    ['shop', 'Shop', 'shop/'],
    ['hold', 'Hold', 'hold/'],
    ['medlem', 'Bliv medlem', 'medlem/'],
    ['om', 'Klubben', 'om/'],
  ];

  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="besked">Designforslag · ikke BK Skjolds officielle side · <a href="https://www.bkskjold.dk">bkskjold.dk</a></div>
    <header class="header">
      <div class="wrap">
        <button class="menu-knap" aria-expanded="false" aria-controls="menu">Menu</button>
        <nav id="menu" aria-label="Hovedmenu">${MENU.map(([id, navn, sti]) => `<a href="${rod}${sti}" class="${side === id ? 'aktiv' : ''}">${navn}</a>`).join('')}</nav>
        <a class="logo" href="${rod}" aria-label="BK Skjold – forside"><img src="${rod}img/logo-192.png" alt="BK Skjold" width="64" height="64"></a>
        <div class="hoejre">
          <a class="skjul-mobil" href="${rod}om/#kontakt">Kontakt</a>
          <button class="kurv-knap">Kurv (<span class="kurv-antal">0</span>)</button>
        </div>
      </div>
    </header>`
  );

  const kreditter = Object.keys(S.fotos)
    .filter((n) => document.querySelector(`[data-foto="${n}"]`))
    .map((n) => `<a href="${S.fotoSide(n)}">${esc(S.fotos[n].kredit)}</a>`)
    .join(' · ');

  document.body.insertAdjacentHTML(
    'beforeend',
    `<footer>
      <div class="wrap">
        <div>
          <img class="logo-fod" src="${rod}img/logo-192.png" alt="">
          <p>Boldklubben Skjold<br>Per Henrik Lings Allé 10<br>2100 København Ø</p>
        </div>
        <div><h3>Shop</h3><a href="${rod}shop/#vinter">Vinterkollektion</a><a href="${rod}shop/#spilletoej">Spilletøj</a><a href="${rod}shop/#fritid">Fritid</a><a href="${rod}shop/#udstyr">Udstyr</a></div>
        <div><h3>Klubben</h3><a href="${rod}hold/">Hold og træning</a><a href="${rod}medlem/">Bliv medlem</a><a href="${rod}om/">Om klubben</a></div>
        <div><h3>Kontakt</h3><a href="tel:+4535253525">35 25 35 25</a><a href="mailto:bkskjold@bkskjold.dk">bkskjold@bkskjold.dk</a><a href="https://www.facebook.com/bkskjold1915/">Facebook</a></div>
        <p class="kilder">Designforslag. Klubfakta fra bkskjold.dk – skal bekræftes af klubben. Priser er eksempler.${kreditter ? ` Fotos fra Wikimedia Commons: ${kreditter}.` : ''}</p>
      </div>
    </footer>
    <div class="kurv" id="kurv" aria-hidden="true">
      <div class="slør" data-luk></div>
      <aside class="panel" role="dialog" aria-label="Kurv">
        <div class="top"><h2>Kurv</h2><button data-luk aria-label="Luk">×</button></div>
        <div class="linjer"></div>
        <div class="bund"><div class="total"><span>I alt</span><span class="sum">0 kr.</span></div><button class="knap fuld" id="tilkassen">Til kassen</button><p class="lille" id="kasse-besked" style="margin:12px 0 0"></p></div>
      </aside>
    </div>`
  );

  // Mobilmenu
  const menuKnap = document.querySelector('.menu-knap');
  const menu = document.getElementById('menu');
  menuKnap.addEventListener('click', () => menuKnap.setAttribute('aria-expanded', String(menu.classList.toggle('aaben'))));

  // Fotos – vis en lys flade med logo, hvis et billede ikke kan hentes
  const fyldFoto = (el, url, alt) => {
    if (!url) return el.classList.add('mangler');
    const img = document.createElement('img');
    img.alt = alt || '';
    img.loading = el.dataset.ivrig ? 'eager' : 'lazy';
    img.onload = () => el.closest('.hero')?.classList.add('har-billede');
    img.onerror = () => { img.remove(); el.classList.add('mangler'); };
    img.src = url;
    el.appendChild(img);
  };
  document.querySelectorAll('[data-foto]').forEach((el) => fyldFoto(el, S.fotoUrl(el.dataset.foto, Number(el.dataset.bredde) || 1600), el.dataset.alt));

  // Produktbilleder
  const produktUrl = (p) => (p.billede ? rod + p.billede : null);

  // Kurv – gemmes i browseren
  let kurv = [];
  try { kurv = JSON.parse(localStorage.getItem('skjold:kurv')) || []; } catch { kurv = []; }
  kurv = kurv.filter((l) => S.produkter.some((p) => p.id === l.id));
  const gem = () => { try { localStorage.setItem('skjold:kurv', JSON.stringify(kurv)); } catch { /* privat vindue */ } };
  const panel = document.getElementById('kurv');
  const tegnKurv = () => {
    document.querySelector('.kurv-antal').textContent = kurv.reduce((s, l) => s + l.antal, 0);
    const linjer = panel.querySelector('.linjer');
    linjer.innerHTML = kurv.length
      ? kurv.map((l, i) => {
          const p = S.produkter.find((x) => x.id === l.id);
          return `<div class="linje"><div class="foto${p.billede ? '' : ' mangler'}">${p.billede ? `<img src="${produktUrl(p)}" alt="">` : ''}</div>
            <div><div>${esc(p.navn)}</div><div class="lille">${esc(l.str)} · ${l.antal} stk.</div><button data-fjern="${i}">Fjern</button></div>
            <div>${kr(p.pris * l.antal)}</div></div>`;
        }).join('')
      : '<p class="lille" style="padding:24px 0">Kurven er tom.</p>';
    panel.querySelector('.sum').textContent = kr(kurv.reduce((s, l) => s + S.produkter.find((x) => x.id === l.id).pris * l.antal, 0));
    linjer.querySelectorAll('[data-fjern]').forEach((b) => (b.onclick = () => { kurv.splice(Number(b.dataset.fjern), 1); gem(); tegnKurv(); }));
  };
  const aabnKurv = (aaben) => { panel.classList.toggle('aaben', aaben); panel.setAttribute('aria-hidden', String(!aaben)); };
  document.querySelector('.kurv-knap').onclick = () => aabnKurv(true);
  panel.querySelectorAll('[data-luk]').forEach((b) => (b.onclick = () => aabnKurv(false)));
  document.getElementById('tilkassen').onclick = () => {
    document.getElementById('kasse-besked').textContent = kurv.length
      ? 'Designforslag: Her kobles betaling på – fx MobilePay og kort.'
      : 'Kurven er tom.';
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

  // Produktkort
  SKJOLD.produktkort = (p) => `<article class="produkt" data-kategori="${p.kategori}">
      <div class="foto${p.billede ? '' : ' mangler'}">${p.ny ? '<span class="maerkat">Nyhed</span>' : ''}${p.billede ? `<img src="${produktUrl(p)}" alt="${esc(p.navn)}" loading="lazy">` : ''}</div>
      <h3>${esc(p.navn)}</h3>
      <div class="besk">${esc(p.besk || '')}</div>
      <div class="pris">${kr(p.pris)}</div>
      <div class="valg">
        <select aria-label="Størrelse for ${esc(p.navn)}">${p.stoerrelser.map((s) => `<option>${esc(s)}</option>`).join('')}</select>
        <button class="knap" data-koeb="${p.id}">Køb</button>
      </div>
    </article>`;
  SKJOLD.bindKoeb = (rodEl) =>
    rodEl.querySelectorAll('[data-koeb]').forEach((b) => (b.onclick = () => SKJOLD.lagIKurv(b.dataset.koeb, b.parentElement.querySelector('select').value)));
})();
