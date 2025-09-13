# TTD v3.6.4 — Public Skeleton

This repository contains the **public, reproducible skeleton** of TTD v3.6.4.  
It is designed for verifiability, not promotion. All artifacts are released under **Apache License 2.0**.

---

## Contents

Core public files (see `MANIFEST.md` for hashes):
- EXEC_SUMMARY.md — plain-language overview
- TECHNICAL_OVERVIEW.md — protocol core, verification steps
- FAMILY_REGISTRY_PUBLIC.md — public, PII-safe family list
- MILESTONES_TIMELINE.md — dated milestones
- PUBLIC_TOKEN_HEADER.yaml / .json — release metadata + chain hints
- LICENSE_NOTICE.md — attribution notes
- Static site assets: `index.html`, `assets/jsonl-table.js`

Additional reproducibility anchors:
- SCOPE.md — what ships vs. held back
- RISKS_NOTES.md — risks & mitigations
- STATE.md — operational checklist (T-10 → T+24h)
- MANIFEST.md — file list + SHA256 + detached Ed25519 signature

---

## What Is Held Back

Not included in this public skeleton:
- Draft press release, media quotes, social calendar
- Governance internals (role maps, quorum details, private signatures)
- Ops runbooks, incident notes, non-public dashboards
- China-specific assets (SM3/BSN/Gitee links)
- Raw chat logs, internal sims, third-party restricted content

See `SCOPE.md` for details.

---

## Verification

1. Clone this repo and obtain:
   - `MANIFEST.md`
   - `MANIFEST.sig`
   - `pubkey.asc`
            pub   ed25519 2025-09-13 [SC] [expires: 2028-09-13]
                  DC17 C7BA 1260 802B E5CC  2B6C 38FC 0FF0 2B78 5C0C
            uid           [ultimate] Stephen Hope <sbhope@gmail.com>
            sub   cv25519 2025-09-13 [E] [expires: 2028-09-13]

2. Check hashes:
   ```bash
   sha256sum -c MANIFEST.md
