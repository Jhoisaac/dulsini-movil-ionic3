import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController  } from 'ionic-angular';

import { Producto} from '../../interface/producto.module';
import { ProductoProvider } from '../../providers/producto/producto';
import { BandejaProvider } from '../../providers/bandeja/bandeja';
//import { BandejaPage } from '../index.pages';

/**
 * Generated class for the ProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  productos: Producto [] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _productoPrv: ProductoProvider,
              private _bandejaPrv: BandejaProvider,
              private _menuCtrl: MenuController,
              private toastCtrl: ToastController) {

    this._productoPrv.consultarProductos().subscribe(

      respuesta =>{

        this.productos = respuesta;
        console.log(this.productos)
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  login(){

  }

  agregarCarrito(producto: Producto){

    this._bandejaPrv.addCarritoItem(producto);

    //this.navCtrl.push(BandejaPage);
    console.log(producto);

    let toast = this.toastCtrl.create({
      message: 'Producto agregado con exito!!',
      duration: 1500,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }


  //MENU
  mostrarMenu(){
    this._menuCtrl.toggle();
  }

}
