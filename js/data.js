// 11 ASEAN Nations — each plays a well-known piece of traditional music.
// audioUrl points to a local file in the audio/ folder (see audio/README.md).
const ASEAN_11 = {
  id: {
    id: "id",
    name: "Indonesia",
    capital: "Jakarta / Nusantara",
    pop: "278 Million",
    currency: "Rupiah (IDR)",
    animal: "Komodo Dragon",
    joined: "1967 (Founder)",
    fact: "Indonesia consists of over 17,000 tropical islands stretching across 3 time zones!",
    anthem: "Javanese Gamelan",
    audioUrl: "audio/id.mp3"
  },
  my: {
    id: "my",
    name: "Malaysia",
    capital: "Kuala Lumpur",
    pop: "34 Million",
    currency: "Ringgit (MYR)",
    animal: "Malayan Tiger",
    joined: "1967 (Founder)",
    fact: "The Petronas Twin Towers in Kuala Lumpur were once the tallest buildings in the world!",
    anthem: "Rasa Sayang",
    audioUrl: "audio/my.mp3"
  },
  ph: {
    id: "ph",
    name: "Philippines",
    capital: "Manila",
    pop: "115 Million",
    currency: "Philippine Peso (PHP)",
    animal: "Philippine Eagle",
    joined: "1967 (Founder)",
    fact: "Home to 7,641 islands and the world-famous geologic Chocolate Hills of Bohol!",
    anthem: "Cariñosa",
    audioUrl: "audio/ph.mp3"
  },
  th: {
    id: "th",
    name: "Thailand",
    capital: "Bangkok",
    pop: "71.8 Million",
    currency: "Thai Baht (THB)",
    animal: "Thai Elephant (Chang)",
    joined: "1967 (Founder)",
    fact: "The 'Land of Smiles' is the only Southeast Asian nation that was never colonized by European powers!",
    anthem: "Piphat Ensemble",
    audioUrl: "audio/th.mp3"
  },
  tl: {
    id: "tl",
    name: "Timor-Leste",
    capital: "Dili",
    pop: "1.35 Million",
    currency: "US Dollar (USD)",
    animal: "Crocodile (Lafaek)",
    joined: "2022 (11th Member)",
    fact: "Local legend states that the island of Timor was formed from a benevolent prehistoric crocodile!",
    anthem: "Foho Ramelau",
    audioUrl: "audio/tl.mp3"
  },
  bn: {
    id: "bn",
    name: "Brunei Darussalam",
    capital: "Bandar Seri Begawan",
    pop: "450,000",
    currency: "Brunei Dollar (BND)",
    animal: "White-bellied Sea Eagle",
    joined: "1984",
    fact: "Istana Nurul Iman in Brunei is the world's largest residential royal palace with 1,788 rooms!",
    anthem: "Adai-Adai",
    audioUrl: "audio/bn.mp3"
  },
  sg: {
    id: "sg",
    name: "Singapore",
    capital: "Singapore (City-state)",
    pop: "5.9 Million",
    currency: "Singapore Dollar (SGD)",
    animal: "Merlion (Lion)",
    joined: "1967 (Founder)",
    fact: "A world-renowned garden city featuring massive indoor waterfalls and towering Supertrees!",
    anthem: "Chan Mali Chan",
    audioUrl: "audio/sg.mp3"
  },
  vn: {
    id: "vn",
    name: "Vietnam",
    capital: "Hanoi",
    pop: "98.8 Million",
    currency: "Dong (VND)",
    animal: "Water Buffalo",
    joined: "1995",
    fact: "Vietnam is home to Sơn Đoòng, the single largest known natural cave passage on planet Earth!",
    anthem: "Quan Họ Folk Singing",
    audioUrl: "audio/vn.mp3"
  },
  la: {
    id: "la",
    name: "Laos",
    capital: "Vientiane",
    pop: "7.5 Million",
    currency: "Lao Kip (LAK)",
    animal: "Asian Elephant",
    joined: "1997",
    fact: "Historically named Lan Xang, which translates directly to 'The Kingdom of a Million Elephants'!",
    anthem: "Lam Saravane",
    audioUrl: "audio/la.mp3"
  },
  mm: {
    id: "mm",
    name: "Myanmar",
    capital: "Naypyidaw",
    pop: "54 Million",
    currency: "Kyat (MMK)",
    animal: "Green Peafowl",
    joined: "1997",
    fact: "The ancient archaeological city of Bagan features over 2,000 historic brick Buddhist temples!",
    anthem: "Hsaing Waing Ensemble",
    audioUrl: "audio/mm.mp3"
  },
  kh: {
    id: "kh",
    name: "Cambodia",
    capital: "Phnom Penh",
    pop: "16.8 Million",
    currency: "Riel (KHR)",
    animal: "Kouprey (Wild Forest Ox)",
    joined: "1999",
    fact: "Angkor Wat, illustrated directly on Cambodia's flag, is the largest religious monument in the world!",
    anthem: "Romvong",
    audioUrl: "audio/kh.mp3"
  }
};

const COUNTRY_KEYS = Object.keys(ASEAN_11);