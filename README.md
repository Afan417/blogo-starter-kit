<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Blogo Starter Kit
</h1>

![Statamic 4+](https://img.shields.io/badge/Statamic-4+-FF269E?style=for-the-badge&link=https://statamic.com)

<!-- /statamic:hide -->

## Features

- Markdown with Bard, for writing experience
- Categories taxonomy for Posts
- Dynamic Pages structure
- Mobile/Responsive friendly
- Contact form pre-configured
- Minimalistic design
- Native Search

## Stack

- [Alpine JS](https://alpinejs.dev) for interactions
- Built with [Tailwind CSS](https://tailwindcss.com)
- Compiled with [Vite](https://vitejs.dev)

## Screenshot

![Screenshot](https://i.imgur.com/6RKCC7Q.png)

## Quick Start

### 1. Create a new site

You can create a new site using the [Statamic CLI Tool](https://github.com/statamic/cli):

```
statamic new your-site afan417/blogo-starter-kit
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

```
php please starter-kit:install afan417/blogo-starter-kit --clear-site
```

### 2. Install dependencies

```
npm i && npm run dev
```

To compile for production again:

```
npm run build
```

### 3. Make a new user

Note: This starter kit comes with a super-user already created. You can delete this user after you finish the installation process. You might need to enable Statamic Pro temporarily for this. Read [here](https://statamic.dev/tips/how-to-enable-statamic-pro).

Username: `john@doe.com`

Password: `password`

Create a new user via `php please make:user`. You'll want to be a super admin so you have access to everything.

### 4. Do your thing!

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://blog-site.test`. You can access the control panel at `http://blog-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic 4 docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small, [here](https://github.com/afan417/blogo-starter-kit).
