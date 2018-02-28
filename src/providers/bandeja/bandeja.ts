import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Producto } from '../../interface/producto.module';

/*
  Generated class for the BandejaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BandejaProvider {

  bandeja: any[] = [];
  public statusChanged = new EventEmitter<{type: string; totalCount: number}>();

  constructor(public http: Http) {
    console.log('Hello BandejaProvider Provider');
  }

  getCart(): any[] {
    return this.bandeja;
  };

  addCarritoItem(producto: Producto): void {
    this.bandeja.push({
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.image
    });
    this.statusChanged.emit({
      type: 'add',
      totalCount: this.bandeja.length
    });
  };

  calcTotalSum(): number {
    let sum = 0;

    if (!this.bandeja || !this.bandeja.length) {
      return sum;
    }

    for (let i = 0; i < this.bandeja.length; i = i + 1) {
      sum = sum + this.bandeja[i].precio;
    }

    return sum;
  }

}
