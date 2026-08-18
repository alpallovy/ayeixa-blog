---
slug: public-radar-ingest-is-not-a-market-claim
title: Public radar ingest is not a market claim
authors: [alpallovy]
tags: [engineering, radar, provenance]
description: "How AYEIXA records public GitHub issues for radar briefs without treating star counts or issue titles as product-market evidence."
---

This note documents a real, checkable ingest path: public GitHub issue titles used as **radar inputs**, not as proof that AYEIXA has users, customers, or product-market fit.

<!--truncate-->

*Written with AI assistance, reviewed before publication.*

## What was ingested

The Phase 17 radar qualification record lists public competitor repositories and issue URLs fetched over HTTPS. One example issue title from that public record:

> `ChatAnthropic(stream_usage=False)` also drops `stop_reason`, `stop_sequence` and `model_name` from `response_metadata`, not just usage metadata

Source: [langchain-ai/langchain#39713](https://github.com/langchain-ai/langchain/issues/39713).

That URL is a primary source for **a public problem statement**. It is not an AYEIXA customer interview and it is not a case study.

## What this does not mean

- GitHub star counts on other projects are **their** repository metadata at a fetch timestamp. They are not AYEIXA adoption.
- Ingesting issue titles does not create independent case-study participants. That count remains **0/3**.
- This post does not claim traffic, revenue, or willingness-to-pay.

## Why publish it

Content distribution needs sourced drafts. The honest source for a radar brief is a public URL plus a fetch record — not a fabricated metric.

Public engineering blog: [https://alpallovy.github.io/ayeixa-blog/](https://alpallovy.github.io/ayeixa-blog/). This host is not `ayeixa.com/blog`.
