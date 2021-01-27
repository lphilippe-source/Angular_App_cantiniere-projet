import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderOut } from '../model/Order';

@Component({
  selector: 'app-modal-gestion-commandes',
  templateUrl: './modal-gestion-commandes.page.html',
  styleUrls: ['./modal-gestion-commandes.page.scss'],
})
export class ModalGestionCommandesPage implements OnInit {

  @Input('order')order:OrderOut

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {
  }


  dismiss(){
    this.modal.dismiss()
  }
}
