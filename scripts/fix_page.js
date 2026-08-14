const fs = require('fs');
let c = fs.readFileSync('src/app/times/page.tsx', 'utf8');
c = c.replace(/\\`/g, '`');
c = c.replace(/\\\$/g, '$');
fs.writeFileSync('src/app/times/page.tsx', c);
console.log('Fixed!');
