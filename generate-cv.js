const PDFDocument = require('pdfkit');
const fs = require('fs');

// A4 Size: 595.28 x 841.89 points
const doc = new PDFDocument({ margin: 0, size: 'A4' });

if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
}

doc.pipe(fs.createWriteStream('./public/curriculo.pdf'));

// ================= LAYOUT METRICS =================
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const SIDEBAR_W = 210;

// ================= BACKGROUND EFFECTS =================
// Sidebar Background Gradient
const sidebarGrad = doc.linearGradient(0, 0, 0, PAGE_H);
sidebarGrad.stop(0, '#0f172a').stop(1, '#1e293b');
doc.rect(0, 0, SIDEBAR_W, PAGE_H).fill(sidebarGrad);

// Main Content subtle watermark effect
doc.circle(595, 0, 300).fillOpacity(0.02).fill('#3b82f6');
doc.circle(200, 842, 200).fillOpacity(0.02).fill('#8b5cf6');
doc.fillOpacity(1); // Reset opacity


// ================= SIDEBAR (DARK SECTION) =================
let sideY = 40;

// Profile Picture
if (fs.existsSync('./public/profile.jpg')) {
  doc.save();
  doc.circle(SIDEBAR_W / 2, sideY + 45, 45).clip();
  doc.image('./public/profile.jpg', (SIDEBAR_W / 2) - 45, sideY, { width: 90 });
  doc.restore();
  
  // Decorative ring effect around photo
  doc.circle(SIDEBAR_W / 2, sideY + 45, 47).lineWidth(2).stroke('#3b82f6');
  sideY += 110;
} else {
  sideY += 40;
}

// Name & Title
doc.fill('#ffffff').font('Helvetica-Bold').fontSize(18).text('Daniel Ortega', 0, sideY, { align: 'center', width: SIDEBAR_W });
sideY += 22;
doc.font('Helvetica').fontSize(9).fill('#94a3b8').text('Especialista de Dados & Frontend', 0, sideY, { align: 'center', width: SIDEBAR_W });
sideY += 30;

// Contact
doc.rect(20, sideY, SIDEBAR_W - 40, 1).fill('#334155'); sideY += 15;
doc.font('Helvetica').fontSize(8).fill('#e2e8f0');
doc.text('Bauru, SP - Brasil', 25, sideY); sideY += 15;
doc.text('(14) 98129-4913', 25, sideY); sideY += 15;
doc.text('dnlortega@gmail.com', 25, sideY); sideY += 15;
doc.fill('#3b82f6').text('linkedin.com/in/daniel-op', 25, sideY, { link: 'https://linkedin.com/in/daniel-op' }); sideY += 15;
doc.text('github.com/dnlortega', 25, sideY, { link: 'https://github.com/dnlortega' }); sideY += 25;

// Helper for Sidebar Titles
function drawSideTitle(title) {
  doc.rect(20, sideY, 3, 10).fill('#3b82f6');
  doc.font('Helvetica-Bold').fontSize(11).fill('#ffffff').text(title.toUpperCase(), 30, sideY - 1);
  sideY += 20;
}

// Helper for Progress Bar Effect
function drawSkill(name, percent) {
  doc.font('Helvetica').fontSize(8).fill('#cbd5e1').text(name, 25, sideY);
  sideY += 12;
  doc.rect(25, sideY, SIDEBAR_W - 50, 4).fill('#334155'); // Track
  doc.rect(25, sideY, (SIDEBAR_W - 50) * percent, 4).fill('#3b82f6'); // Progress
  sideY += 15;
}

drawSideTitle('Habilidades');
drawSkill('React / Next.js', 0.95);
drawSkill('TypeScript & JS', 0.90);
drawSkill('Tailwind & UI/UX', 0.85);
drawSkill('Power BI & DAX', 0.95);
drawSkill('ETL & Power Query', 0.90);
sideY += 10;

drawSideTitle('Formação');
doc.font('Helvetica-Bold').fontSize(9).fill('#e2e8f0').text('Análise e Desenv. de Sistemas', 25, sideY); sideY += 12;
doc.font('Helvetica').fontSize(8).fill('#94a3b8').text('UNINTER (2023 - 2025)', 25, sideY); sideY += 25;

drawSideTitle('Certificados e Cursos');
const certs = [
  'Power BI Avançado & DAX',
  'IA Aplicada para Devs',
  'React.js & Next.js',
  'Padrões de Projeto & SOLID',
  'Arquitetura Frontend',
  'Design de UI/UX'
];
doc.font('Helvetica').fontSize(8).fill('#cbd5e1');
certs.forEach(c => {
  doc.circle(28, sideY + 3, 2).fill('#3b82f6');
  doc.text(c, 35, sideY);
  sideY += 14;
});

// ================= MAIN CONTENT (WHITE SECTION) =================
let mainY = 40;
const mainX = 240;
const mainW = 325;

