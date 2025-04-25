---
title: "Diario Cognitivo Bifocale + Integrazione TheBrain"
date: "2025-04-24"
tags: ["pyragogy", "ui", "jerry", "thebrain", "knowledge-graph"]
description: "Prototipazione dell'interfaccia split-view del Diario Pyragogico con mappa cognitiva interattiva e supporto all'esportazione OPML per TheBrain."
---

## 🧠 Contesto

Stiamo sviluppando un'interfaccia cognitiva per il *Diario Pyragogico*, dove ogni voce `.md` è un nodo vivo in un ecosistema di apprendimento AI-umano. Abbiamo richiesto a Lovable un'interfaccia **split-view** con:

- 📖 Lista voci diario a sinistra
- 🌌 Mappa cognitiva interattiva a destra (tipo `react-force-graph`)
- 🔁 Pulsante di esportazione `.opml`/`.json` compatibile con [TheBrain](https://www.thebrain.com)

## ✨ Specifiche UI

- Visualizzazione force-directed con zoom, pan, click
- Diario scrollabile, con tag e date
- Colori neutri, transizioni morbide, stile leggibile
- Componenti pronti per essere embedded in Astro

## 🔧 Esportazione per TheBrain

Struttura OPML esempio:
```xml
<outline text="My First Entry">
  <attribute name="tags" value="ai, reflection" />
  <note>A brief insight on co-creating with AI</note>
  <outline text="Linked Entry A" />
</outline>
```

## 📍 Prossimi step

- Attendere risposta da Lovable e integrare il componente React
- Collegamento dinamico ai contenuti `.md`
- Timeline + bidirectional sync (fase futura)
