# IntroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

To compile this project it is necessary to have Angular CLI and Node js installed, both in v14.
To install Angular CLI version 14 you need the following command

`npm install -g @angular/cli@14.0.0`


If you previously had another version installed, it is necessary to delete it and then do the installation

`npm uninstall -g @angular/cli`


To use version 12 of Node we can use the nvm library that helps us manage the versions of Node on our computer.
To install nvm we have to go to https://github.com/coreybutler/nvm-windows/releases  and then download the nvm-setup.zip file  (Assets section).

Once downloaded, you install it and to confirm that it was installed when you run this command it should return a version:

`nvm version`

`nvm install 14`

`nvm use 14`

After those steps, you can now run `npm i` and `ng serve -o` and your project will open in http://localhost:4200/


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
