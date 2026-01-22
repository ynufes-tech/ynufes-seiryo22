# ynufes_seiryo22_vue

## 概要

Nuxt 4 へ移行済みのフロントエンドです。`public/` 配下の静的ファイルをそのまま配信します。

## 開発環境

- Node.js 24
- pnpm

## セットアップ

```
pnpm install
```

## 開発サーバー

```
pnpm dev
```

## ビルド

```
pnpm build
```

## 本番起動

```
pnpm start
```

## Lint

```
pnpm lint
```

## デプロイ

main ブランチへの push で Cloudflare へデプロイします。ワークフローは `.github/workflows/deploy-cloudflare.yml` を参照してください。
