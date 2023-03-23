# Beer Tech Group Site

![deploy workflow](https://github.com/beer-tech-group/beer-tech-group.github.io/actions/workflows/deploy.yml/badge.svg)

## 🚀 Project Structure

```sh
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
| `npm run build`    | Build with type checking your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Run Firebase emulator

In order to run and test Site with firebase emulator, install firebase cli and emulators ([Doc](https://firebase.google.com/docs/emulator-suite)), then run:

```sh
firebase emulators:start
```

**NB**: If you want to test firebase reserved URLs, you should use emulators.

## Contributors

<a href="https://github.com/beer-tech-group/beer-tech-group.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=beer-tech-group/beer-tech-group.github.io" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
