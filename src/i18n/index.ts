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
          description: 'Transformação de dados brutos em decisões estratégicas. Domínio em ETL (Power Query), modelagem relacional (Star Schema) e DAX avançado. Criação de dashboards interativos para acompanhamento de KPIs de negócio em tempo real.',
        },
        {
          role: 'Assistente de Faturamento (TI & Integração)',
          company: 'Hospital Unimed Bauru',
          date: 'Mar 2009 – Abr 2026 (17 anos)',
          description: 'Responsável direto pela conferência e geração de arquivos XML Padrão ANS (2.500+ registros mensais) sem falhas. Implantação e integração de sistemas nas unidades SEDE, HUB e CDU. Treinamento e suporte massivo de novas tecnologias e processos às equipes locais, garantindo adoção total das plataformas.',
        },
        {
          role: 'Administrativo',
          company: 'Prefeitura Municipal de Bauru',
          date: '5 anos',
          description: 'Gestão rigorosa de documentação municipal, incluindo alvarás de funcionamento, processos de alvarás de construção e expedição de habite-se.',
        },
        {
          role: 'Suporte Técnico e Atendimento',
          company: 'Lan House',
          date: '2 anos',
          description: 'Acolhimento ao cliente, manutenção e configuração de hardware/software, gestão de tempo e recursos, e serviços rápidos de design gráfico e emissão de documentos governamentais.',
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
          description: 'Transformation of raw data into strategic decisions. Expertise in ETL (Power Query), relational modeling (Star Schema), and advanced DAX. Creation of interactive dashboards to monitor business KPIs in real-time.',
        },
        {
          role: 'Billing Assistant (IT & Integration)',
          company: 'Hospital Unimed Bauru',
          date: 'Mar 2009 – Apr 2026 (17 years)',
          description: 'Directly responsible for checking and generating ANS Standard XML files (2,500+ monthly records) without errors. Deployment and integration of systems across SEDE, HUB, and CDU units. Massive training and support of new technologies and processes for local teams, ensuring total adoption of the platforms.',
        },
        {
          role: 'Administrative',
          company: 'Bauru City Hall',
          date: '5 years',
          description: 'Strict management of municipal documentation, including business licenses, construction permit processes, and issuance of occupancy permits.',
        },
        {
          role: 'Technical Support & Customer Service',
          company: 'Lan House',
          date: '2 years',
          description: 'Customer reception, hardware/software maintenance and configuration, time and resource management, and quick graphic design services along with government document issuance.',
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
