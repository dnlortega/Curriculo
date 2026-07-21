const PDFDocument = require('pdfkit');
const fs = require('fs');

// A4 size: 595.28 x 841.89 points
const doc = new PDFDocument({ margin: 30, size: 'A4' });

if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
}

doc.pipe(fs.createWriteStream('./public/curriculo.pdf'));

// ================= HEADER =================
doc.rect(0, 0, 595.28, 120).fill('#0f172a');

// Profile Picture
if (fs.existsSync('./public/profile.jpg')) {
  doc.save();
  doc.circle(70, 60, 40).clip();
  doc.image('./public/profile.jpg', 30, 20, { width: 80 });
  doc.restore();
}

// Header Text
doc.fill('#ffffff').font('Helvetica-Bold').fontSize(24).text('Daniel Ortega Pereira', 130, 30);
doc.font('Helvetica').fontSize(12).fill('#94a3b8').text('Desenvolvedor Next.js, React & Analista de Dados', 130, 60);
doc.fontSize(10).fill('#cbd5e1').text('Bauru, SP   |   (14) 98129-4913   |   dnlortega@gmail.com', 130, 80);

doc.fontSize(10).fill('#3b82f6')
   .text('LinkedIn: linkedin.com/in/daniel-op', 130, 95, { link: 'https://linkedin.com/in/daniel-op', continued: true })
   .fill('#cbd5e1').text('   |   ', { continued: true })
   .fill('#3b82f6').text('GitHub: github.com/dnlortega', { link: 'https://github.com/dnlortega' });

// ================= LAYOUT CONSTANTS =================
const col1X = 30;
const col1W = 180;
const col2X = 230;
const col2W = 335;

// Helper to draw section titles
function drawTitle(title, x, y, width) {
  doc.fill('#1e293b').fontSize(14).font('Helvetica-Bold').text(title, x, y, { width });
  doc.rect(x, doc.y + 2, width, 1.5).fill('#3b82f6'); // Blue accent line
  return doc.y + 10;
}

let y1 = 145; // current Y for col 1
let y2 = 145; // current Y for col 2

// ================= COLUMN 2: EXPERIENCE & SUMMARY =================

// Summary
y2 = drawTitle('Perfil Profissional', col2X, y2, col2W);
doc.font('Helvetica').fontSize(9).fill('#334155').text(
  'Profissional de Tecnologia com mais de 17 anos de vivência corporativa. Especialista na automação de processos, geração de remessas e validação de padrões ANS (XML) com 100% de conformidade. Hoje aplico minha forte expertise analítica (Power BI, DAX) e sólida base em desenvolvimento Web moderno (Next.js, React, Tailwind CSS) para arquitetar e construir soluções de altíssima performance e impacto estratégico.', 
  col2X, y2, { width: col2W, align: 'justify', lineGap: 2 }
);
y2 = doc.y + 15;

// Experience
y2 = drawTitle('Experiência Profissional', col2X, y2, col2W);

function addExperience(title, company, date, desc) {
  doc.font('Helvetica-Bold').fontSize(11).fill('#0f172a').text(title, col2X, y2, { width: col2W });
  y2 = doc.y + 2;
  doc.font('Helvetica-Oblique').fontSize(9).fill('#64748b').text(`${company}  |  ${date}`, col2X, y2, { width: col2W });
  y2 = doc.y + 4;
  doc.font('Helvetica').fontSize(9).fill('#334155').text(desc, col2X, y2, { width: col2W, align: 'justify', lineGap: 2 });
  y2 = doc.y + 12;
}

addExperience(
  'Analista de Dados & IA (Projeto)', 
  'DataGuvi', 
  'Mai 2026 – Jun 2026', 
  'Foco em transformar dados brutos em decisões estratégicas. Atuação com análise de dados profunda, domínio em ETL (Power Query), modelagem relacional (Star Schema), DAX avançado e criação de dashboards intuitivos com foco em KPIs de negócio.'
);

addExperience(
  'Assistente de Faturamento (TI & Integração)', 
  'Hospital Unimed Bauru', 
  'Mar 2009 – Abr 2026 (17 anos)', 
  'Responsável central pela conferência e geração de remessas e arquivos XML conforme padrões ANS (2.500+ registros/mês) garantindo 100% de conformidade. Implantação e integração de sistemas corporativos em unidades críticas (SEDE, HUB, CDU) com 0% de falhas de integração. Atuação direta no treinamento e suporte de novas tecnologias às equipes locais.'
);

