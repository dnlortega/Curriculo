const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadLogos() {
  try {
    const res = await fetch('https://api.cartola.globo.com/clubes');
    const clubesData = await res.json();
    const clubes = Object.values(clubesData);
    
    let content = fs.readFileSync('src/lib/data/football-data.ts', 'utf8');
    
    const teamMap = {
      "Flamengo": "FLA",
      "Palmeiras": "PAL",
      "São Paulo": "SAO",
      "Corinthians": "COR",
      "Fluminense": "FLU",
      "Vasco da Gama": "VAS",
      "Grêmio": "GRE",
      "Internacional": "INT",
      "Atlético Mineiro": "CAM",
      "Cruzeiro": "CRU",
      "Botafogo": "BOT",
      "Athletico Paranaense": "CAP",
      "Bahia": "BAH",
      "Fortaleza": "FOR",
      "Vitória": "VIT",
      "Atlético Goianiense": "ACG",
      "Juventude": "JUV",
      "Criciúma": "CRI",
      "Cuiabá": "CUI",
      "Red Bull Bragantino": "RBB"
    };

    const downloadImage = (url, filepath) => {
      return new Promise((resolve, reject) => {
        https.get(url, (res) => {
          if (res.statusCode === 200) {
            res.pipe(fs.createWriteStream(filepath))
               .on('error', reject)
               .once('close', () => resolve(filepath));
          } else {
            res.resume();
            reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
          }
        }).on('error', reject);
      });
    };

    const teamIds = [
      "flamengo", "palmeiras", "sao-paulo", "corinthians", "fluminense",
      "vasco", "gremio", "internacional", "atletico-mg", "cruzeiro",
      "botafogo", "athletico-pr", "bahia", "fortaleza", "vitoria",
      "atletico-go", "juventude", "criciuma", "cuiaba", "bragantino"
    ];
    
    const teamNames = Object.keys(teamMap);

    for (let i = 0; i < teamNames.length; i++) {
      const name = teamNames[i];
      const id = teamIds[i];
      const abbreviation = teamMap[name];
      const cartolaTeam = clubes.find(c => c.abreviacao === abbreviation);
      
      if (cartolaTeam && cartolaTeam.escudos && cartolaTeam.escudos['60x60']) {
        const url = cartolaTeam.escudos['60x60'];
        const filepath = path.join(__dirname, '../public/logos', `${id}.png`);
        console.log(`Downloading ${url} to ${filepath}`);
        try {
          await downloadImage(url, filepath);
        } catch (e) {
          console.error(`Failed to download ${id}:`, e.message);
        }
      }
    }
    
    // Agora atualizamos o arquivo typescript
    const regex = /name:\s*"([^"]+)",\s*logo:\s*"([^"]+)",/g;
    let result = content.replace(regex, (match, name, oldLogo) => {
      const index = teamNames.indexOf(name);
      if (index !== -1) {
        return `name: "${name}",\n    logo: "/logos/${teamIds[index]}.png",`;
      }
      return match;
    });

    fs.writeFileSync('src/lib/data/football-data.ts', result);
    console.log('All logos downloaded and local paths updated!');
  } catch (err) {
    console.error(err);
  }
}
downloadLogos();
