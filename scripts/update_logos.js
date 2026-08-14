const fs = require('fs');

async function update() {
  try {
    const res = await fetch('https://api.cartola.globo.com/clubes');
    const clubesData = await res.json();
    const clubes = Object.values(clubesData);
    
    let content = fs.readFileSync('src/lib/data/football-data.ts', 'utf8');
    
    const teamMap = {
      "Flamengo": "Flamengo",
      "Palmeiras": "Palmeiras",
      "São Paulo": "São Paulo",
      "Corinthians": "Corinthians",
      "Fluminense": "Fluminense",
      "Vasco da Gama": "Vasco",
      "Grêmio": "Grêmio",
      "Internacional": "Internacional",
      "Atlético Mineiro": "Atlético-MG",
      "Cruzeiro": "Cruzeiro",
      "Botafogo": "Botafogo",
      "Athletico Paranaense": "Athletico-PR",
      "Bahia": "Bahia",
      "Fortaleza": "Fortaleza",
      "Vitória": "Vitória",
      "Atlético Goianiense": "Atlético-GO",
      "Juventude": "Juventude",
      "Criciúma": "Criciúma",
      "Cuiabá": "Cuiabá",
      "Red Bull Bragantino": "Bragantino"
    };

    const regex = /name:\s*"([^"]+)",\s*logo:\s*"([^"]+)",/g;
    
    let result = content.replace(regex, (match, name, oldLogo) => {
      const searchName = teamMap[name];
      if (!searchName) return match;
      
      const cartolaTeam = clubes.find(c => c.nome && (c.nome.includes(searchName) || searchName.includes(c.nome)));
      
      if (cartolaTeam && cartolaTeam.escudos && cartolaTeam.escudos['60x60']) {
        return `name: "${name}",\n    logo: "${cartolaTeam.escudos['60x60']}",`;
      }
      return match;
    });

    fs.writeFileSync('src/lib/data/football-data.ts', result);
    console.log('Logos updated!');
  } catch (err) {
    console.error(err);
  }
}
update();
