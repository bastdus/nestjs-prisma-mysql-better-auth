# NestJS x Prisma x MySQL x Better-Auth

A production-ready starter template for building modern REST APIs with authentication.

## 🚀 Features

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework for scalable server-side applications
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database client with auto-generated types
- **[MySQL](https://www.mysql.com/)** - Reliable relational database
- **[Better-Auth](https://better-auth.com/)** - Modern authentication library with built-in security best practices
- **[Swagger/OpenAPI](https://swagger.io/)** - Automatic API documentation
- **Docker** - Containerized MySQL database with phpMyAdmin
- **TypeScript** - Full type safety across the stack

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm

## 🛠️ Getting Started

### 1. Fork and Install

```bash
npm install
```

### 2. Environment Configuration

Create your environment file from the example:

```bash
cp .env.example .env
```

Update the `.env` file with your credentials. Replace all `<change me>` placeholders:

```bash
# Database Configuration
DB_NAME=your_database_name
DB_USER=your_username
#...
```

### 3. Database Setup

Apply database migrations:

```bash
npx prisma migrate deploy
```

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

This command will:

- Start Docker containers (MySQL + phpMyAdmin)
- Generate Prisma client
- Start NestJS in watch mode

## 🌐 Available Services

Once running, you'll have access to:

| Service           | URL                                   | Description                                          |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| **REST API**      | `http://localhost:3000/api`           | Main API endpoint (all routes prefixed with `/api`)  |
| **Swagger Docs**  | `http://localhost:3000/api/docs`      | Interactive API documentation (dev only)             |
| **OpenAPI JSON**  | `http://localhost:3000/api/docs-json` | OpenAPI specification for code generation (dev only) |
| **phpMyAdmin**    | `http://localhost:8080`               | Database management interface                        |
| **Prisma Studio** | `http://localhost:5555`               | Visual database editor (run `npx prisma studio`)     |
| **MySQL**         | `localhost:3306`                      | Database connection                                  |

## 🔐 Authentication

Better-Auth is pre-configured with email/password authentication. All authentication endpoints are available at `/api/auth/*`

For advanced configuration and additional features (OAuth, 2FA, etc.), refer to the [Better-Auth documentation](https://better-auth.com/docs).

## 🗄️ Database Management

### Modify the Schema

Edit your data models in `prisma/schema.prisma`

### Create a New Migration

Generate and apply a new migration:

```bash
npx prisma migrate dev --name your_migration_name
```

This automatically runs `prisma generate` after the migration.

### Apply Existing Migrations

Deploy migrations without creating new ones (useful for pulling changes):

```bash
npx prisma migrate deploy
```

### Visual Database Management

**Option 1:** phpMyAdmin

- Navigate to `http://localhost:8080`
- Login with credentials from your `.env` file

**Option 1:** Prisma Studio

```bash
npx prisma studio
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start all the stack localy

# Build
npm run build            # Compile TypeScript

# Production
npm start                # Run compiled application

# Code Quality
npm run format           # Format code with Prettier
npm run lint             # Lint and fix with ESLint

# Testing
npm test                 # Run unit tests
npm run test:watch       # Run tests in watch mode
npm run test:cov         # Generate coverage report
npm run test:e2e         # Run end-to-end tests
```

## 📁 Project Structure

```
.
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Migration history
├── src/
│   ├── app/
│   │   └── app.module.ts      # Root application module
│   └── main.ts                # Application entry point
├── lib/
│   └── auth.ts                # Better-Auth configuration
├── generated/
│   └── prisma/                # Auto-generated Prisma client
├── docker-compose.yml         # Docker services configuration
└── .env                       # Environment variables
```

## 🔧 Configuration

### API Prefix

All routes are automatically prefixed with `/api`. This is configured in `src/main.ts`:

```typescript
app.setGlobalPrefix('api');
```

### CORS

CORS is enabled for `http://localhost:3000` by default. Modify in `src/main.ts` as needed:

```typescript
app.enableCors({
  origin: ['http://localhost:3000'],
  credentials: true,
});
```

### Swagger Documentation

Swagger is only available in non-production environments. Configuration in `src/main.ts`:

```typescript
if (process.env.NODE_ENV !== 'production') {
  // Swagger setup
}
```

## 🐳 Docker Services for development

The `docker-compose.yml` includes:

- **MySQL 8.0** - Main database
- **phpMyAdmin** - Web-based database management

Start services manually:

```bash
docker-compose up -d
```

Stop services:

```bash
docker-compose down
```

## 🚢 Production Deployment

1. Set `NODE_ENV=production` in your environment (package.json script or Dockerfile)
2. Build the application: `npm run build`
3. Run migrations: `npx prisma migrate deploy`
4. Start the server: `npm start`

**Note:** Swagger documentation is automatically disabled in production.

## 📚 Learn More

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Better-Auth Documentation](https://better-auth.com/docs)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Happy Coding! 🎉**
