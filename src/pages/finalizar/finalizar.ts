import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation';
import { BandejaProvider } from '../../providers/bandeja/bandeja';
import { FinalizarPedidoProvider } from '../../providers/finalizar-pedido/finalizar-pedido';

/**
 * Generated class for the FinalizarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalizar',
  templateUrl: 'finalizar.html',
})
export class FinalizarPage {

  myForm: FormGroup;

  pedidoNuevo: any = {
    nombre: "",
    apellido: "",
    celular: 0,
    lat: 0,
    long: 0,
    pedido:[],
    total:0
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _geo: Geolocation,
              private _bandejaPrv: BandejaProvider,
              private _menuCtrl: MenuController,
              private _pedidoPrv: FinalizarPedidoProvider,
              public formBuilder: FormBuilder) {

    this._geo.getCurrentPosition().then(resultado => {
      this.pedidoNuevo.lat = resultado.coords.latitude;
      this.pedidoNuevo.long = resultado.coords.longitude;
    });

    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      lat: ['', Validators.required],
      long: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarPage');
  }

  geoLocalizar() {
    console.log("cordenadas");

    this._geo.getCurrentPosition().then(resultado => {

      console.log(resultado);
      this.pedidoNuevo.lat = resultado.coords.latitude;
      this.pedidoNuevo.long = resultado.coords.longitude;
    });
  }

  //VALOR TOTAL PEDIDO
  calcTotalSum() {
    return this._bandejaPrv.calcTotalSum();
  }

  enviarPedido() {
    console.log("Enviar Pedido");

    this.pedidoNuevo.total=this._bandejaPrv.calcTotalSum();

    this.pedidoNuevo.pedido = this._bandejaPrv.getCart();

    this.pedidoNuevo.nombre = this.myForm.value.nombre;
    this.pedidoNuevo.apellido = this.myForm.value.apellido;
    this.pedidoNuevo.celular = this.myForm.value.celular;
    this.pedidoNuevo.lat = this.myForm.value.lat;
    this.pedidoNuevo.long = this.myForm.value.long;
    this._pedidoPrv.registrarPedido(this.pedidoNuevo).subscribe(
      respuesta => {
        console.log(respuesta);
      }
    );
  }

  //MENU
  mostrarMenu() {
    this._menuCtrl.toggle();
  }

}
