const fs = require('fs');
const c = fs.readFileSync('src/lib/data/football-data.ts', 'utf8');
const matches = c.match(/logo: \"[^\"]+\"/g);
console.log(matches ? matches.slice(0, 5) : 'No matches');
