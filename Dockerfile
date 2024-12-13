FROM node:22-alpine

# Установка необходимых инструментов
RUN apk add --no-cache \
    openssl1.1 \
    libssl1.1

# Установка pnpm
RUN npm i -g pnpm@9

# Настройка рабочего каталога
WORKDIR /app

# Копирование файлов
COPY . .

# Установка зависимостей
RUN pnpm i

# Генерация Prisma Client
RUN cd backend && pnpm prisma generate

# Сборка проекта
RUN pnpm build

# Установка переменной окружения для OpenSSL 1.1
ENV LD_LIBRARY_PATH=/usr/lib

# Запуск backend
CMD ["pnpm", "start:backend"]