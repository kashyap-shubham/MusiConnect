# -------- Base --------
FROM node:22-alpine AS base
WORKDIR /app

# -------- Pruner --------
FROM base AS pruner
RUN npm install -g turbo

COPY . .
RUN turbo prune api --docker

# -------- Installer --------
FROM base AS installer

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/full/apps/api/prisma ./apps/api/prisma

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# -------- Builder --------
FROM base AS builder
RUN npm install -g turbo pnpm

COPY --from=installer /app .
COPY --from=pruner /app/out/full/ .

RUN turbo run build --filter=api

# -------- Production --------
FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app .

ENV NODE_ENV=production

EXPOSE 3001

CMD ["pnpm", "--filter", "api", "start"]