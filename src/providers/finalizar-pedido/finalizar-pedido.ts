import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FinalizarPedidoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FinalizarPedidoProvider {

  urlPedido: string ="http://35.194.35.240/api/pedido";

  constructor(public http: Http) {
    console.log('Hello FinalizarPedidoProvider Provider');
  }

  registrarPedido(pedido: any) {
    return this.http.post(this.urlPedido, JSON.stringify(pedido)).map(
      respuesta => {

        return respuesta.json();

      }
    );
  }

}
