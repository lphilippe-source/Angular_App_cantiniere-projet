import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGestionCommandesPageRoutingModule } from './modal-gestion-commandes-routing.module';

import { ModalGestionCommandesPage } from './modal-gestion-commandes.page';
import { ObjItPipe } from './obj-it.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGestionCommandesPageRoutingModule
    ],
  declarations: [ModalGestionCommandesPage,ObjItPipe],
  providers:[]
})
export class ModalGestionCommandesPageModule {}
