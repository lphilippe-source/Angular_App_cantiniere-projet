import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCommandesPageRoutingModule } from './gestion-commandes-routing.module';

import { GestionCommandesPage } from './gestion-commandes.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCommandesPageRoutingModule,
    SharedModulesModule
  ],
  declarations: [GestionCommandesPage]
})
export class GestionCommandesPageModule {}
