# NestJS x Prisma x Better-Auth

A simple production-ready starter template for building REST APIs with [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), [MySQL](https://www.mysql.com/) and [Better-Auth](https://better-auth.com/) authentication.

## 📚 Table of Contents

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

6. Check if Prisma is well configured by running the following command

```bash
npx prisma
```
