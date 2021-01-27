import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ReinitialisationMdpPageRoutingModule } from './reinitialisation-mdp-routing.module';

import { ReinitialisationMdpPage } from './reinitialisation-mdp.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialisationMdpPageRoutingModule,
    SharedModulesModule
  ],
  declarations: [ReinitialisationMdpPage]
})
export class ReinitialisationMdpPageModule {}
