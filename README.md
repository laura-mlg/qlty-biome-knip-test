# qlty biome/knip config discovery test

Reproduces the bug where configs in `.qlty/configs/` are not passed to biome or knip.

## What's being tested

### biome — `.qlty/configs/biome.json`
- `src/index.ts` uses `var` (biome's `noVar` rule would flag it)
- `.qlty/configs/biome.json` sets `noVar: off`
- **If the config is applied:** no biome issue on `src/index.ts`
- **If the config is NOT applied (bug):** biome flags `var` usage

### biome — Ben's specific scenario
- `vendor/coding-standards/biome.json` simulates an extra `biome.json` from a Composer/npm package
- Biome v2 discovers this nested config and aborts before reaching the root config
- **Workaround (biome.json at repo root) doesn't work** in this case

### knip — `.qlty/configs/knip.json`
- `package.json` lists `lodash` as a devDependency (unused)
- `.qlty/configs/knip.json` sets `ignoreDependencies: ["lodash"]`
- **If the config is applied:** no knip issue for lodash
- **If the config is NOT applied (bug):** knip flags lodash as unlisted/unused dependency

## How to run

<!-- test commit: app suspension behavior 2026-05-11 -->
<!-- test PR: app unsuspended 2026-05-11 -->


```bash
qlty check --all
qlty check --all --filter=biome
qlty check --all --filter=knip
```