// Helper for Main Titles
function drawMainTitle(title) {
  doc.font('Helvetica-Bold').fontSize(16).fill('#0f172a').text(title.toUpperCase(), mainX, mainY);
  doc.rect(mainX, doc.y + 3, 40, 2).fill('#3b82f6');
  mainY = doc.y + 15;
}

drawMainTitle('Perfil Profissional');
doc.font('Helvetica').fontSize(9.5).fill('#334155').text(
  'Profissional de Tecnologia com 17 anos de vivência corporativa. Especialista absoluto em automação de processos, geração e validação de padrões ANS (XML) com 100% de conformidade. Hoje aplico minha forte expertise analítica (Power BI) combinada ao desenvolvimento Web avançado (Next.js, React) para arquitetar soluções de alta performance e impacto direto.', 
  mainX, mainY, { width: mainW, align: 'justify', lineGap: 3 }
);
mainY = doc.y + 25;

drawMainTitle('Experiência Profissional');

// Timeline Effect Variables
const timelineX = mainX + 5;
let prevY = 0;

function addTimelineItem(title, company, date, desc) {
  // Draw Timeline Dot
  doc.circle(timelineX, mainY + 4, 4).fill('#ffffff').lineWidth(2).stroke('#3b82f6');
  
  // Connect to previous dot if exists
  if (prevY > 0) {
    doc.moveTo(timelineX, prevY + 8).lineTo(timelineX, mainY - 4).lineWidth(1).stroke('#cbd5e1');
  }
  prevY = mainY;

  // Text Content
  const textX = mainX + 20;
  const textW = mainW - 20;
  
  doc.font('Helvetica-Bold').fontSize(11).fill('#0f172a').text(title, textX, mainY, { width: textW });
  mainY = doc.y + 2;
  
  // Sleek tag effect for dates
  const cWidth = doc.widthOfString(company) + 5;
  doc.font('Helvetica-Bold').fontSize(8.5).fill('#3b82f6').text(company, textX, mainY, { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8.5).fill('#64748b').text(`    ${date}`);
  mainY = doc.y + 6;
  
  doc.font('Helvetica').fontSize(9).fill('#334155').text(desc, textX, mainY, { width: textW, align: 'justify', lineGap: 2 });
  mainY = doc.y + 18;
}

addTimelineItem(
  'Analista de Dados & IA (Projeto)', 
  'DataGuvi', 
  'Mai 2026 – Jun 2026', 
  'Transformação de dados brutos em decisões estratégicas. Domínio em ETL (Power Query), modelagem relacional (Star Schema) e DAX avançado. Criação de dashboards interativos para acompanhamento de KPIs de negócio em tempo real.'
);

addTimelineItem(
  'Assistente de Faturamento (TI & Integração)', 
  'Hospital Unimed Bauru', 
  'Mar 2009 – Abr 2026 (17 anos)', 
  'Responsável direto pela conferência e geração de arquivos XML Padrão ANS (2.500+ registros mensais) sem falhas. Implantação e integração de sistemas nas unidades SEDE, HUB e CDU. Treinamento e suporte massivo de novas tecnologias e processos às equipes locais, garantindo adoção total das plataformas.'
);

addTimelineItem(
  'Administrativo', 
  'Prefeitura de Bauru', 
  '5 anos', 
  'Gestão crítica de documentação municipal, processos de emissão de alvarás de funcionamento, construção e habite-se.'
);

addTimelineItem(
  'Suporte Técnico', 
  'Lan House', 
  '2 anos', 
  'Manutenção de hardwares, configuração de redes, atendimento técnico ao cliente e rotinas administrativas diversas.'
);

// Draw the last piece of timeline line extending slightly downwards
doc.moveTo(timelineX, prevY + 8).lineTo(timelineX, mainY).lineWidth(1).stroke('#cbd5e1');

mainY += 10;

drawMainTitle('Projetos e Portfólio');
doc.font('Helvetica-Bold').fontSize(10.5).fill('#0f172a').text('Vagas LinkedIn & Sistemas Modernos', mainX, mainY, { width: mainW });
mainY = doc.y + 3;
doc.font('Helvetica').fontSize(9).fill('#334155').text(
  'Desenvolvimento full-stack de sistemas SaaS, painéis administrativos e agregadores de vagas utilizando React 19, Next.js 15, Node.js e Tailwind CSS. Implantação ágil via Vercel com pipelines CI/CD.\n\nCódigo-fonte e aplicações ao vivo disponíveis diretamente no meu portfólio.', 
  mainX, mainY, { width: mainW, align: 'justify', lineGap: 2 }
);

// Footer subtle text
doc.font('Helvetica-Oblique').fontSize(7).fill('#94a3b8').text(
  'Gerado via Portfólio Online (Next.js)', 
  mainX, PAGE_H - 25, { width: mainW, align: 'right' }
);

doc.end();
console.log('1-Page High-End Corporate PDF Generated!');
