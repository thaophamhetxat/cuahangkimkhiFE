// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBUO7IcvxfFPEuT_QltLS5JqkluJxpxZW8",
    authDomain: "kimkhiupload.firebaseapp.com",
    databaseURL: "https://kimkhiupload-default-rtdb.firebaseio.com",
    projectId: "kimkhiupload",
    storageBucket: "kimkhiupload.appspot.com",
    messagingSenderId: "934515044198",
    appId: "1:934515044198:web:0781f4e29c62e3694522a7",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
