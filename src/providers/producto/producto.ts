import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  url: string = "http://35.194.35.240/api/productos/";

  constructor(public http: Http) {
    console.log('Hello ProductoProvider Provider');
  }

  consultarProductos(){

    return this.http.get(this.url).map(
      respuesta => {
        return respuesta.json();
      });

  }

}
