# IonicHttpErrorToast

## About
An Angular http error interceptor that displays a configurable Ionic toast with a custom or predefined error message.

## Installation

npm install @jorns/ionic-http-error-toast

## Usage

Import IonicHttpErrorToastModule into your AppModule.

### Default settings:
to Use with the default settings provide an empty object to the forRoot().
    IonicHttpErrorToastModule.forRoot({}),

### Customize:

The forRoot method takes a type of IConfig. All properties are optional.
You can pass in your own httpErrorMessages and status codes to ignore. 

If you want to display error messages send from the server set useResponseError=true. The default
value is false;

Options takes an ToastOptions object with the same properties you would pass to a toast in Ionic.

    IonicHttpErrorToastModule.forRoot({
          httpErrors: {
            // Object with error code as propertyname and a string value
            httpErrorMessages: {400: 'your message','403': 'your message'},
            // array with error codes to ignore
            httpErrorIgnore: [418,419],
          },
          // if you want to use the error message from your api response set this to true;
          useResponseError: false,
          // ionic toast options
          options: {
            position: 'bottom',
            ccsClass: 'yourClass orUseThePackageClasses'
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

### Styling

Available css classes:
    // creates a fullwidth rectangle in your app
    .ionic-toast-rectangle
    // posistion above your tabbar
    .ionic-toast-above-tabbar
    // posistion below your appbar
    .ionic-toast-below-header
    
Import this in your global.scss stylesheet:
    @import "~@jorns/ionic-http-error-toast/css/ionic-http-error-toast.scss";

Or in your angular.json styles array:
    "styles": [
      {
        "input": "src/theme/variables.scss"
      },
      {
        "input": "src/global.scss"
      } 
      {
        "input": "node_modules/@jorns/ionic-http-error-toast/css/ionic-http-error-toast.scss"
      }
