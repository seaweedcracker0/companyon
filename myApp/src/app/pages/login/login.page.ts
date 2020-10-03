import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        console.log("Logged In");
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error.error.data[0].messages[0].message);
      },
      () => {
        this.navCtrl.navigateRoot('/home');
      }
    );
  }
}
