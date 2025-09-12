TTD v3.6.4 — Technical Overview


Protocol Core (Public Skeleton)
- Artifacts are identified by SHA‑256 and listed in a MANIFEST.sha256.
- A detached Ed25519 signature over the manifest attests to pack integrity.
- PUBLIC_TOKEN_HEADER.{yaml,json} binds release metadata (protocol, version, release_id, timestamps, chain IDs) to the artifact set.
- Token chaining: prev_token_id ← this_token_id → next_hint (optional) enables linear audit trails.


ASCII Chain Map


[ttd-public-2025-09-19]
|
v
MANIFEST.sha256 --(ed25519 signed)--> TTD_v3.6.4_public.sig
|
+-- EXEC_SUMMARY.txt
+-- TECHNICAL_OVERVIEW.txt
+-- FAMILY_REGISTRY_PUBLIC.txt
+-- MILESTONES_TIMELINE.txt
+-- PUBLIC_TOKEN_HEADER.yaml
+-- PUBLIC_TOKEN_HEADER.json
+-- LICENSE_NOTICE.txt


Verification (Public)
1) Hash the artifacts exactly as packaged:
shasum -a 256 EXEC_SUMMARY.txt TECHNICAL_OVERVIEW.txt \
FAMILY_REGISTRY_PUBLIC.txt MILESTONES_TIMELINE.txt \
PUBLIC_TOKEN_HEADER.yaml PUBLIC_TOKEN_HEADER.json \
LICENSE_NOTICE.txt > MANIFEST.sha256


2) Verify the detached signature (when provided):
# Example with OpenSSH/ed25519 or age/mini‑sign; exact tooling is flexible
# Given: public key file `TTD-public.pub`
minisign -Vm MANIFEST.sha256 -P "$(cat TTD-public.pub)"


3) Compare each MANIFEST entry to your local hash output. Any mismatch invalidates the pack.


4) Inspect PUBLIC_TOKEN_HEADER.{yaml,json} for release metadata and chain pointers.


Supply‑Chain & AppSec Posture (Prod)
- Runtime JS inventory: single custom file `assets/jsonl-table.js`.
- No node‑built bundles shipped (dev‑only tooling is local).
- CSP: tight defaults; SRI on any 3rd‑party asset (if ever added), all pins hash‑locked.
- No chalk/debug/npm heritage deps in prod site; static assets are SHA‑pinned & mirrored.


Operational Notes
- Any content changes after T‑2 require re‑hash + re‑sign.
- China pack uses SM3/BSN and is released separately.
