export interface Player {
  name: string;
  position: string;
  rating: string;
}

export interface FootballData {
  id: string;
  name: string;
  logo: string;
  colors: { primary: string; secondary: string };
  revenue: { current: number; previousMonth: number; previousYear: number; };
  members: { current: number; previousMonth: number; previousYear: number; };
  attendance: { current: number; previousMonth: number; previousYear: number; };
  expenses: { current: number; previousMonth: number; previousYear: number; };
  historicalRevenue: { month: string; revenue: number; expenses: number }[];
  categories: { name: string; value: number }[];
  topPlayers: { name: string; pos: string; rating: string }[];
}

export const footballTeams: FootballData[] = [
  {
    id: "flamengo",
    name: "Flamengo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1300, previousMonth: 1102, previousYear: 1022 },
    members: { current: 105913, previousMonth: 103843, previousYear: 84533 },
    attendance: { current: 45595, previousMonth: 45873, previousYear: 37864 },
    expenses: { current: 846, previousMonth: 834, previousYear: 642 },
    historicalRevenue: [{"month":"Jan","revenue":114,"expenses":55},{"month":"Fev","revenue":104,"expenses":56},{"month":"Mar","revenue":87,"expenses":80},{"month":"Abr","revenue":78,"expenses":58},{"month":"Mai","revenue":78,"expenses":79},{"month":"Jun","revenue":106,"expenses":53},{"month":"Jul","revenue":99,"expenses":76},{"month":"Ago","revenue":86,"expenses":82},{"month":"Set","revenue":106,"expenses":83},{"month":"Out","revenue":82,"expenses":56},{"month":"Nov","revenue":97,"expenses":54},{"month":"Dez","revenue":99,"expenses":60}],
    topPlayers: [{"name":"G. Arrascaeta","pos":"Meio-Campo","rating":"8.6"},{"name":"P. Henrique","pos":"Atacante","rating":"8.1"},{"name":"N. De La Cruz","pos":"Meio-Campo","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 520 },
      { name: "Patrocínios", value: 390 },
      { name: "Bilheteria", value: 195 },
      { name: "Sócio Torcedor", value: 130 },
      { name: "Transferências", value: 65 }
    ]
  },
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 1068, previousMonth: 1270, previousYear: 894 },
    members: { current: 100331, previousMonth: 99845, previousYear: 85773 },
    attendance: { current: 44805, previousMonth: 44043, previousYear: 37166 },
    expenses: { current: 786, previousMonth: 799, previousYear: 650 },
    historicalRevenue: [{"month":"Jan","revenue":78,"expenses":60},{"month":"Fev","revenue":88,"expenses":72},{"month":"Mar","revenue":82,"expenses":55},{"month":"Abr","revenue":81,"expenses":73},{"month":"Mai","revenue":121,"expenses":51},{"month":"Jun","revenue":74,"expenses":70},{"month":"Jul","revenue":91,"expenses":77},{"month":"Ago","revenue":86,"expenses":76},{"month":"Set","revenue":90,"expenses":85},{"month":"Out","revenue":116,"expenses":73},{"month":"Nov","revenue":82,"expenses":57},{"month":"Dez","revenue":84,"expenses":80}],
    topPlayers: [{"name":"R. Veiga","pos":"Meio-Campo","rating":"9.1"},{"name":"Dudu","pos":"Atacante","rating":"8.3"},{"name":"E. Endrick","pos":"Atacante","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 427 },
      { name: "Patrocínios", value: 320 },
      { name: "Bilheteria", value: 160 },
      { name: "Sócio Torcedor", value: 107 },
      { name: "Transferências", value: 54 }
    ]
  },
  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/S%C3%A3o_Paulo_Futebol_Clube.svg",
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 1111, previousMonth: 1219, previousYear: 978 },
    members: { current: 97623, previousMonth: 92076, previousYear: 81719 },
    attendance: { current: 42885, previousMonth: 43324, previousYear: 36524 },
    expenses: { current: 719, previousMonth: 757, previousYear: 604 },
    historicalRevenue: [{"month":"Jan","revenue":101,"expenses":52},{"month":"Fev","revenue":79,"expenses":55},{"month":"Mar","revenue":71,"expenses":61},{"month":"Abr","revenue":70,"expenses":77},{"month":"Mai","revenue":99,"expenses":83},{"month":"Jun","revenue":69,"expenses":67},{"month":"Jul","revenue":97,"expenses":74},{"month":"Ago","revenue":81,"expenses":56},{"month":"Set","revenue":102,"expenses":67},{"month":"Out","revenue":97,"expenses":58},{"month":"Nov","revenue":79,"expenses":76},{"month":"Dez","revenue":81,"expenses":61}],
    topPlayers: [{"name":"J. Calleri","pos":"Atacante","rating":"9.3"},{"name":"L. Moura","pos":"Meio-Campo","rating":"8.6"},{"name":"W. Rato","pos":"Atacante","rating":"8.3"}],
    categories: [
      { name: "Direitos de TV", value: 444 },
      { name: "Patrocínios", value: 333 },
      { name: "Bilheteria", value: 167 },
      { name: "Sócio Torcedor", value: 111 },
      { name: "Transferências", value: 56 }
    ]
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png",
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 1170, previousMonth: 1140, previousYear: 879 },
    members: { current: 94959, previousMonth: 95553, previousYear: 71343 },
    attendance: { current: 42533, previousMonth: 44047, previousYear: 34599 },
    expenses: { current: 700, previousMonth: 715, previousYear: 583 },
    historicalRevenue: [{"month":"Jan","revenue":78,"expenses":50},{"month":"Fev","revenue":81,"expenses":71},{"month":"Mar","revenue":88,"expenses":62},{"month":"Abr","revenue":103,"expenses":70},{"month":"Mai","revenue":104,"expenses":48},{"month":"Jun","revenue":103,"expenses":77},{"month":"Jul","revenue":76,"expenses":75},{"month":"Ago","revenue":83,"expenses":57},{"month":"Set","revenue":87,"expenses":74},{"month":"Out","revenue":80,"expenses":63},{"month":"Nov","revenue":87,"expenses":48},{"month":"Dez","revenue":75,"expenses":68}],
    topPlayers: [{"name":"Yuri A.","pos":"Atacante","rating":"8.6"},{"name":"R. Garro","pos":"Meio-Campo","rating":"8.2"},{"name":"C. Miguel","pos":"Goleiro","rating":"7.3"}],
    categories: [
      { name: "Direitos de TV", value: 468 },
      { name: "Patrocínios", value: 351 },
      { name: "Bilheteria", value: 176 },
      { name: "Sócio Torcedor", value: 117 },
      { name: "Transferências", value: 58 }
    ]
  },
  {
    id: "fluminense",
    name: "Fluminense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Fluminense_FC_escudo.png",
    colors: { primary: "#9f022f", secondary: "#006747" },
    revenue: { current: 1126, previousMonth: 1069, previousYear: 778 },
    members: { current: 85068, previousMonth: 91516, previousYear: 74502 },
    attendance: { current: 40628, previousMonth: 39809, previousYear: 32018 },
    expenses: { current: 710, previousMonth: 686, previousYear: 564 },
    historicalRevenue: [{"month":"Jan","revenue":99,"expenses":49},{"month":"Fev","revenue":83,"expenses":50},{"month":"Mar","revenue":76,"expenses":58},{"month":"Abr","revenue":73,"expenses":70},{"month":"Mai","revenue":87,"expenses":59},{"month":"Jun","revenue":88,"expenses":44},{"month":"Jul","revenue":104,"expenses":49},{"month":"Ago","revenue":87,"expenses":52},{"month":"Set","revenue":101,"expenses":68},{"month":"Out","revenue":105,"expenses":55},{"month":"Nov","revenue":95,"expenses":54},{"month":"Dez","revenue":106,"expenses":56}],
    topPlayers: [{"name":"G. Cano","pos":"Atacante","rating":"9.0"},{"name":"J. Arias","pos":"Meio-Campo","rating":"8.9"},{"name":"Marcelo","pos":"Defensor","rating":"7.2"}],
    categories: [
      { name: "Direitos de TV", value: 450 },
      { name: "Patrocínios", value: 338 },
      { name: "Bilheteria", value: 169 },
      { name: "Sócio Torcedor", value: 113 },
      { name: "Transferências", value: 56 }
    ]
  },
  {
    id: "botafogo",
    name: "Botafogo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 987, previousMonth: 978, previousYear: 891 },
    members: { current: 80476, previousMonth: 86807, previousYear: 70256 },
    attendance: { current: 40246, previousMonth: 38409, previousYear: 33223 },
    expenses: { current: 648, previousMonth: 665, previousYear: 517 },
    historicalRevenue: [{"month":"Jan","revenue":81,"expenses":43},{"month":"Fev","revenue":73,"expenses":69},{"month":"Mar","revenue":82,"expenses":51},{"month":"Abr","revenue":97,"expenses":69},{"month":"Mai","revenue":68,"expenses":63},{"month":"Jun","revenue":94,"expenses":70},{"month":"Jul","revenue":85,"expenses":65},{"month":"Ago","revenue":90,"expenses":45},{"month":"Set","revenue":83,"expenses":65},{"month":"Out","revenue":83,"expenses":66},{"month":"Nov","revenue":77,"expenses":71},{"month":"Dez","revenue":69,"expenses":45}],
    topPlayers: [{"name":"T. Soares","pos":"Atacante","rating":"9.1"},{"name":"J. Savarino","pos":"Atacante","rating":"8.1"},{"name":"Lucas P.","pos":"Goleiro","rating":"7.1"}],
    categories: [
      { name: "Direitos de TV", value: 395 },
      { name: "Patrocínios", value: 296 },
      { name: "Bilheteria", value: 148 },
      { name: "Sócio Torcedor", value: 99 },
      { name: "Transferências", value: 49 }
    ]
  },
  {
    id: "vasco",
    name: "Vasco da Gama",
    logo: "https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 1020, previousMonth: 889, previousYear: 777 },
    members: { current: 80932, previousMonth: 79707, previousYear: 64254 },
    attendance: { current: 39487, previousMonth: 38447, previousYear: 31158 },
    expenses: { current: 616, previousMonth: 622, previousYear: 488 },
    historicalRevenue: [{"month":"Jan","revenue":79,"expenses":64},{"month":"Fev","revenue":91,"expenses":51},{"month":"Mar","revenue":72,"expenses":68},{"month":"Abr","revenue":74,"expenses":57},{"month":"Mai","revenue":74,"expenses":45},{"month":"Jun","revenue":97,"expenses":54},{"month":"Jul","revenue":86,"expenses":68},{"month":"Ago","revenue":78,"expenses":69},{"month":"Set","revenue":65,"expenses":66},{"month":"Out","revenue":98,"expenses":56},{"month":"Nov","revenue":72,"expenses":69},{"month":"Dez","revenue":59,"expenses":55}],
    topPlayers: [{"name":"P. Vegetti","pos":"Atacante","rating":"8.1"},{"name":"D. Payet","pos":"Meio-Campo","rating":"8.8"},{"name":"L. Jardim","pos":"Goleiro","rating":"7.4"}],
    categories: [
      { name: "Direitos de TV", value: 408 },
      { name: "Patrocínios", value: 306 },
      { name: "Bilheteria", value: 153 },
      { name: "Sócio Torcedor", value: 102 },
      { name: "Transferências", value: 51 }
    ]
  },
  {
    id: "gremio",
    name: "Grêmio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Gremio_logo.svg",
    colors: { primary: "#0d80bf", secondary: "#000000" },
    revenue: { current: 829, previousMonth: 825, previousYear: 777 },
    members: { current: 74708, previousMonth: 78820, previousYear: 61143 },
    attendance: { current: 34621, previousMonth: 35240, previousYear: 30322 },
    expenses: { current: 623, previousMonth: 607, previousYear: 502 },
    historicalRevenue: [{"month":"Jan","revenue":80,"expenses":44},{"month":"Fev","revenue":75,"expenses":58},{"month":"Mar","revenue":82,"expenses":51},{"month":"Abr","revenue":71,"expenses":51},{"month":"Mai","revenue":68,"expenses":66},{"month":"Jun","revenue":66,"expenses":60},{"month":"Jul","revenue":90,"expenses":57},{"month":"Ago","revenue":77,"expenses":54},{"month":"Set","revenue":74,"expenses":59},{"month":"Out","revenue":55,"expenses":45},{"month":"Nov","revenue":83,"expenses":65},{"month":"Dez","revenue":89,"expenses":50}],
    topPlayers: [{"name":"L. Suárez","pos":"Atacante","rating":"9.2"},{"name":"M. Villasanti","pos":"Meio-Campo","rating":"8.5"},{"name":"W. Kannemann","pos":"Defensor","rating":"8.4"}],
    categories: [
      { name: "Direitos de TV", value: 332 },
      { name: "Patrocínios", value: 249 },
      { name: "Bilheteria", value: 124 },
      { name: "Sócio Torcedor", value: 83 },
      { name: "Transferências", value: 41 }
    ]
  },
  {
    id: "internacional",
    name: "Internacional",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg",
    colors: { primary: "#e5053a", secondary: "#ffffff" },
    revenue: { current: 835, previousMonth: 813, previousYear: 701 },
    members: { current: 74697, previousMonth: 73933, previousYear: 55667 },
    attendance: { current: 33107, previousMonth: 34692, previousYear: 27013 },
    expenses: { current: 559, previousMonth: 566, previousYear: 454 },
    historicalRevenue: [{"month":"Jan","revenue":72,"expenses":45},{"month":"Fev","revenue":82,"expenses":61},{"month":"Mar","revenue":61,"expenses":43},{"month":"Abr","revenue":83,"expenses":58},{"month":"Mai","revenue":61,"expenses":51},{"month":"Jun","revenue":52,"expenses":45},{"month":"Jul","revenue":60,"expenses":48},{"month":"Ago","revenue":82,"expenses":42},{"month":"Set","revenue":70,"expenses":39},{"month":"Out","revenue":61,"expenses":40},{"month":"Nov","revenue":87,"expenses":51},{"month":"Dez","revenue":70,"expenses":46}],
    topPlayers: [{"name":"A. Patrick","pos":"Meio-Campo","rating":"8.8"},{"name":"E. Valencia","pos":"Atacante","rating":"7.5"},{"name":"Wanderson","pos":"Atacante","rating":"7.0"}],
    categories: [
      { name: "Direitos de TV", value: 334 },
      { name: "Patrocínios", value: 251 },
      { name: "Bilheteria", value: 125 },
      { name: "Sócio Torcedor", value: 84 },
      { name: "Transferências", value: 41 }
    ]
  },
  {
    id: "atletico-mg",
    name: "Atlético Mineiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Atletico_mineiro_galo.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 794, previousMonth: 840, previousYear: 729 },
    members: { current: 70097, previousMonth: 69400, previousYear: 51506 },
    attendance: { current: 32043, previousMonth: 34198, previousYear: 27847 },
    expenses: { current: 559, previousMonth: 531, previousYear: 463 },
    historicalRevenue: [{"month":"Jan","revenue":63,"expenses":36},{"month":"Fev","revenue":61,"expenses":48},{"month":"Mar","revenue":66,"expenses":38},{"month":"Abr","revenue":72,"expenses":52},{"month":"Mai","revenue":77,"expenses":58},{"month":"Jun","revenue":64,"expenses":47},{"month":"Jul","revenue":79,"expenses":41},{"month":"Ago","revenue":54,"expenses":47},{"month":"Set","revenue":85,"expenses":42},{"month":"Out","revenue":83,"expenses":45},{"month":"Nov","revenue":52,"expenses":37},{"month":"Dez","revenue":63,"expenses":48}],
    topPlayers: [{"name":"Hulk","pos":"Atacante","rating":"8.9"},{"name":"Paulinho","pos":"Atacante","rating":"8.6"},{"name":"G. Arana","pos":"Defensor","rating":"8.3"}],
    categories: [
      { name: "Direitos de TV", value: 318 },
      { name: "Patrocínios", value: 238 },
      { name: "Bilheteria", value: 119 },
      { name: "Sócio Torcedor", value: 79 },
      { name: "Transferências", value: 40 }
    ]
  },
  {
    id: "cruzeiro",
    name: "Cruzeiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg",
    colors: { primary: "#003a94", secondary: "#ffffff" },
    revenue: { current: 785, previousMonth: 736, previousYear: 609 },
    members: { current: 61035, previousMonth: 60966, previousYear: 51849 },
    attendance: { current: 32030, previousMonth: 32859, previousYear: 24226 },
    expenses: { current: 523, previousMonth: 524, previousYear: 427 },
    historicalRevenue: [{"month":"Jan","revenue":67,"expenses":37},{"month":"Fev","revenue":72,"expenses":51},{"month":"Mar","revenue":58,"expenses":36},{"month":"Abr","revenue":47,"expenses":38},{"month":"Mai","revenue":53,"expenses":37},{"month":"Jun","revenue":56,"expenses":40},{"month":"Jul","revenue":51,"expenses":33},{"month":"Ago","revenue":69,"expenses":34},{"month":"Set","revenue":63,"expenses":56},{"month":"Out","revenue":70,"expenses":57},{"month":"Nov","revenue":73,"expenses":46},{"month":"Dez","revenue":74,"expenses":33}],
    topPlayers: [{"name":"Matheus P.","pos":"Meio-Campo","rating":"8.6"},{"name":"A. Silva","pos":"Atacante","rating":"8.8"},{"name":"Wiliam","pos":"Atacante","rating":"7.8"}],
    categories: [
      { name: "Direitos de TV", value: 314 },
      { name: "Patrocínios", value: 236 },
      { name: "Bilheteria", value: 118 },
      { name: "Sócio Torcedor", value: 79 },
      { name: "Transferências", value: 38 }
    ]
  },
  {
    id: "athletico-pr",
    name: "Athletico-PR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/CA_Athletico_Paranaense.svg",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 724, previousMonth: 676, previousYear: 614 },
    members: { current: 58185, previousMonth: 60832, previousYear: 49331 },
    attendance: { current: 28567, previousMonth: 30138, previousYear: 24242 },
    expenses: { current: 496, previousMonth: 502, previousYear: 407 },
    historicalRevenue: [{"month":"Jan","revenue":68,"expenses":40},{"month":"Fev","revenue":45,"expenses":50},{"month":"Mar","revenue":48,"expenses":39},{"month":"Abr","revenue":60,"expenses":31},{"month":"Mai","revenue":59,"expenses":34},{"month":"Jun","revenue":56,"expenses":53},{"month":"Jul","revenue":69,"expenses":34},{"month":"Ago","revenue":70,"expenses":40},{"month":"Set","revenue":59,"expenses":35},{"month":"Out","revenue":52,"expenses":36},{"month":"Nov","revenue":54,"expenses":45},{"month":"Dez","revenue":70,"expenses":34}],
    topPlayers: [{"name":"Fernandinho","pos":"Meio-Campo","rating":"9.3"},{"name":"Pablo","pos":"Atacante","rating":"7.6"},{"name":"Bento","pos":"Goleiro","rating":"7.2"}],
    categories: [
      { name: "Direitos de TV", value: 290 },
      { name: "Patrocínios", value: 217 },
      { name: "Bilheteria", value: 109 },
      { name: "Sócio Torcedor", value: 72 },
      { name: "Transferências", value: 36 }
    ]
  },
  {
    id: "bahia",
    name: "Bahia",
    logo: "https://upload.wikimedia.org/wikipedia/pt/2/22/Esporte_Clube_Bahia_logo.svg",
    colors: { primary: "#003b7b", secondary: "#e50024" },
    revenue: { current: 706, previousMonth: 681, previousYear: 550 },
    members: { current: 52868, previousMonth: 54235, previousYear: 44777 },
    attendance: { current: 28036, previousMonth: 28138, previousYear: 23277 },
    expenses: { current: 450, previousMonth: 471, previousYear: 371 },
    historicalRevenue: [{"month":"Jan","revenue":72,"expenses":49},{"month":"Fev","revenue":66,"expenses":45},{"month":"Mar","revenue":53,"expenses":50},{"month":"Abr","revenue":70,"expenses":48},{"month":"Mai","revenue":56,"expenses":43},{"month":"Jun","revenue":71,"expenses":44},{"month":"Jul","revenue":56,"expenses":36},{"month":"Ago","revenue":56,"expenses":48},{"month":"Set","revenue":55,"expenses":49},{"month":"Out","revenue":51,"expenses":32},{"month":"Nov","revenue":62,"expenses":42},{"month":"Dez","revenue":53,"expenses":32}],
    topPlayers: [{"name":"E. Ribeiro","pos":"Meio-Campo","rating":"8.4"},{"name":"Cauly","pos":"Meio-Campo","rating":"8.7"},{"name":"Thaciano","pos":"Atacante","rating":"8.3"}],
    categories: [
      { name: "Direitos de TV", value: 282 },
      { name: "Patrocínios", value: 212 },
      { name: "Bilheteria", value: 106 },
      { name: "Sócio Torcedor", value: 71 },
      { name: "Transferências", value: 35 }
    ]
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Fortaleza_Esporte_Clube_logo.svg",
    colors: { primary: "#122a6e", secondary: "#c10018" },
    revenue: { current: 662, previousMonth: 671, previousYear: 487 },
    members: { current: 50164, previousMonth: 50334, previousYear: 41933 },
    attendance: { current: 25505, previousMonth: 26175, previousYear: 20665 },
    expenses: { current: 421, previousMonth: 421, previousYear: 335 },
    historicalRevenue: [{"month":"Jan","revenue":61,"expenses":44},{"month":"Fev","revenue":51,"expenses":33},{"month":"Mar","revenue":43,"expenses":30},{"month":"Abr","revenue":57,"expenses":38},{"month":"Mai","revenue":63,"expenses":32},{"month":"Jun","revenue":43,"expenses":44},{"month":"Jul","revenue":48,"expenses":30},{"month":"Ago","revenue":46,"expenses":45},{"month":"Set","revenue":58,"expenses":33},{"month":"Out","revenue":50,"expenses":30},{"month":"Nov","revenue":59,"expenses":31},{"month":"Dez","revenue":45,"expenses":45}],
    topPlayers: [{"name":"J. Lucero","pos":"Atacante","rating":"8.8"},{"name":"Y. Pikachu","pos":"Meio-Campo","rating":"8.1"},{"name":"Tinga","pos":"Defensor","rating":"7.9"}],
    categories: [
      { name: "Direitos de TV", value: 265 },
      { name: "Patrocínios", value: 199 },
      { name: "Bilheteria", value: 99 },
      { name: "Sócio Torcedor", value: 66 },
      { name: "Transferências", value: 33 }
    ]
  },
  {
    id: "vitoria",
    name: "Vitória",
    logo: "https://upload.wikimedia.org/wikipedia/pt/3/30/Esporte_Clube_Vit%C3%B3ria_logo.svg",
    colors: { primary: "#c10018", secondary: "#000000" },
    revenue: { current: 621, previousMonth: 593, previousYear: 462 },
    members: { current: 44833, previousMonth: 45079, previousYear: 39122 },
    attendance: { current: 25971, previousMonth: 24263, previousYear: 20464 },
    expenses: { current: 396, previousMonth: 415, previousYear: 327 },
    historicalRevenue: [{"month":"Jan","revenue":61,"expenses":30},{"month":"Fev","revenue":42,"expenses":31},{"month":"Mar","revenue":39,"expenses":33},{"month":"Abr","revenue":55,"expenses":44},{"month":"Mai","revenue":55,"expenses":31},{"month":"Jun","revenue":51,"expenses":37},{"month":"Jul","revenue":41,"expenses":37},{"month":"Ago","revenue":62,"expenses":42},{"month":"Set","revenue":59,"expenses":40},{"month":"Out","revenue":48,"expenses":32},{"month":"Nov","revenue":36,"expenses":27},{"month":"Dez","revenue":45,"expenses":34}],
    topPlayers: [{"name":"Osvaldo","pos":"Atacante","rating":"9.5"},{"name":"Z. Hugo","pos":"Defensor","rating":"7.6"},{"name":"W. Oliveira","pos":"Meio-Campo","rating":"8.2"}],
    categories: [
      { name: "Direitos de TV", value: 248 },
      { name: "Patrocínios", value: 186 },
      { name: "Bilheteria", value: 93 },
      { name: "Sócio Torcedor", value: 62 },
      { name: "Transferências", value: 32 }
    ]
  },
  {
    id: "juventude",
    name: "Juventude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Esporte_Clube_Juventude_logo.svg",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 505, previousMonth: 575, previousYear: 435 },
    members: { current: 43662, previousMonth: 42933, previousYear: 34696 },
    attendance: { current: 22719, previousMonth: 22814, previousYear: 19302 },
    expenses: { current: 368, previousMonth: 378, previousYear: 300 },
    historicalRevenue: [{"month":"Jan","revenue":43,"expenses":27},{"month":"Fev","revenue":34,"expenses":27},{"month":"Mar","revenue":34,"expenses":26},{"month":"Abr","revenue":41,"expenses":25},{"month":"Mai","revenue":34,"expenses":35},{"month":"Jun","revenue":41,"expenses":35},{"month":"Jul","revenue":56,"expenses":32},{"month":"Ago","revenue":37,"expenses":25},{"month":"Set","revenue":38,"expenses":29},{"month":"Out","revenue":46,"expenses":32},{"month":"Nov","revenue":48,"expenses":35},{"month":"Dez","revenue":39,"expenses":33}],
    topPlayers: [{"name":"Nenê","pos":"Meio-Campo","rating":"8.1"},{"name":"G. Barbosa","pos":"Atacante","rating":"8.7"},{"name":"Jadson","pos":"Meio-Campo","rating":"7.3"}],
    categories: [
      { name: "Direitos de TV", value: 202 },
      { name: "Patrocínios", value: 152 },
      { name: "Bilheteria", value: 76 },
      { name: "Sócio Torcedor", value: 51 },
      { name: "Transferências", value: 24 }
    ]
  },
  {
    id: "atletico-go",
    name: "Atlético-GO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Atl%C3%A9tico_Goianiense.svg",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 545, previousMonth: 501, previousYear: 377 },
    members: { current: 38096, previousMonth: 37033, previousYear: 29291 },
    attendance: { current: 22820, previousMonth: 21696, previousYear: 18424 },
    expenses: { current: 328, previousMonth: 349, previousYear: 280 },
    historicalRevenue: [{"month":"Jan","revenue":46,"expenses":25},{"month":"Fev","revenue":52,"expenses":27},{"month":"Mar","revenue":41,"expenses":31},{"month":"Abr","revenue":50,"expenses":28},{"month":"Mai","revenue":32,"expenses":37},{"month":"Jun","revenue":31,"expenses":23},{"month":"Jul","revenue":49,"expenses":32},{"month":"Ago","revenue":40,"expenses":28},{"month":"Set","revenue":44,"expenses":22},{"month":"Out","revenue":41,"expenses":22},{"month":"Nov","revenue":36,"expenses":23},{"month":"Dez","revenue":48,"expenses":29}],
    topPlayers: [{"name":"L. Fernando","pos":"Atacante","rating":"8.6"},{"name":"S. Romero","pos":"Atacante","rating":"8.3"},{"name":"A. Cruz","pos":"Defensor","rating":"8.3"}],
    categories: [
      { name: "Direitos de TV", value: 218 },
      { name: "Patrocínios", value: 164 },
      { name: "Bilheteria", value: 82 },
      { name: "Sócio Torcedor", value: 55 },
      { name: "Transferências", value: 26 }
    ]
  },
  {
    id: "criciuma",
    name: "Criciúma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Criciuma_Esporte_Clube.svg",
    colors: { primary: "#fcd116", secondary: "#000000" },
    revenue: { current: 473, previousMonth: 471, previousYear: 396 },
    members: { current: 34650, previousMonth: 34118, previousYear: 28242 },
    attendance: { current: 20409, previousMonth: 20659, previousYear: 16660 },
    expenses: { current: 314, previousMonth: 321, previousYear: 243 },
    historicalRevenue: [{"month":"Jan","revenue":40,"expenses":22},{"month":"Fev","revenue":40,"expenses":20},{"month":"Mar","revenue":37,"expenses":22},{"month":"Abr","revenue":41,"expenses":29},{"month":"Mai","revenue":29,"expenses":32},{"month":"Jun","revenue":41,"expenses":30},{"month":"Jul","revenue":39,"expenses":34},{"month":"Ago","revenue":43,"expenses":25},{"month":"Set","revenue":45,"expenses":24},{"month":"Out","revenue":30,"expenses":33},{"month":"Nov","revenue":47,"expenses":22},{"month":"Dez","revenue":43,"expenses":25}],
    topPlayers: [{"name":"Eder","pos":"Atacante","rating":"8.8"},{"name":"M. Hermes","pos":"Defensor","rating":"8.8"},{"name":"Y. Bolasie","pos":"Atacante","rating":"7.5"}],
    categories: [
      { name: "Direitos de TV", value: 189 },
      { name: "Patrocínios", value: 142 },
      { name: "Bilheteria", value: 71 },
      { name: "Sócio Torcedor", value: 47 },
      { name: "Transferências", value: 24 }
    ]
  },
  {
    id: "cuiaba",
    name: "Cuiabá",
    logo: "https://upload.wikimedia.org/wikipedia/pt/0/03/Cuiab%C3%A1_Esporte_Clube.svg",
    colors: { primary: "#006437", secondary: "#ffd700" },
    revenue: { current: 395, previousMonth: 451, previousYear: 318 },
    members: { current: 30499, previousMonth: 28310, previousYear: 24480 },
    attendance: { current: 19797, previousMonth: 18006, previousYear: 14621 },
    expenses: { current: 274, previousMonth: 286, previousYear: 214 },
    historicalRevenue: [{"month":"Jan","revenue":42,"expenses":20},{"month":"Fev","revenue":26,"expenses":19},{"month":"Mar","revenue":28,"expenses":28},{"month":"Abr","revenue":38,"expenses":28},{"month":"Mai","revenue":26,"expenses":20},{"month":"Jun","revenue":32,"expenses":23},{"month":"Jul","revenue":31,"expenses":24},{"month":"Ago","revenue":38,"expenses":20},{"month":"Set","revenue":26,"expenses":21},{"month":"Out","revenue":27,"expenses":26},{"month":"Nov","revenue":33,"expenses":26},{"month":"Dez","revenue":29,"expenses":29}],
    topPlayers: [{"name":"Deyverson","pos":"Atacante","rating":"8.5"},{"name":"F. Marques","pos":"Meio-Campo","rating":"9.0"},{"name":"Walter","pos":"Goleiro","rating":"8.0"}],
    categories: [
      { name: "Direitos de TV", value: 158 },
      { name: "Patrocínios", value: 119 },
      { name: "Bilheteria", value: 59 },
      { name: "Sócio Torcedor", value: 40 },
      { name: "Transferências", value: 19 }
    ]
  },
  {
    id: "bragantino",
    name: "Red Bull Bragantino",
    logo: "https://upload.wikimedia.org/wikipedia/pt/c/c5/Escudo_do_Red_Bull_Bragantino.png",
    colors: { primary: "#d80027", secondary: "#ffffff" },
    revenue: { current: 392, previousMonth: 379, previousYear: 274 },
    members: { current: 24014, previousMonth: 25650, previousYear: 19858 },
    attendance: { current: 16630, previousMonth: 17606, previousYear: 14520 },
    expenses: { current: 244, previousMonth: 246, previousYear: 205 },
    historicalRevenue: [{"month":"Jan","revenue":39,"expenses":20},{"month":"Fev","revenue":34,"expenses":23},{"month":"Mar","revenue":26,"expenses":16},{"month":"Abr","revenue":25,"expenses":20},{"month":"Mai","revenue":29,"expenses":19},{"month":"Jun","revenue":25,"expenses":26},{"month":"Jul","revenue":26,"expenses":20},{"month":"Ago","revenue":38,"expenses":25},{"month":"Set","revenue":33,"expenses":22},{"month":"Out","revenue":36,"expenses":26},{"month":"Nov","revenue":27,"expenses":20},{"month":"Dez","revenue":29,"expenses":27}],
    topPlayers: [{"name":"E. Sasha","pos":"Atacante","rating":"8.4"},{"name":"L. Cândido","pos":"Defensor","rating":"8.7"},{"name":"Cleiton","pos":"Goleiro","rating":"8.3"}],
    categories: [
      { name: "Direitos de TV", value: 157 },
      { name: "Patrocínios", value: 118 },
      { name: "Bilheteria", value: 59 },
      { name: "Sócio Torcedor", value: 39 },
      { name: "Transferências", value: 19 }
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
