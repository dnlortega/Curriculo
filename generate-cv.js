const PDFDocument = require('pdfkit');
const fs = require('fs');

const lang = process.argv[2] === 'en' ? 'en' : 'pt';

const texts = {
  pt: {
    filename: './public/curriculo.pdf',
    title: 'Especialista de Dados & Frontend',
    location: 'Bauru, SP - Brasil',
    skillsTitle: 'Habilidades',
    educationTitle: 'Formação',
    educationCourse: 'Análise e Desenv. de Sistemas',
    certsTitle: 'Cursos & Soft Skills',
    certs: [
      'Power BI Avançado & DAX',
      'IA Aplicada para Devs',
      'React.js & Next.js',
      'Padrões de Projeto & SOLID',
      'Arquitetura Frontend',
      'Design de UI/UX',
      'Manutenção de Computadores',
      'Pacote Office & Excel Avançado',
      'Pequenas Melhorias, Grandes Resultados',
      'Neurolinguística',
      'Gestão de Tempo',
      'O Jeito Disney de Encantar Clientes',
      'Processos de Materiais Especiais',
      'Inglês (Leitura Técnica)',
      'Testes Automatizados (Jest)'
    ],
    profileTitle: 'Perfil Profissional',
    profileDesc: 'Profissional de Tecnologia com 17 anos de vivência corporativa. Especialista absoluto em automação de processos, geração e validação de padrões ANS (XML) com 100% de conformidade. Hoje aplico minha forte expertise analítica (Power BI) combinada ao desenvolvimento Web avançado (Next.js, React) para arquitetar soluções de alta performance e impacto direto.',
    expTitle: 'Experiência Profissional',
    jobs: [
      {
        title: 'Desenvolvedor de Sistemas Web',
        company: 'Trabalho Autônomo',
        date: 'Jan 2023 – Presente',
        desc: 'Entrega de múltiplos projetos web escaláveis e APIs RESTful (Node/Python/PHP). Automação de processos reduzindo o tempo operacional dos clientes. Implementação de testes (Jest/Cypress) e CI/CD garantindo estabilidade e performance.'
      },
      {
        title: 'Analista de Dados & IA (Projeto)',
        company: 'DataGuvi',
        date: 'Mai 2026 – Jun 2026',
        desc: 'Transformação de dados brutos em decisões estratégicas. Domínio em ETL (Power Query), modelagem relacional (Star Schema) e DAX avançado. Criação de dashboards interativos para acompanhamento de KPIs de negócio em tempo real.'
      },
      {
        title: 'Assistente de Faturamento (TI & Integração)',
        company: 'Hospital Unimed Bauru',
        date: 'Mar 2009 – Abr 2026 (17 anos)',
        desc: 'Geração de arquivos XML Padrão ANS (2.500+ registros/mês) sem falhas e integração de sistemas nas unidades SEDE, HUB e CDU. Liderança técnica e mentoria de equipes locais, traduzindo requisitos de negócio para soluções de TI.'
      },
      {
        title: 'Administrativo',
        company: 'Prefeitura de Bauru',
        date: '5 anos',
        desc: 'Gestão crítica de documentação municipal, processos de emissão de alvarás de funcionamento, construção e habite-se.'
      },
      {
        title: 'Suporte Técnico',
        company: 'Lan House',
        date: '2 anos',
        desc: 'Manutenção de hardwares, configuração de redes, atendimento técnico ao cliente e rotinas administrativas diversas.'
      }
    ],
    projectsTitle: 'Projetos e Portfólio',
    projectsSubtitle: 'Projetos Recentes',
    recentProjects: [
      {
        name: 'Vagas LinkedIn (SaaS & IA)',
        url: 'https://vagas-linkedin-sua-url.vercel.app',
        tech: 'Next.js 16, React 19, Gemini AI, Tailwind, Shadcn',
        desc: 'Agregador com web scraping, painel admin, filtros e integração IA.'
      },
      {
        name: 'Finance AI',
        url: 'https://financeai-sua-url.vercel.app',
        tech: 'Next.js 15, Prisma, Stripe, Clerk Auth',
        desc: 'Plataforma SaaS de gestão financeira com inteligência artificial e pagamentos.'
      },
      {
        name: 'Barbeiro (Agendamentos)',
        url: 'https://barbeiro-sua-url.vercel.app',
        tech: 'Next.js 16, Prisma, Neon Serverless, NextAuth',
        desc: 'Sistema completo de agendamentos com notificações e tema escuro.'
      },
      {
        name: 'E-commerce Moderno',
        url: 'https://loja-sua-url.vercel.app',
        tech: 'Next.js 16, GraphQL, Prisma, Zustand, Stripe',
        desc: 'Loja virtual com carrinho, checkout e gerenciamento de estado global.'
      },
      {
        name: 'Condomínio (Tempo Real)',
        url: 'https://condominio-sua-url.vercel.app',
        tech: 'Next.js 16, WebSockets, Prisma, JWT',
        desc: 'Gestão de moradores com chat em tempo real e painel administrativo.'
      },
      {
        name: 'Task Manager (Kanban)',
        url: 'https://tarefas-sua-url.vercel.app',
        tech: 'Next.js 16, Dnd-kit, Tailwind, Analytics',
        desc: 'Gerenciador de tarefas com arrastar-e-soltar e análise de produtividade.'
      }
    ],
    projectsDesc: 'Código-fonte e aplicações ao vivo no meu portfólio.',
    footer: 'Versão Online: curriculo-gules-seven.vercel.app'
  },
  en: {
    filename: './public/resume-en.pdf',
    title: 'Data & Frontend Specialist',
    location: 'Bauru, SP - Brazil',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    educationCourse: 'Systems Analysis & Development',
    certsTitle: 'Courses & Soft Skills',
    certs: [
      'Advanced Power BI & DAX',
      'Applied AI for Devs',
      'React.js & Next.js',
      'Design Patterns & SOLID',
      'Frontend Architecture',
      'UI/UX Design',
      'Computer Maintenance',
      'Office Suite & Advanced Excel',
      'Small Improvements, Big Results',
      'Neurolinguistics',
      'Time Management',
      'The Disney Way of Customer Service',
      'Special Materials Processes',
      'Intermediate English (Technical)',
      'Automated Testing (Jest)'
    ],
    profileTitle: 'Professional Profile',
    profileDesc: 'Technology Professional with 17 years of corporate experience. Absolute specialist in process automation, generation and validation of ANS standards (XML) with 100% compliance. Today I apply my strong analytical expertise (Power BI) combined with advanced Web development (Next.js, React) to architect high-performance solutions with direct impact.',
    expTitle: 'Professional Experience',
    jobs: [
      {
        title: 'Web Systems Developer',
        company: 'Freelance',
        date: 'Jan 2023 – Present',
        desc: 'Delivery of multiple scalable web projects and RESTful APIs (Node/Python/PHP). Process automation significantly reducing operational time. Implementation of automated testing (Jest) and CI/CD ensuring stability and performance.'
      },
      {
        title: 'Data & AI Analyst (Project)',
        company: 'DataGuvi',
        date: 'May 2026 – Jun 2026',
        desc: 'Transformation of raw data into strategic decisions. Mastery in ETL (Power Query), relational modeling (Star Schema) and advanced DAX. Creation of interactive dashboards for real-time tracking of business KPIs.'
      },
      {
        title: 'Billing Assistant (IT & Integration)',
        company: 'Unimed Bauru Hospital',
        date: 'Mar 2009 – Apr 2026 (17 years)',
        desc: 'Generation of ANS Standard XML files (2,500+ monthly records) without failures and systems integration across units. Technical leadership and mentoring of local teams, translating business requirements into adopted IT solutions.'
      },
      {
        title: 'Administrative',
        company: 'Bauru City Hall',
        date: '5 years',
        desc: 'Critical management of municipal documentation, operating licenses emission processes, construction and occupancy permits.'
      },
      {
        title: 'Technical Support',
        company: 'Lan House',
        date: '2 years',
        desc: 'Hardware maintenance, network configuration, technical customer service and various administrative routines.'
      }
    ],
    projectsTitle: 'Projects & Portfolio',
    projectsSubtitle: 'Recent Projects',
    recentProjects: [
      {
        name: 'LinkedIn Jobs (SaaS & AI)',
        url: 'https://vagas-linkedin-sua-url.vercel.app',
        tech: 'Next.js 16, React 19, Gemini AI, Tailwind, Shadcn',
        desc: 'Aggregator with web scraping, admin panel, advanced filters, and AI integration.'
      },
      {
        name: 'Finance AI',
        url: 'https://financeai-sua-url.vercel.app',
        tech: 'Next.js 15, Prisma, Stripe, Clerk Auth',
        desc: 'SaaS platform for financial management with artificial intelligence and payments.'
      },
      {
        name: 'Barbershop (Scheduling)',
        url: 'https://barbeiro-sua-url.vercel.app',
        tech: 'Next.js 16, Prisma, Neon Serverless, NextAuth',
        desc: 'Complete scheduling system with notifications and dark mode.'
      },
      {
        name: 'Modern E-commerce',
        url: 'https://loja-sua-url.vercel.app',
        tech: 'Next.js 16, GraphQL, Prisma, Zustand, Stripe',
        desc: 'Full virtual store with cart, checkout, and global state management.'
      },
      {
        name: 'Condominium (Real-Time)',
        url: 'https://condominio-sua-url.vercel.app',
        tech: 'Next.js 16, WebSockets, Prisma, JWT',
        desc: 'Resident management with real-time chat and administrative panel.'
      },
      {
        name: 'Task Manager (Kanban)',
        url: 'https://tarefas-sua-url.vercel.app',
        tech: 'Next.js 16, Dnd-kit, Tailwind, Analytics',
        desc: 'Task manager with drag-and-drop and productivity analysis.'
      }
    ],
    projectsDesc: 'Source code and live applications available in my portfolio.',
    footer: 'Online Version: curriculo-gules-seven.vercel.app'
  }
};

