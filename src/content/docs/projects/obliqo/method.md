---
title: The method
description: How mechanical independence works in practice. Four blind readings and one synthesis.
---

Most "multi-agent" review tools share more than they admit. The agents read in turns, with context built up across the conversation. The "disagreement" is choreography — the same model wearing different masks, drawing on the same latent reading of your text.

Obliqo doesn't do that. We don't claim to have solved the alignment of automated critique, but the mechanical bet is concrete.

## The bet

Four agents. Each one gets the same input — your draft, your URL, your text. None of them sees the others' output. None of them knows the others exist. The infrastructure routes them in parallel; the readings come back independently; we present all four to you side by side. Then a fifth layer reads the four and writes a synthesis brief.

The friction is not produced by hostile prompting. It is what remains when four separate readings of the same text have not been coordinated. Sometimes they converge. Sometimes they don't. The shape of that *(non-)convergence* is what you read.

## Four independent readings, then one synthesis

Each reading has its own lens. No reader sees the others.

- **Critical Researcher** — checks factual grounding. Names overstatements, missing context, claims that need evidence. Points to sources when relevant.
- **Resonance Amplifier** — identifies what already works: lines, frames, moves that carry the piece and should not be edited away.
- **Hidden Assumption** — surfaces unstated premises. Not what the draft says, but what it silently requires the reader to accept.
- **Complicit Editor** — cuts indulgence, trims attachment, pushes for clarity and force. Asks what to cut, what to move, where to land harder.

Four blind readings come back. Then a fifth layer reads the four and pulls their tensions into one usable verdict — without flattening them.

## Reading the report

What comes back has two layers.

The four readings sit side by side — each names what it saw, each stays its own voice. You read them as four people who never met.

Then the synthesis brief: the main tension across the readings, a **Revision Score** that scores urgency and effort separately, one concrete next move, and one open question only you can resolve. The Revision Score is not a verdict on the draft. It is a measurement of how much you have to do and how soon. The four readings stay separate underneath — the synthesis names the tension without smoothing it away.

## The limit of blind convergence

When the four agents agree on everything, the signal is loud — but it isn't automatically correct. If all four are descendants of overlapping training data, they may share blind spots. They will be confidently in unison about the wrong thing.

This is the failure mode the [paper](/projects/obliqo/paper/) names directly. The agreement is data. What it means is harder.
