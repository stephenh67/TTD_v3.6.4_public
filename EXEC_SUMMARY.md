# Executive Summary — TTD v3.6.4

Purpose: Plain-language overview of the public skeleton. Apache-2.0. Minimal, verifiable, reproducible.

## What This Is
- A small, auditable pack of public artifacts for transparency.
- Cryptographic integrity via SHA-256 manifest + detached Ed25519 signature.
- No npm-built bundles; one custom JS (`assets/jsonl-table.js`). Tight CSP.

## What Ships (Public)
- EXEC_SUMMARY.md
- TECHNICAL_OVERVIEW.md
- FAMILY_REGISTRY_PUBLIC.md
- MILESTONES_TIMELINE.md
- PUBLIC_TOKEN_HEADER.yaml / PUBLIC_TOKEN_HEADER.json
- LICENSE_NOTICE.md
- Static site: `index.html`, `assets/jsonl-table.js`

## What Does Not Ship (Held Back)
- Draft press + media quotes, social calendar
- Governance internals (roles, quorum, private signatures)
- Ops runbooks, incident notes, non-public dashboards
- China-specific assets (SM3/BSN/Gitee)
- Raw chat logs, internal sims, third-party restricted content

## Positioning
- “Honest mode”: abstention over speculation.
- Reproducibility over rhetoric. Link claims to verifiable artifacts.

## Change Control
- Freeze at T-2. Any edit ⇒ re-hash + re-sign the manifest.

## Verification
- See `MANIFEST.md` for SHA-256s and signature instructions.
