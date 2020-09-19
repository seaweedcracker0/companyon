# companyon
## Introduction
This app is built and relies heavily on Ionic framework. As right now, the current version of ionic that being used is ionic 5

Feel free to check their documentation:
https://ionicframework.com/docs/

Also the app is compiled with "Capacitor" instead of "Cordova"

Feel free to check their documentation:
https://capacitorjs.com/docs

## Prepare the libs
1. cd myApp
2. npm install
3. ionic cap sync
4. ionic serve to start development

## Build Command
### Android
5. ionic capacitor add android
7. ionic cap sync
8. ionic capacitor build android

### iOS
5. ionic capacitory add ios

## Capacitor Plugin
You can make your custom plugin by writing the Android and Swift code together with the bridge to call those function via Capacitor.

Feel free to check their documentation:
https://capacitorjs.com/docs/plugins