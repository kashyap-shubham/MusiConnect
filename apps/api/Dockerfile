FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm turbo

ENV CI=true
ENV NODE_ENV=production

# Copy pruned workspace
COPY out/full .

# Reinstall dependencies INSIDE Linux container
RUN pnpm install --no-frozen-lockfile

# Build inside Linux container
RUN pnpm turbo run build --filter=api

WORKDIR /app/apps/api

EXPOSE 3001

CMD ["node", "dist/src/server.js"]