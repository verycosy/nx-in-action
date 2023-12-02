```bash
pnpm --filter {{app name}} dev
pnpm add {{package name}} --filter nextapp --workspace  # symlink

pnpm run -r build # recursive
pnpm run --parallel -r build # recursive
```

// "shared-ui": "workspace:^1.0.0"

```bash
pnpm add nx -D -w
npx nx build shared-ui
npx nx dev nextapp
npx nx graph
```

`^`가 붙으면 하위 패키지에게 영향
