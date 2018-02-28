import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { FinalizarPage } from '../index.pages';
import { BandejaProvider } from '../../providers/bandeja/bandeja';

/**
 * Generated class for the BandejaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bandeja',
  templateUrl: 'bandeja.html',
})
export class BandejaPage {

  cart: any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _menuCtrl: MenuController,
              private _bandejaPrv: BandejaProvider,
              private _alertCtrl: AlertController ) {


    this.cart = this._bandejaPrv.getCart();
    //console.log(this._bandejaPrv.getCart());

  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad BandejaPage');
  }*/

  //ALERTA BANDEJA VACIA
  ionViewDidEnter(): void {
    if (this.cart.length) {
      return;
    }
    let alert = this._alertCtrl.create({
      title: '<b>Su bandeja de pedido está vacía!</b>',
      subTitle: 'Primero agrege Productos a su Bandeja.',
      buttons: ['OK']
    });
    alert.present();

  }

  finaliza(){

    this.navCtrl.push(FinalizarPage);

  }

  //SUMA PRECIOS
  calcTotalSum() {
    return this._bandejaPrv.calcTotalSum();
  }

  quitarCarrito(indice: number){
    this.cart.splice(indice, 1);

  }

  //MENU
  mostrarMenu(){
    this._menuCtrl.toggle();
  }

}
