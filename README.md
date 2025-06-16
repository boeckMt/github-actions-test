# GithubActionsTest

## workflows:
  - dev-test: runs on all push events ignores main, tags and *.md files
  - pre-release: runs only on semver tags including -alpha | -beta | -next if check-tags action works and ignores all branches
  - main-release: runs only pull_request merged to branch main and if check-tags action works

## actions: ([composite run steps action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-run-steps-action))
  - build-test: npm run test and npm run buld // you need to use actions/setup-node@v4 before in your workflow because `uses:` is [currently not allowed](https://github.com/actions/runner/issues/646#issuecomment-777325191) in composite actions
  - check-tags: checks git tag and npm version for a repository to prevent wrong publications.


## set version
`npm version <newversion> -m "..." (major | minor | patch)`

## trigger workflows
- dev-test: 
  - `git push origin <branch>`

- pre-release: `git push origin --tags`
  - before run `npm version prerelease --preid=next -m "test prerelease"` or run `npm version <0.1.5-beta.0>` for a custom version

- main-release: on pull request (only if head branch follows naming conventions)
  - `git checkout -b release-<v*.*.*>`
  - update docs
  - crtete version `npm version <major | minor | patch> -m "..."`
  - check if building without errors
  - Add the Label `RELEASE` to the PR
  - after finished run merge the PR

- check-tag: on push tags
  - `git push origin --tags`

- gh-pages: on push branch main
  - build ng app and deploys dist/test-app as pages
  - https://boeckmt.github.io/github-actions-test/

- github-script-test: on push branch main
  - test for actions/github-script

- on-dispatch: on push tags or workflow_dispatch with input refs/tags/< version >
  - test github.ref vs. github.event.inputs.ref

- test-artifacts: on workflow_dispatch 
  - test adjust build artifacts

- test-setup-node: on push main
  - test node and npm versions 
## Links
- https://github.com/jontreynes/powershell-azfunc-app/blob/20bb025855155c327b7f3650735ec3271b1cf653/.github/workflows/cd.yml
- https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif
- https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context
- https://docs.github.com/en/actions/reference/events-that-trigger-workflows
- https://stackoverflow.com/questions/58862864/github-actions-ci-conditional-regex
- https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows
- https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions
- https://github.com/sdras/awesome-actions
- https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
- https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#about-yaml-syntax-for-github-actions
- https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions#referencing-an-action-in-the-same-repository-where-a-workflow-file-uses-the-action

- https://github.com/github/docs/tree/main/.github/workflows



## Trigger workflow 
- on: pull_request
- if: github.event.pull_request.merged == true && startsWith(github.head_ref, 'release-')
.github\workflows\on-pr-head-ref-release.yml

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.
- `ng new <name> --create-application=false --inline-style=true --inline-template=true`
- `ng generate library test-lib && ng generate library test-lib2 && ng generate library test-lib3`
- `ng generate application test-app --inline-style=true --inline-template=true --style=css`

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
