# IonicHttpErrorToast

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Installation

npm install @jorns/ionic-http-error-toast

## Usage

Import IonicHttpErrorToastModule into your AppModule.

### Default settings:
to Use with the default settings provide an empty object to the forRoot().
    IonicHttpErrorToastModule.forRoot({}),

### Customize:

The forRoot method takes a type of IConfig. All properties are optional.
You can pass in your own httpErrorMessages and status codes to ignore. If you want
to display error messages send from the server set useResponseError=true. The default
value is false;
Options takes an ToastOptions object with the same properties you would pass to a toast in Ionic.
!!Important. Do not add a message property to this object.

    IonicHttpErrorToastModule.forRoot({
          httpErrors: {
            httpErrorMessages: environment.httpErrorMessages,
            httpErrorIgnore: environment.httpErrorIgnore,
          },
          useResponseError: false,
          options: {
            position: 'bottom',
            buttons: [
              {
                icon: 'close',
                side: 'end',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ],
            duration: null,
          }
      }),
