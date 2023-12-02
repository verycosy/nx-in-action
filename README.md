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

```bash
# 코드 변경 후 영향이 생긴 app, 패키지만
npx nx affected:graph
npx nx affected:build

npx nx run-many --target=build --projects=shared-ui
npx nx run-many --target=build --all # pnpm --parallel 보다 가독성 좋음 + nx 캐싱
```
