import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { MenuProvider } from '../../providers/menu/menu';
import { Producto} from '../../interface/producto.module';
import { BandejaProvider } from '../../providers/bandeja/bandeja';


/**
 * Generated class for the MenuDiarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-diario',
  templateUrl: 'menu-diario.html',
})
export class MenuDiarioPage {

  menus:any [] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _menuPrv: MenuProvider,
              private _bandejaPrv: BandejaProvider,
              private _menuCtrl: MenuController,
              private toastCtrl: ToastController) {

    this._menuPrv.consultarMenus().subscribe(

      respuesta =>{

        this.menus = respuesta;
        console.log(this.menus)
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDiarioPage');
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
