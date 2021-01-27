import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { Cart } from '../model/Cart';
import { Days } from '../model/Days';
import { MealPrice } from '../model/MealPrice';
import { OrderIn } from '../model/Order';
import { Quantity } from '../model/Quantity';
import { User } from '../model/User';
import { ToastUtils } from '../utils/ToastUtils';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor(private controller: NavController, private toastController: ToastController, private service: CantiniereAPIService) {}

  cart: Cart
  meals: MealPrice[]
  days: Days[]
  user: User
  isEnoughMoney: boolean = true
  token: string

  ngOnInit() {}

  ionViewWillEnter(){

    this.cart = JSON.parse(sessionStorage.getItem("Cart"))
    this.user = JSON.parse(sessionStorage.getItem("User"))
    this.token = sessionStorage.getItem("JWT")

    // boolean qui activera le bouton valider si il y a suffisement d'argent
    //this.isEnoughMoney = this.user.wallet >= this.cart.priceTotal

      if(this.cart != null){
        this.days = this.cart.daysList
        this.meals = this.cart.daysList[0].meal
      }

  }

  onCleanCart(){
    // suppression du panier en session et retour sur la page d'accueil 
    sessionStorage.removeItem("Cart")
    this.controller.navigateBack('home')
  }

  onValidate(){
    // user connecté
    if(sessionStorage.getItem("JWT")){

      let quantity:Quantity[] = []

      // recuperation de tout les repas ajoutés au panier peu importe le jour
      this.days.forEach(day => {
        day.meal.forEach(meal => {
          quantity.push({quantity: Number(meal.quantity), mealId: meal.id})
        })
      })

      // constraintId: 1 pour après 10h30, 9 pour tout le temps
      let order: OrderIn = {userId : this.user.id, constraintId: 9, quantity}
      
      this.service.addOrder(this.token, order).subscribe(response => {
        ToastUtils.presentToast("La commande a été validée avec succès", "success", this.toastController)

        // suppression du panier en session et retour sur la page d'accueil 
        sessionStorage.removeItem("Cart")
        this.controller.navigateBack('home')
      }, error => {
        ToastUtils.presentToast("Une erreur s'est produite", "danger", this.toastController)
      })

    } else this.controller.navigateBack('authentification/panier')
  }

}