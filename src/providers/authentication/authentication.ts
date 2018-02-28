import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  token: string;
  urlApi = 'http://35.194.35.240/api';
  urlApiLocal = 'http://localhost:1337/api';

  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string) {
    const body = JSON.stringify({ username: username, password: password });
    console.log('en el servicio');
    console.log(username);
    console.log(password);
    console.log(body);

    return this.http.post(`${this.urlApiLocal}/login/web`, body)
      .map((response) => {
        console.log(response.json());
        return response.json();

      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
