export interface Integrante {
  rm: string;
  nome: string;
  img: string;
  git: string;
  linkedIn: string;
  descricao: string;
  email:string;
}

export const integrantes: Integrante[] = [
  {
    nome: "Felipe Bezerra Beatriz",
    rm: "564723",
    img: "/src/assets/fotos/felipe.png",
    git: "https://github.com/FelipeBeatriz",
    linkedIn: "https://www.linkedin.com/in/felipe-bezerra-beatriz-b1b16b356/",
    email: "felipe.beatriz199@gmail.com",
    descricao: "Desenvolvedor apaixonado por tecnologia e aprendizado contínuo. Atualmente, estou explorando projetos em PHP, TypeScript e Java, com foco em aplicações práticas e eficientes. Busco sempre aprimorar minhas habilidades e contribuir para a comunidade de código aberto."
  },
  {
    nome: "Max Hayashi Batista",
    rm: "563717",
    img: "/src/assets/fotos/max.png",
    git: "https://github.com/y3llowhusky",
    linkedIn: "https://www.linkedin.com/in/max-hayashi-batista-572622356/",
    email: "hayashibatista@gmail.com",
    descricao: "Apaixonado por desenvolvimento e novas tecnologias, Max se dedica a projetos em Java, JavaScript e Python. Ele busca transformar ideias em soluções práticas, explorando sempre formas eficientes de programação e automação"
  },
  {
    nome: "Henrique Cunha Torres",
    rm: "565119",
    img: "/src/assets/fotos/henrique.png",
    git: "https://github.com/HenriqueCTorres",
    linkedIn: "https://www.linkedin.com/in/henrique-cunha-torres-44940634a/",
    email: "henriquect08@gmail.com",
    descricao: "Henrique é um desenvolvedor focado em aplicações web, trabalhando principalmente com Ciência de Dados e TypeScript. Ele gosta de enfrentar desafios técnicos e aprimorar suas habilidades criando experiências digitais funcionais e modernas."
  }
];