import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { headerOpenStateReducer } from './store/header/header.reducer';

//Custom Component
import { MegaMenuComponentModule } from './components/mega-menu/mega-menu.module';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['localstorage', 'indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule, 
    StoreModule.forRoot({headerOpenState: headerOpenStateReducer}),
    MegaMenuComponentModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
      NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
