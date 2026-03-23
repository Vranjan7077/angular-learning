# Angular Basics Learning Repository

Hands-on Angular practice projects for learning core concepts through small, focused examples.

## Overview

This repository contains multiple standalone Angular projects. Each folder explores one topic or a small related set of topics so you can run the app, inspect the code, and experiment in isolation.

## Key Features

- Practical Angular examples organized by topic
- Separate runnable projects for focused learning
- Modern Angular project setup with TypeScript and SCSS
- Built around Angular 19-era project structure and patterns
- Project-level READMEs for deeper topic-specific notes
- Good mix of fundamentals and slightly more advanced concepts

## Projects Structure

The repository is organized as a collection of top-level Angular projects, with each folder focused on a specific topic.

### 1. Component Communication

- Folder: [`component.communication`](./component.communication/README.md)
- What you'll learn:
  - Parent-to-child communication with `@Input`
  - Child-to-parent communication with `@Output` and `EventEmitter`
  - Template reference variables
  - `@ViewChild` for parent-to-child method access
  - Content projection with `ng-content`
  - Sibling communication through parent and shared services
  - `BehaviorSubject` and Signals-based communication
  - A live API communication playground
- Tech stack: Angular 19, RxJS, Angular Signals, HttpClient
- API demo: JSONPlaceholder

### 2. Data Binding

- Folder: [`data.binding`](./data.binding/README.md)
- What you'll learn:
  - Interpolation
  - Property binding
  - Event binding
  - Two-way binding with `ngModel`
  - Class, style, and attribute binding
  - Pipe binding
  - Safe navigation
  - Async pipe usage
  - Signal-based binding examples
- Tech stack: Angular 19, TypeScript, SCSS, RxJS, Angular Forms, Angular Signals
- API demo: JSONPlaceholder and Picsum Photos

### 3. Dependency Injection

- Folder: [`dependency.injection`](./dependency.injection/README.md)
- What you'll learn:
  - Basic service injection
  - The `inject()` function
  - Root singleton behavior
  - Component-scoped providers
  - Injection tokens with `useValue`
  - Factory providers with dependencies
  - Hierarchical DI
  - Optional dependency resolution
  - Environment injector patterns
- Tech stack: Angular 19, TypeScript 5, RxJS 7, Karma, Jasmine

### 4. HTTP Client

- Folder: [`httpclient`](./httpclient/README.md)
- What you'll learn:
  - `HttpClient` GET, POST, PUT, and DELETE patterns
  - Async pipe with HTTP data
  - Error handling strategies
  - `forkJoin` and `switchMap`
  - Loading states
  - Interceptors for logging, auth, and refresh behavior
  - Caching, pagination, filtering, and search
  - Fake JWT authentication flow
- Tech stack: Angular 19, HttpClient, RxJS, standalone components
- API demo: JSONPlaceholder

### 5. Internationalization (i18n)

- Folder: [`i18n`](./i18n/README.md)
- What you'll learn:
  - Runtime internationalization with `ngx-translate`
  - JSON-based translation files
  - Placeholder interpolation
  - Language switching
  - Basic RTL and LTR direction handling
- Tech stack: Angular 19, TypeScript, RxJS, `@ngx-translate/core`, `@ngx-translate/http-loader`
- Translation assets: `src/assets/i18n/messages.<lang>.json`

### 6. Interfaces, Types, and Observables

- Folder: [`interface.types.and.observables`](./interface.types.and.observables/README.md)
- What you'll learn:
  - TypeScript interfaces and reusable models
  - Generic API response typing
  - Observable-based HTTP calls
  - Async pipe usage
  - RxJS `map` and `switchMap`
  - Utility types like `Partial`, `Pick`, and `Omit`
  - State patterns with observables and subjects
  - Caching and `forkJoin`
- Tech stack: Angular 19, TypeScript 5, RxJS 7, SCSS

### 7. Lifecycle Hooks

- Folder: [`lifecycle.hooks`](./lifecycle.hooks/README.md)
- What you'll learn:
  - Angular lifecycle hook flow
  - Change detection patterns
  - Signal-driven updates
  - Cleanup with destroy logic
  - API-driven examples tied to lifecycle changes
- Tech stack: Angular 19, TypeScript, SCSS, RxJS
- API demo: REST Countries API

### 8. Notes App

- Folder: [`notes.app`](./notes.app/README.md)
- What you'll learn:
  - Standalone component architecture
  - Angular Router with guards
  - Service-based state management
  - Template-driven and reactive form patterns
  - Custom validators
  - CRUD operations
  - Modal confirmation flows
  - Toast notifications
- Tech stack: Angular 19, TypeScript 5, SCSS, Angular Router, Karma, Jasmine

### 9. Pipes

- Folder: [`pipes`](./pipes/README.md)
- What you'll learn:
  - Built-in pipes
  - Custom pipe creation
  - Async pipe usage
  - Pure versus impure behavior
  - Formatting and transformation patterns on live data
- Tech stack: Angular 19, TypeScript, SCSS, RxJS
- API demo: JSONPlaceholder

