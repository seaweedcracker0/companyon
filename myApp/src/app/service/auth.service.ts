import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from '../store/models/users';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  userProfile: any;

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }  

  login(email: String, password: String) {
    return this.http.post('http://localhost:1337/auth/local',
      {
        identifier: email, 
        password: password
      }
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  logout() {
    //console.log("logout");
    this.storage.remove("token");
    this.isLoggedIn = false;
    delete this.token;
    return true;
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        //console.log(this.token);
        
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },

      error => {
        this.token = null;
        this.isLoggedIn = false;
      }

    );
  }

  getUser() {
    return this.storage.get('token').then(
      data => {
        return data.user;         
      },

      error => {
        console.log(error);
      }

    );
  }
}
