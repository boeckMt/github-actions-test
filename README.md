# GithubActionsTest

- on push and pull_request to main branch run test and build (Node.js CI)

- on tags run publish (Node.js CI Package)
  run `npm version <newversion> -m "Version after Milestone XY"` (major | minor | patch)
or run `npm version <0.1.5-beta.0>` for a custom version

- git push origin main --tags




https://github.com/jontreynes/powershell-azfunc-app/blob/20bb025855155c327b7f3650735ec3271b1cf653/.github/workflows/cd.yml

https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif

https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context

https://docs.github.com/en/actions/reference/events-that-trigger-workflows


https://stackoverflow.com/questions/58862864/github-actions-ci-conditional-regex

https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
