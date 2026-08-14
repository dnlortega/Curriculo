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
    logo: "/escudos-serie-a/flamengo.png",
    position: 1,
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1152, previousMonth: 1265, previousYear: 963 },
    members: { current: 104308, previousMonth: 100050, previousYear: 83572 },
    attendance: { current: 46470, previousMonth: 47467, previousYear: 36038 },
    expenses: { current: 790, previousMonth: 772, previousYear: 662 },
    historicalRevenue: [{"month":"Jan","revenue":77,"expenses":86},{"month":"Fev","revenue":85,"expenses":60},{"month":"Mar","revenue":97,"expenses":65},{"month":"Abr","revenue":92,"expenses":60},{"month":"Mai","revenue":88,"expenses":70},{"month":"Jun","revenue":125,"expenses":73},{"month":"Jul","revenue":97,"expenses":72},{"month":"Ago","revenue":79,"expenses":90},{"month":"Set","revenue":85,"expenses":86},{"month":"Out","revenue":77,"expenses":80},{"month":"Nov","revenue":80,"expenses":64},{"month":"Dez","revenue":96,"expenses":60}],
    topPlayers: [{"name":"G. Arrascaeta","pos":"Meio-Campo","rating":"8.1"},{"name":"P. Henrique","pos":"Atacante","rating":"8.6"},{"name":"N. De La Cruz","pos":"Meio-Campo","rating":"7.6"}],
    stats: [{"subject":"Ataque","value":94},{"subject":"Defesa","value":80},{"subject":"Tática","value":71},{"subject":"Finanças","value":81},{"subject":"Engajamento","value":88}],
    categories: [
      { name: "Direitos de TV", value: 461 },
      { name: "Patrocínios", value: 346 },
      { name: "Bilheteria", value: 173 },
      { name: "Sócio Torcedor", value: 115 },
      { name: "Transferências", value: 57 }
    ]
  },
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "/escudos-serie-a/palmeiras.png",
    position: 2,
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 1196, previousMonth: 1183, previousYear: 900 },
    members: { current: 101338, previousMonth: 98107, previousYear: 83934 },
    attendance: { current: 44074, previousMonth: 44285, previousYear: 35343 },
    expenses: { current: 753, previousMonth: 768, previousYear: 631 },
    historicalRevenue: [{"month":"Jan","revenue":82,"expenses":84},{"month":"Fev","revenue":123,"expenses":54},{"month":"Mar","revenue":107,"expenses":86},{"month":"Abr","revenue":99,"expenses":79},{"month":"Mai","revenue":107,"expenses":80},{"month":"Jun","revenue":95,"expenses":86},{"month":"Jul","revenue":72,"expenses":71},{"month":"Ago","revenue":111,"expenses":64},{"month":"Set","revenue":108,"expenses":57},{"month":"Out","revenue":94,"expenses":72},{"month":"Nov","revenue":77,"expenses":61},{"month":"Dez","revenue":121,"expenses":78}],
    topPlayers: [{"name":"R. Veiga","pos":"Meio-Campo","rating":"9.4"},{"name":"Dudu","pos":"Atacante","rating":"8.5"},{"name":"E. Endrick","pos":"Atacante","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":72},{"subject":"Defesa","value":90},{"subject":"Tática","value":80},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":65}],
    categories: [
      { name: "Direitos de TV", value: 478 },
      { name: "Patrocínios", value: 359 },
      { name: "Bilheteria", value: 179 },
      { name: "Sócio Torcedor", value: 120 },
      { name: "Transferências", value: 60 }
    ]
  },
  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "/escudos-serie-a/saopaulo.png",
    position: 3,
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 1091, previousMonth: 1174, previousYear: 989 },
    members: { current: 97812, previousMonth: 93903, previousYear: 75179 },
    attendance: { current: 43222, previousMonth: 45710, previousYear: 36759 },
    expenses: { current: 742, previousMonth: 733, previousYear: 605 },
    historicalRevenue: [{"month":"Jan","revenue":98,"expenses":81},{"month":"Fev","revenue":119,"expenses":73},{"month":"Mar","revenue":117,"expenses":54},{"month":"Abr","revenue":90,"expenses":61},{"month":"Mai","revenue":82,"expenses":65},{"month":"Jun","revenue":112,"expenses":61},{"month":"Jul","revenue":104,"expenses":61},{"month":"Ago","revenue":72,"expenses":81},{"month":"Set","revenue":96,"expenses":56},{"month":"Out","revenue":77,"expenses":72},{"month":"Nov","revenue":82,"expenses":61},{"month":"Dez","revenue":92,"expenses":65}],
    topPlayers: [{"name":"J. Calleri","pos":"Atacante","rating":"8.5"},{"name":"L. Moura","pos":"Meio-Campo","rating":"9.0"},{"name":"W. Rato","pos":"Atacante","rating":"7.1"}],
    stats: [{"subject":"Ataque","value":94},{"subject":"Defesa","value":70},{"subject":"Tática","value":72},{"subject":"Finanças","value":85},{"subject":"Engajamento","value":90}],
    categories: [
      { name: "Direitos de TV", value: 436 },
      { name: "Patrocínios", value: 327 },
      { name: "Bilheteria", value: 164 },
      { name: "Sócio Torcedor", value: 109 },
      { name: "Transferências", value: 55 }
    ]
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "/escudos-serie-a/corinthians.png",
    position: 4,
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 1124, previousMonth: 1034, previousYear: 844 },
    members: { current: 92836, previousMonth: 88147, previousYear: 75417 },
    attendance: { current: 41498, previousMonth: 43007, previousYear: 33814 },
    expenses: { current: 748, previousMonth: 736, previousYear: 575 },
    historicalRevenue: [{"month":"Jan","revenue":88,"expenses":48},{"month":"Fev","revenue":66,"expenses":64},{"month":"Mar","revenue":66,"expenses":54},{"month":"Abr","revenue":91,"expenses":78},{"month":"Mai","revenue":85,"expenses":48},{"month":"Jun","revenue":76,"expenses":57},{"month":"Jul","revenue":86,"expenses":57},{"month":"Ago","revenue":102,"expenses":68},{"month":"Set","revenue":108,"expenses":78},{"month":"Out","revenue":67,"expenses":58},{"month":"Nov","revenue":86,"expenses":59},{"month":"Dez","revenue":88,"expenses":58}],
    topPlayers: [{"name":"Yuri A.","pos":"Atacante","rating":"9.2"},{"name":"R. Garro","pos":"Meio-Campo","rating":"8.4"},{"name":"C. Miguel","pos":"Goleiro","rating":"7.3"}],
    stats: [{"subject":"Ataque","value":93},{"subject":"Defesa","value":78},{"subject":"Tática","value":87},{"subject":"Finanças","value":68},{"subject":"Engajamento","value":66}],
    categories: [
      { name: "Direitos de TV", value: 450 },
      { name: "Patrocínios", value: 337 },
      { name: "Bilheteria", value: 169 },
      { name: "Sócio Torcedor", value: 112 },
      { name: "Transferências", value: 56 }
    ]
  },
  {
    id: "fluminense",
    name: "Fluminense",
    logo: "/escudos-serie-a/fluminense.png",
    position: 5,
    colors: { primary: "#9f022f", secondary: "#006747" },
    revenue: { current: 1073, previousMonth: 980, previousYear: 841 },
    members: { current: 87410, previousMonth: 85683, previousYear: 68341 },
    attendance: { current: 39434, previousMonth: 39214, previousYear: 34927 },
    expenses: { current: 711, previousMonth: 718, previousYear: 546 },
    historicalRevenue: [{"month":"Jan","revenue":93,"expenses":63},{"month":"Fev","revenue":63,"expenses":46},{"month":"Mar","revenue":91,"expenses":71},{"month":"Abr","revenue":81,"expenses":51},{"month":"Mai","revenue":93,"expenses":58},{"month":"Jun","revenue":100,"expenses":51},{"month":"Jul","revenue":88,"expenses":51},{"month":"Ago","revenue":105,"expenses":51},{"month":"Set","revenue":93,"expenses":72},{"month":"Out","revenue":66,"expenses":75},{"month":"Nov","revenue":69,"expenses":66},{"month":"Dez","revenue":85,"expenses":70}],
    topPlayers: [{"name":"G. Cano","pos":"Atacante","rating":"8.9"},{"name":"J. Arias","pos":"Meio-Campo","rating":"8.9"},{"name":"Marcelo","pos":"Defensor","rating":"7.3"}],
    stats: [{"subject":"Ataque","value":75},{"subject":"Defesa","value":74},{"subject":"Tática","value":93},{"subject":"Finanças","value":93},{"subject":"Engajamento","value":83}],
    categories: [
      { name: "Direitos de TV", value: 429 },
      { name: "Patrocínios", value: 322 },
      { name: "Bilheteria", value: 161 },
      { name: "Sócio Torcedor", value: 107 },
      { name: "Transferências", value: 54 }
    ]
  },
  {
    id: "botafogo",
    name: "Botafogo",
    logo: "/escudos-serie-a/botafogo.png",
    position: 6,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 973, previousMonth: 922, previousYear: 744 },
    members: { current: 87193, previousMonth: 83637, previousYear: 68203 },
    attendance: { current: 40737, previousMonth: 38795, previousYear: 31293 },
    expenses: { current: 666, previousMonth: 635, previousYear: 547 },
    historicalRevenue: [{"month":"Jan","revenue":89,"expenses":46},{"month":"Fev","revenue":77,"expenses":48},{"month":"Mar","revenue":74,"expenses":44},{"month":"Abr","revenue":73,"expenses":72},{"month":"Mai","revenue":81,"expenses":51},{"month":"Jun","revenue":82,"expenses":68},{"month":"Jul","revenue":77,"expenses":63},{"month":"Ago","revenue":61,"expenses":51},{"month":"Set","revenue":63,"expenses":48},{"month":"Out","revenue":97,"expenses":52},{"month":"Nov","revenue":64,"expenses":56},{"month":"Dez","revenue":68,"expenses":51}],
    topPlayers: [{"name":"T. Soares","pos":"Atacante","rating":"8.4"},{"name":"J. Savarino","pos":"Atacante","rating":"8.4"},{"name":"Lucas P.","pos":"Goleiro","rating":"7.9"}],
    stats: [{"subject":"Ataque","value":75},{"subject":"Defesa","value":67},{"subject":"Tática","value":80},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":80}],
    categories: [
      { name: "Direitos de TV", value: 389 },
      { name: "Patrocínios", value: 292 },
      { name: "Bilheteria", value: 146 },
      { name: "Sócio Torcedor", value: 97 },
      { name: "Transferências", value: 49 }
    ]
  },
  {
    id: "vasco",
    name: "Vasco da Gama",
    logo: "/escudos-serie-a/vasco.png",
    position: 7,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 991, previousMonth: 907, previousYear: 705 },
    members: { current: 79721, previousMonth: 80170, previousYear: 63277 },
    attendance: { current: 39279, previousMonth: 36357, previousYear: 29884 },
    expenses: { current: 632, previousMonth: 653, previousYear: 532 },
    historicalRevenue: [{"month":"Jan","revenue":71,"expenses":70},{"month":"Fev","revenue":65,"expenses":58},{"month":"Mar","revenue":58,"expenses":56},{"month":"Abr","revenue":65,"expenses":47},{"month":"Mai","revenue":98,"expenses":48},{"month":"Jun","revenue":66,"expenses":50},{"month":"Jul","revenue":84,"expenses":54},{"month":"Ago","revenue":61,"expenses":59},{"month":"Set","revenue":65,"expenses":65},{"month":"Out","revenue":68,"expenses":57},{"month":"Nov","revenue":72,"expenses":66},{"month":"Dez","revenue":80,"expenses":65}],
    topPlayers: [{"name":"P. Vegetti","pos":"Atacante","rating":"8.5"},{"name":"D. Payet","pos":"Meio-Campo","rating":"8.8"},{"name":"L. Jardim","pos":"Goleiro","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":71},{"subject":"Defesa","value":87},{"subject":"Tática","value":89},{"subject":"Finanças","value":79},{"subject":"Engajamento","value":77}],
    categories: [
      { name: "Direitos de TV", value: 396 },
      { name: "Patrocínios", value: 297 },
      { name: "Bilheteria", value: 149 },
      { name: "Sócio Torcedor", value: 99 },
      { name: "Transferências", value: 50 }
    ]
  },
  {
    id: "gremio",
    name: "Grêmio",
    logo: "/escudos-serie-a/gremio.png",
    position: 8,
    colors: { primary: "#0d80bf", secondary: "#000000" },
    revenue: { current: 983, previousMonth: 899, previousYear: 747 },
    members: { current: 74156, previousMonth: 72184, previousYear: 58750 },
    attendance: { current: 37868, previousMonth: 34914, previousYear: 30568 },
    expenses: { current: 629, previousMonth: 605, previousYear: 488 },
    historicalRevenue: [{"month":"Jan","revenue":92,"expenses":66},{"month":"Fev","revenue":72,"expenses":42},{"month":"Mar","revenue":81,"expenses":50},{"month":"Abr","revenue":65,"expenses":60},{"month":"Mai","revenue":71,"expenses":56},{"month":"Jun","revenue":95,"expenses":45},{"month":"Jul","revenue":91,"expenses":52},{"month":"Ago","revenue":59,"expenses":50},{"month":"Set","revenue":85,"expenses":62},{"month":"Out","revenue":55,"expenses":46},{"month":"Nov","revenue":91,"expenses":40},{"month":"Dez","revenue":86,"expenses":54}],
    topPlayers: [{"name":"L. Suárez","pos":"Atacante","rating":"9.0"},{"name":"M. Villasanti","pos":"Meio-Campo","rating":"7.8"},{"name":"W. Kannemann","pos":"Defensor","rating":"7.5"}],
    stats: [{"subject":"Ataque","value":84},{"subject":"Defesa","value":75},{"subject":"Tática","value":67},{"subject":"Finanças","value":81},{"subject":"Engajamento","value":67}],
    categories: [
      { name: "Direitos de TV", value: 393 },
      { name: "Patrocínios", value: 295 },
      { name: "Bilheteria", value: 147 },
      { name: "Sócio Torcedor", value: 98 },
      { name: "Transferências", value: 50 }
    ]
  },
  {
    id: "internacional",
    name: "Internacional",
    logo: "/escudos-serie-a/internacional.png",
    position: 9,
    colors: { primary: "#e5053a", secondary: "#ffffff" },
    revenue: { current: 866, previousMonth: 822, previousYear: 696 },
    members: { current: 74457, previousMonth: 70886, previousYear: 57537 },
    attendance: { current: 35480, previousMonth: 35285, previousYear: 29013 },
    expenses: { current: 549, previousMonth: 598, previousYear: 470 },
    historicalRevenue: [{"month":"Jan","revenue":75,"expenses":57},{"month":"Fev","revenue":53,"expenses":52},{"month":"Mar","revenue":77,"expenses":44},{"month":"Abr","revenue":81,"expenses":37},{"month":"Mai","revenue":82,"expenses":47},{"month":"Jun","revenue":70,"expenses":37},{"month":"Jul","revenue":59,"expenses":53},{"month":"Ago","revenue":72,"expenses":63},{"month":"Set","revenue":70,"expenses":59},{"month":"Out","revenue":67,"expenses":53},{"month":"Nov","revenue":63,"expenses":56},{"month":"Dez","revenue":75,"expenses":58}],
    topPlayers: [{"name":"A. Patrick","pos":"Meio-Campo","rating":"8.2"},{"name":"E. Valencia","pos":"Atacante","rating":"8.5"},{"name":"Wanderson","pos":"Atacante","rating":"8.4"}],
    stats: [{"subject":"Ataque","value":83},{"subject":"Defesa","value":86},{"subject":"Tática","value":86},{"subject":"Finanças","value":75},{"subject":"Engajamento","value":75}],
    categories: [
      { name: "Direitos de TV", value: 346 },
      { name: "Patrocínios", value: 260 },
      { name: "Bilheteria", value: 130 },
      { name: "Sócio Torcedor", value: 87 },
      { name: "Transferências", value: 43 }
    ]
  },
  {
    id: "atletico-mg",
    name: "Atlético Mineiro",
    logo: "/escudos-serie-a/atletico-mg.png",
    position: 10,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 754, previousMonth: 819, previousYear: 703 },
    members: { current: 64459, previousMonth: 66321, previousYear: 53076 },
    attendance: { current: 32808, previousMonth: 32204, previousYear: 26610 },
    expenses: { current: 558, previousMonth: 519, previousYear: 415 },
    historicalRevenue: [{"month":"Jan","revenue":84,"expenses":43},{"month":"Fev","revenue":59,"expenses":59},{"month":"Mar","revenue":52,"expenses":38},{"month":"Abr","revenue":51,"expenses":59},{"month":"Mai","revenue":72,"expenses":44},{"month":"Jun","revenue":83,"expenses":48},{"month":"Jul","revenue":70,"expenses":47},{"month":"Ago","revenue":78,"expenses":60},{"month":"Set","revenue":73,"expenses":36},{"month":"Out","revenue":85,"expenses":47},{"month":"Nov","revenue":55,"expenses":38},{"month":"Dez","revenue":57,"expenses":42}],
    topPlayers: [{"name":"Hulk","pos":"Atacante","rating":"9.0"},{"name":"Paulinho","pos":"Atacante","rating":"8.4"},{"name":"G. Arana","pos":"Defensor","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":90},{"subject":"Defesa","value":73},{"subject":"Tática","value":74},{"subject":"Finanças","value":90},{"subject":"Engajamento","value":87}],
    categories: [
      { name: "Direitos de TV", value: 302 },
      { name: "Patrocínios", value: 226 },
      { name: "Bilheteria", value: 113 },
      { name: "Sócio Torcedor", value: 75 },
      { name: "Transferências", value: 38 }
    ]
  },
  {
    id: "cruzeiro",
    name: "Cruzeiro",
    logo: "/escudos-serie-a/cruzeiro.png",
    position: 11,
    colors: { primary: "#003a94", secondary: "#ffffff" },
    revenue: { current: 739, previousMonth: 760, previousYear: 635 },
    members: { current: 61603, previousMonth: 62666, previousYear: 49092 },
    attendance: { current: 32113, previousMonth: 31366, previousYear: 26290 },
    expenses: { current: 510, previousMonth: 514, previousYear: 432 },
    historicalRevenue: [{"month":"Jan","revenue":61,"expenses":35},{"month":"Fev","revenue":75,"expenses":42},{"month":"Mar","revenue":74,"expenses":46},{"month":"Abr","revenue":49,"expenses":37},{"month":"Mai","revenue":52,"expenses":43},{"month":"Jun","revenue":64,"expenses":41},{"month":"Jul","revenue":62,"expenses":43},{"month":"Ago","revenue":49,"expenses":48},{"month":"Set","revenue":62,"expenses":36},{"month":"Out","revenue":67,"expenses":37},{"month":"Nov","revenue":66,"expenses":43},{"month":"Dez","revenue":71,"expenses":41}],
    topPlayers: [{"name":"Matheus P.","pos":"Meio-Campo","rating":"8.5"},{"name":"A. Silva","pos":"Atacante","rating":"8.8"},{"name":"Wiliam","pos":"Atacante","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":87},{"subject":"Defesa","value":71},{"subject":"Tática","value":81},{"subject":"Finanças","value":68},{"subject":"Engajamento","value":81}],
    categories: [
      { name: "Direitos de TV", value: 296 },
      { name: "Patrocínios", value: 222 },
      { name: "Bilheteria", value: 111 },
      { name: "Sócio Torcedor", value: 74 },
      { name: "Transferências", value: 36 }
    ]
  },
  {
    id: "athletico-pr",
    name: "Athletico-PR",
    logo: "/escudos-serie-a/athletico-pr.png",
    position: 12,
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 749, previousMonth: 781, previousYear: 642 },
    members: { current: 58167, previousMonth: 57587, previousYear: 45960 },
    attendance: { current: 28508, previousMonth: 28809, previousYear: 22817 },
    expenses: { current: 466, previousMonth: 478, previousYear: 411 },
    historicalRevenue: [{"month":"Jan","revenue":74,"expenses":40},{"month":"Fev","revenue":70,"expenses":46},{"month":"Mar","revenue":51,"expenses":34},{"month":"Abr","revenue":68,"expenses":39},{"month":"Mai","revenue":46,"expenses":33},{"month":"Jun","revenue":65,"expenses":42},{"month":"Jul","revenue":52,"expenses":43},{"month":"Ago","revenue":56,"expenses":38},{"month":"Set","revenue":55,"expenses":33},{"month":"Out","revenue":57,"expenses":36},{"month":"Nov","revenue":59,"expenses":35},{"month":"Dez","revenue":75,"expenses":50}],
    topPlayers: [{"name":"Fernandinho","pos":"Meio-Campo","rating":"9.2"},{"name":"Pablo","pos":"Atacante","rating":"8.1"},{"name":"Bento","pos":"Goleiro","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":94},{"subject":"Defesa","value":68},{"subject":"Tática","value":79},{"subject":"Finanças","value":84},{"subject":"Engajamento","value":85}],
    categories: [
      { name: "Direitos de TV", value: 300 },
      { name: "Patrocínios", value: 225 },
      { name: "Bilheteria", value: 112 },
      { name: "Sócio Torcedor", value: 75 },
      { name: "Transferências", value: 37 }
    ]
  },
  {
    id: "bahia",
    name: "Bahia",
    logo: "/escudos-serie-a/bahia.png",
    position: 13,
    colors: { primary: "#003b7b", secondary: "#e50024" },
    revenue: { current: 673, previousMonth: 697, previousYear: 584 },
    members: { current: 52915, previousMonth: 55829, previousYear: 44015 },
    attendance: { current: 27135, previousMonth: 29554, previousYear: 22504 },
    expenses: { current: 462, previousMonth: 450, previousYear: 388 },
    historicalRevenue: [{"month":"Jan","revenue":53,"expenses":34},{"month":"Fev","revenue":52,"expenses":37},{"month":"Mar","revenue":70,"expenses":49},{"month":"Abr","revenue":55,"expenses":41},{"month":"Mai","revenue":58,"expenses":45},{"month":"Jun","revenue":67,"expenses":40},{"month":"Jul","revenue":56,"expenses":38},{"month":"Ago","revenue":50,"expenses":48},{"month":"Set","revenue":58,"expenses":32},{"month":"Out","revenue":53,"expenses":40},{"month":"Nov","revenue":46,"expenses":49},{"month":"Dez","revenue":56,"expenses":37}],
    topPlayers: [{"name":"E. Ribeiro","pos":"Meio-Campo","rating":"9.1"},{"name":"Cauly","pos":"Meio-Campo","rating":"8.5"},{"name":"Thaciano","pos":"Atacante","rating":"7.3"}],
    stats: [{"subject":"Ataque","value":91},{"subject":"Defesa","value":92},{"subject":"Tática","value":76},{"subject":"Finanças","value":94},{"subject":"Engajamento","value":66}],
    categories: [
      { name: "Direitos de TV", value: 269 },
      { name: "Patrocínios", value: 202 },
      { name: "Bilheteria", value: 101 },
      { name: "Sócio Torcedor", value: 67 },
      { name: "Transferências", value: 34 }
    ]
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    logo: "/escudos-serie-a/fortaleza.png",
    position: 14,
    colors: { primary: "#122a6e", secondary: "#c10018" },
    revenue: { current: 581, previousMonth: 657, previousYear: 477 },
    members: { current: 50969, previousMonth: 48875, previousYear: 39356 },
    attendance: { current: 27530, previousMonth: 26800, previousYear: 22504 },
    expenses: { current: 409, previousMonth: 415, previousYear: 361 },
    historicalRevenue: [{"month":"Jan","revenue":48,"expenses":37},{"month":"Fev","revenue":41,"expenses":29},{"month":"Mar","revenue":39,"expenses":33},{"month":"Abr","revenue":40,"expenses":28},{"month":"Mai","revenue":40,"expenses":35},{"month":"Jun","revenue":49,"expenses":34},{"month":"Jul","revenue":39,"expenses":31},{"month":"Ago","revenue":52,"expenses":30},{"month":"Set","revenue":51,"expenses":27},{"month":"Out","revenue":62,"expenses":47},{"month":"Nov","revenue":68,"expenses":30},{"month":"Dez","revenue":56,"expenses":46}],
    topPlayers: [{"name":"J. Lucero","pos":"Atacante","rating":"9.2"},{"name":"Y. Pikachu","pos":"Meio-Campo","rating":"8.1"},{"name":"Tinga","pos":"Defensor","rating":"7.9"}],
    stats: [{"subject":"Ataque","value":83},{"subject":"Defesa","value":69},{"subject":"Tática","value":91},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":72}],
    categories: [
      { name: "Direitos de TV", value: 232 },
      { name: "Patrocínios", value: 174 },
      { name: "Bilheteria", value: 87 },
      { name: "Sócio Torcedor", value: 58 },
      { name: "Transferências", value: 30 }
    ]
  },
  {
    id: "vitoria",
    name: "Vitória",
    logo: "/escudos-serie-a/vitoria.png",
    position: 15,
    colors: { primary: "#c10018", secondary: "#000000" },
    revenue: { current: 560, previousMonth: 583, previousYear: 439 },
    members: { current: 46648, previousMonth: 45490, previousYear: 36280 },
    attendance: { current: 24837, previousMonth: 25602, previousYear: 21451 },
    expenses: { current: 388, previousMonth: 399, previousYear: 326 },
    historicalRevenue: [{"month":"Jan","revenue":39,"expenses":36},{"month":"Fev","revenue":58,"expenses":42},{"month":"Mar","revenue":49,"expenses":29},{"month":"Abr","revenue":47,"expenses":40},{"month":"Mai","revenue":52,"expenses":40},{"month":"Jun","revenue":45,"expenses":44},{"month":"Jul","revenue":45,"expenses":35},{"month":"Ago","revenue":45,"expenses":28},{"month":"Set","revenue":40,"expenses":37},{"month":"Out","revenue":58,"expenses":33},{"month":"Nov","revenue":51,"expenses":35},{"month":"Dez","revenue":51,"expenses":26}],
    topPlayers: [{"name":"Osvaldo","pos":"Atacante","rating":"8.3"},{"name":"Z. Hugo","pos":"Defensor","rating":"8.1"},{"name":"W. Oliveira","pos":"Meio-Campo","rating":"7.7"}],
    stats: [{"subject":"Ataque","value":90},{"subject":"Defesa","value":94},{"subject":"Tática","value":70},{"subject":"Finanças","value":87},{"subject":"Engajamento","value":76}],
    categories: [
      { name: "Direitos de TV", value: 224 },
      { name: "Patrocínios", value: 168 },
      { name: "Bilheteria", value: 84 },
      { name: "Sócio Torcedor", value: 56 },
      { name: "Transferências", value: 28 }
    ]
  },
  {
    id: "juventude",
    name: "Juventude",
    logo: "/escudos-serie-a/juventude.png",
    position: 16,
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 543, previousMonth: 512, previousYear: 497 },
    members: { current: 43979, previousMonth: 42546, previousYear: 33987 },
    attendance: { current: 23004, previousMonth: 24073, previousYear: 19566 },
    expenses: { current: 359, previousMonth: 351, previousYear: 286 },
    historicalRevenue: [{"month":"Jan","revenue":45,"expenses":25},{"month":"Fev","revenue":38,"expenses":30},{"month":"Mar","revenue":42,"expenses":25},{"month":"Abr","revenue":44,"expenses":25},{"month":"Mai","revenue":57,"expenses":28},{"month":"Jun","revenue":37,"expenses":37},{"month":"Jul","revenue":40,"expenses":32},{"month":"Ago","revenue":41,"expenses":24},{"month":"Set","revenue":51,"expenses":28},{"month":"Out","revenue":54,"expenses":41},{"month":"Nov","revenue":39,"expenses":38},{"month":"Dez","revenue":37,"expenses":28}],
    topPlayers: [{"name":"Nenê","pos":"Meio-Campo","rating":"8.7"},{"name":"G. Barbosa","pos":"Atacante","rating":"7.9"},{"name":"Jadson","pos":"Meio-Campo","rating":"8.4"}],
    stats: [{"subject":"Ataque","value":83},{"subject":"Defesa","value":82},{"subject":"Tática","value":71},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":66}],
    categories: [
      { name: "Direitos de TV", value: 217 },
      { name: "Patrocínios", value: 163 },
      { name: "Bilheteria", value: 81 },
      { name: "Sócio Torcedor", value: 54 },
      { name: "Transferências", value: 28 }
    ]
  },
  {
    id: "atletico-go",
    name: "Atlético-GO",
    logo: "/escudos-serie-a/atletico-go.png",
    position: 17,
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 463, previousMonth: 547, previousYear: 416 },
    members: { current: 39193, previousMonth: 36845, previousYear: 30142 },
    attendance: { current: 21074, previousMonth: 21981, previousYear: 17648 },
    expenses: { current: 345, previousMonth: 331, previousYear: 272 },
    historicalRevenue: [{"month":"Jan","revenue":34,"expenses":26},{"month":"Fev","revenue":48,"expenses":31},{"month":"Mar","revenue":54,"expenses":37},{"month":"Abr","revenue":38,"expenses":28},{"month":"Mai","revenue":41,"expenses":33},{"month":"Jun","revenue":44,"expenses":24},{"month":"Jul","revenue":49,"expenses":23},{"month":"Ago","revenue":48,"expenses":35},{"month":"Set","revenue":49,"expenses":36},{"month":"Out","revenue":49,"expenses":33},{"month":"Nov","revenue":44,"expenses":38},{"month":"Dez","revenue":47,"expenses":29}],
    topPlayers: [{"name":"L. Fernando","pos":"Atacante","rating":"9.1"},{"name":"S. Romero","pos":"Atacante","rating":"8.1"},{"name":"A. Cruz","pos":"Defensor","rating":"7.7"}],
    stats: [{"subject":"Ataque","value":90},{"subject":"Defesa","value":65},{"subject":"Tática","value":72},{"subject":"Finanças","value":92},{"subject":"Engajamento","value":81}],
    categories: [
      { name: "Direitos de TV", value: 185 },
      { name: "Patrocínios", value: 139 },
      { name: "Bilheteria", value: 69 },
      { name: "Sócio Torcedor", value: 46 },
      { name: "Transferências", value: 24 }
    ]
  },
  {
    id: "criciuma",
    name: "Criciúma",
    logo: "/escudos-serie-a/criciuma.png",
    position: 18,
    colors: { primary: "#fcd116", secondary: "#000000" },
    revenue: { current: 441, previousMonth: 490, previousYear: 342 },
    members: { current: 35127, previousMonth: 33471, previousYear: 25614 },
    attendance: { current: 20081, previousMonth: 20683, previousYear: 15875 },
    expenses: { current: 295, previousMonth: 297, previousYear: 262 },
    historicalRevenue: [{"month":"Jan","revenue":47,"expenses":33},{"month":"Fev","revenue":49,"expenses":27},{"month":"Mar","revenue":30,"expenses":30},{"month":"Abr","revenue":32,"expenses":21},{"month":"Mai","revenue":32,"expenses":23},{"month":"Jun","revenue":39,"expenses":22},{"month":"Jul","revenue":41,"expenses":27},{"month":"Ago","revenue":32,"expenses":22},{"month":"Set","revenue":42,"expenses":22},{"month":"Out","revenue":41,"expenses":33},{"month":"Nov","revenue":49,"expenses":28},{"month":"Dez","revenue":35,"expenses":20}],
    topPlayers: [{"name":"Eder","pos":"Atacante","rating":"8.7"},{"name":"M. Hermes","pos":"Defensor","rating":"7.8"},{"name":"Y. Bolasie","pos":"Atacante","rating":"8.2"}],
    stats: [{"subject":"Ataque","value":85},{"subject":"Defesa","value":87},{"subject":"Tática","value":74},{"subject":"Finanças","value":66},{"subject":"Engajamento","value":75}],
    categories: [
      { name: "Direitos de TV", value: 176 },
      { name: "Patrocínios", value: 132 },
      { name: "Bilheteria", value: 66 },
      { name: "Sócio Torcedor", value: 44 },
      { name: "Transferências", value: 23 }
    ]
  },
  {
    id: "cuiaba",
    name: "Cuiabá",
    logo: "/escudos-serie-a/cuiaba.png",
    position: 19,
    colors: { primary: "#006437", secondary: "#ffd700" },
    revenue: { current: 442, previousMonth: 439, previousYear: 352 },
    members: { current: 28180, previousMonth: 29474, previousYear: 23951 },
    attendance: { current: 18025, previousMonth: 19271, previousYear: 15512 },
    expenses: { current: 276, previousMonth: 272, previousYear: 237 },
    historicalRevenue: [{"month":"Jan","revenue":30,"expenses":20},{"month":"Fev","revenue":43,"expenses":22},{"month":"Mar","revenue":28,"expenses":30},{"month":"Abr","revenue":32,"expenses":20},{"month":"Mai","revenue":39,"expenses":18},{"month":"Jun","revenue":33,"expenses":30},{"month":"Jul","revenue":31,"expenses":22},{"month":"Ago","revenue":26,"expenses":29},{"month":"Set","revenue":29,"expenses":26},{"month":"Out","revenue":39,"expenses":30},{"month":"Nov","revenue":36,"expenses":28},{"month":"Dez","revenue":37,"expenses":23}],
    topPlayers: [{"name":"Deyverson","pos":"Atacante","rating":"8.8"},{"name":"F. Marques","pos":"Meio-Campo","rating":"8.1"},{"name":"Walter","pos":"Goleiro","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":72},{"subject":"Defesa","value":66},{"subject":"Tática","value":87},{"subject":"Finanças","value":91},{"subject":"Engajamento","value":80}],
    categories: [
      { name: "Direitos de TV", value: 177 },
      { name: "Patrocínios", value: 133 },
      { name: "Bilheteria", value: 66 },
      { name: "Sócio Torcedor", value: 44 },
      { name: "Transferências", value: 22 }
    ]
  },
  {
    id: "bragantino",
    name: "Red Bull Bragantino",
    logo: "/escudos-serie-a/bragantino.png",
    position: 20,
    colors: { primary: "#d80027", secondary: "#ffffff" },
    revenue: { current: 404, previousMonth: 348, previousYear: 335 },
    members: { current: 24634, previousMonth: 26168, previousYear: 19814 },
    attendance: { current: 17629, previousMonth: 17806, previousYear: 14780 },
    expenses: { current: 259, previousMonth: 253, previousYear: 210 },
    historicalRevenue: [{"month":"Jan","revenue":25,"expenses":22},{"month":"Fev","revenue":32,"expenses":21},{"month":"Mar","revenue":23,"expenses":16},{"month":"Abr","revenue":36,"expenses":17},{"month":"Mai","revenue":36,"expenses":17},{"month":"Jun","revenue":31,"expenses":20},{"month":"Jul","revenue":25,"expenses":26},{"month":"Ago","revenue":27,"expenses":23},{"month":"Set","revenue":35,"expenses":26},{"month":"Out","revenue":33,"expenses":23},{"month":"Nov","revenue":32,"expenses":26},{"month":"Dez","revenue":25,"expenses":19}],
    topPlayers: [{"name":"E. Sasha","pos":"Atacante","rating":"8.6"},{"name":"L. Cândido","pos":"Defensor","rating":"7.7"},{"name":"Cleiton","pos":"Goleiro","rating":"7.4"}],
    stats: [{"subject":"Ataque","value":75},{"subject":"Defesa","value":66},{"subject":"Tática","value":85},{"subject":"Finanças","value":67},{"subject":"Engajamento","value":88}],
    categories: [
      { name: "Direitos de TV", value: 162 },
      { name: "Patrocínios", value: 121 },
      { name: "Bilheteria", value: 61 },
      { name: "Sócio Torcedor", value: 40 },
      { name: "Transferências", value: 20 }
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
