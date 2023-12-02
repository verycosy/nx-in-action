```bash
pnpm --filter {{app name}} dev
pnpm add {{package name}} --filter nextapp --workspace  # symlink

pnpm run -r build # recursive
pnpm run --parallel -r build # recursive
```

// "shared-ui": "workspace:^1.0.0"
