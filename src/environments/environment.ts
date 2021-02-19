// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  API:"http://localhost:5080/",
  production: false,
  firebase:  { 
    apiKey: "AIzaSyBkt5o5rwNcKql7bLH4sqYMEQDQPu8ZjFw",
  authDomain: "ng-hotel.firebaseapp.com",
  databaseURL: "https://ng-hotel.firebaseio.com",
  projectId: "ng-hotel",
  storageBucket: "ng-hotel.appspot.com",
  messagingSenderId: "1042201295779"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
