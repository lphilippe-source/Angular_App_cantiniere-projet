import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PanierPageRoutingModule } from './panier-routing.module';

import { PanierPage } from './panier.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    SharedModulesModule
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