addExperience(
  'Administrativo', 
  'Prefeitura Municipal de Bauru', 
  '5 anos', 
  'Gestão rigorosa de documentação municipal, incluindo alvarás de funcionamento, processos de alvarás de construção e expedição de habite-se.'
);

addExperience(
  'Suporte Técnico e Atendimento', 
  'Lan House', 
  '2 anos', 
  'Manutenção de hardware/software, gestão de impressões e atendimento direto a clientes em diversas necessidades tecnológicas e cadastrais.'
);

// Projects
y2 = drawTitle('Projetos em Destaque', col2X, y2, col2W);
doc.font('Helvetica-Bold').fontSize(11).fill('#0f172a').text('Vagas LinkedIn & Sistemas Modernos', col2X, y2, { width: col2W });
y2 = doc.y + 2;
doc.font('Helvetica').fontSize(9).fill('#334155').text('Desenvolvimento full-stack de sistemas SaaS, painéis administrativos e agregadores de vagas interativos utilizando React 19, Next.js 15 (App Router), Node.js e Tailwind CSS. Código-fonte e deployments acessíveis via GitHub e Vercel.', col2X, y2, { width: col2W, align: 'justify', lineGap: 2 });


// ================= COLUMN 1: EDUCATION, SKILLS & CERTIFICATIONS =================

// Education
y1 = drawTitle('Formação Acadêmica', col1X, y1, col1W);
doc.font('Helvetica-Bold').fontSize(10).fill('#0f172a').text('Análise e Desenv. de Sistemas', col1X, y1, { width: col1W });
y1 = doc.y + 2;
doc.font('Helvetica').fontSize(9).fill('#64748b').text('UNINTER Centro Universitário', col1X, y1, { width: col1W });
y1 = doc.y + 2;
doc.font('Helvetica-Oblique').fontSize(8).fill('#64748b').text('(Jan 2023 - Jun 2025)', col1X, y1, { width: col1W });
y1 = doc.y + 15;

// Skills
y1 = drawTitle('Habilidades Técnicas', col1X, y1, col1W);

doc.font('Helvetica-Bold').fontSize(9).fill('#0f172a').text('Core & Frontend:', col1X, y1, { width: col1W });
y1 = doc.y + 2;
doc.font('Helvetica').fontSize(9).fill('#334155').text('React 19, Next.js 15, JavaScript, TypeScript, Framer Motion', col1X, y1, { width: col1W, lineGap: 1.5 });
y1 = doc.y + 8;

doc.font('Helvetica-Bold').fontSize(9).fill('#0f172a').text('Estilização & UI:', col1X, y1, { width: col1W });
y1 = doc.y + 2;
doc.font('Helvetica').fontSize(9).fill('#334155').text('Tailwind CSS, Shadcn UI, Design Systems, Glassmorphism', col1X, y1, { width: col1W, lineGap: 1.5 });
y1 = doc.y + 8;

doc.font('Helvetica-Bold').fontSize(9).fill('#0f172a').text('Dados, Infra & Ferramentas:', col1X, y1, { width: col1W });
y1 = doc.y + 2;
doc.font('Helvetica').fontSize(9).fill('#334155').text('Power BI, DAX, Power Query, Node.js, Vercel, Git, GitHub', col1X, y1, { width: col1W, lineGap: 1.5 });
y1 = doc.y + 15;

// Certifications
y1 = drawTitle('Certificações', col1X, y1, col1W);
doc.font('Helvetica').fontSize(9).fill('#334155').text('Mais de 60 certificações oficiais. Principais destaques:', col1X, y1, { width: col1W, lineGap: 2 });
y1 = doc.y + 6;

const certs = [
  'Formação React.js (Alura)',
  'Next.js 14 App Router (Alura)',
  'Padrões de Projeto & SOLID (Xperiun)',
  'Arquitetura Frontend (Xperiun)',
  'Análise de Dados Avançada com Power BI (Alura)',
  'Lógica de Programação',
  'UI/UX para Desenvolvedores'
];

certs.forEach(cert => {
  doc.font('Helvetica-Bold').fontSize(8.5).fill('#0f172a').text(`• ${cert}`, col1X, y1, { width: col1W, lineGap: 2 });
  y1 = doc.y + 2;
});


// ================= FOOTER =================
doc.font('Helvetica-Oblique').fontSize(8).fill('#94a3b8').text(
  '* Este currículo foi gerado de forma totalmente dinâmica e programática através do meu Portfólio Online construído em Next.js.', 
  30, 810, { align: 'center', width: 535 }
);

doc.end();
console.log('1-page ATS-Friendly PDF generated successfully at public/curriculo.pdf!');
