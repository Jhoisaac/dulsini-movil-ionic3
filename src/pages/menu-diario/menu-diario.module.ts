import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDiarioPage } from './menu-diario';

@NgModule({
  declarations: [
    MenuDiarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDiarioPage),
  ],
})
export class MenuDiarioPageModule {}
