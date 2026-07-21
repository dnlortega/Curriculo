const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });

if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
}

doc.pipe(fs.createWriteStream('./public/curriculo.pdf'));

// Add styling and elegance
// Header Background
doc.rect(0, 0, 612, 160).fill('#0f172a');

// Profile Picture with circular clipping
if (fs.existsSync('./public/profile.jpg')) {
  doc.save();
  doc.circle(90, 80, 50).clip();
  doc.image('./public/profile.jpg', 40, 30, { width: 100 });
  doc.restore();
}

// Header Text
doc.fill('#ffffff').fontSize(32).text('Daniel Ortega Pereira', 160, 40);
doc.fontSize(14).fill('#94a3b8').text('Desenvolvedor Next.js, React & Tailwind CSS', 160, 80);
doc.fontSize(10).fill('#cbd5e1').text('dnlortega@gmail.com   |   (14) 98129-4913   |   linkedin.com/in/daniel-op', 160, 105);

doc.moveDown(5);

// Helper for Section Titles
function createSection(title) {
  doc.fill('#1e293b').fontSize(20).text(title);
  doc.rect(50, doc.y + 2, 500, 2).fill('#3b82f6'); // Blue accent line
  doc.moveDown(0.8);
}

// Section: Sobre Mim
createSection('Sobre Mim');
doc.fontSize(12).fill('#334155').text('Desenvolvedor Full Stack apaixonado pelo ecossistema JavaScript, especializado em construir aplicações modernas, escaláveis e esteticamente impecáveis utilizando o que há de mais avançado em React, Next.js e Tailwind CSS. Com um olhar clínico para UI/UX, foco em entregar não apenas código, mas experiências ricas para os usuários finais.', { width: 500, lineGap: 4 });

doc.moveDown(1.5);

// Section: Formação Acadêmica
createSection('Formação Acadêmica');
doc.fontSize(14).fill('#0f172a').text('Análise e Desenvolvimento de Sistemas');
doc.fontSize(12).fill('#64748b').text('UNINTER Centro Universitário Internacional (Jan 2023 - Jun 2025)');

doc.moveDown(1.5);

// Section: Habilidades Técnicas
createSection('Habilidades Técnicas');
doc.fontSize(12).fill('#334155').text('• Core: React 19, Next.js 15, Framer Motion, JavaScript, TypeScript', { lineGap: 3 });
doc.text('• Estilização & UI: Tailwind CSS, Shadcn UI, Design Systems, Glassmorphism', { lineGap: 3 });
doc.text('• Infra & Deploy: Node.js, Vercel, Git, Integração Contínua', { lineGap: 3 });
doc.text('• Dados: Power BI, Análise de Dados Avançada', { lineGap: 3 });

doc.moveDown(1.5);

// Section: Certificações em Destaque
createSection('Certificações em Destaque');
doc.fontSize(12).fill('#334155').text('Possuo mais de 60 certificações comprovadas. Destaques principais:');
doc.moveDown(0.5);

doc.fontSize(13).fill('#0f172a').text('Frontend & React');
doc.fontSize(11).fill('#64748b').text('• Formação React.js (Hooks, Context API, Redux) - Alura\n• Desenvolvimento Full Stack com Next.js 14 e App Router - Alura\n• UI/UX para Desenvolvedores', { lineGap: 2 });
doc.moveDown(0.5);

doc.fontSize(13).fill('#0f172a').text('Arquitetura & Boas Práticas');
doc.fontSize(11).fill('#64748b').text('• Clean Code, SOLID e Padrões de Projeto em Aplicações - Xperiun\n• Arquitetura Frontend e Escalabilidade de Sistemas - Xperiun', { lineGap: 2 });
doc.moveDown(0.5);

doc.fontSize(13).fill('#0f172a').text('Dados & Lógica');
doc.fontSize(11).fill('#64748b').text('• Análise de Dados e Dashboards Interativos com Power BI - Alura\n• Lógica de Programação Avançada', { lineGap: 2 });

doc.moveDown(2);
doc.fontSize(10).fill('#94a3b8').text('* Este currículo foi gerado dinamicamente a partir do meu Portfólio Online.', { align: 'center' });

doc.end();
console.log('Elegantly styled PDF Curriculum with Profile Photo generated successfully at public/curriculo.pdf!');
