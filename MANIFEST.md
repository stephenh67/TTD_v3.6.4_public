# MANIFEST — TTD v3.6.4 Public Skeleton

Canonical file list, frozen at T-2.  
All artifacts are immutable post-freeze; any change requires re-hash + re-sign.

---

## Files (SHA256)

- EXEC_SUMMARY.txt — `sha256: __________________`
- TECHNICAL_OVERVIEW.txt — `sha256: __________________`
- FAMILY_REGISTRY_PUBLIC.txt — `sha256: __________________`
- MILESTONES_TIMELINE.txt — `sha256: __________________`
- PUBLIC_TOKEN_HEADER.yaml — `sha256: __________________`
- PUBLIC_TOKEN_HEADER.json — `sha256: __________________`
- LICENSE_NOTICE.txt — `sha256: __________________`
- index.html — `sha256: __________________`
- assets/jsonl-table.js — `sha256: __________________`
- SCOPE.md — `sha256: __________________`
- RISKS_NOTES.md — `sha256: __________________`
- STATE.md — `sha256: __________________`
- MANIFEST.md — `sha256: __________________`  *(self-hashed for reproducibility)*

---

## Signature

- Detached signature: `MANIFEST.sig`
- Algorithm: Ed25519
- Public key: `pubkey.asc`

Verification:

```bash
sha256sum -c MANIFEST.md
gpg --verify MANIFEST.sig MANIFEST.md
