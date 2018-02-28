import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { RegistroPage } from '../index.pages';
import { MenuDiarioPage } from '../index.pages';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthenticationProvider } from '../../providers/authentication/authentication';



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarios: any [] = [];
  model: any = {};

  usuario = {
    username:'',
    password :''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _usuarioPrv: UsuarioProvider,
              private _alertCtrl: AlertController,
              private authenticationService: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //console.log("LOGIN");

    // //EXTRAER USUARIOS
    // this._usuarioPrv.consultarUsuarios()
    //   .subscribe(
    //
    //   respuesta =>{
    //     console.log(respuesta);
    //
    //     for (let key$ in respuesta){
    //       let usuarioNew = respuesta[key$];
    //       usuarioNew.id = key$;
    //
    //       let username = usuarioNew.username;
    //       let password = usuarioNew.password;
    //       if(this.usuario.username === username && this.usuario.password === password) {
    //         console.log("ENTRO");
    //         this.navCtrl.setRoot(MenuDiarioPage);
    //       }
    //       /*else {
    //         let alert = this._alertCtrl.create({
    //           title:'Login Error',
    //           subTitle:'Usuario o Contraseña incorrectos',
    //           buttons:['OK']
    //         });
    //         alert.present();
    //         return;
    //
    //       }*/
    //       //console.log(username);
    //       //console.log(password);
    //     }
    //
    //
    //     //this.usuarios = respuesta;
    //     //console.log(this.usuarios)
    //   }
    // );
    //
    // if(this.usuario.username === '' || this.usuario.password === ''){
    //   let alert = this._alertCtrl.create({
    //     title:'Login Error',
    //     subTitle:'Llene todos los campos',
    //     buttons:['OK']
    //   });
    //   alert.present();
    //   return;
    // }
    //
    // console.log(this.usuario);


    console.log(this.model.username);
    console.log(this.model.password);
    //JWT Login
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        // login successful
        console.log(result);
        this.navCtrl.setRoot(MenuDiarioPage);

      }, (err) => {
        console.log('errror');
        // login failed
        let alert = this._alertCtrl.create({
          title:'Login Error',
          subTitle:'Usuario o Contraseña incorrectos',
          buttons:['OK']
        });
        alert.present();
        return;
      });
  }



  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

  irPrincipal(){
    this.navCtrl.setRoot(MenuDiarioPage);
  }

}
