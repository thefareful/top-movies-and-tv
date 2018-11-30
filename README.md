# RubiconAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Components

-Home-
Contains landing page for user, contains header with Toggle-buttons component and search input field, and Titles components

-Toggle-buttons-
Contains buttons used to toggle between views

-Title-
Used to represent show/movie titles, contains title image, name, and a link to a Detailed view

-Detailed-
Used to represent show/movie detailed information, name, image and overview

## Services

-Movies-
Used to fetch movie data from API

-Shows-
Used to fetch show data from API

-State-
Used to remember the state of Home component before user visits Detailed component

## Responsiveness

App is responsive with media queries for screens < 500px wide