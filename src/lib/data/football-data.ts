export interface Player {
  name: string;
  position: string;
  rating: string;
}

export interface FootballData {
  id: string;
  name: string;
  logo: string;
  position: number;
  colors: { primary: string; secondary: string };
  revenue: { current: number; previousMonth: number; previousYear: number; };
  members: { current: number; previousMonth: number; previousYear: number; };
  attendance: { current: number; previousMonth: number; previousYear: number; };
  expenses: { current: number; previousMonth: number; previousYear: number; };
  historicalRevenue: { month: string; revenue: number; expenses: number }[];
  categories: { name: string; value: number }[];
  topPlayers: { name: string; pos: string; rating: string }[];
  stats: { subject: string; value: number }[];
}

export const footballTeams: FootballData[] = [
  {
    id: "flamengo",
    name: "Flamengo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png",
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1132, previousMonth: 1191, previousYear: 907 },
    members: { current: 108681, previousMonth: 109913, previousYear: 86883 },
    attendance: { current: 49224, previousMonth: 47508, previousYear: 39212 },
    expenses: { current: 771, previousMonth: 841, previousYear: 620 },
    historicalRevenue: [{"month":"Jan","revenue":103,"expenses":65},{"month":"Fev","revenue":107,"expenses":83},{"month":"Mar","revenue":113,"expenses":62},{"month":"Abr","revenue":92,"expenses":61},{"month":"Mai","revenue":120,"expenses":66},{"month":"Jun","revenue":86,"expenses":52},{"month":"Jul","revenue":90,"expenses":63},{"month":"Ago","revenue":76,"expenses":69},{"month":"Set","revenue":88,"expenses":62},{"month":"Out","revenue":117,"expenses":59},{"month":"Nov","revenue":110,"expenses":83},{"month":"Dez","revenue":105,"expenses":73}],
    topPlayers: [{"name":"G. Arrascaeta","pos":"Meio-Campo","rating":"9.2"},{"name":"P. Henrique","pos":"Atacante","rating":"7.9"},{"name":"N. De La Cruz","pos":"Meio-Campo","rating":"7.0"}],
    categories: [
      { name: "Direitos de TV", value: 453 },
      { name: "Patrocínios", value: 340 },
      { name: "Bilheteria", value: 170 },
      { name: "Sócio Torcedor", value: 113 },
      { name: "Transferências", value: 56 }
    ]
  },
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 1128, previousMonth: 1194, previousYear: 1019 },
    members: { current: 96011, previousMonth: 102149, previousYear: 77640 },
    attendance: { current: 47766, previousMonth: 47333, previousYear: 37660 },
    expenses: { current: 788, previousMonth: 758, previousYear: 641 },
    historicalRevenue: [{"month":"Jan","revenue":98,"expenses":66},{"month":"Fev","revenue":84,"expenses":82},{"month":"Mar","revenue":87,"expenses":74},{"month":"Abr","revenue":102,"expenses":57},{"month":"Mai","revenue":85,"expenses":51},{"month":"Jun","revenue":117,"expenses":79},{"month":"Jul","revenue":103,"expenses":68},{"month":"Ago","revenue":92,"expenses":80},{"month":"Set","revenue":81,"expenses":51},{"month":"Out","revenue":116,"expenses":56},{"month":"Nov","revenue":97,"expenses":80},{"month":"Dez","revenue":113,"expenses":62}],
    topPlayers: [{"name":"R. Veiga","pos":"Meio-Campo","rating":"8.3"},{"name":"Dudu","pos":"Atacante","rating":"7.8"},{"name":"E. Endrick","pos":"Atacante","rating":"7.9"}],
    categories: [
      { name: "Direitos de TV", value: 451 },
      { name: "Patrocínios", value: 338 },
      { name: "Bilheteria", value: 169 },
      { name: "Sócio Torcedor", value: 113 },
      { name: "Transferências", value: 57 }
    ]
  },
  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/S%C3%A3o_Paulo_Futebol_Clube.svg/1200px-S%C3%A3o_Paulo_Futebol_Clube.svg.png",
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 1089, previousMonth: 1023, previousYear: 876 },
    members: { current: 99317, previousMonth: 94659, previousYear: 76529 },
    attendance: { current: 43180, previousMonth: 45404, previousYear: 36375 },
    expenses: { current: 778, previousMonth: 721, previousYear: 587 },
    historicalRevenue: [{"month":"Jan","revenue":113,"expenses":51},{"month":"Fev","revenue":81,"expenses":80},{"month":"Mar","revenue":110,"expenses":59},{"month":"Abr","revenue":89,"expenses":61},{"month":"Mai","revenue":68,"expenses":71},{"month":"Jun","revenue":105,"expenses":77},{"month":"Jul","revenue":87,"expenses":73},{"month":"Ago","revenue":118,"expenses":55},{"month":"Set","revenue":88,"expenses":73},{"month":"Out","revenue":115,"expenses":52},{"month":"Nov","revenue":80,"expenses":76},{"month":"Dez","revenue":89,"expenses":54}],
    topPlayers: [{"name":"J. Calleri","pos":"Atacante","rating":"8.2"},{"name":"L. Moura","pos":"Meio-Campo","rating":"8.9"},{"name":"W. Rato","pos":"Atacante","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 436 },
      { name: "Patrocínios", value: 327 },
      { name: "Bilheteria", value: 163 },
      { name: "Sócio Torcedor", value: 109 },
      { name: "Transferências", value: 54 }
    ]
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/1200px-Corinthians_simbolo.png",
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 1091, previousMonth: 999, previousYear: 941 },
    members: { current: 92040, previousMonth: 92618, previousYear: 78958 },
    attendance: { current: 40650, previousMonth: 41571, previousYear: 34879 },
    expenses: { current: 745, previousMonth: 741, previousYear: 595 },
    historicalRevenue: [{"month":"Jan","revenue":89,"expenses":76},{"month":"Fev","revenue":80,"expenses":67},{"month":"Mar","revenue":111,"expenses":56},{"month":"Abr","revenue":85,"expenses":72},{"month":"Mai","revenue":87,"expenses":50},{"month":"Jun","revenue":101,"expenses":63},{"month":"Jul","revenue":66,"expenses":70},{"month":"Ago","revenue":93,"expenses":74},{"month":"Set","revenue":79,"expenses":78},{"month":"Out","revenue":86,"expenses":48},{"month":"Nov","revenue":99,"expenses":71},{"month":"Dez","revenue":103,"expenses":67}],
    topPlayers: [{"name":"Yuri A.","pos":"Atacante","rating":"8.1"},{"name":"R. Garro","pos":"Meio-Campo","rating":"8.5"},{"name":"C. Miguel","pos":"Goleiro","rating":"7.1"}],
    categories: [
      { name: "Direitos de TV", value: 436 },
      { name: "Patrocínios", value: 327 },
      { name: "Bilheteria", value: 164 },
      { name: "Sócio Torcedor", value: 109 },
      { name: "Transferências", value: 55 }
    ]
  },
  {
    id: "fluminense",
    name: "Fluminense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fluminense_FC_escudo.png/800px-Fluminense_FC_escudo.png",
    colors: { primary: "#9f022f", secondary: "#006747" },
    revenue: { current: 1104, previousMonth: 1023, previousYear: 939 },
    members: { current: 87587, previousMonth: 88140, previousYear: 72962 },
    attendance: { current: 39887, previousMonth: 41806, previousYear: 33001 },
    expenses: { current: 661, previousMonth: 705, previousYear: 533 },
    historicalRevenue: [{"month":"Jan","revenue":65,"expenses":75},{"month":"Fev","revenue":82,"expenses":74},{"month":"Mar","revenue":76,"expenses":46},{"month":"Abr","revenue":95,"expenses":52},{"month":"Mai","revenue":108,"expenses":57},{"month":"Jun","revenue":80,"expenses":71},{"month":"Jul","revenue":109,"expenses":49},{"month":"Ago","revenue":63,"expenses":50},{"month":"Set","revenue":76,"expenses":75},{"month":"Out","revenue":77,"expenses":66},{"month":"Nov","revenue":70,"expenses":56},{"month":"Dez","revenue":79,"expenses":66}],
    topPlayers: [{"name":"G. Cano","pos":"Atacante","rating":"8.2"},{"name":"J. Arias","pos":"Meio-Campo","rating":"8.3"},{"name":"Marcelo","pos":"Defensor","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 442 },
      { name: "Patrocínios", value: 331 },
      { name: "Bilheteria", value: 166 },
      { name: "Sócio Torcedor", value: 110 },
      { name: "Transferências", value: 55 }
    ]
  },
  {
    id: "botafogo",
    name: "Botafogo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 1072, previousMonth: 974, previousYear: 892 },
    members: { current: 81705, previousMonth: 85760, previousYear: 66883 },
    attendance: { current: 39238, previousMonth: 41037, previousYear: 30598 },
    expenses: { current: 646, previousMonth: 644, previousYear: 504 },
    historicalRevenue: [{"month":"Jan","revenue":66,"expenses":66},{"month":"Fev","revenue":82,"expenses":58},{"month":"Mar","revenue":65,"expenses":67},{"month":"Abr","revenue":80,"expenses":73},{"month":"Mai","revenue":74,"expenses":66},{"month":"Jun","revenue":64,"expenses":51},{"month":"Jul","revenue":86,"expenses":45},{"month":"Ago","revenue":87,"expenses":54},{"month":"Set","revenue":62,"expenses":43},{"month":"Out","revenue":71,"expenses":54},{"month":"Nov","revenue":72,"expenses":58},{"month":"Dez","revenue":74,"expenses":71}],
    topPlayers: [{"name":"T. Soares","pos":"Atacante","rating":"8.1"},{"name":"J. Savarino","pos":"Atacante","rating":"7.7"},{"name":"Lucas P.","pos":"Goleiro","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 429 },
      { name: "Patrocínios", value: 322 },
      { name: "Bilheteria", value: 161 },
      { name: "Sócio Torcedor", value: 107 },
      { name: "Transferências", value: 53 }
    ]
  },
  {
    id: "vasco",
    name: "Vasco da Gama",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/1200px-CRVascodaGama.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 885, previousMonth: 881, previousYear: 820 },
    members: { current: 79341, previousMonth: 79971, previousYear: 61662 },
    attendance: { current: 37923, previousMonth: 37765, previousYear: 30807 },
    expenses: { current: 631, previousMonth: 646, previousYear: 505 },
    historicalRevenue: [{"month":"Jan","revenue":88,"expenses":54},{"month":"Fev","revenue":68,"expenses":67},{"month":"Mar","revenue":75,"expenses":70},{"month":"Abr","revenue":96,"expenses":61},{"month":"Mai","revenue":58,"expenses":57},{"month":"Jun","revenue":75,"expenses":47},{"month":"Jul","revenue":84,"expenses":55},{"month":"Ago","revenue":85,"expenses":61},{"month":"Set","revenue":74,"expenses":52},{"month":"Out","revenue":94,"expenses":52},{"month":"Nov","revenue":75,"expenses":62},{"month":"Dez","revenue":63,"expenses":63}],
    topPlayers: [{"name":"P. Vegetti","pos":"Atacante","rating":"8.1"},{"name":"D. Payet","pos":"Meio-Campo","rating":"7.8"},{"name":"L. Jardim","pos":"Goleiro","rating":"7.6"}],
    categories: [
      { name: "Direitos de TV", value: 354 },
      { name: "Patrocínios", value: 266 },
      { name: "Bilheteria", value: 133 },
      { name: "Sócio Torcedor", value: 89 },
      { name: "Transferências", value: 43 }
    ]
  },
  {
    id: "gremio",
    name: "Grêmio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gremio_logo.svg/1200px-Gremio_logo.svg.png",
    colors: { primary: "#0d80bf", secondary: "#000000" },
    revenue: { current: 890, previousMonth: 955, previousYear: 748 },
    members: { current: 74805, previousMonth: 78587, previousYear: 62214 },
    attendance: { current: 34764, previousMonth: 36535, previousYear: 30182 },
    expenses: { current: 613, previousMonth: 614, previousYear: 499 },
    historicalRevenue: [{"month":"Jan","revenue":68,"expenses":43},{"month":"Fev","revenue":91,"expenses":45},{"month":"Mar","revenue":81,"expenses":65},{"month":"Abr","revenue":66,"expenses":64},{"month":"Mai","revenue":79,"expenses":54},{"month":"Jun","revenue":88,"expenses":41},{"month":"Jul","revenue":75,"expenses":55},{"month":"Ago","revenue":59,"expenses":49},{"month":"Set","revenue":91,"expenses":48},{"month":"Out","revenue":63,"expenses":44},{"month":"Nov","revenue":86,"expenses":56},{"month":"Dez","revenue":62,"expenses":59}],
    topPlayers: [{"name":"L. Suárez","pos":"Atacante","rating":"8.4"},{"name":"M. Villasanti","pos":"Meio-Campo","rating":"8.3"},{"name":"W. Kannemann","pos":"Defensor","rating":"8.1"}],
    categories: [
      { name: "Direitos de TV", value: 356 },
      { name: "Patrocínios", value: 267 },
      { name: "Bilheteria", value: 134 },
      { name: "Sócio Torcedor", value: 89 },
      { name: "Transferências", value: 44 }
    ]
  },
  {
    id: "internacional",
    name: "Internacional",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png",
    colors: { primary: "#e5053a", secondary: "#ffffff" },
    revenue: { current: 863, previousMonth: 855, previousYear: 766 },
    members: { current: 68701, previousMonth: 72653, previousYear: 59710 },
    attendance: { current: 35554, previousMonth: 35968, previousYear: 29049 },
    expenses: { current: 579, previousMonth: 553, previousYear: 474 },
    historicalRevenue: [{"month":"Jan","revenue":70,"expenses":62},{"month":"Fev","revenue":83,"expenses":44},{"month":"Mar","revenue":53,"expenses":39},{"month":"Abr","revenue":81,"expenses":46},{"month":"Mai","revenue":53,"expenses":64},{"month":"Jun","revenue":79,"expenses":39},{"month":"Jul","revenue":76,"expenses":62},{"month":"Ago","revenue":78,"expenses":40},{"month":"Set","revenue":82,"expenses":44},{"month":"Out","revenue":68,"expenses":60},{"month":"Nov","revenue":60,"expenses":37},{"month":"Dez","revenue":67,"expenses":55}],
    topPlayers: [{"name":"A. Patrick","pos":"Meio-Campo","rating":"8.6"},{"name":"E. Valencia","pos":"Atacante","rating":"8.2"},{"name":"Wanderson","pos":"Atacante","rating":"7.5"}],
    categories: [
      { name: "Direitos de TV", value: 345 },
      { name: "Patrocínios", value: 259 },
      { name: "Bilheteria", value: 129 },
      { name: "Sócio Torcedor", value: 86 },
      { name: "Transferências", value: 44 }
    ]
  },
  {
    id: "atletico-mg",
    name: "Atlético Mineiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/1200px-Atletico_mineiro_galo.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 873, previousMonth: 819, previousYear: 650 },
    members: { current: 64185, previousMonth: 70366, previousYear: 53415 },
    attendance: { current: 33002, previousMonth: 31610, previousYear: 27345 },
    expenses: { current: 521, previousMonth: 522, previousYear: 430 },
    historicalRevenue: [{"month":"Jan","revenue":50,"expenses":51},{"month":"Fev","revenue":73,"expenses":37},{"month":"Mar","revenue":54,"expenses":52},{"month":"Abr","revenue":67,"expenses":56},{"month":"Mai","revenue":77,"expenses":45},{"month":"Jun","revenue":76,"expenses":38},{"month":"Jul","revenue":62,"expenses":53},{"month":"Ago","revenue":81,"expenses":60},{"month":"Set","revenue":52,"expenses":60},{"month":"Out","revenue":84,"expenses":39},{"month":"Nov","revenue":60,"expenses":53},{"month":"Dez","revenue":81,"expenses":51}],
    topPlayers: [{"name":"Hulk","pos":"Atacante","rating":"8.2"},{"name":"Paulinho","pos":"Atacante","rating":"8.7"},{"name":"G. Arana","pos":"Defensor","rating":"7.7"}],
    categories: [
      { name: "Direitos de TV", value: 349 },
      { name: "Patrocínios", value: 262 },
      { name: "Bilheteria", value: 131 },
      { name: "Sócio Torcedor", value: 87 },
      { name: "Transferências", value: 44 }
    ]
  },
  {
    id: "cruzeiro",
    name: "Cruzeiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/1200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
    colors: { primary: "#003a94", secondary: "#ffffff" },
    revenue: { current: 769, previousMonth: 794, previousYear: 607 },
    members: { current: 61420, previousMonth: 63411, previousYear: 52674 },
    attendance: { current: 30526, previousMonth: 30543, previousYear: 26251 },
    expenses: { current: 533, previousMonth: 499, previousYear: 440 },
    historicalRevenue: [{"month":"Jan","revenue":57,"expenses":53},{"month":"Fev","revenue":47,"expenses":48},{"month":"Mar","revenue":69,"expenses":55},{"month":"Abr","revenue":80,"expenses":51},{"month":"Mai","revenue":73,"expenses":51},{"month":"Jun","revenue":65,"expenses":54},{"month":"Jul","revenue":48,"expenses":44},{"month":"Ago","revenue":71,"expenses":42},{"month":"Set","revenue":61,"expenses":42},{"month":"Out","revenue":65,"expenses":33},{"month":"Nov","revenue":68,"expenses":42},{"month":"Dez","revenue":53,"expenses":54}],
    topPlayers: [{"name":"Matheus P.","pos":"Meio-Campo","rating":"8.3"},{"name":"A. Silva","pos":"Atacante","rating":"8.8"},{"name":"Wiliam","pos":"Atacante","rating":"7.7"}],
    categories: [
      { name: "Direitos de TV", value: 308 },
      { name: "Patrocínios", value: 231 },
      { name: "Bilheteria", value: 115 },
      { name: "Sócio Torcedor", value: 77 },
      { name: "Transferências", value: 38 }
    ]
  },
  {
    id: "athletico-pr",
    name: "Athletico-PR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Athletico_Paranaense.svg/1200px-CA_Athletico_Paranaense.svg.png",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 767, previousMonth: 775, previousYear: 583 },
    members: { current: 56108, previousMonth: 59312, previousYear: 45638 },
    attendance: { current: 28788, previousMonth: 30174, previousYear: 24646 },
    expenses: { current: 498, previousMonth: 482, previousYear: 387 },
    historicalRevenue: [{"month":"Jan","revenue":63,"expenses":37},{"month":"Fev","revenue":64,"expenses":38},{"month":"Mar","revenue":76,"expenses":53},{"month":"Abr","revenue":77,"expenses":46},{"month":"Mai","revenue":55,"expenses":37},{"month":"Jun","revenue":73,"expenses":37},{"month":"Jul","revenue":55,"expenses":41},{"month":"Ago","revenue":75,"expenses":53},{"month":"Set","revenue":54,"expenses":32},{"month":"Out","revenue":76,"expenses":32},{"month":"Nov","revenue":63,"expenses":37},{"month":"Dez","revenue":54,"expenses":40}],
    topPlayers: [{"name":"Fernandinho","pos":"Meio-Campo","rating":"9.3"},{"name":"Pablo","pos":"Atacante","rating":"8.6"},{"name":"Bento","pos":"Goleiro","rating":"7.2"}],
    categories: [
      { name: "Direitos de TV", value: 307 },
      { name: "Patrocínios", value: 230 },
      { name: "Bilheteria", value: 115 },
      { name: "Sócio Torcedor", value: 77 },
      { name: "Transferências", value: 38 }
    ]
  },
  {
    id: "bahia",
    name: "Bahia",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Esporte_Clube_Bahia_logo.svg/1200px-Esporte_Clube_Bahia_logo.svg.png",
    colors: { primary: "#003b7b", secondary: "#e50024" },
    revenue: { current: 645, previousMonth: 728, previousYear: 571 },
    members: { current: 54968, previousMonth: 53063, previousYear: 42868 },
    attendance: { current: 28446, previousMonth: 27323, previousYear: 22449 },
    expenses: { current: 472, previousMonth: 446, previousYear: 350 },
    historicalRevenue: [{"month":"Jan","revenue":61,"expenses":46},{"month":"Fev","revenue":65,"expenses":31},{"month":"Mar","revenue":56,"expenses":40},{"month":"Abr","revenue":70,"expenses":40},{"month":"Mai","revenue":52,"expenses":34},{"month":"Jun","revenue":53,"expenses":47},{"month":"Jul","revenue":62,"expenses":42},{"month":"Ago","revenue":50,"expenses":43},{"month":"Set","revenue":57,"expenses":39},{"month":"Out","revenue":70,"expenses":37},{"month":"Nov","revenue":49,"expenses":49},{"month":"Dez","revenue":65,"expenses":39}],
    topPlayers: [{"name":"E. Ribeiro","pos":"Meio-Campo","rating":"8.4"},{"name":"Cauly","pos":"Meio-Campo","rating":"8.5"},{"name":"Thaciano","pos":"Atacante","rating":"8.4"}],
    categories: [
      { name: "Direitos de TV", value: 258 },
      { name: "Patrocínios", value: 194 },
      { name: "Bilheteria", value: 97 },
      { name: "Sócio Torcedor", value: 65 },
      { name: "Transferências", value: 31 }
    ]
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fortaleza_Esporte_Clube_logo.svg/1200px-Fortaleza_Esporte_Clube_logo.svg.png",
    colors: { primary: "#122a6e", secondary: "#c10018" },
    revenue: { current: 609, previousMonth: 600, previousYear: 495 },
    members: { current: 48709, previousMonth: 51618, previousYear: 40121 },
    attendance: { current: 27727, previousMonth: 28011, previousYear: 21978 },
    expenses: { current: 417, previousMonth: 409, previousYear: 363 },
    historicalRevenue: [{"month":"Jan","revenue":58,"expenses":38},{"month":"Fev","revenue":68,"expenses":30},{"month":"Mar","revenue":42,"expenses":45},{"month":"Abr","revenue":57,"expenses":47},{"month":"Mai","revenue":62,"expenses":34},{"month":"Jun","revenue":49,"expenses":37},{"month":"Jul","revenue":64,"expenses":28},{"month":"Ago","revenue":56,"expenses":36},{"month":"Set","revenue":46,"expenses":27},{"month":"Out","revenue":52,"expenses":38},{"month":"Nov","revenue":41,"expenses":40},{"month":"Dez","revenue":66,"expenses":29}],
    topPlayers: [{"name":"J. Lucero","pos":"Atacante","rating":"9.3"},{"name":"Y. Pikachu","pos":"Meio-Campo","rating":"8.8"},{"name":"Tinga","pos":"Defensor","rating":"7.8"}],
    categories: [
      { name: "Direitos de TV", value: 244 },
      { name: "Patrocínios", value: 183 },
      { name: "Bilheteria", value: 91 },
      { name: "Sócio Torcedor", value: 61 },
      { name: "Transferências", value: 30 }
    ]
  },
  {
    id: "vitoria",
    name: "Vitória",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Esporte_Clube_Vit%C3%B3ria_logo.svg/1200px-Esporte_Clube_Vit%C3%B3ria_logo.svg.png",
    colors: { primary: "#c10018", secondary: "#000000" },
    revenue: { current: 550, previousMonth: 607, previousYear: 490 },
    members: { current: 44022, previousMonth: 47440, previousYear: 38280 },
    attendance: { current: 26362, previousMonth: 26149, previousYear: 20406 },
    expenses: { current: 400, previousMonth: 383, previousYear: 331 },
    historicalRevenue: [{"month":"Jan","revenue":38,"expenses":38},{"month":"Fev","revenue":60,"expenses":34},{"month":"Mar","revenue":41,"expenses":39},{"month":"Abr","revenue":50,"expenses":32},{"month":"Mai","revenue":53,"expenses":37},{"month":"Jun","revenue":55,"expenses":28},{"month":"Jul","revenue":38,"expenses":41},{"month":"Ago","revenue":38,"expenses":34},{"month":"Set","revenue":38,"expenses":40},{"month":"Out","revenue":59,"expenses":29},{"month":"Nov","revenue":55,"expenses":28},{"month":"Dez","revenue":48,"expenses":28}],
    topPlayers: [{"name":"Osvaldo","pos":"Atacante","rating":"9.1"},{"name":"Z. Hugo","pos":"Defensor","rating":"8.7"},{"name":"W. Oliveira","pos":"Meio-Campo","rating":"7.6"}],
    categories: [
      { name: "Direitos de TV", value: 220 },
      { name: "Patrocínios", value: 165 },
      { name: "Bilheteria", value: 83 },
      { name: "Sócio Torcedor", value: 55 },
      { name: "Transferências", value: 27 }
    ]
  },
  {
    id: "juventude",
    name: "Juventude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Esporte_Clube_Juventude_logo.svg/1200px-Esporte_Clube_Juventude_logo.svg.png",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 595, previousMonth: 577, previousYear: 484 },
    members: { current: 41047, previousMonth: 40299, previousYear: 35271 },
    attendance: { current: 22986, previousMonth: 23831, previousYear: 19286 },
    expenses: { current: 377, previousMonth: 358, previousYear: 299 },
    historicalRevenue: [{"month":"Jan","revenue":48,"expenses":34},{"month":"Fev","revenue":40,"expenses":31},{"month":"Mar","revenue":57,"expenses":29},{"month":"Abr","revenue":55,"expenses":31},{"month":"Mai","revenue":46,"expenses":32},{"month":"Jun","revenue":49,"expenses":30},{"month":"Jul","revenue":45,"expenses":30},{"month":"Ago","revenue":34,"expenses":38},{"month":"Set","revenue":48,"expenses":36},{"month":"Out","revenue":46,"expenses":35},{"month":"Nov","revenue":47,"expenses":25},{"month":"Dez","revenue":43,"expenses":28}],
    topPlayers: [{"name":"Nenê","pos":"Meio-Campo","rating":"8.3"},{"name":"G. Barbosa","pos":"Atacante","rating":"7.6"},{"name":"Jadson","pos":"Meio-Campo","rating":"8.4"}],
    categories: [
      { name: "Direitos de TV", value: 238 },
      { name: "Patrocínios", value: 179 },
      { name: "Bilheteria", value: 89 },
      { name: "Sócio Torcedor", value: 60 },
      { name: "Transferências", value: 29 }
    ]
  },
  {
    id: "atletico-go",
    name: "Atlético-GO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Atl%C3%A9tico_Goianiense.svg/1200px-Atl%C3%A9tico_Goianiense.svg.png",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 509, previousMonth: 484, previousYear: 430 },
    members: { current: 39388, previousMonth: 37211, previousYear: 31170 },
    attendance: { current: 22477, previousMonth: 22405, previousYear: 17892 },
    expenses: { current: 350, previousMonth: 351, previousYear: 274 },
    historicalRevenue: [{"month":"Jan","revenue":33,"expenses":37},{"month":"Fev","revenue":36,"expenses":32},{"month":"Mar","revenue":37,"expenses":23},{"month":"Abr","revenue":50,"expenses":28},{"month":"Mai","revenue":33,"expenses":33},{"month":"Jun","revenue":37,"expenses":22},{"month":"Jul","revenue":53,"expenses":37},{"month":"Ago","revenue":40,"expenses":37},{"month":"Set","revenue":48,"expenses":23},{"month":"Out","revenue":47,"expenses":35},{"month":"Nov","revenue":32,"expenses":37},{"month":"Dez","revenue":35,"expenses":30}],
    topPlayers: [{"name":"L. Fernando","pos":"Atacante","rating":"8.1"},{"name":"S. Romero","pos":"Atacante","rating":"7.7"},{"name":"A. Cruz","pos":"Defensor","rating":"8.2"}],
    categories: [
      { name: "Direitos de TV", value: 204 },
      { name: "Patrocínios", value: 153 },
      { name: "Bilheteria", value: 76 },
      { name: "Sócio Torcedor", value: 51 },
      { name: "Transferências", value: 25 }
    ]
  },
  {
    id: "criciuma",
    name: "Criciúma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Criciuma_Esporte_Clube.svg/1200px-Criciuma_Esporte_Clube.svg.png",
    colors: { primary: "#fcd116", secondary: "#000000" },
    revenue: { current: 475, previousMonth: 479, previousYear: 413 },
    members: { current: 33337, previousMonth: 32228, previousYear: 27046 },
    attendance: { current: 20195, previousMonth: 21325, previousYear: 17432 },
    expenses: { current: 314, previousMonth: 308, previousYear: 245 },
    historicalRevenue: [{"month":"Jan","revenue":44,"expenses":31},{"month":"Fev","revenue":48,"expenses":27},{"month":"Mar","revenue":36,"expenses":29},{"month":"Abr","revenue":32,"expenses":28},{"month":"Mai","revenue":40,"expenses":25},{"month":"Jun","revenue":43,"expenses":28},{"month":"Jul","revenue":46,"expenses":24},{"month":"Ago","revenue":44,"expenses":27},{"month":"Set","revenue":39,"expenses":28},{"month":"Out","revenue":30,"expenses":28},{"month":"Nov","revenue":42,"expenses":31},{"month":"Dez","revenue":34,"expenses":29}],
    topPlayers: [{"name":"Eder","pos":"Atacante","rating":"9.5"},{"name":"M. Hermes","pos":"Defensor","rating":"9.0"},{"name":"Y. Bolasie","pos":"Atacante","rating":"7.2"}],
    categories: [
      { name: "Direitos de TV", value: 190 },
      { name: "Patrocínios", value: 143 },
      { name: "Bilheteria", value: 71 },
      { name: "Sócio Torcedor", value: 48 },
      { name: "Transferências", value: 23 }
    ]
  },
  {
    id: "cuiaba",
    name: "Cuiabá",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Cuiab%C3%A1_Esporte_Clube.svg/1200px-Cuiab%C3%A1_Esporte_Clube.svg.png",
    colors: { primary: "#006437", secondary: "#ffd700" },
    revenue: { current: 393, previousMonth: 402, previousYear: 345 },
    members: { current: 29149, previousMonth: 30730, previousYear: 22487 },
    attendance: { current: 19750, previousMonth: 18800, previousYear: 15080 },
    expenses: { current: 283, previousMonth: 268, previousYear: 236 },
    historicalRevenue: [{"month":"Jan","revenue":43,"expenses":24},{"month":"Fev","revenue":34,"expenses":25},{"month":"Mar","revenue":36,"expenses":27},{"month":"Abr","revenue":42,"expenses":25},{"month":"Mai","revenue":40,"expenses":27},{"month":"Jun","revenue":38,"expenses":24},{"month":"Jul","revenue":44,"expenses":26},{"month":"Ago","revenue":34,"expenses":26},{"month":"Set","revenue":37,"expenses":23},{"month":"Out","revenue":44,"expenses":28},{"month":"Nov","revenue":40,"expenses":29},{"month":"Dez","revenue":26,"expenses":21}],
    topPlayers: [{"name":"Deyverson","pos":"Atacante","rating":"8.2"},{"name":"F. Marques","pos":"Meio-Campo","rating":"7.6"},{"name":"Walter","pos":"Goleiro","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 157 },
      { name: "Patrocínios", value: 118 },
      { name: "Bilheteria", value: 59 },
      { name: "Sócio Torcedor", value: 39 },
      { name: "Transferências", value: 20 }
    ]
  },
  {
    id: "bragantino",
    name: "Red Bull Bragantino",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Escudo_do_Red_Bull_Bragantino.png/1200px-Escudo_do_Red_Bull_Bragantino.png",
    colors: { primary: "#d80027", secondary: "#ffffff" },
    revenue: { current: 362, previousMonth: 368, previousYear: 292 },
    members: { current: 25982, previousMonth: 25245, previousYear: 19526 },
    attendance: { current: 18048, previousMonth: 17130, previousYear: 13499 },
    expenses: { current: 239, previousMonth: 243, previousYear: 205 },
    historicalRevenue: [{"month":"Jan","revenue":38,"expenses":18},{"month":"Fev","revenue":39,"expenses":24},{"month":"Mar","revenue":37,"expenses":21},{"month":"Abr","revenue":36,"expenses":26},{"month":"Mai","revenue":27,"expenses":19},{"month":"Jun","revenue":36,"expenses":28},{"month":"Jul","revenue":30,"expenses":19},{"month":"Ago","revenue":31,"expenses":23},{"month":"Set","revenue":29,"expenses":21},{"month":"Out","revenue":29,"expenses":25},{"month":"Nov","revenue":26,"expenses":17},{"month":"Dez","revenue":23,"expenses":24}],
    topPlayers: [{"name":"E. Sasha","pos":"Atacante","rating":"9.2"},{"name":"L. Cândido","pos":"Defensor","rating":"8.9"},{"name":"Cleiton","pos":"Goleiro","rating":"7.1"}],
    categories: [
      { name: "Direitos de TV", value: 145 },
      { name: "Patrocínios", value: 109 },
      { name: "Bilheteria", value: 54 },
      { name: "Sócio Torcedor", value: 36 },
      { name: "Transferências", value: 18 }
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
