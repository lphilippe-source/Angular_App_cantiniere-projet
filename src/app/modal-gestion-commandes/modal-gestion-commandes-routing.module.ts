import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGestionCommandesPage } from './modal-gestion-commandes.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGestionCommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGestionCommandesPageRoutingModule {}
