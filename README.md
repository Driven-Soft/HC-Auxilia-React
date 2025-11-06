# 🔥 Challenge - Driven Soft

Bem-vindo(a) à solução do challenge da disciplina de **FrontEnd Development Engineering**!

🎯 **Desafio**:

- Ferramentas/maneiras para auxiliar aqueles com dificuldade em utilizar o celular na saúde digital.

✅ **Resultados esperados**:

- Diminuir a taxa de absenteísmo (de 20% para < 10%)

---

## 📌 Objetivo

O projeto **HC Auxilia React**, desenvolvido pelo nosso grupo **Driven Soft**, tem como principal objetivo **reduzir a taxa de absenteísmo em serviços de saúde digital de 20% para menos de 10%.**
Para isso, a solução foi reconstruída em **React (v19) + TypeScript**, oferecendo uma experiência mais moderna, modular e escalável, sem abrir mão da **acessibilidade, usabilidade simplificada e suporte personalizado** durante o processo de agendamento, consulta e acompanhamento em saúde digital.

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

- **Assistente virtual (Watson Chat)** integrado via componente dedicado (`src/components/ChatWatson.tsx`).
- **Botão de ajuda sempre visível.**
- **Formulário de feedback validado** (`src/components/FeedbackForm.tsx` + `src/routes/Feedback/Feedback.tsx`).
- **Seções de consultas, cuidadores, manuais, FAQ e suporte digital** em destaque.

---

## 📁 Estrutura de Pastas e Arquivos (resumida)

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
│   ├── components/           # 🧩 Componentes reutilizáveis
│   │   ├── AgendaCard.tsx
│   │   ├── ButtonWrapper.tsx
│   │   ├── ChatWatson.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── FeedbackForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── IconCard.tsx
│   │   ├── InfoDiv.tsx
│   │   ├── InfoText.tsx
│   │   ├── IntegranteCard.tsx
│   │   ├── ItemHeaderMobile.tsx
│   │   ├── ItensHeader.tsx
│   │   ├── LoadingIcon.tsx
│   │   ├── OpenCard.tsx
│   │   ├── VoltarButton.tsx
│   │   └── Wrapper.tsx
│   │
│   ├── context/              # Contextos e provider (ex: ApiProvider)
│   │   └── Api/              # Contexto para chamadas/estado da API
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

## 🛠️ Tecnologias e dependências principais

- **React v19**
- **TypeScript (~5.8)**
- **Vite (7.x)**
- **React Router DOM (v7)**
- **react-hook-form**
- **tailwindcss**
- **lucide-react (ícones)**
- **@fontsource/inter**

Dependências completas e versões estão no `package.json`.

---

## 🗺️ Rotas / Páginas principais

- / (Home)
- /manuais (Manuais: ComCadastro, SemCadastro, ManualTeleconsulta)
- /integrantes (lista de integrantes)
- /integrantes/:id (detalhe do integrante)
- /contato (Contato + Notificações)
- /feedback (Formulário de feedback)
- /faq (Perguntas frequentes)
- /sobre (Sobre o projeto)

---

## 👥 Integrantes

- 🧑‍🎨 **Henrique Cunha Torres, RM: 565119**
- 👨‍💻 **Felipe Bezerra Beatriz, RM: 564723**
- 👨‍🔬 **Max Hayashi Batista, RM: 563717**

---

## 🌐 Repositório do Projeto no GitHub

- 🔗 [HC-Auxilia-React](https://github.com/Driven-Soft/HC-Auxilia-React)

## 📽️ Link do vídeo Pitch

- 💾 [Vídeo Pitch](https://youtu.be/dAhKj4EIA0I)

## Link do projeto na Vercel

- 🌟 [HC-Auxilia-Vercel](https://hc-auxilia.vercel.app/)

- ❗ Considere que a API requere aproximadamente 30s para ser inicializada após 15 minutos sem uso! Ao testar a aplicação, aguarde um pouco para as requisições carregarem.

## Link da API feita em JAVA (RENDER)

- 🛠️ [HC-Auxilia-API](https://hc-auxilia-api.onrender.com/)

---

✨ Obrigado por conhecer nosso projeto!
