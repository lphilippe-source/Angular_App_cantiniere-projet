import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMealListPageRoutingModule } from './modal-meal-list-routing.module';

import { ModalMealListPage } from './modal-meal-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMealListPageRoutingModule
  ],
  declarations: [ModalMealListPage]
})
export class ModalMealListPageModule {}
