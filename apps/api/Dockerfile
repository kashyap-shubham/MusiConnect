FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

ENV CI=true
ENV NODE_ENV=production

COPY out/full .

RUN pnpm install --no-frozen-lockfile

WORKDIR /app/apps/api

EXPOSE 3001

CMD ["node", "dist/src/server.js"]