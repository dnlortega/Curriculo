export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Home',
      projects: 'Projetos',
      experience: 'Experiência',
      skills: 'Habilidades',
      education: 'Formação',
      certificates: 'Certificados',
      contact: 'Contato',
    },
    hero: {
      titles: [
        'Desenvolvedor Full Stack',
        'Analista de Sistemas Sênior',
        'Especialista em Dados & BI',
        'Especialista Next.js',
      ],
      description: 'Profissional de Tecnologia com <strong>17+ anos de vivência corporativa</strong> em sistemas hospitalares e BI. Hoje aplico minha forte expertise analítica (Power BI, DAX, XML) e desenvolvimento moderno (Next.js, React, Tailwind) para construir soluções robustas e de alto impacto.',
      downloadCV: 'Baixar CV',
    },
    experience: {
      title: 'Trajetória Profissional',
      description: 'Mais de 17 anos dedicados à tecnologia, da integração de sistemas complexos à construção de aplicações modernas e análise de dados estruturada.',
      jobs: [
        {
          role: 'Analista de Dados & IA (Projeto)',
          company: 'DataGuvi',
          date: 'Mai 2026 – Jun 2026',
          description: 'Aplicações de IA para dados, fine-tuning de modelos LLM, engenharia de prompts e análise de dados em larga escala.',
        },
        {
          role: 'Analista de Intercâmbio',
          company: 'Unimed Bauru',
          date: 'Fev 2023 – Nov 2024',
          description: 'Responsável pelo setor de faturamento de alto custo. Elaboração e gerenciamento de relatórios em <strong>Power BI e Excel</strong> para a diretoria, automação de KPIs, auditoria de processos, revisão de manuais sistêmicos (Biomeek, Gestão de OPME), e liderança de equipe.',
        },
        {
          role: 'Assistente e Analista de Sistemas',
          company: 'Unimed Bauru',
          date: 'Out 2007 – Fev 2023',
          description: 'Sólida vivência na área de TI corporativa. Suporte e manutenção contínua de ERP, estruturação de fluxos (BPMN), desenvolvimento de views para banco de dados e treinamento direto de usuários. Implementação de melhorias via Power BI e reestruturação de áreas.',
        }
      ]
    },
    projects: {
      title: 'Projetos Recentes',
      description: 'Aplicações desenvolvidas aplicando as melhores práticas do ecossistema React, Next.js e TypeScript.',
      tags: {
        all: 'Todos'
      }
    },
    skills: {
      title: 'Habilidades'
    },
    education: {
      title: 'Formação Acadêmica',
      course: 'Análise e Desenvolvimento de Sistemas',
      date: 'Jan 2023 – Jun 2025',
      description: 'Graduação (Tecnólogo) focada no desenvolvimento de software, engenharia de sistemas, metodologias ágeis e inovação tecnológica.',
      badges: ['Gestão de TI', 'Satisfação do cliente', '+12 competências']
    },
    certificates: {
      title: 'Certificados e Cursos',
      description: 'Explore meu arsenal de mais de {count} especializações tecnológicas.',
      searchPlaceholder: 'Buscar curso, instituição...',
      empty: 'Nenhum curso encontrado com esses filtros.',
      loadMore: 'Carregar mais cursos',
      filterAll: 'Todos'
    },
    contact: {
      title: 'Vamos Conversar?',
      description: 'Estou sempre aberto a novos desafios e oportunidades. Me mande uma mensagem e responderei o mais rápido possível!',
      whatsappTitle: 'Me chame no WhatsApp!',
      whatsappDesc: 'Para um contato mais rápido e direto, me mande uma mensagem. Eu costumo responder na mesma hora.',
      button: 'Enviar Mensagem'
    },
    footer: 'Todos os direitos reservados.'
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      titles: [
        'Full Stack Developer',
        'Senior Systems Analyst',
        'Data & BI Specialist',
        'Next.js Expert',
      ],
      description: 'Technology Professional with <strong>17+ years of corporate experience</strong> in hospital systems and BI. Today, I apply my strong analytical expertise (Power BI, DAX, XML) and modern development skills (Next.js, React, Tailwind) to build robust and high-impact solutions.',
      downloadCV: 'Download CV',
    },
    experience: {
      title: 'Professional Trajectory',
      description: 'Over 17 years dedicated to technology, from complex systems integration to building modern applications and structured data analysis.',
      jobs: [
        {
          role: 'Data & AI Analyst (Project)',
          company: 'DataGuvi',
          date: 'May 2026 – Jun 2026',
          description: 'AI applications for data, LLM fine-tuning, prompt engineering, and large-scale data analysis.',
        },
        {
          role: 'Exchange Analyst',
          company: 'Unimed Bauru',
          date: 'Feb 2023 – Nov 2024',
          description: 'Responsible for the high-cost billing sector. Creation and management of reports in <strong>Power BI and Excel</strong> for the board, KPI automation, process auditing, review of systemic manuals (Biomeek, OPME Management), and team leadership.',
        },
        {
          role: 'Systems Assistant & Analyst',
          company: 'Unimed Bauru',
          date: 'Oct 2007 – Feb 2023',
          description: 'Solid experience in corporate IT. Continuous support and maintenance of ERP, flow structuring (BPMN), database view development, and direct user training. Implementation of improvements via Power BI and area restructuring.',
        }
      ]
    },
    projects: {
      title: 'Recent Projects',
      description: 'Applications built applying best practices from the React, Next.js, and TypeScript ecosystem.',
      tags: {
        all: 'All'
      }
    },
    skills: {
      title: 'Skills'
    },
    education: {
      title: 'Academic Education',
      course: 'Systems Analysis and Development',
      date: 'Jan 2023 – Jun 2025',
      description: 'Undergraduate degree (Technologist) focused on software development, systems engineering, agile methodologies, and technological innovation.',
      badges: ['IT Management', 'Customer Satisfaction', '+12 skills']
    },
    certificates: {
      title: 'Certificates and Courses',
      description: 'Explore my arsenal of more than {count} technological specializations.',
      searchPlaceholder: 'Search course, institution...',
      empty: 'No courses found with these filters.',
      loadMore: 'Load more courses',
      filterAll: 'All'
    },
    contact: {
      title: "Let's Talk?",
      description: "I'm always open to new challenges and opportunities. Send me a message and I'll get back to you as soon as possible!",
      whatsappTitle: 'Message me on WhatsApp!',
      whatsappDesc: 'For a faster and more direct contact, send me a message. I usually reply immediately.',
      button: 'Send Message'
    },
    footer: 'All rights reserved.'
  }
};
