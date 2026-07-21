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
doc.fontSize(10).fill('#cbd5e1').text('Bauru, SP - Disponível para Remoto/Híbrido', 160, 100);
doc.fontSize(10).fill('#cbd5e1').text('dnlortega@gmail.com   |   (14) 98129-4913', 160, 115);

// Links
doc.fontSize(10).fill('#3b82f6')
   .text('LinkedIn: linkedin.com/in/daniel-op', 160, 130, { link: 'https://linkedin.com/in/daniel-op', continued: true })
   .fill('#cbd5e1').text('   |   ', { continued: true })
   .fill('#3b82f6').text('GitHub: github.com/dnlortega', { link: 'https://github.com/dnlortega' });

// Reset margins explicitly after header
doc.x = 50;
doc.y = 175;
doc.moveDown(2);

// Helper for Section Titles
function createSection(title) {
  doc.x = 50;
  doc.fill('#1e293b').fontSize(20).text(title);
  doc.rect(50, doc.y + 2, 500, 2).fill('#3b82f6'); // Blue accent line
  doc.moveDown(0.8);
  doc.x = 50; // Ensure text following the title starts at 50
}

// Section: Objetivo Profissional
createSection('Objetivo Profissional');
doc.fontSize(12).fill('#334155').text('Profissional de Tecnologia com mais de 15 anos de experiência em integração de sistemas corporativos, análise de dados e desenvolvimento moderno. Especialista na automação de processos, geração de remessas e validação de padrões ANS (XML) com histórico de 100% de conformidade. Hoje meu foco é aplicar essa expertise analítica na criação de soluções de ponta, combinando Power BI, ETL e modelagem de dados com o desenvolvimento Web full stack de altíssima performance utilizando Next.js, React e Tailwind CSS.', { width: 500, lineGap: 4 });

doc.moveDown(1.5);

// Section: Projetos e Portfólio (NEW HR FIX)
createSection('Projetos em Destaque');
doc.fontSize(13).fill('#0f172a').text('SaaS de Agendamentos para Clínicas');
doc.fontSize(11).fill('#64748b').text('Tecnologias: React, Next.js, Tailwind CSS, Banco de Dados');
doc.fontSize(12).fill('#334155').text('Desenvolvimento completo de um sistema de agendamento online com painel administrativo e interface para pacientes.', { lineGap: 2 });
doc.moveDown(0.5);
doc.fontSize(13).fill('#0f172a').text('Sistema de Autoatendimento para Restaurantes');
doc.fontSize(11).fill('#64748b').text('Tecnologias: JavaScript, Integrações API, UI/UX');
doc.fontSize(12).fill('#334155').text('Criação de interface de quiosque e fluxo de pedidos integrados ao sistema do restaurante para eficiência operacional.', { lineGap: 2 });
doc.moveDown(1.5);

// Section: Experiência Profissional
createSection('Experiência Profissional');

doc.fontSize(14).fill('#0f172a').text('DataGuvi', { continued: true }).fill('#64748b').text('  (05/2026 – 06/2026)', { align: 'right' });
doc.fontSize(11).fill('#3b82f6').text('Analista de Dados & IA (Projeto)');
doc.fontSize(12).fill('#334155').text('Foco em transformar dados brutos em decisões estratégicas. Atuação profunda com análise de dados, domínio em ETL (Power Query), modelagem relacional (Star Schema), DAX avançado e criação de dashboards intuitivos com foco em KPIs operacionais e de negócio.', { lineGap: 3 });
doc.moveDown(1);

doc.fontSize(14).fill('#0f172a').text('Hospital Unimed Bauru', { continued: true }).fill('#64748b').text('  (03/2009 – 04/2026)', { align: 'right' });
doc.fontSize(11).fill('#3b82f6').text('Assistente de Faturamento (TI & Integração)');
doc.fontSize(12).fill('#334155').text('• Responsável central pela conferência e geração de remessas e arquivos XML conforme padrões ANS, processando mais de 2.500 registros mensais com 100% de conformidade.\n• Configuração e validação de XMLs para importação nos sistemas da operadora, alcançando 0% de falhas de integração.\n• Implantação de sistemas corporativos críticos em unidades SEDE, HUB, CDU e BENE, treinando equipes locais e garantindo adoção.', { lineGap: 3 });
doc.moveDown(1);

doc.fontSize(14).fill('#0f172a').text('Prefeitura Municipal de Bauru', { continued: true }).fill('#64748b').text('  (5 anos)', { align: 'right' });
doc.fontSize(11).fill('#3b82f6').text('Administrativo');
doc.fontSize(12).fill('#334155').text('Gestão de documentação municipal, processos de alvarás de funcionamento, construção e expedição de habite-se.', { lineGap: 3 });
doc.moveDown(1);

doc.fontSize(14).fill('#0f172a').text('Lan House', { continued: true }).fill('#64748b').text('  (2 anos)', { align: 'right' });
doc.fontSize(11).fill('#3b82f6').text('Suporte Técnico e Atendimento');
doc.fontSize(12).fill('#334155').text('Atendimento ao cliente, manutenção de hardware/software, gestão de tempo, serviços de gráfica rápida e emissão de documentos.', { lineGap: 3 });
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
