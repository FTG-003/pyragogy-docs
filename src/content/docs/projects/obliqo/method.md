---
title: The method
description: How blind independence works — and where it stops. The four readers, the synthesis layer, and the trap that agreement can carry.
---

Most "multi-agent" review tools share more than they admit. The agents take turns. Context builds across the conversation. The "disagreement" is choreography — the same model in four costumes, drawing on the same latent reading of your text.

Obliqo doesn't do that. But before any of the wiring, one claim has to be true for the rest to mean anything: four blind readers agreeing on the same passage is not your verdict. It is your next question.

## The architecture

Four agent processes routed in parallel from the same input — your draft, your URL, your text. No shared session. No cross-process state. No prompt that knows the other three exist. Reports come back independent. A fifth process then reads all four and writes a synthesis brief.

That is the floor. It guarantees nothing more than it claims to guarantee: no choreographed roles, no agent reading the others' output mid-stream, no consensus-soothing baked into the runtime. What it does not guarantee — because the underlying models share training data — is that the four readings are epistemically independent. They aren't, completely. They can't be. Naming the limit is part of the method.

## Four readers, four lenses

Each reader runs against the full draft with its own brief:

- **Critical Researcher** — flags factual grounding. Names overstatements, missing context, claims that need a source.
- **Resonance Amplifier** — points at what already works. Lines, frames, moves that carry the piece and should survive the edit.
- **Hidden Assumption** — surfaces what the draft makes the reader accept without arguing for it.
- **Complicit Editor** — the one that sounds like your harshest writing-group reader. Asks what to cut, what to move, where the prose is hiding behind itself.

The fifth process — call it the synthesizer — reads the four reports as one set and writes a synthesis brief on top.

## The trap the agreement hides

When all four readers agree on the same passage, one of two things is true:

- The passage is load-bearing — the soft spot the writer was trying not to look at, and the four readings caught it independently.
- The four are reading badly in the same direction — the failure mode the paper names *blind convergence*: agents trained on overlapping data inheriting overlapping priors, walking past the same problem in unison.

From your seat, those look identical.

The architecture does what it can about the first axis: no coordination, no contamination. It cannot do anything about the second. That part is on the reader. On you.

This is also why the synthesizer doesn't render a verdict. It writes a brief, not a judgment.

## Reading the report

What you get back has two layers, and the order they're meant to be read in is the order this page presents them.

- **The four readings, side by side.** Each names what it saw, in its own voice. Read them first. Notice where they agree, notice where they don't, notice which one made you defensive.
- **The synthesis brief.** One main tension. A **Revision Score** that measures urgency and effort separately, not "quality". One concrete next move. One open question only you can resolve.

The Revision Score is not a draft-grade. It is an estimate of how much work, and how soon. Two drafts with the same score can be very different drafts.

The four readings stay separate underneath the synthesis. If the synthesis surprises you, go back to the four.

## What the method does not do

It does not tell you whether your draft is good. It surfaces structural pressure points before someone else does. Past that, the writer is on their own.

This is the working hypothesis of the [paper](/projects/obliqo/paper/): that the useful unit of automated critique is not a score, and almost never an answer. It is a brief honest enough to be argued with. Whether you do is the rest of the work.
