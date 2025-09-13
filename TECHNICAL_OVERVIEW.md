# Technical Overview — TTD v3.6.4

Purpose: Protocol core, verification steps, and site security posture.

1) Protocol Core (Public Chain)
- Artifacts listed in MANIFEST.md, hashed with SHA-256
- Detached Ed25519 signature over the manifest
- Token header carries chain context (prev/this/next hints)

ASCII Chain Map (illustrative)
[prev_token] --> [ttd-public-2025-09-19] --> [next_hint]
        \__ MANIFEST.sha256 + MANIFEST.sig (ed25519)

2) Verification Steps
1. Obtain artifacts + MANIFEST.md + MANIFEST.sig + pubkey.asc.
2. Validate hashes:
   sha256sum -c MANIFEST.md
3. Verify signature:
   gpg --verify MANIFEST.sig MANIFEST.md
4. Compare PUBLIC_TOKEN_HEADER.yaml artifacts list to manifest entries (1:1).

3) Site Security Posture
- CSP (strict):
  Content-Security-Policy:
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
- Runtime JS: assets/jsonl-table.js (custom; no npm bundles)
- SRI: required for any future third-party asset
- Pinning: version + hash pinning; periodic static diff

4) Known Risks (see RISKS_NOTES.md)
- Supply-chain swaps
- Content drift across mirrors
- Authenticity doubts / brigading
- Expectation mismatch

Change Control
- Final freeze at T-2. Post-freeze edits require full re-hash + re-sign.

Verification
- Follow steps in §2 and compare outputs against MANIFEST.md.
