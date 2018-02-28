import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Usuario } from '../../interface/usuario.module';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  usuarioURL: string = "http://35.194.35.240/api/usuarios/";

  constructor(public http: Http) {

    console.log('Hello UsuarioProvider Provider');
  }

  consultarUsuarios(){
    return this.http.get(this.usuarioURL).map(
      respuesta => {
        console.log(respuesta.json());
        return respuesta.json();
      });

  }

  nuevoUsuario(usuario: Usuario){
    console.log( JSON.stringify(usuario));
    return this.http.post(this.usuarioURL, JSON.stringify(usuario)).map(
      respuesta=>{
        return respuesta.json();
      }
    )
  }

}
