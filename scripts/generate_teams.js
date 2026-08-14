const fs = require('fs');

const teamsInfo = [
  { id: "flamengo", name: "Flamengo", color1: "#c52424", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png" },
  { id: "palmeiras", name: "Palmeiras", color1: "#006437", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png" },
  { id: "saopaulo", name: "São Paulo", color1: "#fe0000", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/S%C3%A3o_Paulo_Futebol_Clube.svg/1200px-S%C3%A3o_Paulo_Futebol_Clube.svg.png" },
  { id: "corinthians", name: "Corinthians", color1: "#ffffff", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/1200px-Corinthians_simbolo.png" },
  { id: "fluminense", name: "Fluminense", color1: "#9f022f", color2: "#006747", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fluminense_FC_escudo.png/800px-Fluminense_FC_escudo.png" },
  { id: "botafogo", name: "Botafogo", color1: "#000000", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png" },
  { id: "vasco", name: "Vasco da Gama", color1: "#000000", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/1200px-CRVascodaGama.png" },
  { id: "gremio", name: "Grêmio", color1: "#0d80bf", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gremio_logo.svg/1200px-Gremio_logo.svg.png" },
  { id: "internacional", name: "Internacional", color1: "#e5053a", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png" },
  { id: "atletico-mg", name: "Atlético Mineiro", color1: "#000000", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/1200px-Atletico_mineiro_galo.png" },
  { id: "cruzeiro", name: "Cruzeiro", color1: "#003a94", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/1200px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png" },
  { id: "athletico-pr", name: "Athletico-PR", color1: "#c8102e", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CA_Athletico_Paranaense.svg/1200px-CA_Athletico_Paranaense.svg.png" },
  { id: "bahia", name: "Bahia", color1: "#003b7b", color2: "#e50024", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Esporte_Clube_Bahia_logo.svg/1200px-Esporte_Clube_Bahia_logo.svg.png" },
  { id: "fortaleza", name: "Fortaleza", color1: "#122a6e", color2: "#c10018", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fortaleza_Esporte_Clube_logo.svg/1200px-Fortaleza_Esporte_Clube_logo.svg.png" },
  { id: "vitoria", name: "Vitória", color1: "#c10018", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Esporte_Clube_Vit%C3%B3ria_logo.svg/1200px-Esporte_Clube_Vit%C3%B3ria_logo.svg.png" },
  { id: "juventude", name: "Juventude", color1: "#006437", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Esporte_Clube_Juventude_logo.svg/1200px-Esporte_Clube_Juventude_logo.svg.png" },
  { id: "atletico-go", name: "Atlético-GO", color1: "#c8102e", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Atl%C3%A9tico_Goianiense.svg/1200px-Atl%C3%A9tico_Goianiense.svg.png" },
  { id: "criciuma", name: "Criciúma", color1: "#fcd116", color2: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Criciuma_Esporte_Clube.svg/1200px-Criciuma_Esporte_Clube.svg.png" },
  { id: "cuiaba", name: "Cuiabá", color1: "#006437", color2: "#ffd700", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Cuiab%C3%A1_Esporte_Clube.svg/1200px-Cuiab%C3%A1_Esporte_Clube.svg.png" },
  { id: "bragantino", name: "Red Bull Bragantino", color1: "#d80027", color2: "#ffffff", logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Escudo_do_Red_Bull_Bragantino.png/1200px-Escudo_do_Red_Bull_Bragantino.png" }
];

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const players = [
  { name: "G. Arrascaeta", pos: "Meio-Campo" }, { name: "P. Henrique", pos: "Atacante" }, { name: "N. De La Cruz", pos: "Meio-Campo" },
  { name: "R. Veiga", pos: "Meio-Campo" }, { name: "Dudu", pos: "Atacante" }, { name: "E. Endrick", pos: "Atacante" },
  { name: "J. Calleri", pos: "Atacante" }, { name: "L. Moura", pos: "Meio-Campo" }, { name: "W. Rato", pos: "Atacante" },
  { name: "Yuri A.", pos: "Atacante" }, { name: "R. Garro", pos: "Meio-Campo" }, { name: "C. Miguel", pos: "Goleiro" },
  { name: "G. Cano", pos: "Atacante" }, { name: "J. Arias", pos: "Meio-Campo" }, { name: "Marcelo", pos: "Defensor" },
  { name: "T. Soares", pos: "Atacante" }, { name: "J. Savarino", pos: "Atacante" }, { name: "Lucas P.", pos: "Goleiro" },
  { name: "P. Vegetti", pos: "Atacante" }, { name: "D. Payet", pos: "Meio-Campo" }, { name: "L. Jardim", pos: "Goleiro" },
  { name: "L. Suárez", pos: "Atacante" }, { name: "M. Villasanti", pos: "Meio-Campo" }, { name: "W. Kannemann", pos: "Defensor" },
  { name: "A. Patrick", pos: "Meio-Campo" }, { name: "E. Valencia", pos: "Atacante" }, { name: "Wanderson", pos: "Atacante" },
  { name: "Hulk", pos: "Atacante" }, { name: "Paulinho", pos: "Atacante" }, { name: "G. Arana", pos: "Defensor" },
  { name: "Matheus P.", pos: "Meio-Campo" }, { name: "A. Silva", pos: "Atacante" }, { name: "Wiliam", pos: "Atacante" },
  { name: "Fernandinho", pos: "Meio-Campo" }, { name: "Pablo", pos: "Atacante" }, { name: "Bento", pos: "Goleiro" },
  { name: "E. Ribeiro", pos: "Meio-Campo" }, { name: "Cauly", pos: "Meio-Campo" }, { name: "Thaciano", pos: "Atacante" },
  { name: "J. Lucero", pos: "Atacante" }, { name: "Y. Pikachu", pos: "Meio-Campo" }, { name: "Tinga", pos: "Defensor" },
  { name: "Osvaldo", pos: "Atacante" }, { name: "Z. Hugo", pos: "Defensor" }, { name: "W. Oliveira", pos: "Meio-Campo" },
  { name: "Nenê", pos: "Meio-Campo" }, { name: "G. Barbosa", pos: "Atacante" }, { name: "Jadson", pos: "Meio-Campo" },
  { name: "L. Fernando", pos: "Atacante" }, { name: "S. Romero", pos: "Atacante" }, { name: "A. Cruz", pos: "Defensor" },
  { name: "Eder", pos: "Atacante" }, { name: "M. Hermes", pos: "Defensor" }, { name: "Y. Bolasie", pos: "Atacante" },
  { name: "Deyverson", pos: "Atacante" }, { name: "F. Marques", pos: "Meio-Campo" }, { name: "Walter", pos: "Goleiro" },
  { name: "E. Sasha", pos: "Atacante" }, { name: "L. Cândido", pos: "Defensor" }, { name: "Cleiton", pos: "Goleiro" }
];

const generateMockData = (team, index) => {
  const revBase = 300 + (20 - index) * 40;
  const expBase = revBase * 0.7;
  const memBase = 20000 + (20 - index) * 4000;
  const attBase = 15000 + (20 - index) * 1500;
  
  const currentRevenue = Math.round(revBase * (1 + Math.random() * 0.2));
  const previousMonthRevenue = Math.round(revBase * (1 + Math.random() * 0.2));
  const previousYearRevenue = Math.round(revBase * (0.8 + Math.random() * 0.2));

  const currentMembers = Math.round(memBase * (1 + Math.random() * 0.1));
  const previousMonthMembers = Math.round(memBase * (1 + Math.random() * 0.1));
  const previousYearMembers = Math.round(memBase * (0.8 + Math.random() * 0.1));

  const currentAttendance = Math.round(attBase * (1 + Math.random() * 0.1));
  const previousMonthAttendance = Math.round(attBase * (1 + Math.random() * 0.1));
  const previousYearAttendance = Math.round(attBase * (0.8 + Math.random() * 0.1));

  const currentExpenses = Math.round(expBase * (1 + Math.random() * 0.1));
  const previousMonthExpenses = Math.round(expBase * (1 + Math.random() * 0.1));
  const previousYearExpenses = Math.round(expBase * (0.8 + Math.random() * 0.1));

  const historicalRevenue = months.map(month => {
    return {
      month,
      revenue: Math.round((revBase / 12) * (0.8 + Math.random() * 0.6)),
      expenses: Math.round((expBase / 12) * (0.8 + Math.random() * 0.6))
    };
  });

  const tv = Math.round(currentRevenue * 0.4);
  const patrocinios = Math.round(currentRevenue * 0.3);
  const bilheteria = Math.round(currentRevenue * 0.15);
  const socio = Math.round(currentRevenue * 0.1);
  const transferencias = currentRevenue - tv - patrocinios - bilheteria - socio;

  const topPlayers = [
    { ...players[index * 3], rating: (8 + Math.random() * 1.5).toFixed(1) },
    { ...players[index * 3 + 1], rating: (7.5 + Math.random() * 1.5).toFixed(1) },
    { ...players[index * 3 + 2], rating: (7 + Math.random() * 1.5).toFixed(1) }
  ];

  const stats = [
    { subject: "Ataque", value: Math.floor(Math.random() * 30) + 65 },
    { subject: "Defesa", value: Math.floor(Math.random() * 30) + 65 },
    { subject: "Tática", value: Math.floor(Math.random() * 30) + 65 },
    { subject: "Finanças", value: Math.floor(Math.random() * 30) + 65 },
    { subject: "Engajamento", value: Math.floor(Math.random() * 30) + 65 }
  ];

  const ext = team.logo.toLowerCase().endsWith('.svg') ? '.svg' : '.png';
  return "  {\n" +
    "    id: \"" + team.id + "\",\n" +
    "    name: \"" + team.name + "\",\n" +
    "    logo: \"/escudos-serie-a/" + team.id + ext + "\",\n" +
    "    position: " + (index + 1) + ",\n" +
    "    colors: { primary: \"" + team.color1 + "\", secondary: \"" + team.color2 + "\" },\n" +
    "    revenue: { current: " + currentRevenue + ", previousMonth: " + previousMonthRevenue + ", previousYear: " + previousYearRevenue + " },\n" +
    "    members: { current: " + currentMembers + ", previousMonth: " + previousMonthMembers + ", previousYear: " + previousYearMembers + " },\n" +
    "    attendance: { current: " + currentAttendance + ", previousMonth: " + previousMonthAttendance + ", previousYear: " + previousYearAttendance + " },\n" +
    "    expenses: { current: " + currentExpenses + ", previousMonth: " + previousMonthExpenses + ", previousYear: " + previousYearExpenses + " },\n" +
    "    historicalRevenue: " + JSON.stringify(historicalRevenue) + ",\n" +
    "    topPlayers: " + JSON.stringify(topPlayers) + ",\n" +
    "    stats: " + JSON.stringify(stats) + ",\n" +
    "    categories: [\n" +
    "      { name: \"Direitos de TV\", value: " + tv + " },\n" +
    "      { name: \"Patrocínios\", value: " + patrocinios + " },\n" +
    "      { name: \"Bilheteria\", value: " + bilheteria + " },\n" +
    "      { name: \"Sócio Torcedor\", value: " + socio + " },\n" +
    "      { name: \"Transferências\", value: " + transferencias + " }\n" +
    "    ]\n" +
    "  }";
};

const output = "export interface Player {\n" +
"  name: string;\n" +
"  position: string;\n" +
"  rating: string;\n" +
"}\n\n" +
"export interface FootballData {\n" +
"  id: string;\n" +
"  name: string;\n" +
"  logo: string;\n" +
"  position: number;\n" +
"  colors: { primary: string; secondary: string };\n" +
"  revenue: { current: number; previousMonth: number; previousYear: number; };\n" +
"  members: { current: number; previousMonth: number; previousYear: number; };\n" +
"  attendance: { current: number; previousMonth: number; previousYear: number; };\n" +
"  expenses: { current: number; previousMonth: number; previousYear: number; };\n" +
"  historicalRevenue: { month: string; revenue: number; expenses: number }[];\n" +
"  categories: { name: string; value: number }[];\n" +
"  topPlayers: { name: string; pos: string; rating: string }[];\n" +
"  stats: { subject: string; value: number }[];\n" +
"}\n\n" +
"export const footballTeams: FootballData[] = [\n" +
teamsInfo.map((team, index) => generateMockData(team, index)).join(",\n") +
"\n];\n\n" +
"export const calculateGrowth = (current: number, previous: number): number => {\n" +
"  if (previous === 0) return 100;\n" +
"  return ((current - previous) / previous) * 100;\n" +
"};\n";

fs.writeFileSync('src/lib/data/football-data.ts', output);
console.log('football-data.ts generated successfully');
