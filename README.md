# Beer Tech Group Site

![deploy workflow](https://github.com/beer-tech-group/beer-tech-group.github.io/actions/workflows/deploy.yml/badge.svg)

## 🚀 Project Structure

```
/
├── public/
├── src/
|   └── components/
|   └── content/
|   └── layouts/
│   └── pages/
|       └── contributors/
|       └── events/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run build:tsc`    | Build with type checking your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
