import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from '../../interface/usuario.module';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  myForm: FormGroup;

  usuarioNuevo: Usuario = {
    nombre: "",
    apellido: "",
    celular: 0,
    username:"",
    password:""
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _usuarioPrv: UsuarioProvider,
              public formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrarUsuario(){
    console.log("Registrar");
    this.usuarioNuevo.nombre = this.myForm.value.nombre;
    this.usuarioNuevo.apellido = this.myForm.value.apellido;
    this.usuarioNuevo.celular = this.myForm.value.celular;
    this.usuarioNuevo.username= this.myForm.value.username;
    this.usuarioNuevo.password= this.myForm.value.password;
    console.log(this.usuarioNuevo);


    this._usuarioPrv.nuevoUsuario(this.usuarioNuevo).subscribe(
      respuesta => {
        console.log(respuesta);
      }
    );

    this.myForm.reset();
    this.navCtrl.push(LoginPage);
  }

}
