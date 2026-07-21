const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });

// Ensure public directory exists
if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
}

doc.pipe(fs.createWriteStream('./public/curriculo.pdf'));

// Add styling
doc.rect(0, 0, 612, 100).fill('#111111');
doc.fill('#ffffff').fontSize(30).text('Daniel Ortega Pereira', 50, 30);
doc.fontSize(14).fill('#888888').text('Desenvolvedor Next.js, React & Tailwind CSS', 50, 65);

doc.moveDown(3);

doc.fill('#000000').fontSize(20).text('Sobre Mim', 50, 130);
doc.fontSize(12).text('Desenvolvedor Full Stack apaixonado pelo ecossistema JavaScript. Especialista em construir interfaces modernas de alta performance com Next.js e Tailwind CSS.', 50, 160, { width: 500 });

doc.moveDown(2);

doc.fontSize(20).text('Formação Acadêmica');
doc.moveDown(0.5);
doc.fontSize(14).text('Análise e Desenvolvimento de Sistemas');
doc.fontSize(12).fill('#555555').text('UNINTER Centro Universitário Internacional (Jan 2023 - Jun 2025)');

doc.moveDown(2);

doc.fill('#000000').fontSize(20).text('Habilidades Técnicas');
doc.moveDown(0.5);
doc.fontSize(12).text('• React 19, Next.js 15, Framer Motion\n• Tailwind CSS, Shadcn UI\n• JavaScript, TypeScript\n• Node.js, Vercel, Git');

doc.moveDown(2);

doc.fontSize(20).text('Certificações em Destaque');
doc.moveDown(0.5);
doc.fontSize(12).text('Mais de 60 certificações tecnológicas nas principais plataformas do mercado:');
doc.text('• Alura (React, Next.js, Power BI)\n• Xperiun (Desenvolvimento Web e Arquitetura)\n• E muito mais no portfólio online.');

// Footer
doc.rect(0, 750, 612, 50).fill('#111111');
doc.fill('#ffffff').fontSize(10).text('dnlortega@gmail.com  |  linkedin.com/in/daniel-op  |  (14) 98129-4913', 0, 770, { align: 'center' });

doc.end();
console.log('PDF Curriculum generated successfully at public/curriculo.pdf!');
