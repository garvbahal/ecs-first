FROM oven/bun:alpine

WORKDIR /app

COPY ./package.json ./package.json

RUN bun install

COPY . .

CMD ["bun", "index.ts"]