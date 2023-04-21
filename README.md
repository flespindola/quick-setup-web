## Start a web application fast and easy

This repository was made for web developers who want to start a new application with modern tools fast and easy.
A complete setup with the tools below which can help you skip the initial setup and go straight to development or even MVP.

- [Laravel](https://laravel.com/docs).
- [React](https://react.dev).
- [TypeScript](https://www.typescriptlang.org/docs/).
- [Inertia.js](https://inertiajs.com/).
- [Vite](https://vitejs.dev/).
- [Bootstrap](https://getbootstrap.com/).
- [Headless UI](https://headlessui.com/).
- [Docker](https://www.docker.com/)
- [Laravel Sail](https://laravel.com/docs/10.x/sail)

## Installation

Clone the repo locally:

```sh
git clone https://github.com/flespindola/quick-setup-web.git
cd quick-setup-web
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run build
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Start the docker container with sail.

```sh
./vendor/bin/sail up
```

Run database migrations:

```sh
./vendor/bin/sail artisan migrate
```

## Credits

- First work by Fabio Espindola (@flespindola)
