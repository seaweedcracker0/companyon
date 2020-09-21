import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//Header Observable
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { close } from './store/header/header.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  headerOpen$: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<{ headerOpenState: boolean }>
  ) {
    this.initializeApp();
    this.headerOpen$ = store.pipe(select('headerOpenState'));
  }g

  closeHeader() {
    this.store.dispatch(close());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
