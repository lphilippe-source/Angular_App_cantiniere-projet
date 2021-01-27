import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMealListPage } from './modal-meal-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMealListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMealListPageRoutingModule {}
