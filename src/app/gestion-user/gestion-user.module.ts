import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionUSerPageRoutingModule } from './gestion-user-routing.module';

import { GestionUSerPage } from './gestion-user.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUSerPageRoutingModule,
    SharedModulesModule
  ],
  declarations: [GestionUSerPage]
})
export class GestionUSerPageModule {}
