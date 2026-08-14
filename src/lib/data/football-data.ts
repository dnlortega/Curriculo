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
}

export const footballTeams: FootballData[] = [
  {
    id: "flamengo",
    name: "Flamengo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png",
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1257, previousMonth: 1193, previousYear: 974 },
    members: { current: 105763, previousMonth: 105904, previousYear: 85094 },
    attendance: { current: 49482, previousMonth: 48045, previousYear: 37410 },
    expenses: { current: 774, previousMonth: 802, previousYear: 626 },
    historicalRevenue: [{"month":"Jan","revenue":125,"expenses":65},{"month":"Fev","revenue":110,"expenses":89},{"month":"Mar","revenue":121,"expenses":73},{"month":"Abr","revenue":107,"expenses":52},{"month":"Mai","revenue":74,"expenses":82},{"month":"Jun","revenue":82,"expenses":63},{"month":"Jul","revenue":79,"expenses":86},{"month":"Ago","revenue":86,"expenses":67},{"month":"Set","revenue":90,"expenses":88},{"month":"Out","revenue":96,"expenses":66},{"month":"Nov","revenue":113,"expenses":53},{"month":"Dez","revenue":87,"expenses":64}],
    categories: [
      { name: "Direitos de TV", value: 503 },
      { name: "Patrocínios", value: 377 },
      { name: "Bilheteria", value: 189 },
      { name: "Sócio Torcedor", value: 126 },
      { name: "Transferências", value: 62 }
    ]
  },\n  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 1197, previousMonth: 1069, previousYear: 853 },
    members: { current: 98621, previousMonth: 96714, previousYear: 83513 },
    attendance: { current: 45738, previousMonth: 44567, previousYear: 35519 },
    expenses: { current: 749, previousMonth: 810, previousYear: 654 },
    historicalRevenue: [{"month":"Jan","revenue":103,"expenses":55},{"month":"Fev","revenue":97,"expenses":68},{"month":"Mar","revenue":109,"expenses":68},{"month":"Abr","revenue":71,"expenses":59},{"month":"Mai","revenue":77,"expenses":55},{"month":"Jun","revenue":79,"expenses":67},{"month":"Jul","revenue":81,"expenses":58},{"month":"Ago","revenue":85,"expenses":79},{"month":"Set","revenue":107,"expenses":52},{"month":"Out","revenue":86,"expenses":84},{"month":"Nov","revenue":86,"expenses":79},{"month":"Dez","revenue":73,"expenses":77}],
    categories: [
      { name: "Direitos de TV", value: 479 },
      { name: "Patrocínios", value: 359 },
      { name: "Bilheteria", value: 180 },
      { name: "Sócio Torcedor", value: 120 },
      { name: "Transferências", value: 59 }
    ]
  },\n  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/S%C3%A3o_Paulo_Futebol_Clube.svg/1200px-S%C3%A3o_Paulo_Futebol_Clube.svg.png",
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 1185, previousMonth: 1217, previousYear: 828 },
    members: { current: 95973, previousMonth: 92162, previousYear: 75814 },
    attendance: { current: 45301, previousMonth: 45896, previousYear: 34261 },
    expenses: { current: 721, previousMonth: 774, previousYear: 583 },
    historicalRevenue: [{"month":"Jan","revenue":112,"expenses":60},{"month":"Fev","revenue":116,"expenses":67},{"month":"Mar","revenue":111,"expenses":72},{"month":"Abr","revenue":79,"expenses":62},{"month":"Mai","revenue":88,"expenses":71},{"month":"Jun","revenue":78,"expenses":83},{"month":"Jul","revenue":97,"expenses":82},{"month":"Ago","revenue":80,"expenses":79},{"month":"Set","revenue":105,"expenses":73},{"month":"Out","revenue":107,"expenses":78},{"month":"Nov","revenue":104,"expenses":53},{"month":"Dez","revenue":112,"expenses":54}],
    categories: [
      { name: "Direitos de TV", value: 474 },
      { name: "Patrocínios", value: 356 },
      { name: "Bilheteria", value: 178 },
      { name: "Sócio Torcedor", value: 119 },
      { name: "Transferências", value: 58 }
    ]
  },\n  {
    id: "corinthians",
    name: "Corinthians",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/1200px-Corinthians_simbolo.png",
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 1071, previousMonth: 1018, previousYear: 917 },
    members: { current: 89550, previousMonth: 94530, previousYear: 76240 },
    attendance: { current: 41284, previousMonth: 41873, previousYear: 36137 },
    expenses: { current: 699, previousMonth: 748, previousYear: 616 },
    historicalRevenue: [{"month":"Jan","revenue":90,"expenses":57},{"month":"Fev","revenue":109,"expenses":51},{"month":"Mar","revenue":107,"expenses":56},{"month":"Abr","revenue":90,"expenses":78},{"month":"Mai","revenue":89,"expenses":73},{"month":"Jun","revenue":80,"expenses":65},{"month":"Jul","revenue":107,"expenses":51},{"month":"Ago","revenue":83,"expenses":80},{"month":"Set","revenue":92,"expenses":59},{"month":"Out","revenue":66,"expenses":47},{"month":"Nov","revenue":107,"expenses":66},{"month":"Dez","revenue":77,"expenses":55}],
    categories: [
      { name: "Direitos de TV", value: 428 },
      { name: "Patrocínios", value: 321 },
      { name: "Bilheteria", value: 161 },
      { name: "Sócio Torcedor", value: 107 },
      { name: "Transferências", value: 54 }
    ]
  },\n  {
    id: "fluminense",
    name: "Fluminense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fluminense_FC_escudo.png/800px-Fluminense_FC_escudo.png",
    colors: { primary: "#9f022f", secondary: "#006747" },
    revenue: { current: 1047, previousMonth: 1003, previousYear: 800 },
    members: { current: 92235, previousMonth: 87197, previousYear: 67909 },
    attendance: { current: 39086, previousMonth: 39754, previousYear: 33913 },
    expenses: { current: 678, previousMonth: 716, previousYear: 572 },
    historicalRevenue: [{"month":"Jan","revenue":63,"expenses":60},{"month":"Fev","revenue":80,"expenses":73},{"month":"Mar","revenue":98,"expenses":77},{"month":"Abr","revenue":99,"expenses":64},{"month":"Mai","revenue":89,"expenses":60},{"month":"Jun","revenue":108,"expenses":47},{"month":"Jul","revenue":71,"expenses":73},{"month":"Ago","revenue":99,"expenses":47},{"month":"Set","revenue":108,"expenses":63},{"month":"Out","revenue":67,"expenses":50},{"month":"Nov","revenue":82,"expenses":70},{"month":"Dez","revenue":79,"expenses":57}],
    categories: [
      { name: "Direitos de TV", value: 419 },
      { name: "Patrocínios", value: 314 },
      { name: "Bilheteria", value: 157 },
      { name: "Sócio Torcedor", value: 105 },
      { name: "Transferências", value: 52 }
    ]
  },\n  {
    id: "botafogo",
    name: "Botafogo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 939, previousMonth: 934, previousYear: 885 },
    members: { current: 85572, previousMonth: 86279, previousYear: 66174 },
    attendance: { current: 41192, previousMonth: 38432, previousYear: 33712 },
    expenses: { current: 685, previousMonth: 671, previousYear: 519 },
    historicalRevenue: [{"month":"Jan","revenue":86,"expenses":46},{"month":"Fev","revenue":81,"expenses":42},{"month":"Mar","revenue":78,"expenses":70},{"month":"Abr","revenue":73,"expenses":63},{"month":"Mai","revenue":86,"expenses":62},{"month":"Jun","revenue":95,"expenses":43},{"month":"Jul","revenue":84,"expenses":73},{"month":"Ago","revenue":84,"expenses":69},{"month":"Set","revenue":76,"expenses":60},{"month":"Out","revenue":103,"expenses":55},{"month":"Nov","revenue":100,"expenses":65},{"month":"Dez","revenue":102,"expenses":48}],
    categories: [
      { name: "Direitos de TV", value: 376 },
      { name: "Patrocínios", value: 282 },
      { name: "Bilheteria", value: 141 },
      { name: "Sócio Torcedor", value: 94 },
      { name: "Transferências", value: 46 }
    ]
  },\n  {
    id: "vasco",
    name: "Vasco da Gama",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/1200px-CRVascodaGama.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 969, previousMonth: 983, previousYear: 742 },
    members: { current: 82646, previousMonth: 76941, previousYear: 61976 },
    attendance: { current: 39330, previousMonth: 39219, previousYear: 32140 },
    expenses: { current: 647, previousMonth: 656, previousYear: 494 },
    historicalRevenue: [{"month":"Jan","revenue":60,"expenses":45},{"month":"Fev","revenue":70,"expenses":44},{"month":"Mar","revenue":64,"expenses":62},{"month":"Abr","revenue":91,"expenses":64},{"month":"Mai","revenue":66,"expenses":46},{"month":"Jun","revenue":78,"expenses":58},{"month":"Jul","revenue":79,"expenses":64},{"month":"Ago","revenue":92,"expenses":59},{"month":"Set","revenue":89,"expenses":47},{"month":"Out","revenue":78,"expenses":59},{"month":"Nov","revenue":72,"expenses":67},{"month":"Dez","revenue":87,"expenses":47}],
    categories: [
      { name: "Direitos de TV", value: 388 },
      { name: "Patrocínios", value: 291 },
      { name: "Bilheteria", value: 145 },
      { name: "Sócio Torcedor", value: 97 },
      { name: "Transferências", value: 48 }
    ]
  },\n  {
    id: "gremio",
    name: "Grêmio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gremio_logo.svg/1200px-Gremio_logo.svg.png",
    colors: { primary: "#0d80bf", secondary: "#000000" },
    revenue: { current: 842, previousMonth: 950, previousYear: 664 },
    members: { current: 74683, previousMonth: 77317, previousYear: 60459 },
    attendance: { current: 37487, previousMonth: 36759, previousYear: 29386 },
    expenses: { current: 619, previousMonth: 629, previousYear: 491 },
    historicalRevenue: [{"month":"Jan","revenue":76,"expenses":54},{"month":"Fev","revenue":79,"expenses":41},{"month":"Mar","revenue":95,"expenses":57},{"month":"Abr","revenue":75,"expenses":61},{"month":"Mai","revenue":80,"expenses":53},{"month":"Jun","revenue":67,"expenses":41},{"month":"Jul","revenue":82,"expenses":39},{"month":"Ago","revenue":87,"expenses":44},{"month":"Set","revenue":62,"expenses":45},{"month":"Out","revenue":79,"expenses":60},{"month":"Nov","revenue":64,"expenses":54},{"month":"Dez","revenue":59,"expenses":44}],
    categories: [
      { name: "Direitos de TV", value: 337 },
      { name: "Patrocínios", value: 253 },
      { name: "Bilheteria", value: 126 },
      { name: "Sócio Torcedor", value: 84 },
      { name: "Transferências", value: 42 }
    ]
  },\n  {
    id: "internacional",
    name: "Internacional",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png",
    colors: { primary: "#e5053a", secondary: "#ffffff" },
    revenue: { current: 789, previousMonth: 804, previousYear: 705 },
    members: { current: 74719, previousMonth: 71490, previousYear: 59327 },
    attendance: { current: 33791, previousMonth: 33172, previousYear: 27102 },
    expenses: { current: 586, previousMonth: 585, previousYear: 455 },
    historicalRevenue: [{"month":"Jan","revenue":85,"expenses":43},{"month":"Fev","revenue":83,"expenses":63},{"month":"Mar","revenue":58,"expenses":61},{"month":"Abr","revenue":66,"expenses":47},{"month":"Mai","revenue":73,"expenses":59},{"month":"Jun","revenue":77,"expenses":47},{"month":"Jul","revenue":65,"expenses":39},{"month":"Ago","revenue":84,"expenses":41},{"month":"Set","revenue":56,"expenses":57},{"month":"Out","revenue":87,"expenses":40},{"month":"Nov","revenue":54,"expenses":63},{"month":"Dez","revenue":64,"expenses":46}],
    categories: [
      { name: "Direitos de TV", value: 316 },
      { name: "Patrocínios", value: 237 },
      { name: "Bilheteria", value: 118 },
      { name: "Sócio Torcedor", value: 79 },
      { name: "Transferências", value: 39 }
    ]
  },\n  {
    id: "atletico-mg",
    name: "Atlético Mineiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/1200px-Atletico_mineiro_galo.png",
    colors: { primary: "#000000", secondary: "#ffffff" },
    revenue: { current: 749, previousMonth: 774, previousYear: 668 },
    members: { current: 64391, previousMonth: 69810, previousYear: 57426 },
    attendance: { current: 33907, previousMonth: 33621, previousYear: 25641 },
    expenses: { current: 567, previousMonth: 568, previousYear: 418 },
    historicalRevenue: [{"month":"Jan","revenue":49,"expenses":47},{"month":"Fev","revenue":57,"expenses":42},{"month":"Mar","revenue":51,"expenses":50},{"month":"Abr","revenue":55,"expenses":53},{"month":"Mai","revenue":79,"expenses":49},{"month":"Jun","revenue":77,"expenses":41},{"month":"Jul","revenue":63,"expenses":59},{"month":"Ago","revenue":75,"expenses":51},{"month":"Set","revenue":72,"expenses":60},{"month":"Out","revenue":59,"expenses":39},{"month":"Nov","revenue":50,"expenses":40},{"month":"Dez","revenue":56,"expenses":42}],
    categories: [
      { name: "Direitos de TV", value: 300 },
      { name: "Patrocínios", value: 225 },
      { name: "Bilheteria", value: 112 },
      { name: "Sócio Torcedor", value: 75 },
      { name: "Transferências", value: 37 }
    ]
  },\n  {
    id: "cruzeiro",
    name: "Cruzeiro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/1200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
    colors: { primary: "#003a94", secondary: "#ffffff" },
    revenue: { current: 815, previousMonth: 744, previousYear: 576 },
    members: { current: 65323, previousMonth: 65383, previousYear: 50683 },
    attendance: { current: 31020, previousMonth: 30908, previousYear: 24765 },
    expenses: { current: 491, previousMonth: 524, previousYear: 421 },
    historicalRevenue: [{"month":"Jan","revenue":48,"expenses":38},{"month":"Fev","revenue":77,"expenses":33},{"month":"Mar","revenue":49,"expenses":39},{"month":"Abr","revenue":62,"expenses":36},{"month":"Mai","revenue":57,"expenses":37},{"month":"Jun","revenue":63,"expenses":50},{"month":"Jul","revenue":57,"expenses":42},{"month":"Ago","revenue":78,"expenses":34},{"month":"Set","revenue":56,"expenses":50},{"month":"Out","revenue":58,"expenses":53},{"month":"Nov","revenue":49,"expenses":33},{"month":"Dez","revenue":62,"expenses":56}],
    categories: [
      { name: "Direitos de TV", value: 326 },
      { name: "Patrocínios", value: 245 },
      { name: "Bilheteria", value: 122 },
      { name: "Sócio Torcedor", value: 82 },
      { name: "Transferências", value: 40 }
    ]
  },\n  {
    id: "athletico-pr",
    name: "Athletico-PR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Athletico_Paranaense.svg/1200px-CA_Athletico_Paranaense.svg.png",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 715, previousMonth: 780, previousYear: 628 },
    members: { current: 58312, previousMonth: 59163, previousYear: 49247 },
    attendance: { current: 30324, previousMonth: 29452, previousYear: 24357 },
    expenses: { current: 476, previousMonth: 467, previousYear: 377 },
    historicalRevenue: [{"month":"Jan","revenue":53,"expenses":36},{"month":"Fev","revenue":71,"expenses":54},{"month":"Mar","revenue":67,"expenses":53},{"month":"Abr","revenue":56,"expenses":49},{"month":"Mai","revenue":45,"expenses":48},{"month":"Jun","revenue":53,"expenses":47},{"month":"Jul","revenue":66,"expenses":48},{"month":"Ago","revenue":54,"expenses":51},{"month":"Set","revenue":58,"expenses":52},{"month":"Out","revenue":72,"expenses":42},{"month":"Nov","revenue":53,"expenses":42},{"month":"Dez","revenue":58,"expenses":35}],
    categories: [
      { name: "Direitos de TV", value: 286 },
      { name: "Patrocínios", value: 215 },
      { name: "Bilheteria", value: 107 },
      { name: "Sócio Torcedor", value: 72 },
      { name: "Transferências", value: 35 }
    ]
  },\n  {
    id: "bahia",
    name: "Bahia",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Esporte_Clube_Bahia_logo.svg/1200px-Esporte_Clube_Bahia_logo.svg.png",
    colors: { primary: "#003b7b", secondary: "#e50024" },
    revenue: { current: 726, previousMonth: 666, previousYear: 581 },
    members: { current: 56986, previousMonth: 56927, previousYear: 43021 },
    attendance: { current: 29066, previousMonth: 29227, previousYear: 22826 },
    expenses: { current: 463, previousMonth: 477, previousYear: 368 },
    historicalRevenue: [{"month":"Jan","revenue":70,"expenses":35},{"month":"Fev","revenue":67,"expenses":42},{"month":"Mar","revenue":50,"expenses":46},{"month":"Abr","revenue":60,"expenses":47},{"month":"Mai","revenue":43,"expenses":30},{"month":"Jun","revenue":43,"expenses":50},{"month":"Jul","revenue":58,"expenses":35},{"month":"Ago","revenue":57,"expenses":47},{"month":"Set","revenue":45,"expenses":36},{"month":"Out","revenue":49,"expenses":48},{"month":"Nov","revenue":60,"expenses":39},{"month":"Dez","revenue":58,"expenses":30}],
    categories: [
      { name: "Direitos de TV", value: 290 },
      { name: "Patrocínios", value: 218 },
      { name: "Bilheteria", value: 109 },
      { name: "Sócio Torcedor", value: 73 },
      { name: "Transferências", value: 36 }
    ]
  },\n  {
    id: "fortaleza",
    name: "Fortaleza",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fortaleza_Esporte_Clube_logo.svg/1200px-Fortaleza_Esporte_Clube_logo.svg.png",
    colors: { primary: "#122a6e", secondary: "#c10018" },
    revenue: { current: 645, previousMonth: 621, previousYear: 568 },
    members: { current: 50906, previousMonth: 52025, previousYear: 39146 },
    attendance: { current: 27176, previousMonth: 26396, previousYear: 21746 },
    expenses: { current: 421, previousMonth: 408, previousYear: 340 },
    historicalRevenue: [{"month":"Jan","revenue":61,"expenses":32},{"month":"Fev","revenue":68,"expenses":41},{"month":"Mar","revenue":50,"expenses":28},{"month":"Abr","revenue":50,"expenses":30},{"month":"Mai","revenue":39,"expenses":36},{"month":"Jun","revenue":62,"expenses":29},{"month":"Jul","revenue":62,"expenses":36},{"month":"Ago","revenue":53,"expenses":42},{"month":"Set","revenue":43,"expenses":31},{"month":"Out","revenue":48,"expenses":32},{"month":"Nov","revenue":65,"expenses":32},{"month":"Dez","revenue":44,"expenses":40}],
    categories: [
      { name: "Direitos de TV", value: 258 },
      { name: "Patrocínios", value: 194 },
      { name: "Bilheteria", value: 97 },
      { name: "Sócio Torcedor", value: 65 },
      { name: "Transferências", value: 31 }
    ]
  },\n  {
    id: "vitoria",
    name: "Vitória",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Esporte_Clube_Vit%C3%B3ria_logo.svg/1200px-Esporte_Clube_Vit%C3%B3ria_logo.svg.png",
    colors: { primary: "#c10018", secondary: "#000000" },
    revenue: { current: 627, previousMonth: 608, previousYear: 495 },
    members: { current: 47483, previousMonth: 46843, previousYear: 36007 },
    attendance: { current: 25465, previousMonth: 24812, previousYear: 19790 },
    expenses: { current: 405, previousMonth: 395, previousYear: 309 },
    historicalRevenue: [{"month":"Jan","revenue":42,"expenses":29},{"month":"Fev","revenue":36,"expenses":41},{"month":"Mar","revenue":52,"expenses":28},{"month":"Abr","revenue":39,"expenses":33},{"month":"Mai","revenue":49,"expenses":28},{"month":"Jun","revenue":40,"expenses":34},{"month":"Jul","revenue":55,"expenses":39},{"month":"Ago","revenue":38,"expenses":30},{"month":"Set","revenue":37,"expenses":32},{"month":"Out","revenue":60,"expenses":44},{"month":"Nov","revenue":49,"expenses":32},{"month":"Dez","revenue":43,"expenses":44}],
    categories: [
      { name: "Direitos de TV", value: 251 },
      { name: "Patrocínios", value: 188 },
      { name: "Bilheteria", value: 94 },
      { name: "Sócio Torcedor", value: 63 },
      { name: "Transferências", value: 31 }
    ]
  },\n  {
    id: "juventude",
    name: "Juventude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Esporte_Clube_Juventude_logo.svg/1200px-Esporte_Clube_Juventude_logo.svg.png",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 514, previousMonth: 517, previousYear: 488 },
    members: { current: 41732, previousMonth: 42746, previousYear: 34114 },
    attendance: { current: 23149, previousMonth: 24466, previousYear: 19810 },
    expenses: { current: 366, previousMonth: 354, previousYear: 310 },
    historicalRevenue: [{"month":"Jan","revenue":49,"expenses":32},{"month":"Fev","revenue":50,"expenses":33},{"month":"Mar","revenue":38,"expenses":37},{"month":"Abr","revenue":54,"expenses":34},{"month":"Mai","revenue":43,"expenses":31},{"month":"Jun","revenue":36,"expenses":29},{"month":"Jul","revenue":41,"expenses":35},{"month":"Ago","revenue":46,"expenses":33},{"month":"Set","revenue":53,"expenses":39},{"month":"Out","revenue":57,"expenses":36},{"month":"Nov","revenue":58,"expenses":38},{"month":"Dez","revenue":57,"expenses":24}],
    categories: [
      { name: "Direitos de TV", value: 206 },
      { name: "Patrocínios", value: 154 },
      { name: "Bilheteria", value: 77 },
      { name: "Sócio Torcedor", value: 51 },
      { name: "Transferências", value: 26 }
    ]
  },\n  {
    id: "atletico-go",
    name: "Atlético-GO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Atl%C3%A9tico_Goianiense.svg/1200px-Atl%C3%A9tico_Goianiense.svg.png",
    colors: { primary: "#c8102e", secondary: "#000000" },
    revenue: { current: 551, previousMonth: 530, previousYear: 419 },
    members: { current: 36413, previousMonth: 38775, previousYear: 29208 },
    attendance: { current: 21878, previousMonth: 22886, previousYear: 17799 },
    expenses: { current: 324, previousMonth: 351, previousYear: 274 },
    historicalRevenue: [{"month":"Jan","revenue":42,"expenses":24},{"month":"Fev","revenue":44,"expenses":35},{"month":"Mar","revenue":48,"expenses":32},{"month":"Abr","revenue":31,"expenses":24},{"month":"Mai","revenue":51,"expenses":35},{"month":"Jun","revenue":41,"expenses":23},{"month":"Jul","revenue":47,"expenses":28},{"month":"Ago","revenue":42,"expenses":24},{"month":"Set","revenue":35,"expenses":24},{"month":"Out","revenue":47,"expenses":31},{"month":"Nov","revenue":42,"expenses":29},{"month":"Dez","revenue":34,"expenses":31}],
    categories: [
      { name: "Direitos de TV", value: 220 },
      { name: "Patrocínios", value: 165 },
      { name: "Bilheteria", value: 83 },
      { name: "Sócio Torcedor", value: 55 },
      { name: "Transferências", value: 28 }
    ]
  },\n  {
    id: "criciuma",
    name: "Criciúma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Criciuma_Esporte_Clube.svg/1200px-Criciuma_Esporte_Clube.svg.png",
    colors: { primary: "#fcd116", secondary: "#000000" },
    revenue: { current: 473, previousMonth: 503, previousYear: 366 },
    members: { current: 34461, previousMonth: 33107, previousYear: 27362 },
    attendance: { current: 21229, previousMonth: 21070, previousYear: 16081 },
    expenses: { current: 315, previousMonth: 305, previousYear: 237 },
    historicalRevenue: [{"month":"Jan","revenue":46,"expenses":32},{"month":"Fev","revenue":40,"expenses":25},{"month":"Mar","revenue":37,"expenses":26},{"month":"Abr","revenue":37,"expenses":27},{"month":"Mai","revenue":29,"expenses":30},{"month":"Jun","revenue":29,"expenses":31},{"month":"Jul","revenue":30,"expenses":33},{"month":"Ago","revenue":37,"expenses":20},{"month":"Set","revenue":45,"expenses":23},{"month":"Out","revenue":35,"expenses":23},{"month":"Nov","revenue":43,"expenses":27},{"month":"Dez","revenue":41,"expenses":23}],
    categories: [
      { name: "Direitos de TV", value: 189 },
      { name: "Patrocínios", value: 142 },
      { name: "Bilheteria", value: 71 },
      { name: "Sócio Torcedor", value: 47 },
      { name: "Transferências", value: 24 }
    ]
  },\n  {
    id: "cuiaba",
    name: "Cuiabá",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Cuiab%C3%A1_Esporte_Clube.svg/1200px-Cuiab%C3%A1_Esporte_Clube.svg.png",
    colors: { primary: "#006437", secondary: "#ffd700" },
    revenue: { current: 415, previousMonth: 426, previousYear: 361 },
    members: { current: 28439, previousMonth: 30081, previousYear: 22731 },
    attendance: { current: 19338, previousMonth: 18137, previousYear: 15152 },
    expenses: { current: 283, previousMonth: 269, previousYear: 236 },
    historicalRevenue: [{"month":"Jan","revenue":38,"expenses":19},{"month":"Fev","revenue":32,"expenses":25},{"month":"Mar","revenue":44,"expenses":27},{"month":"Abr","revenue":34,"expenses":21},{"month":"Mai","revenue":39,"expenses":23},{"month":"Jun","revenue":44,"expenses":25},{"month":"Jul","revenue":40,"expenses":27},{"month":"Ago","revenue":36,"expenses":23},{"month":"Set","revenue":33,"expenses":22},{"month":"Out","revenue":27,"expenses":29},{"month":"Nov","revenue":42,"expenses":23},{"month":"Dez","revenue":34,"expenses":29}],
    categories: [
      { name: "Direitos de TV", value: 166 },
      { name: "Patrocínios", value: 125 },
      { name: "Bilheteria", value: 62 },
      { name: "Sócio Torcedor", value: 42 },
      { name: "Transferências", value: 20 }
    ]
  },\n  {
    id: "bragantino",
    name: "Red Bull Bragantino",
    logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Escudo_do_Red_Bull_Bragantino.png/1200px-Escudo_do_Red_Bull_Bragantino.png",
    colors: { primary: "#d80027", secondary: "#ffffff" },
    revenue: { current: 405, previousMonth: 355, previousYear: 278 },
    members: { current: 25758, previousMonth: 24934, previousYear: 19708 },
    attendance: { current: 16670, previousMonth: 18039, previousYear: 14616 },
    expenses: { current: 260, previousMonth: 242, previousYear: 198 },
    historicalRevenue: [{"month":"Jan","revenue":27,"expenses":21},{"month":"Fev","revenue":39,"expenses":27},{"month":"Mar","revenue":37,"expenses":18},{"month":"Abr","revenue":31,"expenses":23},{"month":"Mai","revenue":28,"expenses":18},{"month":"Jun","revenue":35,"expenses":16},{"month":"Jul","revenue":27,"expenses":24},{"month":"Ago","revenue":35,"expenses":25},{"month":"Set","revenue":28,"expenses":16},{"month":"Out","revenue":24,"expenses":28},{"month":"Nov","revenue":23,"expenses":22},{"month":"Dez","revenue":27,"expenses":24}],
    categories: [
      { name: "Direitos de TV", value: 162 },
      { name: "Patrocínios", value: 122 },
      { name: "Bilheteria", value: 61 },
      { name: "Sócio Torcedor", value: 41 },
      { name: "Transferências", value: 19 }
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
