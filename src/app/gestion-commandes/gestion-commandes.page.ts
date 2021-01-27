import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ModalGestionCommandesPage } from '../modal-gestion-commandes/modal-gestion-commandes.page';
import { OrderOut } from '../model/Order';
import { User } from '../model/User';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.page.html',
  styleUrls: ['./gestion-commandes.page.scss'],
})

export class GestionCommandesPage implements OnInit,AfterViewInit {
  user:User
  token:string
  orders: OrderOut
  isLunchLady:boolean
  constructor(
    private modalCtrl:ModalController,
    private service:CantiniereAPIService
  ) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showOrderList()
      // console.log(this.orders)
    })
  }

  ngOnInit() {
    this.isUserConnected()
  }

  isUserConnected(){
    if(sessionStorage.getItem("User")){
      this.user = JSON.parse(sessionStorage.getItem("User"))
      this.isLunchLady = this.user.isLunchLady
      this.token = sessionStorage.getItem("JWT")
    }
    else{
      this.isLunchLady = false
    }
  }

  trackByFn(index:number, item:ElementRef){
    return index
  }

  showOrderList(){
    this.service.findAllOrders(this.token).subscribe((order:OrderOut)=>{
      console.log(order)
      this.orders=order
    })
  }
  async showModal(order:OrderOut){
    const modal = await this.modalCtrl.create({
      component:ModalGestionCommandesPage,
      componentProps:{
        'order':order
      }
    })
    return await modal.present()
  }
}
