# 🔥 Challenge - Driven Soft

Bem-vindo(a) à solução do challenge da disciplina de **FrontEnd Development Engineering**!

🎯 **Desafio**:

- Ferramentas/maneiras para auxiliar aqueles com dificuldade em utilizar o celular na saúde digital.

✅ **Resultados esperados**:

- Diminuir a taxa de absenteísmo (de 20% para < 10%)

---

## 📌 Objetivo

O projeto **HC Auxilia React**, desenvolvido pelo nosso grupo **Driven Soft**, tem como principal objetivo **reduzir a taxa de absenteísmo em serviços de saúde digital de 20% para menos de 10%.**
Para isso, a solução foi reconstruída em **React + TypeScript**, oferecendo uma experiência mais moderna, modular e escalável, sem abrir mão da **acessibilidade, usabilidade simplificada e suporte personalizado** durante o processo de agendamento, consulta e acompanhamento em saúde digital.

---

## 🧭 Página Inicial

Assim como na primeira versão, a aplicação React foi projetada para promover a inclusão digital e auxiliar usuários com dificuldades no uso de tecnologias móveis.
Os princípios seguidos foram baseados nas **Heurísticas de Usabilidade de Jakob Nielsen**:

- **Cores claras e acessíveis** → leitura facilitada e redução do cansaço visual.
- **Navegação simples e direta** → menus intuitivos, ícones explicativos e botões de destaque.
- **Feedback constante** → mensagens de carregamento, confirmações de envio e redirecionamentos claros.
- **Consistência visual e funcional** → experiência previsível e confiável.
- **Configurações de acessibilidade** → ajuste de tamanho de fonte, contraste e **modo escuro/claro**.

Recursos adicionais:

- **Assistente virtual (Watson Chat)** integrado via componente dedicado.
- **Botão de ajuda sempre visível.**
- **Formulário de feedback validado.**
- **Seções de consultas, cuidadores, manuais, FAQ e suporte digital** em destaque.

---

## 📁 Estrutura de Pastas e Arquivos

```
HC-Auxilia-React/
├── package.json              # Gerencia dependências, scripts e metadados do projeto
├── package-lock.json         # Lockfile que garante versões exatas das dependências
├── vite.config.ts            # Configuração do Vite (bundler)
├── tsconfig.json             # Configuração principal do TypeScript
├── tsconfig.app.json         # Configuração TypeScript para app
├── tsconfig.node.json        # Configuração TypeScript para Node
├── eslint.config.js          # Regras de lint para padronizar código
├── index.html                # Estrutura base do app React
├── README.md                 # Documentação do projeto
├── .gitignore                # Arquivos/pastas ignorados pelo Git
│
├── src/                      # 🌟 Código-fonte principal
│   ├── App.tsx               # Componente raiz do React
│   ├── main.tsx              # Ponto de entrada da aplicação
│   ├── index.css             # Estilos globais
│   ├── vite-env.d.ts         # Tipagem automática do Vite
│   │
│   ├── assets/               # 🎨 Recursos estáticos (imagens, ícones, logos)
│   │   ├── fotos/            # Fotos de integrantes
│   │   ├── icones/           # Ícones e imagens gerais
│   │   └── imgmanuais/       # Prints utilizados nos manuais
│   │
│   ├── components/ # 🧩 Componentes reutilizáveis
│   │   ├── Header.tsx           # Cabeçalho principal
│   │   ├── Footer.tsx           # Rodapé do site
│   │   ├── ButtonWrapper.tsx    # Botões customizados
│   │   ├── IconCard.tsx         # Cards com ícones
│   │   ├── InfoDiv.tsx          # Div personalisada e padronizada
│   │   ├── InfoText.tsx         # Texto padronizado pra usar dentro do InfoDiv
│   │   ├── IntegranteCard.tsx   # Card de integrante reutilizável
│   │   ├── ItensHeader.tsx      # Botões do header componentizados
│   │   ├── ItemHeaderMobile.tsx # Botões do header componentizados para mobile
│   │   ├── OpenCard.tsx         # Card que abre ao clicar
│   │   ├── Wrapper.tsx          # Wrapper para envolver uma página p/ padronizar aparência
│   │   ├── FeedbackForm.tsx     # Formulário de feedback
│   │   ├── DarkModeToggle.tsx   # Alternância de tema (claro/escuro)
│   │   └── VoltarButton.tsx     # Botão de voltar navegação
│   │
│   ├── data/                 # 📊 Dados estáticos
│   │   └── integrantes.ts    # Lista dos integrantes com infos
│   │
│   └── routes/               # 🌍 Páginas do sistema (organizadas por pastas)
│       ├── Home/             # Página inicial
│       │   └── Home.tsx
│       ├── Contato/          # Página de contato + notificações
│       │   ├── Contato.tsx
│       │   └── Notificacoes.tsx
│       ├── Cuidador/         # Página destinada aos cuidadores
│       │   └── Cuidador.tsx
│       ├── Faq/              # Perguntas frequentes
│       │   └── Faq.tsx
│       ├── Feedback/         # Página de feedback
│       │   └── Feedback.tsx
│       ├── Integrantes/      # Listagem de todos os integrantes
│       │   └── Integrantes.tsx
│       ├── IntegranteDetalhe/# Página de detalhe individual
│       │   └── IntegranteDetalhe.tsx
│       ├── Manuais/          # Guias e manuais de uso
│       │   ├── Manuais.tsx             # Tela principal de manuais
│       │   ├── ComCadastro.tsx         # Manual para usuários cadastrados
│       │   ├── SemCadastro.tsx         # Manual para usuários sem cadastro
│       │   └── ManualTeleconsulta.tsx  # Passo a passo da teleconsulta
│       ├── Sobre/            # Sobre o projeto e equipe
│       │   └── Sobre.tsx
│       ├── ErrorPage/        # Página de erro de redirecionamento
│       │   └── ErrorPage.tsx
│       └── Root/             # Estrutura de layout base
│           └── root.tsx

```

---

## 🛠️ Tecnologias Utilizadas

- **React 18 + TypeScript** → construção modular, tipada e escalável.
- **Vite** → bundler rápido para desenvolvimento moderno.
- **React Router DOM** → gerenciamento de rotas e navegação.
- **React Hook Forms** → criação de formulários em React
- **CSS3 / Tailwind-like responsividade** → estilos acessíveis e adaptativos.
- **Chat Watson** → assistente virtual integrado.
- **Boas práticas de acessibilidade (WCAG, Nielsen Heuristics).**
- **Git + GitHub** → versionamento e colaboração em equipe.

---

## 👥 Integrantes

- 🧑‍🎨 **Henrique Cunha Torres, RM: 565119**
- 👨‍💻 **Felipe Bezerra Beatriz, RM: 564723**
- 👨‍🔬 **Max Hayashi Batista, RM: 563717**

---

## 🌐 Repositório do Projeto no GitHub

- 🔗 [HC-Auxilia-React](https://github.com/Driven-Soft/HC-Auxilia-React)

## 📽️ Link do vídeo Pitch

- 💾 [Vídeo Pitch](https://youtu.be/lOz-UBzhXnM)

---

✨ Obrigado por conhecer nosso projeto!
