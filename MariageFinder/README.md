# MariageFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

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

## Application Container

## 1. Page de recherche de mairie

`Component`: RechercheMairieComponent
`Template`: formulaire de recherche avec un champ de texte pour saisir le nom de la ville/mairie et un bouton pour lancer la recherche.
`Service`: MairieService pour interroger la base de données et récupérer les résultats de la recherche.

## 2. Page d'affichage des informations relatives à la mairie

`Component`: **InfoMairieComponent**
`Template`: affichage des informations relatives à la mairie sous forme de cartes avec des onglets pour naviguer entre les différentes informations (horaires, contacts, services, etc.).
`Service`: **MairieService** pour récupérer les informations relatives à la mairie dans la base de données.

## 3. Page de réservation de date de mariage

`Component`: **ReservationComponent**
`Template`: formulaire de réservation avec des champs pour saisir les informations nécessaires et un bouton pour soumettre la réservation.
`Service`: **ReservationService** pour insérer les informations de réservation dans la base de données.

## 4. Page de paiement de la réservation

`Component`: **PaiementComponent**
`Template`: formulaire de paiement avec des champs pour saisir les informations de paiement et un bouton pour soumettre le paiement.
`Service`: **PaiementService** pour effectuer le traitement du paiement en utilisant une API de paiement en ligne.

## 5. Page d'impression du reçu de la réservation

`Component`: **RecuComponent**
`Template`: affichage du reçu de la réservation sous forme de fichier PDF généré avec PDFKit.
`Service`: **ReservationService** pour récupérer les informations de la réservation dans la base de données.
