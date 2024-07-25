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

*Please note that PHP 8.3 is still not support, use previous versions.*

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

## Credits

- First work by Fabio Espindola (@flespindola)
