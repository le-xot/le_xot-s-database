FROM node:22-alpine
RUN apk add --no-cache openssl
RUN npm i -g pnpm@9
WORKDIR /app
COPY . .
RUN pnpm i
RUN cd backend && pnpm prisma generate
RUN pnpm build
CMD ["pnpm","start:backend"]