# Flashcards Project

This is a solution to the [Flashcards project challenge on roadmap.sh](https://roadmap.sh/projects/flash-cards).

## Project URL
https://flash-cards-react-sandy.vercel.app/

# 🚀 JS/React Flashcards: Mastering the Core (Roadmap.sh Code)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Desenvolvi esta plataforma de flashcards interativos para consolidar conceitos de JS moderno(ES6+) e React, servindo como uma ferramenta de estudo prática e visual para desenvolvedores que buscam a senioridade.

## 🎯 O que este projeto resolve?

O foco principal é reforçar a memória muscular técnica. O app desafia o desenvolvedor com tópicos críticos como Hoisting, Temporal Dead Zone (TDZ), Prototypes e Closures. Através de uma interface simples e intuitiva, transformo o estudo teórico em uma experiência prática e dinâmica.

### Principais Funcionalidades

- **🧠 Estudo Ativo:** Sistema de flip 3D para testar o conhecimento antes de ver a resposta.
- **📊 Feedback Visual:** Barra de progresso dinâmica que calcula o desempenho em tempo real.
- **🎨 Design Premium:** Estética Dark Mode com efeitos de vidro (Glassmorphism) e brilhos neon para reduzir o cansaço visual.
- **📱 Mobile-First:** Arquitetura totalmente responsiva, garantindo que o aprendizado aconteça em qualquer dispositivo.

## 🛠️ Engenharia por trás do código

Optei por uma abordagem "Lightweight & Vanilla-ish", focando em performance bruta:

- **React (Hooks & State):** Gestão eficiente de estado para navegação entre cards e persistência de progresso.
- **CSS Moderno (Sem Libs Externas):** Utilizei `clamp()` para tipografia fluida, Flexbox/Grid para layout e Perspective 3D para animações nativas. O objetivo foi provar que é possível criar interfaces incríveis sem sobrecarregar o bundle com bibliotecas pesadas de estilo.
- **Clean Architecture:** Separação rigorosa de responsabilidades entre componentes (`ProgressBar`, `Flashcard`, `App`) e centralização de dados no `questions.js`.

🚀 Como rodar o projeto
Se você quer elevar seu nível em JS ou contribuir com novas questões:

1. Clone o repo:

   ```bash
   git clone https://github.com/DanielMartinsn444/Flash-Cards-React-.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Dê o play:

   ```bash
   npm run dev
   ```

## 👨‍💻 Mentor Notes

Este projeto é um marco no meu roadmap de evolução em React. Mais do que "fazer funcionar", o desafio aqui foi dominar a responsividade matemática e garantir uma UI fluida. No desenvolvimento, priorizei a acessibilidade e o desempenho de renderização, entendendo como o React lida com o ciclo de vida de componentes que mudam constantemente de estado.
----

English Version:

Flashcards Project
This is a solution to the Flashcards project challenge on roadmap.sh.

Project URL
https://flash-cards-react-sandy.vercel.app/

🚀 JS/React Flashcards: Mastering the Core
I developed this interactive flashcard platform to consolidate Modern JS (ES6+) and React concepts. It serves as a practical and visual study tool for developers aiming for seniority by mastering core technical principles.

🎯 Purpose
The main goal is to strengthen technical muscle memory. The app challenges developers with critical topics such as Hoisting, Temporal Dead Zone (TDZ), Prototypes, and Closures. Through a clean and intuitive interface, I transform theoretical study into a practical and dynamic experience.

Key Features
🧠 Active Recall: 3D flip-card system to test knowledge before revealing the answer.

📊 Visual Feedback: Dynamic progress bar calculating learning status in real-time.

🎨 Premium Design: Dark Mode aesthetic featuring Glassmorphism and neon glows to reduce eye strain.

📱 Mobile-First: Fully responsive architecture, ensuring learning happens on any device.

🛠️ Engineering Behind the Code
I chose a "Lightweight & Vanilla-ish" approach, focusing on raw performance:

React (Hooks & State): Efficient state management for card navigation and progress persistence.

Modern CSS (Zero External Libs): Leveraged clamp() for fluid typography, Flexbox/Grid for layout, and Perspective 3D for native animations. The goal was to prove that stunning interfaces can be built without bloating the bundle with heavy styling libraries.

Clean Architecture: Strict separation of concerns between components (ProgressBar, Flashcard, App) and centralized data management in questions.js.

🚀 How to Run
If you want to level up your JS skills or contribute new questions:
   ```bash
Clone the repo: git clone https://github.com/DanielMartinsn444/Flash-Cards-React-.git
   ```
   ```bash
Install dependencies: npm install
   ```

   ```bash
Start development: npm run dev
   ```

👨‍💻 Mentor Notes
This project is a milestone in my React evolution roadmap. Beyond "making it work," the challenge was mastering mathematical responsiveness and ensuring a fluid UI. During development, I prioritized accessibility and rendering performance, gaining a deep understanding of how React handles the lifecycle of components with constant state changes.


