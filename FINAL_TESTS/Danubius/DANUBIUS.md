Válaszolj az alábbi kérdésekre minél részletesebben!
1.	Mi a különbség a <span>, <div>, és az <article> elemek között?

  * `<span>`: inline container, foleg akkor hasznaljuk ha egy szovegresznek, mas style-t szeretnenk beallitani
  * `<div>`: nincs hozzaadott szemantikus jelentese, legvegso esetben hasznaljuk
  * `<article`: foleg erre hasznaljuk -> ujsagcikk, forum post, comment egy cikken, van headingje

2.	Milyen különbségeket és hasonlóságokat ismersz a cookie-k és a localStorage között?

  A cookie-k olvasasa a szerver oldalon tortenik, mig a localStorage a kliens oldalon.
  Mind a ketto adatokat tarol el a userrol, amik arra szolgalnak, hogy mikor ismet,
  felkeresi az oldalt, a state nem a leresetelt allapotban lesz, hanem ahogy a legutobb
  tartozkodott az oldalon.

3.	Milyen http metódusokat ismersz és melyiket milyen célra használják?

  * `GET`: csak adatfogadasra szolgal a szervertol
  * `POST`: adatkuldesre hasznaljuk, legtobbszor megvaltoztatjuk a szerver state-jet
  * `PUT`: felulirja az megadott celpontot, modosit egy meglevo adatot
  * `DELETE`: letorli a megadott forrast


4.	Mi lesz az ’x’ értéke és miért?

  `var a = b = x = 0;
  x = ++a + b++;`

  Eloszor is mind az `a`, a `b` es az `x` erteke is nullaval egyenlo.
  Mivel a `++a` operator a muvelet elott ad hozza 1-et az `a`-hoz igy jelenleg `x = 1 + 0`
  erteke van az `x`-nek. `b++` a muvelet utan ad hozza 1-et `b`-hez. Igy a vegeredmeny `x = 1`.



5.	Mi kerül az x változóba és miért?

  `var x = (a = 3);`

  `x` erteke 3 lesz, mivel a zarojelben levo ertek `a`, ami egyenlo 3-al, igy `x`
  is egyenlo lesz 3-al.



6.	Mit ír ki és miért?

  `var bar = function() { console.log("bar"); }
  var foo = function() { console.log("foo"); }
  console.log("baz");
  setTimeout(foo, 1000);
  setTimeout(bar, 500);`

  Eloszor a `baz` fog kilogolodni, mert az rogton megtortenik, 500 millisecundum utan
  a `bar`, mivel a `setTimeout` akkor hivja meg es utana a `foo` 1 masodperc mulva az
  inditastol szamolva ugyanemiatt.




7.	Mi a különbség a két változó között?

  `var v1 = document.getElementById(’inputText’);
  var v2 = $(’#inputText’);`

  A `v1` vanilla JS-el `id` szerint 'elkapott' elem, mig a `v2` eseteben jQuery-t
  hasznaltunk es ezert van elotte a `#` ezzel jelezve h `id`-rol van szo. Hasonloan
  mint a `querySelector` eseteben.



8.	Mely mód(ok)on lehet elérni a „John Smith” szöveget tartalmazó változót?

  `var data = {
  	’person.name’: ’John Smith’
  };`

  Pl.: `data['person.name']`



9.	Mit ír ki és miért?

  `var callbacks = [];
  for (var i = 0; i < 5; ++i) {
	  callbacks.push(function() { console.log(i); });
  }
  callbacks[3]();`

  5-ot fog kiiri a terminal, mivel a `function`, amit a `callbacks` tombbe `push`-olunk
  azt az `i` erteket fogja kilogolni, amit a `for loop` lefutasa utan tartalmaz az `i`,
  vagyis 5.



10.	Mit ír ki és miért?

  `var a = 2, b = { c: 4 };
  var x = a, y = b;
  x = 5;
  y.c = 6;
  console.log(a + b.c);`

  8-at fog kiirni ha lefuttatjuk. `y` erteke a `b`, ami egy object. `x`-et felulirom
  5-el a 3. sorban igy az mar nem `a`, vagyis nem 2. A 4. sorban `y` objectben levo
  `c` erteket felulirom `6`-al. Igy kapjuk meg vegeredmenykent a 8-at, mivel `a` erteke,
  2 es `b.c` erteke pedig 6.



11.	Mi a különbség a két CSS selector között?

  `.element .symbol {}
  .element.large .symbol {}`

  * Az elsovel kijelolok, minden `.symbol` classal jelolt elemet, ami az `.element` classal
  jelolt elemeken belul talalhato.

  * A masodik esetben, viszont azokat a `.symbol` classokkal rendelkezo elemeket jelolom
  ki, amelyeknek a olyan elemeken belul vannak, amik mind az `.element`, mind a `.large`
  classal rendelkeznek.





12.	Milyen színű lesz a felirat és miért?

   `<div class="form-square">
      <div class="seven-col">
         Hello World!
      </div>
    </div>`

  `div.form-square > div {
     color: blue;
  }`

  `.seven-col {
     color: red;
  }`

  A betuk szine kek lesz, mivel az elso selector magasabb szintu.



13.	Adatbázis tervezési feladat

  Tervezd meg egy webáruház adatbázis sémáját – relációs adatbázisban (táblákban gondolkodj)!
  Termékeket szeretnénk tárolni úgy, hogy az adminok a felületen vehessék fel a termékeket. A termékhez bármennyi, különböző típusú attribútum tartozhat. Új terméktípus, vagy új termék-attribútum felvételéhez ne kelljen sémát módosítani!
  Példa a termékekre és attribútumaikra:

  Dell Vostro X500
  - memória: 16gb
  - processzor magok száma: 4
  - bevezetés ideje: 2015-12-31
  Braun A1800 hajszárító
  - szín: fekete, fehér
  - erősség: 1800W
  - hideglevegő fújás: igen
  - garanciális hónapok száma: 12

  A cél tehát olyan adatstruktúrát kialakítani, hogy ha ezentúl notebookoknál a kijelző felbontását is tárolni szeretnénk, akkor ehhez ne kelljen az adattáblák struktúráját módosítani. Ha több alternatív megoldást is találsz, írhatsz többet is. Az adatstruktúrát bármilyen formában leírhatod – csak értsük meg ☺


  **TABLA 1** | termekek
  --- | ---
  oszlop A: | primary
  oszlop B: | marka
  oszlop C: | tipus
  oszlop D: | cikk(pl notebook)


  **TABLA 2** | notebook
  --- | ---
  oszlop A: | primary
  oszlop B: | marka
  oszlop C: | tipus
  oszlop D: | memoria
  oszlop E: | pr. magok szamolva
  oszlop F: | bec. ideje


  **TABLA 3** | hajszarito
  --- | ---
  oszlop A: | primary
  oszlop B: | marka
  oszlop C: | tipus
  oszlop D: | erosseg
  oszlop E: | hideglevego fujas
  oszlop F: | gar. h. szama
