---
title: "Your AI Partner in Peer Learning"
description: "Discover PeeragogyBot, an open-source conversational AI built with Flowise to foster reflection, collaboration, and cognitive co-creation in peer learning environments."
---


An AI companion designed to enhance peer learning through reflection and co-creation, trained on the Peeragogy Handbook.

![PeeragogyBot Hero](/images/peeragogy_bot.webp)

<p align="right">
  <a href="https://ftg-003.github.io/siar/" target="_blank">
    <img src="https://img.shields.io/badge/version-1.2.0-blue.svg" alt="Version" />
  </a><br />
  <small>April 1, 2025 — by <a href="https://ftg-003.github.io/siar/" target="_blank">Fabrizio Terzi</a></small>
</p>

1-**[Chat with the Bot](https://ftg-003.github.io/Peeragogy_ChatBot/)**
2-**[View on GitHub](https://github.com/FTG-003/Peeragogy_ChatBot)**

---

## What is PeeragogyBot?

PeeragogyBot is an open-source conversational AI assistant specifically designed to support **peer learning (peeragogy)** in the age of artificial intelligence. Think of it as a guide, a reflective partner, and a co-creative agent rolled into one.

Trained on the extensive knowledge base of the [Peeragogy Handbook V3 – AI Edition](https://ftg-003.github.io/Peeragogy_ChatBot/) (5,083 entries!), the bot embodies peeragogical principles. It doesn't just provide answers; it encourages deeper thinking, helps articulate ideas, and facilitates collaborative exploration of topics.

It's built for communities, classrooms, and any group aiming to learn more effectively together.

---

## Core Features

- 💬 **Conversational Interaction**: Engage in natural language dialogues. Ask questions, explore concepts, and let your curiosity lead the way.
- 🧠 **Reflective & Co-Creative**: Designed to stimulate metacognition. It helps you reflect on your learning process and co-create understanding with peers and the AI.
- 🛠️ **Modular & Customizable**: Built using [Flowise](https://flowiseai.com/), allowing easy modification of prompts, tools, knowledge bases, and workflows.
- 🌐 **Easily Deployable**: Host your own instance locally or on cloud platforms like Railway, Render, or Koyeb. Full control over your bot.
- 🔐 **Privacy-Focused**: Features temporary chat logs and optional database Time-To-Live (TTL) settings. No hidden tracking or analytics.
- 📖 **Knowledge-Grounded**: Answers are grounded in the Peeragogy Handbook, providing contextually relevant information using Retrieval-Augmented Generation (RAG).

---

## How It Works: The Tech Behind the Bot

PeeragogyBot leverages a modern AI stack orchestrated by **Flowise**, an open-source UI visual tool for building customized LLM flows.

The core components include:

```plaintext
User Input ↔️ [Flowise UI/API]
              ↕️
+------------------------------------+
| Flowise Workflow (ToolAgent)       |
|------------------------------------|
| 1. Input Processing & History Mgmt |
| 2. Tool Selection (Conditional)    |
|    a. Retrieval (Pinecone/VectorDB)|
|       - Query Vector Store        |
|       - Fetch Relevant Docs       |
|    b. Reflective Prompting        |
|    c. Standard LLM Call (OpenAI)  |
| 3. RAG Memory Integration          |
| 4. Response Generation (LLM)     |
| 5. Output Formatting               |
+------------------------------------+
              ↕️
           [Backend Services]
           - OpenAI API
           - Pinecone (or other Vector DB)
           - NeonDB (Optional: Chat History w/ TTL)
              ↕️
           [Knowledge Base]
           - Peeragogy Handbook Embeddings
```

- **User Interaction:** You chat via a web interface.
- **Flowise Backend:** Manages the conversation flow, calling different tools as needed.
- **Retrieval (RAG):** Queries a vector database (like Pinecone) containing the Peeragogy Handbook to find relevant text passages.
- **LLM (OpenAI):** Uses a Large Language Model (like GPT-3.5/4) to understand the query, process retrieved information, and generate a conversational, reflective response.
- **Memory:** Maintains conversation context and uses RAG to ground responses in the provided knowledge base.
- **Deployment:** The Flowise pipeline is deployed (e.g., via GitHub Actions) to a hosting service, making the bot accessible online.

[Explore the Flowise Backend Code](https://github.com/FTG-003/PeeragogyBot-Flowise/tree/chatbot_deploy/peeragogy-bot)

---

## Get Started: Using PeeragogyBot

1. 🔗 **Visit the Bot**: Go to the public instance hosted at [peeragogybot.pyragogy.org](https://peeragogybot.pyragogy.org).
2. 💬 **Start Chatting**: Ask anything related to peer learning, the Peeragogy Handbook, using AI in education, or reflective practices. Try questions like: "What is the core idea of peeragogy?", "How can AI help facilitate peer feedback?", or "Summarize the PAR Framework".
3. 🤔 **Explore & Reflect**: Notice how the bot encourages you to think deeper. Use it as a sounding board or a tool to explore the handbook's concepts.

---

## For Developers & Contributors

PeeragogyBot is an open-source project, and we welcome contributions!

You can:

- **Fork the Repositories:** Get the code for the [Chatbot UI](https://github.com/FTG-003/Peeragogy_ChatBot) and the [Flowise Backend](https://github.com/FTG-003/PeeragogyBot-Flowise).
- **Customize Your Instance:** Modify the system prompts, integrate different tools, change the knowledge base (use your own documents!), or adjust the data logging settings (e.g., MongoDB TTL for session storage).
- **Deploy Your Own Bot:** Follow the instructions in the repositories to deploy the bot on platforms like Railway, Render, Koyeb, or locally.
- **Contribute Back:** Report issues, suggest improvements, or submit pull requests to enhance the bot's capabilities or documentation.

[Bot UI Repository](https://github.com/FTG-003/Peeragogy_ChatBot) · [Flowise Backend Repository](https://github.com/FTG-003/PeeragogyBot-Flowise)

---

## Privacy & Data

We respect your privacy. The public instance of PeeragogyBot uses temporary chat logs for context during a session. If persistent storage (like MongoDB) is configured in a deployment, it includes Time-To-Live (TTL) features to automatically delete data after a specified period. We do not use hidden analytics or tracking.

---

## Join the Pyragogy Project

PeeragogyBot is part of the broader **Pyragogy Open Source Initiative**, aiming to build tools and practices for effective peer learning in the digital age.

Connect with the community, explore other projects, and help us reimagine learning—together, with AI.

[Peeragogy Handbook](https://ftg-003.github.io/Peeragogy_ChatBot/)

---

**Built with Flowise, OpenAI, and the Peeragogy Handbook.**  
*Open Source (Specify License Type if known, e.g., MIT License)*


