const fs = require('fs');

const content = fs.readFileSync('src/data/cursos.ts', 'utf8');
const json = content.replace('export const cursos = ', '').replace(/;$/, '');
const data = eval(json);

const dict = {
  'Janeiro': 'January', 'Fevereiro': 'February', 'Março': 'March', 'Abril': 'April',
  'Maio': 'May', 'Junho': 'June', 'Julho': 'July', 'Agosto': 'August',
  'Setembro': 'September', 'Outubro': 'October', 'Novembro': 'November', 'Dezembro': 'December',
  ' de ': ' ',
  
  'Habilidades analíticas': 'Analytical Skills',
  'Realização de testes': 'Testing',
  'Negócios': 'Business',
  'Comunicação': 'Communication',
  'Redes de computadores': 'Computer Networks',
  'Automação': 'Automation',

  'Curso para Gestantes': 'Course for Pregnant Women',
  'Intensivão': 'Crash Course',
  'Minicurso': 'Mini-course',
  'Formação': 'Certification Track',
  'Curso': 'Course',
  'Avançado': 'Advanced',
  'Básico': 'Basic',
  'Iniciante': 'Beginner',
  'Desenvolvimento': 'Development',
  'Lógica de Programação': 'Programming Logic'
};

const translateString = (str) => {
  if (!str) return str;
  let newStr = str;
  for (const [pt, en] of Object.entries(dict)) {
    newStr = newStr.replace(new RegExp(pt, 'gi'), (match) => {
      // Preserve case
      if (match === match.toUpperCase()) return en.toUpperCase();
      if (match[0] === match[0].toUpperCase()) return en.charAt(0).toUpperCase() + en.slice(1);
      return en;
    });
  }
  // Custom replacements
  newStr = newStr.replace(/e mais (\d+) competências/gi, 'and $1 more skills');
  return newStr;
};

const translatedData = data.map(c => ({
  ...c,
  title: translateString(c.title),
  date: translateString(c.date),
  skills: translateString(c.skills)
}));

const output = `
export const cursosPt = ${JSON.stringify(data, null, 2)};

export const cursosEn = ${JSON.stringify(translatedData, null, 2)};

export const getCursos = (lang: string) => lang === 'en' ? cursosEn : cursosPt;
`;

fs.writeFileSync('src/data/cursos.ts', output);
console.log('Translated successfully!');
