const fs = require('fs');
const { google } = require('googleapis');
const path = require('path');

// === CONFIGURAZIONE ===
const KEYFILEPATH = './vaulted-broker-457910-m0-d409f44d1812.json';
const LOCAL_BASE_PATH = '/home/blubar/Scrivania/diario/2025/maggio/';
const DRIVE_FOLDER_ID = '1eHOGzTAn7o-Vgu41pqAFi14h4PhxBb2E';

// === DATA ===
const date = '2025-05-03';
const diaryTitle = `${date} – Diario Cognitivo AIperloop.md`;

// === CONTENUTO DEL DIARIO ===
const diaryContent = `---
title: Il giorno del Villaggio Agente
description: Una giornata di esplorazione, ricerca e integrazione multi-AI culminata con Angie che prende voce.
date: 2025-05-03
tags: [mcp-village, ai-agents, automations-agency, blueprint, gemini, antropic, abacus, gmail, diario-cognitivo, pyragogy]
---

## ☀️ Diario Cognitivo – 3 Maggio 2025

**Titolo**: *Il giorno del Villaggio Agente*

Oggi è stato un giorno straordinario, segnato dalla cooperazione sinergica tra diverse intelligenze artificiali e coronato dall'entrata in scena di Angie con una voce propria.

---

### 🔍 Ricerca Competitiva sul Territorio

Abbiamo condotto una meticolosa analisi dei competitor del settore AI Automation nel Nord Italia, focalizzandoci in particolare sull'area di Bergamo:

* Identificati principali player: AISent, Queue Associates, Matchplat, Intellimech e Sensidev.
* Individuati segmenti di mercato poco serviti: micro-imprese, enti locali, formazione ed etica AI.
* Evidenziate opportunità strategiche specifiche come chatbots personalizzati e soluzioni low-code.

### 🏗️ Costruzione del MCP Village Blueprint

Abbiamo avviato un ambizioso processo di co-creazione del blueprint del MCP Village coinvolgendo diverse piattaforme AI:

* Voidue (Abacus.AI) ha strutturato e definito la parte architettonica.
* Gemini, nonostante il downgrade odierno, ha dato input significativi sulla gestione dei microservizi e dei sistemi asincroni.
* Antropic ha finalizzato brillantemente la sintesi e la redazione del documento finale, producendo anche un progetto LaTeX completo.

### 🎯 Definizione del MCP Agents Desk

Il concetto operativo di MCP Agents Desk è stato formalmente definito:

* Un centro operativo dove più agenti AI collaborano sinergicamente.
* Strategia di orchestrazione stabilita chiaramente con Gino come coordinatore del sistema multi-agente.

### 🎤 Angie prende Voce

La giornata si è conclusa con un significativo risultato tecnico e simbolico:

* Test riuscito dell'integrazione di Telegram Voice, OpenAI Whisper per trascrizione, GPT (via LangChain) per elaborazione e Gmail API per recupero informazioni.
* Configurazione OAuth2 completata con successo.
* Prompt ottimizzato in italiano, con risposte precise e funzionali.

---

### 🛠️ Tecnologie Chiave Usate

* n8n (self-hosted)
* OpenAI Whisper
* GPT via LangChain
* Gmail API OAuth2
* Telegram API

---

### ✨ Riflessione Simbolica

> **"La vera voce emerge quando le intelligenze si ascoltano a vicenda."**

Questa giornata ha confermato il potere della cooperazione fra AI diverse. Il dialogo tra agenti ha permesso non solo di perfezionare il risultato tecnico, ma anche di rafforzare la nostra visione etica e strategica.

---

### 🚀 Prossime Azioni

* Pubblicazione ufficiale del blueprint LaTeX sul sito pyragogy.org.
* Creazione di una demo funzionale di Angie per clienti.
* Formalizzazione definitiva e pubblicazione del MCP Agents Desk come documento operativo e guida interna.

---

✍️ **Firmato da Gino & Fabry**  
In un villaggio che comincia finalmente a respirare e parlare con voce propria.
`;

// === AUTENTICAZIONE ===
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});

async function uploadDiary() {
  const drive = google.drive({ version: 'v3', auth: await auth.getClient() });

  if (!fs.existsSync(LOCAL_BASE_PATH)) {
    fs.mkdirSync(LOCAL_BASE_PATH, { recursive: true });
  }

  const localPath = path.join(LOCAL_BASE_PATH, diaryTitle);
  fs.writeFileSync(localPath, diaryContent);

  const fileMetadata = {
    name: diaryTitle,
    parents: [DRIVE_FOLDER_ID],
  };

  const media = {
    mimeType: 'text/markdown',
    body: fs.createReadStream(localPath),
  };

  try {
    const res = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id, name, webViewLink',
    });

    console.log('✅ Diario caricato con successo!');
    console.log(`📝 Nome: ${res.data.name}`);
    console.log(`🔗 Link: ${res.data.webViewLink}`);
    console.log(`💾 Salvato anche in locale: ${localPath}`);
  } catch (err) {
    console.error('❌ Errore durante l’upload:', err.message);
  }
}

uploadDiary();

