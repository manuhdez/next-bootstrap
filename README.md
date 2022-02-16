This is a [Next.js](https://nextjs.org/) template meant to provide you with a ready-to-code project with all the necessary tools to get you started.

## Features 
- [x] TypeScript support
- [x] Unit tests with `jest`
- [x] Extended jest dom assertions with `@testing-library/jest-dom`
- [x] React component tests with`@testing-library/react`
- [x] End-to-end testing `cypress` and `@testing-library/cypress`
- [x] Git hooks support with `husky`
- [ ] Linting with `eslint`
- [ ] Automatic formatting with `prettier`
- [ ] Commit linting with `commitlint`

## Unit testing
Unit tests are written in TypeScript and run with [Jest](https://jestjs.io/).  
Due to the fact that next.js does not ignore test files located within the `pages` folder. Tests for pages and api endpoints, are located in the `__tests__` folder.

For other unit tests, it is recommended to place your test files next to the file they are testing i.e.
```
/
├── __tests__/ <-- for testing files under the `pages` folder
│   ├── pages/
│   │   └── index.test.tsx
│   └── api/
│       └── index.test.ts
│
└── components
    └── button/
        └── button.tsx
        └── button.test.tsx
```

### `npm run test`
Runs the unit test in watch mode.

### `npm run test:ci`
Runs the unit test in ci mode.  
This is meant to be used in a CI environment.

## End-to-end testing
End-to-end tests are run with [cypress](https://www.cypress.io/).  
These tests are located in the `cypress/integration` folder.  

### `npm run cypress`
Launches the cypress console, so you can manually run tests.  
It depends on you having the application running in your `localhost:3000`

### `npm run cypress:run`
Runs the tests in headless mode.  
It depends on you having the application running in your `localhost:3000`

### `npm run e2e`
Runs the tests in headless mode against your built code.  
This script is meant to be used in a continuous integration environment.  
Although you can use it locally, you only need to run the script `npm run build` first.

## Git hooks
By default, the template comes with two git hooks configured:
- pre-commit: runs unit tests.
- pre-push: runs unit and end-to-end tests.

[//]: # (todo: add more info about running the app and the main features)
## Running the app locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

[//]: # (todo: add deployment instructions)
## Deployment
