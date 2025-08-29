# Quick Setup Web - Laravel + React + TypeScript

This is a modern web application starter template with Laravel 11 backend and React 19 frontend using Inertia.js, TypeScript, Vite, and Docker Sail.

## Tech Stack
- **Backend**: Laravel 11, PHP 8.3
- **Frontend**: React 19, TypeScript, Inertia.js 2
- **Build Tool**: Vite 7
- **CSS**: Bootstrap 5.3, PostCSS
- **Package Manager**: pnpm (preferred)
- **Development Environment**: Docker Sail (optional)
- **Database**: MySQL 8.0
- **Cache**: Redis
- **Search**: Meilisearch
- **Mail**: Mailpit
- **Testing**: Pest

## Rules

### Package Manager
- Always use `pnpm` for Node.js package management (not npm or yarn)
- Use `composer` for PHP dependencies

### Development Environment
- Prefer Docker Sail for consistent development environment
- Use `./vendor/bin/sail` prefix for Laravel commands when using Docker
- Use `pnpm` directly for frontend tasks

### Code Standards
- Follow Laravel conventions for PHP code
- Use TypeScript for all React components
- Follow React 19 best practices with modern hooks and patterns
- Use Inertia.js for SPA functionality without API endpoints

## Common Commands

### Setup & Installation
```bash
# Initial setup (after git clone)
composer install
pnpm install
cp .env.example .env
php artisan key:generate
pnpm run build

# Start with Docker Sail
./vendor/bin/sail up -d

# Start without Docker
php artisan serve
```

### Development
```bash
# Start development server with hot reload
pnpm dev

# Build assets for production
pnpm run build

# Run Docker services in background
./vendor/bin/sail up -d

# Stop Docker services
./vendor/bin/sail down
```

### Database
```bash
# Run migrations
./vendor/bin/sail artisan migrate

# Run migrations (without Docker)
php artisan migrate

# Create new migration
./vendor/bin/sail artisan make:migration create_example_table

# Run seeders
./vendor/bin/sail artisan db:seed
```

### Laravel Commands
```bash
# Create controller
./vendor/bin/sail artisan make:controller ExampleController

# Create model
./vendor/bin/sail artisan make:model Example

# Create resource controller
./vendor/bin/sail artisan make:controller ExampleController --resource

# Clear cache
./vendor/bin/sail artisan cache:clear
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan route:clear
./vendor/bin/sail artisan view:clear
```

### Testing
```bash
# Run tests with Pest
./vendor/bin/sail artisan test

# Run specific test
./vendor/bin/sail artisan test --filter ExampleTest

# Generate test coverage
./vendor/bin/sail artisan test --coverage
```

### Code Quality
```bash
# Format PHP code with Pint
./vendor/bin/sail pint

# Run PHP static analysis (if installed)
./vendor/bin/sail composer analyze
```

### Frontend Development
```bash
# Install new package
pnpm add package-name

# Install dev dependency
pnpm add -D package-name

# Update packages
pnpm update

# Type check TypeScript
npx tsc --noEmit
```

### Docker Sail Shortcuts
```bash
# Access Laravel container shell
./vendor/bin/sail shell

# Access MySQL database
./vendor/bin/sail mysql

# Access Redis CLI
./vendor/bin/sail redis

# View logs
./vendor/bin/sail logs

# Restart services
./vendor/bin/sail restart
```

## Project Structure
```
├── app/                    # Laravel application logic
├── resources/
│   ├── js/                # React/TypeScript components
│   ├── views/             # Blade templates (minimal with Inertia)
│   └── css/               # Stylesheets
├── routes/                # Laravel routes
├── database/              # Migrations, seeders, factories
├── tests/                 # Pest tests
├── public/                # Public assets
├── docker-compose.yml     # Docker Sail configuration
├── package.json           # Node.js dependencies & scripts
├── composer.json          # PHP dependencies
├── vite.config.mjs        # Vite build configuration
└── tsconfig.json          # TypeScript configuration
```

## Environment Setup
- PHP 8.1+ (8.3 recommended)
- Node.js 18+
- Composer
- pnpm (preferred package manager)
- Docker (optional, for Sail)

## Quick Start
1. `composer install && pnpm install`
2. `cp .env.example .env && php artisan key:generate`
3. `./vendor/bin/sail up -d` (or `php artisan serve` without Docker)
4. `./vendor/bin/sail artisan migrate`
5. `pnpm dev` (in separate terminal)

## Development Workflow
1. Use `pnpm dev` for frontend development with hot reload
2. Use `./vendor/bin/sail artisan serve` or Docker Sail for backend
3. Create React components in `resources/js/`
4. Define routes in `routes/web.php`
5. Use Inertia.js to pass data from controllers to React components
