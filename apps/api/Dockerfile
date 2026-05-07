FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

# Copy ONLY built backend
COPY apps/api/dist ./dist
COPY apps/api/package.json ./package.json
COPY apps/api/prisma ./prisma
COPY pnpm-lock.yaml ./pnpm-lock.yaml

# Install only production deps
RUN pnpm install --prod --no-frozen-lockfile

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "dist/src/server.js"]