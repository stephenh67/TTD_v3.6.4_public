# Risks & Mitigations — TTD v3.6.4

1) Supply-chain phishing / dependency hijack  
**Risk**: Unexpected remote code via transitive deps or CDN swaps.  
**Mitigations**:
- No npm-built bundles in prod; single custom JS only
- CSP script-src 'self'; SRI for any future third-party asset
- Version/hash pinning; periodic diffing of static files

2) Content drift / last-minute edits  
**Risk**: Hash/signature mismatch across mirrors; reproducibility breaks.  
**Mitigations**:
- Freeze at T-2; any change triggers re-hash + re-sign
- Stable, sorted manifest; detached Ed25519 signature

3) Bot brigading / authenticity doubts  
**Risk**: Questioning of artifact provenance or social proof.  
**Mitigations**:
- Emphasize verifiability (hashes + signatures) in docs/site
- Minimal claims; link to MANIFEST + signature verification steps

4) Expectation mismatch (hallucination discourse)  
**Risk**: Readers expect sweeping claims vs. abstention-first posture.  
**Mitigations**:
- "Honest mode" narrative in EXEC_SUMMARY; abstention > speculation
- Clear scoping of what ships vs. held back (see SCOPE.md)
