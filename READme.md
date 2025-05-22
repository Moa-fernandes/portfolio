
# 👨‍💻 Moacir Fernandes

### FullStack Developer | Front-End UI/UX Specialist | AI Agent Integrator

Hello! I'm **Moacir Fernandes**, a FullStack developer who merges intuitive design with solid architecture. With strong experience in **front-end UI/UX development**, **cloud deployment**, and now **local AI agent integration**, I deliver elegant and efficient solutions that scale from concept to production.

---

## 🚀 Latest Feature: Local AI Agent Powered by Ollama

This portfolio now features a real-time, **local AI-powered agent** using [Ollama](https://ollama.com), an open-source LLM runtime that allows you to run large language models on your own machine without relying on cloud APIs.

### 🔌 What It Does
- 🌐 Runs LLMs locally (no API costs or network dependency)
- 🤖 Integrates models like `gemma:2b` for natural language tasks
- 🧠 Enables multi-role agents: **Ideator**, **Coder**, and **Reviewer**
- 💬 Interacts via a modal interface inside the portfolio

### 🛠️ How It Works
- Backend (`Express.js`) runs on `http://localhost:3001`
- Routes `/api/agent` proxy user messages to Ollama (`http://localhost:11434/api/generate`)
- Model: `gemma:2b` pulled locally and served
- Front-end React component handles UX and displays responses

---

## 🧠 Tech Stack Overview

### 🎨 Front-End (UI/UX-Focused)
- **React.js**, **Vite**, **TypeScript**
- **Styled Components**, **CSS Modules**
- **Framer Motion**, **Custom Modals**
- Responsive, animated, accessible

### ⚙️ Back-End & APIs
- **Node.js**, **Express**
- **Custom API Routing**
- **Ollama integration via HTTP POST**

### 🤖 AI & LLM Tools
- **Ollama**: lightweight local inference runtime
- **gemma:2b** model (Google-backed LLM)
- Agent roles: **Ideator**, **Coder**, **Reviewer**
- Prompt-to-response integration without cloud billing

---

## 💻 Folder Structure Highlight

```
/api
  └── server.js         ← Express server w/ Ollama integration
/src/components
  └── AgentModal.jsx    ← Talk to Agent UI logic
```

---

## 💡 Real Use Case

This portfolio showcases how you can **embed autonomous agents directly into user interfaces**, making it perfect for:

- Portfolios and product showcases
- Internal dashboards
- AI assistants without API dependency

---

## 📫 Let's Connect

- 📧 Email: [moacirsistemax@gmail.com](mailto:moacirsistemax@gmail.com)
- 🧑‍💻 GitHub: [@Moa-fernandes](https://github.com/Moa-fernandes)
- 💼 LinkedIn: [Moacir Fernandes](https://www.linkedin.com/in/moacir-fernandes-ba0a97a0/)


---


# 👨‍💻 Moacir Fernandes

### Desenvolvedor FullStack | Especialista em UI/UX | Integrador de Agentes de IA Locais

Sou **Moacir Fernandes**, desenvolvedor fullstack com paixão por design e engenharia, agora incorporando agentes de IA locais com **Ollama** diretamente no meu portfólio — sem dependência de APIs externas.

---

## 🤖 Recurso Mais Recente: Agente de IA Local com Ollama

Este portfólio conta agora com um **agente de IA local** que roda diretamente na sua máquina usando [Ollama](https://ollama.com), ideal para testes rápidos, sem limites ou custos de API.

### 🔌 O Que Faz
- Executa modelos de linguagem diretamente no seu PC
- Roda o modelo `gemma:2b` para responder interações
- Disponibiliza agentes: **Ideator**, **Coder** e **Reviewer**
- Interface em modal para conversa em tempo real

### ⚙️ Como Funciona
- Backend com Express escutando em `http://localhost:3001`
- Endpoint `/api/agent` envia mensagens ao Ollama local (`localhost:11434`)
- O modelo `gemma:2b` é usado para gerar respostas
- Interface React com botão e modal interativo

---

## 🧠 Stack Técnica

### 🎨 Front-End
- **React.js**, **Vite**
- **Styled Components**, **CSS puro**
- Componentes dinâmicos e responsivos

### ⚙️ Back-End
- **Node.js**, **Express.js**
- Integração direta com Ollama via API local

### 🤖 Ferramentas de IA
- **Ollama** como motor de inferência local
- Modelo **gemma:2b** com foco em NLP
- Respostas baseadas em prompt sem precisar da nuvem

---

## 🗂️ Estrutura do Projeto

```
/api
  └── server.js         ← Servidor Express com integração Ollama
/src/components
  └── AgentModal.jsx    ← UI do modal do agente com lógica de chamada
```

---

## 💬 Casos de Uso

- Assistente no portfólio sem custo extra
- Provas de conceito com IA local
- Soluções offline com interatividade real

---

## 📫 Contato

- 📧 Email: [moacirsistemax@gmail.com](mailto:moacirsistemax@gmail.com)
- 🧑‍💻 GitHub: [@Moa-fernandes](https://github.com/Moa-fernandes)
- 💼 LinkedIn: [Moacir Fernandes](https://www.linkedin.com/in/moacir-fernandes-ba0a97a0/)


## ⚡ Vamos Construir Algo Incrível???

Estou sempre aberto a colaborações interessantes — seja para criar interfaces impactantes, resolver desafios técnicos no back-end, integrar ferramentas de IA ou entregar produtos completos com performance e estilo. Bora conversar? 🚀


## ####################################################################### ################################

## 🇧🇷 Instruções de Uso

### 🎯 Requisitos

* Node.js
* Docker
* Sanity CLI (`npm install -g sanity`)
* Ollama (opcional para uso local do agente IA)

---

### 📁 1. Portfólio Front-End (`/`)

```bash
npm install
npm run dev
```

### ⚙️ 2. API do Agente (`/api`)

```bash
cd api
npm install
node server.js
```

> Essa API se comunica com o Ollama local na porta `11434`. Certifique-se de ter o modelo `gemma:2b` carregado via `ollama pull gemma:2b` e rodando com `ollama run gemma:2b`.

---

### 🧠 3. CMS Sanity (`/portfoliomoacms`)

```bash
cd portfoliomoacms
npm install
npm run dev  # Acessar via http://localhost:3333
npx sanity deploy  # Para publicar no sanity.studio
```

---

### 🐳 4. Docker (Build & Run)

```bash
docker build -t portfolio-react .
docker run -p 80:80 portfolio-react
```

---

## 🇺🇸 Usage Instructions

### 🎯 Requirements

* Node.js
* Docker
* Sanity CLI (`npm install -g sanity`)
* Ollama (optional for offline local AI)

---

### 📁 1. Portfolio Front-End (`/`)

```bash
npm install
npm run dev
```

### ⚙️ 2. Agent API (`/api`)

```bash
cd api
npm install
node server.js
```

> This API talks to local Ollama at port `11434`. Make sure you have the `gemma:2b` model pulled with `ollama pull gemma:2b` and running via `ollama run gemma:2b`.

---

### 🧠 3. Sanity CMS (`/portfoliomoacms`)

```bash
cd portfoliomoacms
npm install
npm run dev  # Open on http://localhost:3333
npx sanity deploy  # Deploy to sanity.studio
```

---

### 🐳 4. Docker (Build & Run)

```bash
docker build -t portfolio-react .
docker run -p 80:80 portfolio-react
```
