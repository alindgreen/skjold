/*
 * Fælles header, menu og footer for alle sider.
 * Hver side angiver <body data-side="…" data-rod="./ eller ../">.
 */
(function () {
  const rod = document.body.dataset.rod || './';
  const side = document.body.dataset.side || '';

  const MENU = [
    ['hold', 'Hold', 'hold/'],
    ['traening', 'Træning & baner', 'traening/'],
    ['kampe', 'Kampe', 'kampe/'],
    ['frivillig', 'Frivillig', 'frivillig/'],
    ['sponsorer', 'Sponsorer', 'sponsorer/'],
    ['om', 'Om klubben', 'om/'],
  ];

  const header = `
    <div class="forslag">Designforslag – ikke BK Skjolds officielle hjemmeside. Den officielle side er <a href="https://www.bkskjold.dk">bkskjold.dk</a>.</div>
    <header class="topbar">
      <div class="wrap">
        <a class="logo" href="${rod}"><img src="${rod}img/logo-192.png" alt="" width="48" height="48"> BK Skjold</a>
        <button class="menu-knap" aria-expanded="false" aria-controls="hovedmenu">☰ Menu</button>
        <nav class="hovedmenu" id="hovedmenu" aria-label="Hovedmenu">
          ${MENU.map(([id, navn, sti]) => `<a href="${rod}${sti}" class="${side === id ? 'aktiv' : ''}">${navn}</a>`).join('')}
          <a href="${rod}medlem/" class="cta ${side === 'medlem' ? 'aktiv' : ''}">Bliv medlem</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="fod">
      <div class="wrap">
        <div>
          <h3>Boldklubben Skjold</h3>
          <p>Per Henrik Lings Allé 10<br>2100 København Ø</p>
          <p>Tlf. <a href="tel:+4535253525">35 25 35 25</a><br><a href="mailto:bkskjold@bkskjold.dk">bkskjold@bkskjold.dk</a></p>
        </div>
        <div>
          <h3>Kontortider</h3>
          <p>Tirsdag 10–17<br>Onsdag 10–18<br>Fredag 10–16<br>Mandag og torsdag lukket</p>
        </div>
        <div>
          <h3>Genveje</h3>
          <p><a href="${rod}medlem/">Bliv medlem</a><br><a href="${rod}hold/">Find dit hold</a><br><a href="${rod}traening/">Baner og træningstider</a><br><a href="${rod}frivillig/">Bliv træner</a></p>
        </div>
        <div>
          <h3>Følg klubben</h3>
          <p><a href="https://www.facebook.com/bkskjold1915/">Facebook</a><br><a href="https://www.bkskjold.dk">bkskjold.dk</a></p>
        </div>
        <p class="kilder">Designforslag. Fakta er hentet fra bkskjold.dk, DBU og offentlige kilder via websøgning og skal bekræftes af klubben før brug. Felter markeret "Pladsholder" skal udfyldes med klubbens eget indhold.</p>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  const knap = document.querySelector('.menu-knap');
  const menu = document.getElementById('hovedmenu');
  knap.addEventListener('click', () => {
    const aaben = menu.classList.toggle('aaben');
    knap.setAttribute('aria-expanded', String(aaben));
  });

  // Holdoversigt: filtrér efter kategori.
  const filtre = document.querySelectorAll('[data-filter]');
  filtre.forEach((f) =>
    f.addEventListener('click', () => {
      filtre.forEach((x) => x.setAttribute('aria-pressed', String(x === f)));
      document.querySelectorAll('[data-kategori]').forEach((g) => {
        g.hidden = f.dataset.filter !== 'alle' && g.dataset.kategori !== f.dataset.filter;
      });
    })
  );
})();
