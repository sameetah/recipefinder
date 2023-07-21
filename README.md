# RecipeFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

```
2023-06-28-project-2-team-1
├─ .angular
├─ .editorconfig
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ Tommy
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ Tommy
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-b7f0722e9ef9fce5e3b4d70f5c5ee46055488f20.idx
│  │     └─ pack-b7f0722e9ef9fce5e3b4d70f5c5ee46055488f20.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ Tommy
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ Tommy
│     └─ tags
├─ .gitignore
├─ angular.json
├─ Logo.png
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ contact-dialog-box
│  │  │  ├─ contact-dialog-box.component.html
│  │  │  ├─ contact-dialog-box.component.scss
│  │  │  ├─ contact-dialog-box.component.spec.ts
│  │  │  └─ contact-dialog-box.component.ts
│  │  ├─ contact-form
│  │  │  ├─ contact-form.component.html
│  │  │  ├─ contact-form.component.scss
│  │  │  ├─ contact-form.component.spec.ts
│  │  │  └─ contact-form.component.ts
│  │  ├─ drink
│  │  │  ├─ drink.component.html
│  │  │  ├─ drink.component.scss
│  │  │  ├─ drink.component.spec.ts
│  │  │  └─ drink.component.ts
│  │  ├─ environments
│  │  │  ├─ environment.prod.ts
│  │  │  └─ environment.ts
│  │  ├─ favorites
│  │  │  ├─ favorites.component.html
│  │  │  ├─ favorites.component.scss
│  │  │  ├─ favorites.component.spec.ts
│  │  │  └─ favorites.component.ts
│  │  ├─ food
│  │  │  ├─ food.component.html
│  │  │  ├─ food.component.scss
│  │  │  ├─ food.component.spec.ts
│  │  │  └─ food.component.ts
│  │  ├─ food-and-drink
│  │  │  ├─ food-and-drink.component.html
│  │  │  ├─ food-and-drink.component.scss
│  │  │  ├─ food-and-drink.component.spec.ts
│  │  │  └─ food-and-drink.component.ts
│  │  ├─ footer
│  │  │  ├─ footer.component.html
│  │  │  ├─ footer.component.scss
│  │  │  ├─ footer.component.spec.ts
│  │  │  └─ footer.component.ts
│  │  ├─ local-storage.service.spec.ts
│  │  ├─ local-storage.service.ts
│  │  ├─ Logo.png
│  │  ├─ navbar
│  │  │  ├─ navbar.component.html
│  │  │  ├─ navbar.component.scss
│  │  │  ├─ navbar.component.spec.ts
│  │  │  └─ navbar.component.ts
│  │  ├─ recipe-details
│  │  │  ├─ recipe-details.component.html
│  │  │  ├─ recipe-details.component.scss
│  │  │  ├─ recipe-details.component.spec.ts
│  │  │  └─ recipe-details.component.ts
│  │  ├─ recipe-results
│  │  │  ├─ recipe-results.component.html
│  │  │  ├─ recipe-results.component.scss
│  │  │  ├─ recipe-results.component.spec.ts
│  │  │  └─ recipe-results.component.ts
│  │  ├─ recipe-search-form
│  │  │  ├─ recipe-search-form.component.html
│  │  │  ├─ recipe-search-form.component.scss
│  │  │  ├─ recipe-search-form.component.spec.ts
│  │  │  └─ recipe-search-form.component.ts
│  │  ├─ recipe-service.service.spec.ts
│  │  ├─ recipe-service.service.ts
│  │  ├─ recipe.action.ts
│  │  ├─ recipe.model.ts
│  │  ├─ recipe.reducer.ts
│  │  ├─ Shopping-list
│  │  │  ├─ shopping
│  │  │  │  ├─ shopping.component.html
│  │  │  │  ├─ shopping.component.scss
│  │  │  │  ├─ shopping.component.spec.ts
│  │  │  │  └─ shopping.component.ts
│  │  │  ├─ shopping-list.service.spec.ts
│  │  │  └─ shopping-list.service.ts
│  │  ├─ weekly-card
│  │  │  ├─ bla.json
│  │  │  ├─ weekly-card.component.html
│  │  │  ├─ weekly-card.component.scss
│  │  │  ├─ weekly-card.component.spec.ts
│  │  │  ├─ weekly-card.component.ts
│  │  │  ├─ weekly-recipe-plan.service.spec.ts
│  │  │  └─ weekly-recipe-plan.service.ts
│  │  └─ weekly-meal-plan
│  │     ├─ plans.ts
│  │     ├─ weekly-meal-plan.component.html
│  │     ├─ weekly-meal-plan.component.scss
│  │     ├─ weekly-meal-plan.component.spec.ts
│  │     ├─ weekly-meal-plan.component.ts
│  │     └─ weekly-recipe.model.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  ├─ chevron-down.svg
│  │  ├─ chevron-up.svg
│  │  └─ Logo.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ Logo.png
│  ├─ main.ts
│  ├─ styles.css
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```