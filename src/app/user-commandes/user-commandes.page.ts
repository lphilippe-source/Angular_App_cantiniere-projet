import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { OrderOut } from '../model/Order';
import { User } from '../model/User';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-user-commandes',
  templateUrl: './user-commandes.page.html',
  styleUrls: ['./user-commandes.page.scss'],
})
export class UserCommandesPage implements OnInit {

  user: User;
  orders: OrderOut[] = [];
  completedOrders: {
    order: OrderOut,
    date: any,
    time: string,
    statut: string
  }[] = [];
  loaded: boolean = false;
  token:string;

  constructor(
    private service: CantiniereAPIService,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("User"));
    this.token = sessionStorage.getItem("JWT");

    this.service.findAllOrdersForOneUser(this.token, this.user.id).subscribe((res: OrderOut[]) => {
      this.orders = res;
      for (let i = 0, c = this.orders.length; i < c; i++) {
        if (this.orders[i].quantity) {
          if (this.orders[i].quantity.length > 0) {
            let tempOrder = {
              order: null,
              time: null,
              date: "",
              statut: ""
            };
            tempOrder.order = this.orders[i];
            let formattedDate = new Date(this.orders[i].creationDate).toLocaleDateString();
            tempOrder.date = formattedDate;
            tempOrder.time = this.orders[i].creationTime;
            let statut: string;
            switch (this.orders[i].status) {
              case 0:
                statut = "Créée";
                break;
              case 1:
                statut = "Distribuée";
                break;
              case 2:
                statut = "Annulée"
                break;
            }
            tempOrder.statut = statut;
            this.completedOrders.push(tempOrder);
          }
        }
      }
      this.loaded = true;
    });
  }

  async detail(order) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass:'popover-commandes-class',
      componentProps: {
        'order': order,
        "token": this.token
      }
    })
    return await popover.present()
  }

}
