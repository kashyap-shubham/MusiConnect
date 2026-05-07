# -------- Base --------
FROM node:22-alpine AS base
RUN npm install -g pnpm turbo

WORKDIR /app

# -------- Prune --------
FROM base AS pruner

COPY . .

RUN turbo prune api --docker

# -------- Install --------
FROM base AS installer

WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=pruner /app/out/full/apps/api/prisma ./apps/api/prisma

RUN pnpm install --frozen-lockfile

RUN pnpm --filter api exec prisma generate


# -------- Build --------
FROM base AS builder

WORKDIR /app

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