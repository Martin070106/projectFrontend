export const categories = [
  {
    id: 'dog',
    slug: 'kutya',
    name: 'Kutya',
    image: './images/kutya.png',
    subcategories: [
      {
        id: 'porazok',
        slug: 'porazok',
        name: 'Pórázok',
        image: '/images/kutya/porazok/p1.jpg', 
        items: [
          { id: 'poraz-premium', name: 'Prémium bőr póráz', price: 4990, image: '/images/kutya/porazok/p1.jpg', description: 'Kézzel készült prémium bőr póráz erős varrással.' },
          { id: 'poraz-neon', name: 'Neon színű póráz', price: 2490, image: '/images/kutya/porazok/p2.jpg', description: 'Fényvisszaverő neon póráz a jobb láthatóságért.' },
          { id: 'poraz-behuzhato', name: 'Behúzható póráz 5m', price: 6990, image: '/images/kutya/porazok/p3.jpg', description: 'Könnyű, tartós behúzható póráz nagy mozgástartományhoz.' }
        ]
      },
      {
        id: 'tapok',
        slug: 'tapok',
        name: 'Tápok',
        image: '/images/tapok/tap1.png',
        items: [
          { id: 'tap-1', name: 'Nagyadag kutyaeledel 10kg', price: 15000, image: '/images/tapok/tap1.png', description: 'Teljes értékű táplálék nagytestű kutyáknak.' },
          { id: 'tap-2', name: 'Kistestű kutyaeledel 5kg', price: 8000, image: '/images/tapok/tap2.png', description: 'Speciális táp kis testű kutyáknak.' },
          { id: 'tap-3', name: 'Gluténmentes kutyaeledel 7kg', price: 12000, image: '/images/tapok/tap3.png', description: 'Gluténmentes táp érzékeny kutyáknak.' }
        ]
      },
      {
        id: 'nyakorvek',
        slug: 'nyakorvek',
        name: 'Nyakörvek',
        image: '/images/kutya/nyakorv/nyakorv1.jpg',
        items: [
          { id: 'nyakorv-1', name: 'Kényelmes nyakörv', price: 1990, image: '/images/kutya/nyakorv/nyakorv1.jpg', description: 'Állítható, puha belső rétegű nyakörv.' },
          { id: 'nyakorv-2', name: 'Fényvisszaverő nyakörv', price: 2490, image: '/images/kutya/nyakorv/nyakorv2.jpg', description: 'Biztonságos nyakörv éjszakai sétákhoz.' },
          { id: 'nyakorv-3', name: 'Díszes nyakörv', price: 2990, image: '/images/kutya/nyakorv/nyakorv3.jpg', description: 'Stílusos nyakörv különleges alkalmakra.' }
        ]
      }
    ]
  },  
  {
    id: 'cat',
    slug: 'macska',
    name: 'Macska',
    image: './images/macska.png',
    subcategories: [
      {
        id: 'jatek',
        slug: 'jatek',
        name: 'Játékok',
        image: '/images/macska/jatek/j1.jpg',
        items: [
          { id: 'jatek-pluss', name: 'Puha plüss cica', price: 1290, image: '/images/macska/jatek/j1.jpg', description: 'Puha plüss játék macskáknak.' },
          { id: 'jatek-madarkap', name: 'Madár csörgő', price: 890, image: '/images/macska/jatek/j2.jpg', description: 'Csörgős madár játék a mozgásért.' },
          { id: 'jatek-labda', name: 'Pingpong labda szett', price: 490, image: '/images/macska/jatek/j3.jpg', description: 'Könnyű labdák az aktív játékhoz.' }
        ]
      },
      {
        id: 'tapok',
        slug: 'tapok',
        name: 'Tápok',
        image: '/images/macska/tapok/tap1.png',
        items: [
          { id: 'tap-5kg', name: 'Macskatáp 5kg', price: 9000, image: '/images/macska/tapok/tap10.png', description: 'Tápláló száraz táp minden korosztálynak.' },
          { id: 'tap-2kg', name: 'Macskatáp 2kg', price: 4500, image: '/images/macska/tapok/tap11.png', description: 'Kiegyensúlyozott táp felnőtt macskáknak.' },
          { id: 'tap-wet', name: 'Nedves konzerv 400g', price: 350, image: '/images/macska/tapok/tap12.png', description: 'Ízletes nedves konzerv kiegészítőnek.' }
        ]
      },
      {
        id: 'talak',
        slug: 'talak',
        name: 'Tálak',
        image: '/images/macska/talak/t5.jpg',
        items: [
          { id: 'talak-keramia', name: 'Kerámia tál', price: 2490, image: '/images/macska/talak/t4.jpg', description: 'Stabil kerámia tál a tiszta étkezésért.' },
          { id: 'talak-muanyag', name: 'Műanyag tál', price: 990, image: '/images/macska/talak/t2.jpg', description: 'Könnyű, mosogatógépben mosható tál.' },
          { id: 'talak-automata', name: 'Automata etető', price: 12990, image: '/images/macska/talak/t1.jpg', description: 'Programozható automata etető időzítővel.' }
        ]
      }
    ]
  },
  {
    id: 'rodent',
    slug: 'ragcsalo',
    name: 'Rágcsáló',
    image: './images/ragcsalo.png',
    subcategories: [
      {
        id: 'eledel',
        slug: 'eledel',
        name: 'Eledel',
        image: '/images/ragcsalok/horcsog/kaja.png',
        items: [
          { id: 'eledel-1kg', name: 'Rágcsáló eledel 1kg', price: 2000, image: '/images/ragcsalok/horcsog/kaja.png', description: 'Vitamindús eledel hörcsögöknek és tengerimalacoknak.' },
          { id: 'eledel-500g', name: 'Rágcsáló eledel 500g', price: 1200, image: '/images/ragcsalok/horcsog/kaja2.png', description: 'Kis kiszerelés változatos összetétellel.' },
          { id: 'zeldekiegeszito', name: 'Zöldség kiegészítő', price: 650, image: '/images/ragcsalok/horcsog/kaja2.png', description: 'Szárított zöldségek kiegészítő etetéshez.' }
        ]
      },
      {
        id: 'ketrec',
        slug: 'ketrec',
        name: 'Ketrecek & házak',
        image: '/images/ragcsalok/horcsog/haz.png',
        items: [
          { id: 'ketrec-alap', name: 'Emeletes Faház', price: 6000, image: '/images/ragcsalok/horcsog/haz.png', description: 'Könnyen tisztítható, biztonságos ketrec.' },
          { id: 'ketrec-lux', name: 'Luxus ház', price: 4500, image: '/images/ragcsalok/horcsog/haz2.png', description: 'Több szintes, kiegészítőkkel.' },
          { id: 'ketrec-padlo', name: 'Ketrec', price: 12000, image: '/images/ragcsalok/nyul/ketrec1.png', description: 'Csúszásmentes pót padló a ketrechz.' }
        ]
      },
      {
        id: 'jatek',
        slug: 'jatek',
        name: 'Játékok & kiegészítők',
        image: '/images/ragcsalok/horcsog/alagut.png',
        items: [
          { id: 'alagut', name: 'Alagút', price: 3000, image: '/images/ragcsalok/horcsog/alagut.png', description: 'Játékos alagút a mozgás és bújás örömére.' },
          { id: 'futokerek', name: 'Alom', price: 4500, image: '/images/ragcsalok/nyul/alom.png', description: 'Csendes futókerék kis rágcsálóknak.' },
          { id: 'husito', name: 'Itató', price: 900, image: '/images/ragcsalok/tmalac/itato1.png', description: 'Természetes rágófa fogápolásra.' }
        ]
      }
    ]
  },
  {
    id: 'reptile',
    slug: 'hullo',
    name: 'Hüllő',
    image: './images/hullo.png',
    subcategories: [
      {
        id: 'terrariumok',
        slug: 'terrariumok',
        name: 'Terráriumok',
        image: '/images/hullok/t1.jpg',
        items: [
          { id: 'terrarium-50l', name: 'Terrárium 50L', price: 35000, image: '/images/hullok/t1.jpg', description: 'Üvegből készült terrárium alapfelszereléssel.' },
          { id: 'terrarium-fa', name: 'Fa terrárium', price: 25000, image: '/images/hullok/t3.jpg', description: 'Dekoratív fa terrárium természetes hatással.' },
          { id: 'terrarium-mini', name: 'Mini terrárium 20L', price: 18000, image: '/images/hullok/t4.jpg', description: 'Kisebb fajok számára ideális mini terrárium.' }
        ]
      },
      {
        id: 'futes-vilagitas',
        slug: 'futes-vilagitas',
        name: 'Fűtés & világítás',
        image: '/images/hullok/t2.jpg',
        items: [
          { id: 'futoegyo-1', name: 'Fűtőégő 75W', price: 8000, image: '/images/hullok/t14.jpg', description: 'Hőmérséklet szabályozó fűtőégő hüllők számára.' },
          { id: 'uvb-lampa', name: 'UVB lámpa 10.0', price: 9999, image: '/images/hullok/t13.jpg', description: 'Fontos UVB sugárzás csontosodáshoz és egészséghez.' },
          { id: 'termosztat', name: 'Digitális termosztát', price: 6990, image: '/images/hullok/termosz.jpg', description: 'Pontoss hőmérséklet-szabályozás a terráriumban.' }
        ]
      },
      {
        id: 'kiegeszitok',
        slug: 'kiegeszitok',
        name: 'Kiegészítők',
        image: '/images/hullok/para.jpg',
        items: [
          { id: 'substrat', name: 'Aljzat substrát 10L', price: 4500, image: '/images/hullok/aljzat.jpg', description: 'Megfelelő aljzat terráriumi állatoknak.' },
          { id: 'hygrometer', name: 'Páratartalom-mérő', price: 1590, image: '/images/hullok/para.jpg', description: 'Könnyen használható páratartalom- és hőmérő.' },
          { id: 'díszlet', name: 'Terrárium díszlet', price: 2990, image: '/images/hullok/diszlet.jpg', description: 'Mesterséges búvóhely és dekoráció.' }
        ]
      }
    ]
  },
  {
    id: 'bird',
    slug: 'madar',
    name: 'Madár',
    image: './images/madar.png',
    subcategories: [
      {
        id: 'kalitkak',
        slug: 'kalitkak',
        name: 'Kalitkák',
        image: '/images/madarak/kalitka1.png',
        items: [
          { id: 'kalitka-alap', name: 'Alap kalitka', price: 8500, image: '/images/madarak/kalitka1.png', description: 'Tágas kalitka rácsokkal és etetőtálkával.' },
          { id: 'kalitka-osszecsukhato', name: 'Összecsukható kalitka', price: 12500, image: '/images/madarak/kalitka2.png', description: 'Könnyen szállítható összehajtható kalitka.' },
          { id: 'polc-akaszto', name: 'Polc és ülőfa', price: 1990, image: '/images/madarak/ulo.jpg', description: 'Kiegészítő ülőfa és játékakasztó.' }
        ]
      },
      {
        id: 'eledel',
        slug: 'eledel',
        name: 'Eledel',
        image: '/images/madarak/kaja1.jpg',
        items: [
          { id: 'madar-eledel-2kg', name: 'Madáreleség 2kg', price: 2500, image: '/images/madarak/kaja1.jpg', description: 'Teljes értékű madáreleség keverék.' },
          { id: 'magkeverek-500g', name: 'Magkeverék 500g', price: 990, image: '/images/madarak/kaja2.jpg', description: 'Változatos magkeverék kisebb madaraknak.' },
          { id: 'pellet-1kg', name: 'Pellet 1kg', price: 1700, image: '/images/madarak/kaja5.jpg', description: 'Tápanyagban gazdag pellet kiegyensúlyozott étrendhez.' }
        ]
      },
      {
        id: 'jatekok',
        slug: 'jatekok',
        name: 'Játékok',
        image: '/images/madarak/jatek1.jpg',
        items: [
          { id: 'hinta', name: 'Hinta', price: 1200, image: '/images/madarak/jatek2.jpg', description: 'Színes hinta a madarak szórakoztatására.' },
          { id: 'tukor', name: 'Fa híd', price: 990, image: '/images/madarak/jatek5.jpg', description: 'Tükrös játék lelkesítve a madarakat.' },
          { id: 'jatek-csengo', name: 'Csengő játék', price: 750, image: '/images/madarak/jatek3.jpg', description: 'Csengős játék aktivitás növelésére.' }
        ]
      }
    ]
  },
  {
    id: 'fish',
    slug: 'hal',
    name: 'Hal',
    image: './images/hal.png',
    subcategories: [
      {
        id: 'akvarium',
        slug: 'akvarium',
        name: 'Akváriumok',
        image: '/images/halak/a1.jpg',
        items: [
          { id: 'akv-60l', name: 'Akvárium 60L', price: 45000, image: '/images/halak/a1.jpg', description: 'Teljesen felszerelt akvárium kezdőknek.' },
          { id: 'akv-30l', name: 'Akvárium 30L', price: 25000, image: '/images/halak/a1.jpg', description: 'Kis méretű akvárium asztali használatra.' }
        ]
      },
      {
        id: 'eledel',
        slug: 'eledel',
        name: 'Eleség',
        image: '/images/halak/a2.jpg',
        items: [
          { id: 'hal-tap-250g', name: 'Haleleség 250g', price: 1200, image: '/images/halak/a2.jpg', description: 'Kiegyensúlyozott haleleség minden fajnak.' },
          { id: 'hal-tap-100g', name: 'Haleleség 100g', price: 650, image: '/images/halak/a2.jpg', description: 'Kis kiszerelés kedvező árban.' }
        ]
      },
      {
        id: 'szuro',
        slug: 'szuro',
        name: 'Szűrők & felszerelés',
        image: '/images/halak/a1.jpg',
        items: [
          { id: 'szuro-bio', name: 'Szűrőberendezés', price: 8000, image: '/images/halak/a3.jpg', description: 'Hatékony szűrő a tiszta vízért.' },
          { id: 'futes', name: 'Akvárium fűtő', price: 3990, image: '/images/halak/a4.jpg', description: 'Állítható termosztáttal ellátott fűtő.' }
        ]
      }
    ]
  }
]

export const getCategoryById = (id) => categories.find(c => c.id === id)
