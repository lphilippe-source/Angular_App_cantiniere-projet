import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { GestionUSerPage } from '../gestion-user/gestion-user.page';
import { GestionCagnottePage } from '../gestion-cagnotte/gestion-cagnotte.page';
import { MypopComponentModule } from '../header/mypop/mypop.component.module';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MypopComponentModule,
    SharedModulesModule
  ],
  declarations: [HomePage, GestionUSerPage, GestionCagnottePage]
})
export class HomePageModule {}
