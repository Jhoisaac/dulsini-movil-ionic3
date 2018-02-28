import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MenuProvider {

  url: string = "http://35.194.35.240/api/menus/";

  constructor(public http: Http) {
    console.log('Hello MenuProvider Provider');
  }

  consultarMenus(){

    return this.http.get(this.url).map(
      respuesta => {
        return respuesta.json();
      });

  }

}
