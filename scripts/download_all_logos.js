const fs = require('fs');
const https = require('https');
const path = require('path');

// Extract teams from generate_teams.js
const teamsContent = fs.readFileSync(path.join(__dirname, 'generate_teams.js'), 'utf8');
const match = teamsContent.match(/const teamsInfo = \[([\s\S]*?)\];/);
if (!match) {
  console.error("Could not find teamsInfo in generate_teams.js");
  process.exit(1);
}

// Very hacky but works for this specific file format
const teamsString = `[${match[1]}]`.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
let teams;
try {
  // Use eval to parse since it's just a JS object array string
  teams = eval(`(${match[0].replace('const teamsInfo = ', '').replace(';', '')})`);
} catch (e) {
  console.error("Failed to parse teams", e);
  process.exit(1);
}

const downloadDir = path.join(__dirname, '..', 'public', 'escudos-serie-a');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

console.log(`Encontrados ${teams.length} times. Iniciando download...`);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function run() {
  for (const team of teams) {
    // The URLs from wikipedia sometimes return 400 for specific thumbnails.
    // We strip the /thumb/ part and the trailing filename to get the original SVG/PNG.
    let rawUrl = team.logo;
    if (rawUrl.includes('/thumb/')) {
      rawUrl = rawUrl.replace(/\/thumb\//, '/').replace(/\/[^\/]+$/, '');
    }
    const ext = rawUrl.toLowerCase().endsWith('.svg') ? '.svg' : '.png';
    const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(rawUrl)}`;
    const filepath = path.join(downloadDir, `${team.id}${ext}`);
    
    console.log(`Baixando ${team.name} usando proxy...`);
    try {
      await downloadImage(proxyUrl, filepath);
      console.log(`✅ Sucesso: ${team.name}`);
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.error(`❌ Erro em ${team.name}:`, e.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  console.log("Downloads concluídos!");
}

run();
