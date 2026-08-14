export interface FootballData {
  id: string;
  name: string;
  logo: string;
  colors: { primary: string; secondary: string };
  revenue: {
    current: number; // M BRL
    previousMonth: number;
    previousYear: number;
  };
  members: {
    current: number;
    previousMonth: number;
    previousYear: number;
  };
  attendance: {
    current: number;
    previousMonth: number;
    previousYear: number;
  };
  expenses: {
    current: number;
    previousMonth: number;
    previousYear: number;
  };
  historicalRevenue: { month: string; revenue: number; expenses: number }[];
  categories: { name: string; value: number }[];
}

export const footballTeams: FootballData[] = [
  {
    id: "flamengo",
    name: "Flamengo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
    colors: { primary: "#c52424", secondary: "#000000" },
    revenue: { current: 1350, previousMonth: 1300, previousYear: 1200 },
    members: { current: 110000, previousMonth: 105000, previousYear: 90000 },
    attendance: { current: 58000, previousMonth: 59000, previousYear: 55000 },
    expenses: { current: 850, previousMonth: 820, previousYear: 780 },
    historicalRevenue: [
      { month: "Jan", revenue: 90, expenses: 60 },
      { month: "Fev", revenue: 110, expenses: 70 },
      { month: "Mar", revenue: 105, expenses: 75 },
      { month: "Abr", revenue: 120, expenses: 70 },
      { month: "Mai", revenue: 125, expenses: 80 },
      { month: "Jun", revenue: 140, expenses: 85 },
      { month: "Jul", revenue: 160, expenses: 90 },
      { month: "Ago", revenue: 155, expenses: 95 },
      { month: "Set", revenue: 135, expenses: 85 },
      { month: "Out", revenue: 150, expenses: 90 },
      { month: "Nov", revenue: 170, expenses: 95 },
      { month: "Dez", revenue: 190, expenses: 100 },
    ],
    categories: [
      { name: "Direitos de TV", value: 450 },
      { name: "Patrocínios", value: 300 },
      { name: "Bilheteria", value: 250 },
      { name: "Sócio Torcedor", value: 180 },
      { name: "Transferências", value: 170 },
    ]
  },
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
    colors: { primary: "#006437", secondary: "#ffffff" },
    revenue: { current: 950, previousMonth: 900, previousYear: 880 },
    members: { current: 150000, previousMonth: 148000, previousYear: 120000 },
    attendance: { current: 36000, previousMonth: 34000, previousYear: 32000 },
    expenses: { current: 650, previousMonth: 630, previousYear: 600 },
    historicalRevenue: [
      { month: "Jan", revenue: 70, expenses: 50 },
      { month: "Fev", revenue: 85, expenses: 55 },
      { month: "Mar", revenue: 80, expenses: 55 },
      { month: "Abr", revenue: 90, expenses: 58 },
      { month: "Mai", revenue: 95, expenses: 60 },
      { month: "Jun", revenue: 100, expenses: 65 },
      { month: "Jul", revenue: 110, expenses: 70 },
      { month: "Ago", revenue: 105, expenses: 68 },
      { month: "Set", revenue: 95, expenses: 65 },
      { month: "Out", revenue: 105, expenses: 70 },
      { month: "Nov", revenue: 120, expenses: 75 },
      { month: "Dez", revenue: 130, expenses: 80 },
    ],
    categories: [
      { name: "Direitos de TV", value: 300 },
      { name: "Patrocínios", value: 250 },
      { name: "Bilheteria", value: 180 },
      { name: "Sócio Torcedor", value: 120 },
      { name: "Transferências", value: 100 },
    ]
  },
  {
    id: "saopaulo",
    name: "São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/S%C3%A3o_Paulo_Futebol_Clube.svg",
    colors: { primary: "#fe0000", secondary: "#000000" },
    revenue: { current: 680, previousMonth: 650, previousYear: 600 },
    members: { current: 65000, previousMonth: 66000, previousYear: 55000 },
    attendance: { current: 45000, previousMonth: 44000, previousYear: 40000 },
    expenses: { current: 600, previousMonth: 580, previousYear: 550 },
    historicalRevenue: [
      { month: "Jan", revenue: 50, expenses: 45 },
      { month: "Fev", revenue: 60, expenses: 48 },
      { month: "Mar", revenue: 55, expenses: 48 },
      { month: "Abr", revenue: 65, expenses: 50 },
      { month: "Mai", revenue: 70, expenses: 55 },
      { month: "Jun", revenue: 75, expenses: 58 },
      { month: "Jul", revenue: 85, expenses: 60 },
      { month: "Ago", revenue: 80, expenses: 62 },
      { month: "Set", revenue: 70, expenses: 55 },
      { month: "Out", revenue: 80, expenses: 60 },
      { month: "Nov", revenue: 90, expenses: 65 },
      { month: "Dez", revenue: 100, expenses: 70 },
    ],
    categories: [
      { name: "Direitos de TV", value: 220 },
      { name: "Patrocínios", value: 150 },
      { name: "Bilheteria", value: 140 },
      { name: "Sócio Torcedor", value: 70 },
      { name: "Transferências", value: 100 },
    ]
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Corinthians_simbolo.png",
    colors: { primary: "#ffffff", secondary: "#000000" },
    revenue: { current: 800, previousMonth: 780, previousYear: 750 },
    members: { current: 95000, previousMonth: 90000, previousYear: 85000 },
    attendance: { current: 40000, previousMonth: 41000, previousYear: 38000 },
    expenses: { current: 850, previousMonth: 820, previousYear: 800 },
    historicalRevenue: [
      { month: "Jan", revenue: 60, expenses: 65 },
      { month: "Fev", revenue: 70, expenses: 70 },
      { month: "Mar", revenue: 65, expenses: 70 },
      { month: "Abr", revenue: 75, expenses: 75 },
      { month: "Mai", revenue: 80, expenses: 80 },
      { month: "Jun", revenue: 85, expenses: 85 },
      { month: "Jul", revenue: 95, expenses: 90 },
      { month: "Ago", revenue: 90, expenses: 95 },
      { month: "Set", revenue: 80, expenses: 85 },
      { month: "Out", revenue: 90, expenses: 90 },
      { month: "Nov", revenue: 100, expenses: 95 },
      { month: "Dez", revenue: 110, expenses: 100 },
    ],
    categories: [
      { name: "Direitos de TV", value: 280 },
      { name: "Patrocínios", value: 200 },
      { name: "Bilheteria", value: 160 },
      { name: "Sócio Torcedor", value: 90 },
      { name: "Transferências", value: 70 },
    ]
  }
];

export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return ((current - previous) / previous) * 100;
};
