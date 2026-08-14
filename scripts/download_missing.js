const fs = require('fs');
const path = require('path');
const https = require('https');

const missing = {
  "fortaleza": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fortaleza_Esporte_Clube_logo.svg",
  "atletico-go": "https://upload.wikimedia.org/wikipedia/commons/4/41/Atl%C3%A9tico_Goianiense_escudo.svg",
  "juventude": "https://upload.wikimedia.org/wikipedia/commons/5/52/Esporte_Clube_Juventude_logo.svg",
  "criciuma": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Crici%C3%BAma_Esporte_Clube.svg",
  "cuiaba": "https://upload.wikimedia.org/wikipedia/pt/2/20/Cuiab%C3%A1EC2020.png"
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
        if (res.statusCode === 301 || res.statusCode === 302) {
            https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
                res2.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve(filepath));
            });
            return;
        }
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

async function run() {
  let content = fs.readFileSync('src/lib/data/football-data.ts', 'utf8');

  for (const [id, url] of Object.entries(missing)) {
    const ext = url.endsWith('.png') ? '.png' : '.svg';
    const filepath = path.join(__dirname, '../public/logos', `${id}${ext}`);
    console.log(`Downloading ${url} to ${filepath}`);
    await downloadImage(url, filepath);
    
    // Update football-data.ts to use the correct extension
    const regex = new RegExp(`logo:\\s*"/logos/${id}\\.png"`, 'g');
    content = content.replace(regex, `logo: "/logos/${id}${ext}"`);
  }
  
  fs.writeFileSync('src/lib/data/football-data.ts', content);
  console.log("Missing logos downloaded!");
}
run();
