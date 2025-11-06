# NestJS x Prisma x Better-Auth

A simple production-ready starter template for building REST APIs with [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), [MySQL](https://www.mysql.com/) and [Better-Auth](https://better-auth.com/) authentication.

## 📚 Table of Contents

- [How to use this template](#how-to-use-this-template)
- [Prisma flow](#prisma-flow)

## How to use this template

1. Fork the repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file by renaming the provided example file:

```bash
mv .env.example .env
```

4. Modify the `.env` file to set your database credentials and other settings by changing every `<change me>` placeholders with your own values.

```bash
# Example:
DB_NAME=my_database_name
DB_USER=john_doe
DB_ROOT_PASSWORD=my_secure_root_password
# ...
```

5. Apply database migrations:

```bash
npx prisma migrate deploy
```

6. Run the project locally:

```bash
npm run start:dev
```

You will have:

- MySQL database running at `localhost:3306` _(dockerized)_
- NestJs REST API running at `http://localhost:3000` (all routes are prefixed by `/api`)
- an instance of PhpMyAdmin running at `http://localhost:8080` to manage your database visually (login with the credentials set in the `.env` file)
- Prisma Studio instance running at `http://localhost:5555` if you do `npx prisma studio`
- OpenAPI (Swagger) docs running at `http://localhost:3000/api/docs` (only in development mode)
- All types from the Rest API accessible via `http://localhost:3000/api/docs-json` (only in development mode) useful for frontend integration

## Prisma

1. Modify your Prisma schema in `prisma/schema.prisma`
2. Run the following command to **generate** and **apply** a new migration:

```bash
npx prisma migrate dev --name your_migration_name
```

We run `prisma generate` automatically after every migration, but if you need to run it manually, use: _(eg: on npm run dev)_

```bash
npx prisma generate
```

Sometimes, you need to apply migrations to your database without creating them _(eg: new migrations from PRs)_:

```bash
npx prisma migrate deploy
```

## Better-Auth

For more information on how to use Better-Auth with NestJS, refer to the [Better-Auth documentation](https://better-auth.com/docs).

Basically, it's use the endpoints `/api/auth/*`
