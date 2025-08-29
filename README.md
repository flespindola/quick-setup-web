## Start a web application fast and easy

This repository was made for web developers who want to start a new application with modern tools fast and easy.
A complete setup with the tools below which can help you skip the initial setup and go straight to development or even MVP.

- [Laravel 11](https://laravel.com/docs) - Latest LTS framework
- [React 19](https://react.dev) - Latest React with modern features
- [TypeScript](https://www.typescriptlang.org/docs/) - Type-safe JavaScript
- [Inertia.js 2](https://inertiajs.com/) - Modern SPA without the complexity
- [Vite 7](https://vitejs.dev/) - Lightning fast build tool
- [Bootstrap 5.3](https://getbootstrap.com/) - Responsive CSS framework
- [Headless UI 2](https://headlessui.com/) - Accessible UI components
- [Docker](https://www.docker.com/) - Containerization
- [Laravel Sail](https://laravel.com/docs/11.x/sail) - Docker development environment

## Installation

*This setup now supports PHP 8.1, 8.2, and 8.3 with full compatibility.*

Clone the repo locally:

```sh
git clone https://github.com/flespindola/quick-setup-web.git
```

Go to the folder (you can choose your own folder's name in clone step)

```sh
cd quick-setup-web
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
pnpm install
```

Build assets:

```sh
pnpm run build
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Start the Docker container with sail, if you want to use Docker.

```sh
./vendor/bin/sail up
```

If you don't want to use Docker, run Larave's local server:

```sh
php artisan serve
```

Run database migrations:

```sh
./vendor/bin/sail artisan migrate
```

## Development

Start the development server with hot reload:

```sh
pnpm dev
```

Build for production:

```sh
pnpm build
```

Run with Docker Sail:

```sh
./vendor/bin/sail up -d
```

## Requirements

- PHP 8.1+ (8.3 recommended)
- Composer
- Node.js 18+
- pnpm (recommended) or npm
- Docker (optional, for Sail)

## Contributions

- Fabio Espindola (@flespindola)
