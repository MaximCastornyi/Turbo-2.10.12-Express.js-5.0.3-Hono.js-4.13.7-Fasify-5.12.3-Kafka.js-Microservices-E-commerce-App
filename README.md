 Turbo-2.10.12-Express.js-5.0.3-Hono.js-4.13.7-Fasify-5.12.3-Kafka.js-Microservices-E-commerce-App
This application is a modern microservices‑based e‑commerce platform built with TypeScript and Next.js in a Monorepo. The frontend uses Next.js 15.4.5 for SSR, SEO, and API integration. The backend combines Fastify, Express, and Hono, with Kafka.js enabling event‑driven workflows. Services run in Docker, ensuring scalability and reliability.
# Turborepo error` checking

```sh
turbo check-types
```
# Docking preparation
First, create a Docker container with PostgreSQL using the parameters shown in the screenshot. After that, run the file /packages/kafka/docker-compose.yml in the terminal by

```sh
docker compose up -d
```
Rub all images.
After that, the Kafka UI will be available at:
👉 http://localhost:8080

# Getting Started
To run this application:
```sh
turbo dev
```

# Getting Started
Run Prisma Studio from the folder \packages\product-db\prisma
```sh
npx prisma studio
```



This application is a modern microservices‑based e‑commerce platform built with TypeScript and Next.js in a Monorepo. The frontend uses Next.js 15.4.5 for SSR, SEO, and API integration. The backend combines Fastify, Express, and Hono, with Kafka.js enabling event‑driven workflows. Services run in Docker, ensuring scalability and reliability.

Turbo-2.10.12-Express.js-5.0.3-Hono.js-4.13.7-Fasify-5.12.3-Kafka.js-Microservices-E-commerce-App
