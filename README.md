[![Built with Devbox](https://jetpack.io/img/devbox/shield_galaxy.svg)](https://jetpack.io/devbox/docs/contributor-quickstart/)

# Vite React Playground

## Technologies

- [Vite](https://vitejs.dev/guide/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/en/main)
- [axios](https://github.com/axios/axios)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [nock](https://github.com/nock/nock)
- [msw](https://mswjs.io/)
- [Playwright](https://playwright.dev/docs/intro)

## Usage

### Prerequisites

- [devbox](https://www.jetpack.io/devbox/docs/)

OR

- [node@20](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)
- [@antfu/ni](https://github.com/antfu/ni) (optional)

### Install dependencies

With `devbox`

```sh
devbox shell
```

Otherwise, install `node` dependencies

```sh
ni
```

Install Playwright browsers

```sh
pnpm exec playwright install chromium
```

### Start the dev server

```sh
nr start
```

### Run tests

```sh
nr test
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