### 10. Reactive Forms

- Folder: [`reactive.forms`](./reactive.forms/README.md)
- What you'll learn:
  - `FormControl` and `FormGroup`
  - Form submission flow
  - Built-in validators
  - Nested groups
  - Dynamic `FormArray`
  - Custom and async validators
  - Strongly typed forms
  - `valueChanges` patterns
  - Conditional validation
  - Full CRUD with a local API
- Tech stack: Angular 19, Reactive Forms, HttpClient, `json-server`
- Local API: `db.json` served through `json-server`

### 11. Routing

- Folder: [`routing`](./routing/README.md)
- What you'll learn:
  - Static routes
  - Dynamic route parameters
  - Nested routes
  - Deeper child routing
  - Lazy loading with `loadComponent`
  - Wildcard routing
  - Route params combined with API calls
- Tech stack: Angular 19, Angular Router, standalone components, HttpClient
- API demo: JSONPlaceholder

### 12. Template-Driven Forms

- Folder: [`template.driven.forms`](./template.driven.forms/README.md)
- What you'll learn:
  - `[(ngModel)]` two-way binding
  - `ngForm` state and values
  - `(ngSubmit)` submit handling
  - Required and pattern validations
  - Disable-on-invalid patterns
  - `ngModelGroup` nested form objects
  - Custom validation rules
  - Typed model usage
  - Reset behavior
  - Full CRUD with template-driven forms
- Tech stack: Angular 19, FormsModule, HttpClient, `json-server`
- Local API: `db.json` served through `json-server`

## Tech Stack (Common Across All Projects)

- Angular 19
- TypeScript
- SCSS
- npm (v9+)
- Angular CLI (v19+)
- Node.js (v18+)
- Karma and Jasmine for unit testing
- RxJS in projects that work with async streams and state

Most project folders follow a structure close to this:

```text
project-name/
|-- src/
|   |-- app/
|   |-- index.html
|   |-- main.ts
|   `-- styles.scss
|-- public/
|-- angular.json
|-- package.json
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.spec.json
|-- package-lock.json
`-- README.md
```

Some projects also include extras such as:

- `db.json` for mock API data
- `screenshots/` for UI snapshots
- `src/assets/` for static assets and translation files

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI 19 or later

### Run Any Project

1. Move into a project folder:

   ```bash
   cd component.communication
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm start
   ```

4. Open:

   ```text
   http://localhost:4200/
   ```

### Mock API Projects

Some projects include a `db.json` file for mock backend data. When needed, start a local mock server from inside that project folder:

```bash
npx json-server --watch db.json
```

Projects currently using `db.json`:

- `reactive.forms`
- `template.driven.forms`

## How to Use This Repository

1. Choose a topic you want to study.
2. Open the matching project folder.
3. Read that project's `README.md`.
4. Run the project locally.
5. Explore `src/app/` to understand the implementation.
6. Modify the examples and observe the results in the browser.

## Learning Path Suggestion

1. Start with `data.binding` to get comfortable with templates and interaction basics.
2. Move to `component.communication` to understand how components talk to each other.
3. Study `lifecycle.hooks` to see when Angular runs component logic.
4. Continue with `dependency.injection` to understand services and providers.
5. Explore `routing` to learn app navigation.
6. Compare `template.driven.forms` and `reactive.forms`.
7. Review `httpclient`, `pipes`, and `i18n`.
8. Use `notes.app` as a larger practical example.

## Features

- Runnable Angular examples
- Topic-focused project organization
- Shared Angular CLI-based workflow across projects
- UI examples that make concepts easier to inspect
- Room to compare patterns between projects

## Additional Resources

- Project-specific `README.md` files inside each folder
- `screenshots/` folders in projects that include UI snapshots
- `db.json` files in projects that use mock API data
- `src/assets/` for static files such as translations and other assets

## Notes

- Every top-level project currently includes its own `package.json`.
- Every top-level project currently includes its own `README.md`.
- Some projects use mock backend data and may require `json-server` or similar local setup, depending on the example.

## Documentation

Each project folder is intended to include:

- A `README.md` with topic-specific notes
- Source code under `src/`
- Angular configuration files such as `angular.json` and `tsconfig*.json`
- Supporting assets such as screenshots or mock data where needed

## Tips for Learning

1. Run one project at a time and keep the topic narrow.
2. Read the template and component files together to connect UI and logic.
3. Make small edits and refresh often to learn by observation.
4. Compare similar concepts across projects, especially forms and communication patterns.
5. Use the browser console and Angular errors as part of the learning process.

## Adding a New Project

1. Create it as a separate top-level Angular project folder.
2. Include a local `README.md` that explains the concept and examples.
3. Follow the existing naming convention already used in this repository, such as `routing`, `reactive.forms`, or `component.communication`.
4. Update this root `README.md` so the new project appears in the project list and learning path where appropriate.

## Goal

The goal of this repository is to build a practical understanding of Angular by keeping examples focused, runnable, and easy to compare across topics.

Happy learning!
