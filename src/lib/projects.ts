export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  totalImages: number;
  location: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'montaz-haly-tehovec-bulanka',
    title: 'Stavba průmyslové haly',
    description: 'Kompletní stavba včetně elektroinstalace, rozvodů a všech technologických systémů',
    category: 'Montáž',
    location: 'Tehovec - Bulánka',
    totalImages: 6,
    images: [
      '/images/projects/Montáž haly Tehovec - Bulánka/6.webp',
      '/images/projects/Montáž haly Tehovec - Bulánka/5.webp',
      '/images/projects/Montáž haly Tehovec - Bulánka/4.webp',
      '/images/projects/Montáž haly Tehovec - Bulánka/3.webp',
      '/images/projects/Montáž haly Tehovec - Bulánka/2.webp',
      '/images/projects/Montáž haly Tehovec - Bulánka/1.webp'
    ]
  },
  {
    id: 'cerpadel-zea',
    title: 'Přívodní kabel - oprava a diagnostika',
    description: 'Vyhledání závady a nová montáž přívodního kabelu AYKY 4x50 pro údolí čerpadel',
    category: 'Oprava',
    location: 'ZEA a.s',
    totalImages: 3,
    images: [
      '/images/projects/čerpadel - ZEA/1.webp',
      '/images/projects/čerpadel - ZEA/2.webp',
      '/images/projects/čerpadel - ZEA/3.webp'
    ]
  },
  {
    id: 'skoly-rokycany',
    title: 'Nová elektroinstalace školy',
    description: 'Kompletní elektroinstalace - nové rozvody, instalace osvětlení, zásuvek a řídicích systémů',
    category: 'Elektroinstalace',
    location: 'Rokycany',
    totalImages: 9,
    images: [
      '/images/projects/školy Rokycany/9.webp',
      '/images/projects/školy Rokycany/8.webp',
      '/images/projects/školy Rokycany/7.webp',
      '/images/projects/školy Rokycany/6.webp',
      '/images/projects/školy Rokycany/5.webp',
      '/images/projects/školy Rokycany/4.webp',
      '/images/projects/školy Rokycany/3.webp',
      '/images/projects/školy Rokycany/2.webp',
      '/images/projects/školy Rokycany/1.webp'
    ]
  },
  {
    id: 'mereni-izolacnich-odporu',
    title: 'Měření izolačních odporů',
    description: 'Měření izolačních odporů s kompletním testem a dokumentací',
    category: 'Diagnostika',
    location: 'Bulánka - Tehovec',
    totalImages: 2,
    images: [
      '/images/projects/Měření izolačních odporů/1.webp',
      '/images/projects/Měření izolačních odporů/2.webp'
    ]
  },
  {
    id: 'admin-cast-haly-tehovec',
    title: 'Administrativa haly',
    description: 'Административní část haly - kanceláře, sociální zařízení a všechny související instalace',
    category: 'Montáž',
    location: 'Tehovec',
    totalImages: 5,
    images: [
      '/images/projects/části haly Tehovec/5.webp',
      '/images/projects/části haly Tehovec/4.webp',
      '/images/projects/části haly Tehovec/3.webp',
      '/images/projects/části haly Tehovec/2.webp',
      '/images/projects/části haly Tehovec/1.webp'
    ]
  },
  {
    id: 'sklad-zea',
    title: 'Hromosvod pro sklad',
    description: 'Hromosvod pro sklad s kompletním systémem ochrany proti přepětí',
    category: 'Montáž',
    location: 'ZEA Světice a.s',
    totalImages: 3,
    images: [
      '/images/projects/sklad - ZEA/1.webp',
      '/images/projects/sklad - ZEA/2.webp',
      '/images/projects/sklad - ZEA/3.webp'
    ]
  },
  {
    id: 'chaty-cernevoderad',
    title: 'Elektroměr nové stavby',
    description: 'Dočasná montáž elektroměru pro novou stavbu včetně přípojky a zabezpečení',
    category: 'Montáž',
    location: 'Černé Voděrady',
    totalImages: 3,
    images: [
      '/images/projects/chaty Černé Voděrady/1.webp',
      '/images/projects/chaty Černé Voděrady/2.webp',
      '/images/projects/chaty Černé Voděrady/3.webp'
    ]
  },
  {
    id: 'hromosvodu-cerpadel-zea',
    title: 'Hromosvod údolí čerpadel',
    description: 'Hromosvod pro údolí čerpadel s ochranou před bleskem a přepětím',
    category: 'Montáž',
    location: 'ZEA Světice a.s',
    totalImages: 2,
    images: [
      '/images/projects/hromosvodu údolí čerpadel/1.webp',
      '/images/projects/hromosvodu údolí čerpadel/2.webp'
    ]
  },
  {
    id: 'demontaz-zpetna-montaz-fve',
    title: 'Demontáž a zpětná montáž FvE',
    description: 'Demontáž a zpětná montáž fotovoltaického systému s novým osazením dle požadavků zákazníka',
    category: 'Montáž',
    location: 'Ždánice',
    totalImages: 2,
    images: [
      '/images/projects/Demontáž a zpětná/1.webp',
      '/images/projects/Demontáž a zpětná/2.webp'
    ]
  },
  {
    id: 'reklama-pizzerie',
    title: 'Osazení a připojení reklamy',
    description: 'Osazení a připojení neonové reklamy pro pizzerii včetně elektroinstalace a bezpečnostního zabezpečení',
    category: 'Montáž',
    location: 'Jaroměř',
    totalImages: 3,
    images: [
      '/images/projects/reklamy pro pizzeri/1.webp',
      '/images/projects/reklamy pro pizzeri/2.webp',
      '/images/projects/reklamy pro pizzeri/3.webp'
    ]
  },
  {
    id: 'nocni-havarie-tehovec',
    title: 'Noční havárie - havárijní oprava',
    description: 'Dohledání a oprava zahořelého přívodního vedení pro vysílací věž v nočních hodinách',
    category: 'Havárie',
    location: 'Tehovec - Bulánka',
    totalImages: 2,
    images: [
      '/images/projects/Noční havárie /1.webp',
      '/images/projects/Noční havárie /2.webp'
    ]
  },
  {
    id: 'havarie-rozvadjuce',
    title: 'Havarijní výjezd k požáru',
    description: 'Havárijní výjezd a nouzové odseknutí rozvaděče při požáru s okamžitým zajištěním bezpečnosti',
    category: 'Havárie',
    location: 'Lokace',
    totalImages: 1,
    images: [
      '/images/projects/požáru rozvaděče/1.webp'
    ]
  },
  {
    id: 'kladeni-privodniho-kabelu',
    title: 'Kladení přívodního kabelu',
    description: 'Profesionální kladení přívodního kabelu do zeminy s dodržením všech bezpečnostních norem a označením',
    category: 'Instalace',
    location: 'Lokace',
    totalImages: 1,
    images: [
      '/images/projects/Kladení přívodního kabelu/1.webp'
    ]
  },
  {
    id: 'klimatizace-tousice',
    title: 'Montáž klimatizace',
    description: 'Profesionální montáž a instalace klimatizačního systému s kompletním zapojením a zprovozněním',
    category: 'Instalace',
    location: 'Toušice',
    totalImages: 5,
    images: [
      '/images/projects/klimatizace - Toušice/5.webp',
      '/images/projects/klimatizace - Toušice/4.webp',
      '/images/projects/klimatizace - Toušice/3.webp',
      '/images/projects/klimatizace - Toušice/2.webp',
      '/images/projects/klimatizace - Toušice/1.webp'
    ]
  },
  {
    id: 'osvetleni-arealu',
    title: 'Montáž LED osvětlení areálu',
    description: 'Demontáž původního osvětlení areálu a montáž nového LED osvětlení s úsporou energie a lepší viditelností',
    category: 'Osvětlení',
    location: 'Areál',
    totalImages: 3,
    images: [
      '/images/projects/osvětlení areálu/1.webp',
      '/images/projects/osvětlení areálu/2.webp',
      '/images/projects/osvětlení areálu/3.webp'
    ]
  },
  {
    id: 'oprava-jisticu-banka',
    title: 'Oprava zahořelých jističů',
    description: 'Oprava dvou zahořelých jističů v budově bývalé banky s výměnou a kontrolou elektroinstalace',
    category: 'Opravy',
    location: 'Budova bývalé banky',
    totalImages: 1,
    images: [
      '/images/projects/budova bývalé banky/1.webp'
    ]
  }
];
