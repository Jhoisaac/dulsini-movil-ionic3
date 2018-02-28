import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage, ProductosPage, RegistroPage, BandejaPage, FinalizarPage, MenuDiarioPage } from '../pages/index.pages';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { HttpModule } from '@angular/http';
import { ProductoProvider } from '../providers/producto/producto';
import { MenuProvider } from '../providers/menu/menu';
import { BandejaProvider } from '../providers/bandeja/bandeja';

import { Geolocation } from '@ionic-native/geolocation';
import { FinalizarPedidoProvider } from '../providers/finalizar-pedido/finalizar-pedido';
import { AuthenticationProvider } from '../providers/authentication/authentication';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProductosPage,
    RegistroPage,
    BandejaPage,
    FinalizarPage,
    MenuDiarioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProductosPage,
    RegistroPage,
    BandejaPage,
    FinalizarPage,
    MenuDiarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    ProductoProvider,
    MenuProvider,
    BandejaProvider,
    FinalizarPedidoProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