const t = texts[lang];

// A4 Size: 595.28 x 841.89 points
const doc = new PDFDocument({ margin: 0, size: 'A4' });

if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
}

doc.pipe(fs.createWriteStream(t.filename));

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
doc.font('Helvetica').fontSize(9).fill('#94a3b8').text(t.title, 0, sideY, { align: 'center', width: SIDEBAR_W });
sideY += 30;

// Contact
doc.rect(20, sideY, SIDEBAR_W - 40, 1).fill('#334155'); sideY += 15;
doc.font('Helvetica').fontSize(8).fill('#e2e8f0');
doc.text(t.location, 25, sideY); sideY += 15;
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

drawSideTitle(t.skillsTitle);
drawSkill('React / Next.js', 0.95);
drawSkill('TypeScript & JS', 0.90);
drawSkill('Tailwind & UI/UX', 0.85);
drawSkill('Power BI & DAX', 0.95);
drawSkill('ETL & Power Query', 0.90);
sideY += 10;

drawSideTitle(t.educationTitle);
doc.font('Helvetica-Bold').fontSize(9).fill('#e2e8f0').text(t.educationCourse, 25, sideY); sideY += 12;
doc.font('Helvetica').fontSize(8).fill('#94a3b8').text('UNINTER (2023 - 2025)', 25, sideY); sideY += 25;

