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
    logo: "/logos/flamengo.png",
    position: 1,
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1192, previousMonth: 1314, previousYear: 1098 },
    members: { current: 102187, previousMonth: 104320, previousYear: 82581 },
    attendance: { current: 48257, previousMonth: 45193, previousYear: 38104 },
    expenses: { current: 789, previousMonth: 799, previousYear: 693 },
    historicalRevenue: [{"month":"Jan","revenue":118,"expenses":56},{"month":"Fev","revenue":76,"expenses":85},{"month":"Mar","revenue":94,"expenses":56},{"month":"Abr","revenue":87,"expenses":77},{"month":"Mai","revenue":127,"expenses":62},{"month":"Jun","revenue":91,"expenses":74},{"month":"Jul","revenue":106,"expenses":70},{"month":"Ago","revenue":95,"expenses":73},{"month":"Set","revenue":124,"expenses":82},{"month":"Out","revenue":101,"expenses":52},{"month":"Nov","revenue":124,"expenses":67},{"month":"Dez","revenue":89,"expenses":81}],
    topPlayers: [{"name":"G. Arrascaeta","pos":"Meio-Campo","rating":"9.2"},{"name":"P. Henrique","pos":"Atacante","rating":"7.9"},{"name":"N. De La Cruz","pos":"Meio-Campo","rating":"8.2"}],
    stats: [{"subject":"Ataque","value":81},{"subject":"Defesa","value":83},{"subject":"Tática","value":67},{"subject":"Finanças","value":68},{"subject":"Engajamento","value":69}],
    categories: [
      { name: "Direitos de TV", value: 477 },
      { name: "Patrocínios", value: 358 },
      { name: "Bilheteria", value: 179 },
      { name: "Sócio Torcedor", value: 119 },
      { name: "Transferências", value: 59 }
    ]
  },
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "/logos/palmeiras.png",
    position: 2,
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 1172, previousMonth: 1204, previousYear: 1060 },
    members: { current: 99905, previousMonth: 97429, previousYear: 81824 },
    attendance: { current: 43509, previousMonth: 46171, previousYear: 38494 },
    expenses: { current: 798, previousMonth: 757, previousYear: 615 },
    historicalRevenue: [{"month":"Jan","revenue":113,"expenses":57},{"month":"Fev","revenue":81,"expenses":54},{"month":"Mar","revenue":99,"expenses":75},{"month":"Abr","revenue":83,"expenses":80},{"month":"Mai","revenue":123,"expenses":55},{"month":"Jun","revenue":75,"expenses":59},{"month":"Jul","revenue":92,"expenses":51},{"month":"Ago","revenue":115,"expenses":81},{"month":"Set","revenue":122,"expenses":61},{"month":"Out","revenue":123,"expenses":66},{"month":"Nov","revenue":107,"expenses":55},{"month":"Dez","revenue":88,"expenses":62}],
    topPlayers: [{"name":"R. Veiga","pos":"Meio-Campo","rating":"9.3"},{"name":"Dudu","pos":"Atacante","rating":"8.0"},{"name":"E. Endrick","pos":"Atacante","rating":"8.4"}],
    stats: [{"subject":"Ataque","value":82},{"subject":"Defesa","value":81},{"subject":"Tática","value":87},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":84}],
    categories: [
      { name: "Direitos de TV", value: 469 },
      { name: "Patrocínios", value: 352 },
      { name: "Bilheteria", value: 176 },
      { name: "Sócio Torcedor", value: 117 },
      { name: "Transferências", value: 58 }
    ]
  },
  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "/logos/saopaulo.png",
    position: 3,
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 1221, previousMonth: 1064, previousYear: 1004 },
    members: { current: 97845, previousMonth: 92979, previousYear: 82749 },
    attendance: { current: 45134, previousMonth: 43670, previousYear: 33875 },
    expenses: { current: 760, previousMonth: 715, previousYear: 630 },
    historicalRevenue: [{"month":"Jan","revenue":101,"expenses":68},{"month":"Fev","revenue":116,"expenses":52},{"month":"Mar","revenue":76,"expenses":70},{"month":"Abr","revenue":115,"expenses":64},{"month":"Mai","revenue":114,"expenses":69},{"month":"Jun","revenue":72,"expenses":68},{"month":"Jul","revenue":117,"expenses":49},{"month":"Ago","revenue":83,"expenses":69},{"month":"Set","revenue":89,"expenses":56},{"month":"Out","revenue":92,"expenses":66},{"month":"Nov","revenue":115,"expenses":74},{"month":"Dez","revenue":82,"expenses":78}],
    topPlayers: [{"name":"J. Calleri","pos":"Atacante","rating":"9.1"},{"name":"L. Moura","pos":"Meio-Campo","rating":"8.9"},{"name":"W. Rato","pos":"Atacante","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":77},{"subject":"Defesa","value":88},{"subject":"Tática","value":90},{"subject":"Finanças","value":94},{"subject":"Engajamento","value":81}],
    categories: [
      { name: "Direitos de TV", value: 488 },
      { name: "Patrocínios", value: 366 },
      { name: "Bilheteria", value: 183 },
      { name: "Sócio Torcedor", value: 122 },
      { name: "Transferências", value: 62 }
    ]
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "/logos/corinthians.png",
    position: 4,
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 1101, previousMonth: 1032, previousYear: 914 },
    members: { current: 96400, previousMonth: 91945, previousYear: 75484 },
    attendance: { current: 43103, previousMonth: 43375, previousYear: 35447 },
    expenses: { current: 753, previousMonth: 744, previousYear: 581 },
    historicalRevenue: [{"month":"Jan","revenue":94,"expenses":55},{"month":"Fev","revenue":102,"expenses":47},{"month":"Mar","revenue":88,"expenses":51},{"month":"Abr","revenue":105,"expenses":49},{"month":"Mai","revenue":80,"expenses":48},{"month":"Jun","revenue":72,"expenses":77},{"month":"Jul","revenue":105,"expenses":59},{"month":"Ago","revenue":94,"expenses":59},{"month":"Set","revenue":98,"expenses":58},{"month":"Out","revenue":104,"expenses":63},{"month":"Nov","revenue":94,"expenses":66},{"month":"Dez","revenue":109,"expenses":57}],
    topPlayers: [{"name":"Yuri A.","pos":"Atacante","rating":"8.2"},{"name":"R. Garro","pos":"Meio-Campo","rating":"8.6"},{"name":"C. Miguel","pos":"Goleiro","rating":"8.0"}],
    stats: [{"subject":"Ataque","value":82},{"subject":"Defesa","value":69},{"subject":"Tática","value":82},{"subject":"Finanças","value":81},{"subject":"Engajamento","value":68}],
    categories: [
      { name: "Direitos de TV", value: 440 },
      { name: "Patrocínios", value: 330 },
      { name: "Bilheteria", value: 165 },
      { name: "Sócio Torcedor", value: 110 },
      { name: "Transferências", value: 56 }
    ]
  },
  {
    id: "fluminense",
    name: "Fluminense",
    logo: "/logos/fluminense.png",
    position: 5,
    colors: { primary: "#9f022f", secondary: "#006747" },
    revenue: { current: 1082, previousMonth: 967, previousYear: 904 },
    members: { current: 88751, previousMonth: 88784, previousYear: 74224 },
    attendance: { current: 42860, previousMonth: 41608, previousYear: 31866 },
    expenses: { current: 695, previousMonth: 680, previousYear: 586 },
    historicalRevenue: [{"month":"Jan","revenue":82,"expenses":61},{"month":"Fev","revenue":108,"expenses":68},{"month":"Mar","revenue":99,"expenses":49},{"month":"Abr","revenue":103,"expenses":62},{"month":"Mai","revenue":69,"expenses":71},{"month":"Jun","revenue":84,"expenses":50},{"month":"Jul","revenue":84,"expenses":63},{"month":"Ago","revenue":71,"expenses":69},{"month":"Set","revenue":66,"expenses":56},{"month":"Out","revenue":68,"expenses":77},{"month":"Nov","revenue":97,"expenses":60},{"month":"Dez","revenue":103,"expenses":59}],
    topPlayers: [{"name":"G. Cano","pos":"Atacante","rating":"9.2"},{"name":"J. Arias","pos":"Meio-Campo","rating":"7.7"},{"name":"Marcelo","pos":"Defensor","rating":"8.3"}],
    stats: [{"subject":"Ataque","value":86},{"subject":"Defesa","value":83},{"subject":"Tática","value":77},{"subject":"Finanças","value":85},{"subject":"Engajamento","value":74}],
    categories: [
      { name: "Direitos de TV", value: 433 },
      { name: "Patrocínios", value: 325 },
      { name: "Bilheteria", value: 162 },
      { name: "Sócio Torcedor", value: 108 },
      { name: "Transferências", value: 54 }
    ]
  },
  {
    id: "botafogo",
    name: "Botafogo",
    logo: "/logos/botafogo.png",
    position: 6,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 1071, previousMonth: 970, previousYear: 840 },
    members: { current: 87238, previousMonth: 87816, previousYear: 71768 },
    attendance: { current: 40486, previousMonth: 38424, previousYear: 32365 },
    expenses: { current: 657, previousMonth: 688, previousYear: 566 },
    historicalRevenue: [{"month":"Jan","revenue":101,"expenses":45},{"month":"Fev","revenue":100,"expenses":69},{"month":"Mar","revenue":88,"expenses":72},{"month":"Abr","revenue":80,"expenses":60},{"month":"Mai","revenue":69,"expenses":48},{"month":"Jun","revenue":104,"expenses":48},{"month":"Jul","revenue":101,"expenses":43},{"month":"Ago","revenue":91,"expenses":64},{"month":"Set","revenue":98,"expenses":47},{"month":"Out","revenue":92,"expenses":51},{"month":"Nov","revenue":74,"expenses":66},{"month":"Dez","revenue":90,"expenses":51}],
    topPlayers: [{"name":"T. Soares","pos":"Atacante","rating":"9.4"},{"name":"J. Savarino","pos":"Atacante","rating":"8.5"},{"name":"Lucas P.","pos":"Goleiro","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":65},{"subject":"Defesa","value":75},{"subject":"Tática","value":87},{"subject":"Finanças","value":74},{"subject":"Engajamento","value":89}],
    categories: [
      { name: "Direitos de TV", value: 428 },
      { name: "Patrocínios", value: 321 },
      { name: "Bilheteria", value: 161 },
      { name: "Sócio Torcedor", value: 107 },
      { name: "Transferências", value: 54 }
    ]
  },
  {
    id: "vasco",
    name: "Vasco da Gama",
    logo: "/logos/vasco.png",
    position: 7,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 946, previousMonth: 941, previousYear: 779 },
    members: { current: 83217, previousMonth: 76202, previousYear: 63467 },
    attendance: { current: 37187, previousMonth: 39338, previousYear: 31096 },
    expenses: { current: 623, previousMonth: 624, previousYear: 541 },
    historicalRevenue: [{"month":"Jan","revenue":79,"expenses":66},{"month":"Fev","revenue":87,"expenses":46},{"month":"Mar","revenue":77,"expenses":40},{"month":"Abr","revenue":67,"expenses":64},{"month":"Mai","revenue":69,"expenses":50},{"month":"Jun","revenue":83,"expenses":57},{"month":"Jul","revenue":70,"expenses":55},{"month":"Ago","revenue":90,"expenses":45},{"month":"Set","revenue":72,"expenses":67},{"month":"Out","revenue":84,"expenses":69},{"month":"Nov","revenue":93,"expenses":66},{"month":"Dez","revenue":100,"expenses":47}],
    topPlayers: [{"name":"P. Vegetti","pos":"Atacante","rating":"8.2"},{"name":"D. Payet","pos":"Meio-Campo","rating":"7.9"},{"name":"L. Jardim","pos":"Goleiro","rating":"7.5"}],
    stats: [{"subject":"Ataque","value":71},{"subject":"Defesa","value":81},{"subject":"Tática","value":65},{"subject":"Finanças","value":81},{"subject":"Engajamento","value":92}],
    categories: [
      { name: "Direitos de TV", value: 378 },
      { name: "Patrocínios", value: 284 },
      { name: "Bilheteria", value: 142 },
      { name: "Sócio Torcedor", value: 95 },
      { name: "Transferências", value: 47 }
    ]
  },
  {
    id: "gremio",
    name: "Grêmio",
    logo: "/logos/gremio.png",
    position: 8,
    colors: { primary: "#0d80bf", secondary: "#000000" },
    revenue: { current: 874, previousMonth: 880, previousYear: 742 },
    members: { current: 76133, previousMonth: 73066, previousYear: 58847 },
    attendance: { current: 37605, previousMonth: 37920, previousYear: 27952 },
    expenses: { current: 582, previousMonth: 603, previousYear: 473 },
    historicalRevenue: [{"month":"Jan","revenue":84,"expenses":60},{"month":"Fev","revenue":94,"expenses":59},{"month":"Mar","revenue":81,"expenses":55},{"month":"Abr","revenue":91,"expenses":66},{"month":"Mai","revenue":69,"expenses":57},{"month":"Jun","revenue":93,"expenses":48},{"month":"Jul","revenue":96,"expenses":61},{"month":"Ago","revenue":83,"expenses":61},{"month":"Set","revenue":94,"expenses":53},{"month":"Out","revenue":94,"expenses":55},{"month":"Nov","revenue":95,"expenses":63},{"month":"Dez","revenue":95,"expenses":43}],
    topPlayers: [{"name":"L. Suárez","pos":"Atacante","rating":"8.5"},{"name":"M. Villasanti","pos":"Meio-Campo","rating":"8.9"},{"name":"W. Kannemann","pos":"Defensor","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":91},{"subject":"Defesa","value":78},{"subject":"Tática","value":73},{"subject":"Finanças","value":78},{"subject":"Engajamento","value":72}],
    categories: [
      { name: "Direitos de TV", value: 350 },
      { name: "Patrocínios", value: 262 },
      { name: "Bilheteria", value: 131 },
      { name: "Sócio Torcedor", value: 87 },
      { name: "Transferências", value: 44 }
    ]
  },
  {
    id: "internacional",
    name: "Internacional",
    logo: "/logos/internacional.png",
    position: 9,
    colors: { primary: "#e5053a", secondary: "#ffffff" },
    revenue: { current: 834, previousMonth: 829, previousYear: 743 },
    members: { current: 71937, previousMonth: 68556, previousYear: 58516 },
    attendance: { current: 33234, previousMonth: 33265, previousYear: 27419 },
    expenses: { current: 550, previousMonth: 557, previousYear: 439 },
    historicalRevenue: [{"month":"Jan","revenue":75,"expenses":45},{"month":"Fev","revenue":86,"expenses":55},{"month":"Mar","revenue":56,"expenses":56},{"month":"Abr","revenue":82,"expenses":42},{"month":"Mai","revenue":65,"expenses":51},{"month":"Jun","revenue":78,"expenses":46},{"month":"Jul","revenue":66,"expenses":46},{"month":"Ago","revenue":85,"expenses":50},{"month":"Set","revenue":78,"expenses":37},{"month":"Out","revenue":57,"expenses":38},{"month":"Nov","revenue":66,"expenses":59},{"month":"Dez","revenue":67,"expenses":54}],
    topPlayers: [{"name":"A. Patrick","pos":"Meio-Campo","rating":"9.1"},{"name":"E. Valencia","pos":"Atacante","rating":"8.6"},{"name":"Wanderson","pos":"Atacante","rating":"8.0"}],
    stats: [{"subject":"Ataque","value":80},{"subject":"Defesa","value":80},{"subject":"Tática","value":85},{"subject":"Finanças","value":70},{"subject":"Engajamento","value":67}],
    categories: [
      { name: "Direitos de TV", value: 334 },
      { name: "Patrocínios", value: 250 },
      { name: "Bilheteria", value: 125 },
      { name: "Sócio Torcedor", value: 83 },
      { name: "Transferências", value: 42 }
    ]
  },
  {
    id: "atletico-mg",
    name: "Atlético Mineiro",
    logo: "/logos/atletico-mg.png",
    position: 10,
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 752, previousMonth: 783, previousYear: 652 },
    members: { current: 64619, previousMonth: 65618, previousYear: 57059 },
    attendance: { current: 31867, previousMonth: 31589, previousYear: 25241 },
    expenses: { current: 543, previousMonth: 542, previousYear: 417 },
    historicalRevenue: [{"month":"Jan","revenue":84,"expenses":50},{"month":"Fev","revenue":84,"expenses":47},{"month":"Mar","revenue":79,"expenses":49},{"month":"Abr","revenue":56,"expenses":53},{"month":"Mai","revenue":70,"expenses":45},{"month":"Jun","revenue":78,"expenses":56},{"month":"Jul","revenue":65,"expenses":38},{"month":"Ago","revenue":61,"expenses":44},{"month":"Set","revenue":68,"expenses":54},{"month":"Out","revenue":50,"expenses":35},{"month":"Nov","revenue":68,"expenses":35},{"month":"Dez","revenue":81,"expenses":38}],
    topPlayers: [{"name":"Hulk","pos":"Atacante","rating":"9.3"},{"name":"Paulinho","pos":"Atacante","rating":"8.5"},{"name":"G. Arana","pos":"Defensor","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":84},{"subject":"Defesa","value":65},{"subject":"Tática","value":77},{"subject":"Finanças","value":70},{"subject":"Engajamento","value":77}],
    categories: [
      { name: "Direitos de TV", value: 301 },
      { name: "Patrocínios", value: 226 },
      { name: "Bilheteria", value: 113 },
      { name: "Sócio Torcedor", value: 75 },
      { name: "Transferências", value: 37 }
    ]
  },
  {
    id: "cruzeiro",
    name: "Cruzeiro",
    logo: "/logos/cruzeiro.png",
    position: 11,
    colors: { primary: "#003a94", secondary: "#ffffff" },
    revenue: { current: 796, previousMonth: 790, previousYear: 699 },
    members: { current: 62264, previousMonth: 63848, previousYear: 48328 },
    attendance: { current: 30555, previousMonth: 31445, previousYear: 24301 },
    expenses: { current: 503, previousMonth: 494, previousYear: 431 },
    historicalRevenue: [{"month":"Jan","revenue":60,"expenses":36},{"month":"Fev","revenue":73,"expenses":45},{"month":"Mar","revenue":53,"expenses":56},{"month":"Abr","revenue":70,"expenses":55},{"month":"Mai","revenue":72,"expenses":40},{"month":"Jun","revenue":75,"expenses":49},{"month":"Jul","revenue":54,"expenses":53},{"month":"Ago","revenue":66,"expenses":34},{"month":"Set","revenue":72,"expenses":55},{"month":"Out","revenue":55,"expenses":35},{"month":"Nov","revenue":50,"expenses":38},{"month":"Dez","revenue":52,"expenses":42}],
    topPlayers: [{"name":"Matheus P.","pos":"Meio-Campo","rating":"9.1"},{"name":"A. Silva","pos":"Atacante","rating":"8.2"},{"name":"Wiliam","pos":"Atacante","rating":"7.9"}],
    stats: [{"subject":"Ataque","value":93},{"subject":"Defesa","value":74},{"subject":"Tática","value":94},{"subject":"Finanças","value":68},{"subject":"Engajamento","value":77}],
    categories: [
      { name: "Direitos de TV", value: 318 },
      { name: "Patrocínios", value: 239 },
      { name: "Bilheteria", value: 119 },
      { name: "Sócio Torcedor", value: 80 },
      { name: "Transferências", value: 40 }
    ]
  },
  {
    id: "athletico-pr",
    name: "Athletico-PR",
    logo: "/logos/athletico-pr.png",
    position: 12,
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 677, previousMonth: 703, previousYear: 566 },
    members: { current: 56055, previousMonth: 56841, previousYear: 46671 },
    attendance: { current: 28902, previousMonth: 28748, previousYear: 23842 },
    expenses: { current: 468, previousMonth: 467, previousYear: 384 },
    historicalRevenue: [{"month":"Jan","revenue":52,"expenses":39},{"month":"Fev","revenue":63,"expenses":32},{"month":"Mar","revenue":54,"expenses":37},{"month":"Abr","revenue":68,"expenses":38},{"month":"Mai","revenue":55,"expenses":53},{"month":"Jun","revenue":55,"expenses":32},{"month":"Jul","revenue":52,"expenses":43},{"month":"Ago","revenue":60,"expenses":51},{"month":"Set","revenue":69,"expenses":48},{"month":"Out","revenue":57,"expenses":36},{"month":"Nov","revenue":74,"expenses":43},{"month":"Dez","revenue":54,"expenses":34}],
    topPlayers: [{"name":"Fernandinho","pos":"Meio-Campo","rating":"8.1"},{"name":"Pablo","pos":"Atacante","rating":"8.4"},{"name":"Bento","pos":"Goleiro","rating":"7.8"}],
    stats: [{"subject":"Ataque","value":79},{"subject":"Defesa","value":77},{"subject":"Tática","value":80},{"subject":"Finanças","value":73},{"subject":"Engajamento","value":67}],
    categories: [
      { name: "Direitos de TV", value: 271 },
      { name: "Patrocínios", value: 203 },
      { name: "Bilheteria", value: 102 },
      { name: "Sócio Torcedor", value: 68 },
      { name: "Transferências", value: 33 }
    ]
  },
  {
    id: "bahia",
    name: "Bahia",
    logo: "/logos/bahia.png",
    position: 13,
    colors: { primary: "#003b7b", secondary: "#e50024" },
    revenue: { current: 642, previousMonth: 739, previousYear: 501 },
    members: { current: 53054, previousMonth: 52941, previousYear: 44664 },
    attendance: { current: 28881, previousMonth: 29267, previousYear: 22613 },
    expenses: { current: 457, previousMonth: 459, previousYear: 366 },
    historicalRevenue: [{"month":"Jan","revenue":69,"expenses":46},{"month":"Fev","revenue":53,"expenses":36},{"month":"Mar","revenue":50,"expenses":42},{"month":"Abr","revenue":42,"expenses":30},{"month":"Mai","revenue":55,"expenses":38},{"month":"Jun","revenue":50,"expenses":37},{"month":"Jul","revenue":53,"expenses":41},{"month":"Ago","revenue":43,"expenses":31},{"month":"Set","revenue":66,"expenses":31},{"month":"Out","revenue":68,"expenses":48},{"month":"Nov","revenue":50,"expenses":44},{"month":"Dez","revenue":52,"expenses":41}],
    topPlayers: [{"name":"E. Ribeiro","pos":"Meio-Campo","rating":"8.3"},{"name":"Cauly","pos":"Meio-Campo","rating":"8.6"},{"name":"Thaciano","pos":"Atacante","rating":"8.1"}],
    stats: [{"subject":"Ataque","value":86},{"subject":"Defesa","value":87},{"subject":"Tática","value":89},{"subject":"Finanças","value":81},{"subject":"Engajamento","value":93}],
    categories: [
      { name: "Direitos de TV", value: 257 },
      { name: "Patrocínios", value: 193 },
      { name: "Bilheteria", value: 96 },
      { name: "Sócio Torcedor", value: 64 },
      { name: "Transferências", value: 32 }
    ]
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    logo: "/logos/fortaleza.svg",
    position: 14,
    colors: { primary: "#122a6e", secondary: "#c10018" },
    revenue: { current: 584, previousMonth: 637, previousYear: 482 },
    members: { current: 52587, previousMonth: 52039, previousYear: 41433 },
    attendance: { current: 27333, previousMonth: 27231, previousYear: 20436 },
    expenses: { current: 434, previousMonth: 419, previousYear: 344 },
    historicalRevenue: [{"month":"Jan","revenue":44,"expenses":34},{"month":"Fev","revenue":50,"expenses":43},{"month":"Mar","revenue":51,"expenses":37},{"month":"Abr","revenue":51,"expenses":46},{"month":"Mai","revenue":49,"expenses":44},{"month":"Jun","revenue":62,"expenses":36},{"month":"Jul","revenue":66,"expenses":46},{"month":"Ago","revenue":53,"expenses":31},{"month":"Set","revenue":54,"expenses":43},{"month":"Out","revenue":52,"expenses":31},{"month":"Nov","revenue":48,"expenses":31},{"month":"Dez","revenue":58,"expenses":39}],
    topPlayers: [{"name":"J. Lucero","pos":"Atacante","rating":"8.4"},{"name":"Y. Pikachu","pos":"Meio-Campo","rating":"9.0"},{"name":"Tinga","pos":"Defensor","rating":"7.5"}],
    stats: [{"subject":"Ataque","value":65},{"subject":"Defesa","value":75},{"subject":"Tática","value":67},{"subject":"Finanças","value":80},{"subject":"Engajamento","value":88}],
    categories: [
      { name: "Direitos de TV", value: 234 },
      { name: "Patrocínios", value: 175 },
      { name: "Bilheteria", value: 88 },
      { name: "Sócio Torcedor", value: 58 },
      { name: "Transferências", value: 29 }
    ]
  },
  {
    id: "vitoria",
    name: "Vitória",
    logo: "/logos/vitoria.png",
    position: 15,
    colors: { primary: "#c10018", secondary: "#000000" },
    revenue: { current: 643, previousMonth: 637, previousYear: 461 },
    members: { current: 48063, previousMonth: 45175, previousYear: 36357 },
    attendance: { current: 25951, previousMonth: 25626, previousYear: 19938 },
    expenses: { current: 385, previousMonth: 390, previousYear: 326 },
    historicalRevenue: [{"month":"Jan","revenue":37,"expenses":33},{"month":"Fev","revenue":44,"expenses":35},{"month":"Mar","revenue":50,"expenses":39},{"month":"Abr","revenue":53,"expenses":32},{"month":"Mai","revenue":56,"expenses":31},{"month":"Jun","revenue":42,"expenses":32},{"month":"Jul","revenue":51,"expenses":37},{"month":"Ago","revenue":38,"expenses":26},{"month":"Set","revenue":44,"expenses":27},{"month":"Out","revenue":37,"expenses":42},{"month":"Nov","revenue":43,"expenses":37},{"month":"Dez","revenue":62,"expenses":26}],
    topPlayers: [{"name":"Osvaldo","pos":"Atacante","rating":"8.2"},{"name":"Z. Hugo","pos":"Defensor","rating":"8.0"},{"name":"W. Oliveira","pos":"Meio-Campo","rating":"8.0"}],
    stats: [{"subject":"Ataque","value":90},{"subject":"Defesa","value":69},{"subject":"Tática","value":67},{"subject":"Finanças","value":79},{"subject":"Engajamento","value":82}],
    categories: [
      { name: "Direitos de TV", value: 257 },
      { name: "Patrocínios", value: 193 },
      { name: "Bilheteria", value: 96 },
      { name: "Sócio Torcedor", value: 64 },
      { name: "Transferências", value: 33 }
    ]
  },
  {
    id: "juventude",
    name: "Juventude",
    logo: "/logos/juventude.svg",
    position: 16,
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 588, previousMonth: 552, previousYear: 421 },
    members: { current: 41828, previousMonth: 43635, previousYear: 32567 },
    attendance: { current: 23360, previousMonth: 24123, previousYear: 19074 },
    expenses: { current: 365, previousMonth: 376, previousYear: 299 },
    historicalRevenue: [{"month":"Jan","revenue":47,"expenses":30},{"month":"Fev","revenue":48,"expenses":34},{"month":"Mar","revenue":53,"expenses":39},{"month":"Abr","revenue":56,"expenses":26},{"month":"Mai","revenue":48,"expenses":36},{"month":"Jun","revenue":34,"expenses":24},{"month":"Jul","revenue":42,"expenses":25},{"month":"Ago","revenue":44,"expenses":34},{"month":"Set","revenue":48,"expenses":33},{"month":"Out","revenue":39,"expenses":38},{"month":"Nov","revenue":46,"expenses":26},{"month":"Dez","revenue":34,"expenses":26}],
    topPlayers: [{"name":"Nenê","pos":"Meio-Campo","rating":"9.0"},{"name":"G. Barbosa","pos":"Atacante","rating":"7.7"},{"name":"Jadson","pos":"Meio-Campo","rating":"7.6"}],
    stats: [{"subject":"Ataque","value":79},{"subject":"Defesa","value":70},{"subject":"Tática","value":70},{"subject":"Finanças","value":71},{"subject":"Engajamento","value":77}],
    categories: [
      { name: "Direitos de TV", value: 235 },
      { name: "Patrocínios", value: 176 },
      { name: "Bilheteria", value: 88 },
      { name: "Sócio Torcedor", value: 59 },
      { name: "Transferências", value: 30 }
    ]
  },
  {
    id: "atletico-go",
    name: "Atlético-GO",
    logo: "/logos/atletico-go.svg",
    position: 17,
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 495, previousMonth: 484, previousYear: 387 },
    members: { current: 36219, previousMonth: 37550, previousYear: 32176 },
    attendance: { current: 22433, previousMonth: 21527, previousYear: 16908 },
    expenses: { current: 332, previousMonth: 330, previousYear: 273 },
    historicalRevenue: [{"month":"Jan","revenue":47,"expenses":29},{"month":"Fev","revenue":48,"expenses":29},{"month":"Mar","revenue":31,"expenses":37},{"month":"Abr","revenue":49,"expenses":24},{"month":"Mai","revenue":50,"expenses":32},{"month":"Jun","revenue":47,"expenses":22},{"month":"Jul","revenue":45,"expenses":24},{"month":"Ago","revenue":39,"expenses":22},{"month":"Set","revenue":39,"expenses":27},{"month":"Out","revenue":39,"expenses":23},{"month":"Nov","revenue":35,"expenses":23},{"month":"Dez","revenue":47,"expenses":31}],
    topPlayers: [{"name":"L. Fernando","pos":"Atacante","rating":"8.7"},{"name":"S. Romero","pos":"Atacante","rating":"8.6"},{"name":"A. Cruz","pos":"Defensor","rating":"7.1"}],
    stats: [{"subject":"Ataque","value":76},{"subject":"Defesa","value":70},{"subject":"Tática","value":70},{"subject":"Finanças","value":83},{"subject":"Engajamento","value":91}],
    categories: [
      { name: "Direitos de TV", value: 198 },
      { name: "Patrocínios", value: 149 },
      { name: "Bilheteria", value: 74 },
      { name: "Sócio Torcedor", value: 50 },
      { name: "Transferências", value: 24 }
    ]
  },
  {
    id: "criciuma",
    name: "Criciúma",
    logo: "/logos/criciuma.svg",
    position: 18,
    colors: { primary: "#fcd116", secondary: "#000000" },
    revenue: { current: 494, previousMonth: 478, previousYear: 379 },
    members: { current: 33912, previousMonth: 34474, previousYear: 27833 },
    attendance: { current: 20007, previousMonth: 20001, previousYear: 15743 },
    expenses: { current: 320, previousMonth: 313, previousYear: 247 },
    historicalRevenue: [{"month":"Jan","revenue":41,"expenses":34},{"month":"Fev","revenue":46,"expenses":20},{"month":"Mar","revenue":35,"expenses":20},{"month":"Abr","revenue":41,"expenses":24},{"month":"Mai","revenue":43,"expenses":28},{"month":"Jun","revenue":47,"expenses":33},{"month":"Jul","revenue":36,"expenses":27},{"month":"Ago","revenue":44,"expenses":24},{"month":"Set","revenue":35,"expenses":31},{"month":"Out","revenue":40,"expenses":34},{"month":"Nov","revenue":49,"expenses":26},{"month":"Dez","revenue":46,"expenses":30}],
    topPlayers: [{"name":"Eder","pos":"Atacante","rating":"9.4"},{"name":"M. Hermes","pos":"Defensor","rating":"8.8"},{"name":"Y. Bolasie","pos":"Atacante","rating":"7.0"}],
    stats: [{"subject":"Ataque","value":91},{"subject":"Defesa","value":85},{"subject":"Tática","value":79},{"subject":"Finanças","value":87},{"subject":"Engajamento","value":75}],
    categories: [
      { name: "Direitos de TV", value: 198 },
      { name: "Patrocínios", value: 148 },
      { name: "Bilheteria", value: 74 },
      { name: "Sócio Torcedor", value: 49 },
      { name: "Transferências", value: 25 }
    ]
  },
  {
    id: "cuiaba",
    name: "Cuiabá",
    logo: "/logos/cuiaba.png",
    position: 19,
    colors: { primary: "#006437", secondary: "#ffd700" },
    revenue: { current: 403, previousMonth: 435, previousYear: 371 },
    members: { current: 30283, previousMonth: 30724, previousYear: 25108 },
    attendance: { current: 18766, previousMonth: 18169, previousYear: 14824 },
    expenses: { current: 276, previousMonth: 274, previousYear: 230 },
    historicalRevenue: [{"month":"Jan","revenue":42,"expenses":27},{"month":"Fev","revenue":30,"expenses":29},{"month":"Mar","revenue":35,"expenses":24},{"month":"Abr","revenue":32,"expenses":23},{"month":"Mai","revenue":28,"expenses":18},{"month":"Jun","revenue":30,"expenses":21},{"month":"Jul","revenue":39,"expenses":24},{"month":"Ago","revenue":38,"expenses":28},{"month":"Set","revenue":44,"expenses":26},{"month":"Out","revenue":32,"expenses":22},{"month":"Nov","revenue":34,"expenses":22},{"month":"Dez","revenue":28,"expenses":28}],
    topPlayers: [{"name":"Deyverson","pos":"Atacante","rating":"8.2"},{"name":"F. Marques","pos":"Meio-Campo","rating":"8.0"},{"name":"Walter","pos":"Goleiro","rating":"8.4"}],
    stats: [{"subject":"Ataque","value":77},{"subject":"Defesa","value":75},{"subject":"Tática","value":82},{"subject":"Finanças","value":80},{"subject":"Engajamento","value":83}],
    categories: [
      { name: "Direitos de TV", value: 161 },
      { name: "Patrocínios", value: 121 },
      { name: "Bilheteria", value: 60 },
      { name: "Sócio Torcedor", value: 40 },
      { name: "Transferências", value: 21 }
    ]
  },
  {
    id: "bragantino",
    name: "Red Bull Bragantino",
    logo: "/logos/bragantino.png",
    position: 20,
    colors: { primary: "#d80027", secondary: "#ffffff" },
    revenue: { current: 364, previousMonth: 359, previousYear: 295 },
    members: { current: 25744, previousMonth: 24258, previousYear: 20635 },
    attendance: { current: 16712, previousMonth: 17010, previousYear: 14115 },
    expenses: { current: 260, previousMonth: 260, previousYear: 203 },
    historicalRevenue: [{"month":"Jan","revenue":25,"expenses":16},{"month":"Fev","revenue":31,"expenses":26},{"month":"Mar","revenue":34,"expenses":17},{"month":"Abr","revenue":30,"expenses":20},{"month":"Mai","revenue":25,"expenses":18},{"month":"Jun","revenue":39,"expenses":20},{"month":"Jul","revenue":33,"expenses":25},{"month":"Ago","revenue":25,"expenses":27},{"month":"Set","revenue":36,"expenses":17},{"month":"Out","revenue":27,"expenses":19},{"month":"Nov","revenue":25,"expenses":19},{"month":"Dez","revenue":36,"expenses":18}],
    topPlayers: [{"name":"E. Sasha","pos":"Atacante","rating":"8.3"},{"name":"L. Cândido","pos":"Defensor","rating":"7.7"},{"name":"Cleiton","pos":"Goleiro","rating":"8.0"}],
    stats: [{"subject":"Ataque","value":84},{"subject":"Defesa","value":89},{"subject":"Tática","value":86},{"subject":"Finanças","value":84},{"subject":"Engajamento","value":94}],
    categories: [
      { name: "Direitos de TV", value: 146 },
      { name: "Patrocínios", value: 109 },
      { name: "Bilheteria", value: 55 },
      { name: "Sócio Torcedor", value: 36 },
      { name: "Transferências", value: 18 }
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
