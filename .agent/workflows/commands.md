---
description: Common commands for development, testing, and deployment
---

# Blushing Beauty Studio — Workflow Commands

## Development

// turbo-all

1. Start the local dev server:

```cmd
npm run dev
```

1. Install dependencies (after pulling new changes):

```cmd
npm install
```

## Testing

1. Run all unit tests (47 tests):

```cmd
npm run test:run
```

1. Run tests in watch mode (re-runs on file changes):

```cmd
npm test
```

## Deploying Changes

1. Run tests, commit, and deploy in one go:

```cmd
npm run test:run && git add . && git commit -m "describe your change here" && vercel --prod
```

Or step by step:

1. Stage and commit:

```cmd
git add . && git commit -m "describe your change here"
```

1. Deploy to Vercel production:

```cmd
vercel --prod
```

## Asset Management

1. Copy portfolio images and 8 random videos to public folder:

```cmd
node scripts/prepare-assets.js
```

## Domain & DNS

1. Add a custom domain:

```cmd
vercel domains add blushingbeauty.studio
```

1. Verify domain DNS is configured:

```cmd
vercel domains verify blushingbeauty.studio
```