drawSideTitle(t.certsTitle);
doc.font('Helvetica').fontSize(8).fill('#cbd5e1');
t.certs.forEach(c => {
  doc.circle(28, sideY + 3, 2).fill('#3b82f6');
  doc.text(c, 35, sideY);
  sideY += 13; // slightly tighter spacing to fit everything perfectly
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

drawMainTitle(t.profileTitle);
doc.font('Helvetica').fontSize(9.5).fill('#334155').text(
  t.profileDesc, 
  mainX, mainY, { width: mainW, align: 'justify', lineGap: 3 }
);
mainY = doc.y + 25;

drawMainTitle(t.expTitle);

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

t.jobs.forEach(job => {
  addTimelineItem(job.title, job.company, job.date, job.desc);
});

// Draw the last piece of timeline line extending slightly downwards
doc.moveTo(timelineX, prevY + 8).lineTo(timelineX, mainY).lineWidth(1).stroke('#cbd5e1');

mainY += 10;

drawMainTitle(t.projectsTitle);
doc.font('Helvetica-Bold').fontSize(10.5).fill('#0f172a').text(t.projectsSubtitle, mainX, mainY, { width: mainW });
mainY = doc.y + 4;

if (t.recentProjects) {
  t.recentProjects.forEach(proj => {
    if (proj.url) {
      doc.font('Helvetica-Bold').fontSize(9).fill('#3b82f6').text(`• ${proj.name} `, mainX, mainY, { continued: true, link: proj.url });
    } else {
      doc.font('Helvetica-Bold').fontSize(9).fill('#0f172a').text(`• ${proj.name} `, mainX, mainY, { continued: true });
    }
    doc.font('Helvetica-Oblique').fontSize(8).fill('#64748b').text(`| ${proj.tech}`);
    mainY = doc.y + 2;
    doc.font('Helvetica').fontSize(8.5).fill('#334155').text(proj.desc, mainX + 10, mainY, { width: mainW - 10, align: 'justify', lineGap: 1.5 });
    mainY = doc.y + 6;
  });
}

doc.font('Helvetica-Oblique').fontSize(8.5).fill('#3b82f6').text(
  t.projectsDesc, 
  mainX, mainY, { width: mainW, align: 'justify', lineGap: 2 }
);

// Footer subtle text
doc.font('Helvetica-Oblique').fontSize(8).fill('#94a3b8').text(
  t.footer, 
  mainX, PAGE_H - 25, { width: mainW, align: 'right', link: 'https://curriculo-gules-seven.vercel.app/' }
);

doc.end();
console.log(`1-Page High-End Corporate PDF Generated! [Language: ${lang}]`);
