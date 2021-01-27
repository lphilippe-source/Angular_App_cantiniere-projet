import { AfterViewInit, Component, Input,Renderer2, ViewChild } from '@angular/core'
import { ModalController, ToastController } from '@ionic/angular'
import { CantiniereAPIService } from '../cantiniere-api.service'
import { DAYS } from '../constants'
import { Meal } from '../model/Meal'
import { User } from '../model/User'
import { Cart } from '../model/Cart'
import { MealPrice } from '../model/MealPrice'
import { Days } from '../model/Days'

import { registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements AfterViewInit{
  @ViewChild('qty')qty:any
  @ViewChild('price')price:any
  @ViewChild('seg')seg:any
  @Input()meal:Meal
  @Input()day:string
  @Input()disableSegmentLady:boolean
  currentTab:string
  semaine: string | null
  total:number
  DAYS = DAYS
  disCart: boolean = true
  image:any
  user:User = JSON.parse(sessionStorage.getItem("User"))

  constructor(
    public modalCtrl: ModalController,
    public apiService:CantiniereAPIService,
    private renderer:Renderer2
    ){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.parseDay()
      this.changeTab(null)      
    })
    setTimeout(() => {
      this.img()
    }, 500);
  }
  
//parse la chaine et désactive les segments des jours passés
  parseDay():void{
    let nextEl = this.seg.el
    DAYS.some((day)=>{
      if(this.day.indexOf(day)!==-1){
        this.semaine = day
        return day
      }
      this.renderer.setProperty(nextEl,"disabled","true")
      nextEl = this.renderer.nextSibling(nextEl)
    })
  }

  
  img (){
    this.image =  this.meal.src
  }  

  dismiss(){
    this.modalCtrl.dismiss()
  }

//a l'init ou au changement de segment
  changeTab(e):void{
    if(e==null){
      this.currentTab = this.semaine
    }else{
      this.currentTab = e.detail.value
    }
    this.initCart()
  }

  disableCart(){
    return this.disCart || this.disableSegmentLady ? true:false
  }

  //evite l'ajout de 0 meal dans le panier
  verifyTrashButton(){
    // if(this.total!==0 && this.total!==null)
    this.qty.value=0
    this.addToCart()
  }

  //disable bouton command
  disableCommand(){
    setTimeout(() => {
      this.disCart = true
    }, 500)
  }

  //fonction qui init quantité en fonction du segment
  initCart():void{
    this.disableCommand()
    if(sessionStorage.getItem("Cart")){
      const cart:Cart =  JSON.parse(sessionStorage.getItem("Cart"))
      this.total = cart.priceTotal
      let bool:boolean = cart.daysList.some((days:Days)=>{
  //on parcours dayList et on check le jour s'il correspond au segment
        if(days.day == this.currentTab){
  //on parcours les meals
          let bool:boolean = days.meal.some((meal:MealPrice)=>{
            if(meal.name.indexOf(this.meal.label)!==-1){
              this.qty.el.value= meal.quantity
              return meal
            }
          })
          if(!bool) return bool
          return days.day
        }
      })
      if(!bool) this.qty.el.value=0
    }else{
      this.qty.el.value=0
    }
  }

  //retourne le prix total du panier
  totalPriceCart(cart:Cart):number{
    let totalPrice:number = 0
    cart.daysList.forEach((day:Days) => {
      day.meal.forEach((meal:MealPrice) => {
        totalPrice += parseInt(meal.quantity,10)*meal.unitPrice
      })
    })
    return totalPrice
  }

  numberIncrement(){
    if (this.disableSegmentLady) return
    let num = parseInt(this.qty.el.value,10)
    if(num<15){
      num++
      this.qty.el.value = num
      this.disCart = false
    }
  }

  numberDecrement(){
    if (this.disableSegmentLady) return
    if(this.qty.el.value>0) {
      this.qty.el.value-=1
      this.disCart = false
    }
  }

  removeCart(){
    sessionStorage.removeItem('Cart')
    this.total = null
  }

  //ajoute le panier au local storage
  //si cart avec meal existe on update la quantité
  addToCart():void {

    this.disableCommand()
    
    const daysList:Days[]=[]
    let days:Days = {
      day:this.currentTab,
      meal:[]
    }

    //check si un panier existe deja
    let existingCart:Cart | null
    if(sessionStorage.getItem("Cart")){
      existingCart = JSON.parse(sessionStorage.getItem("Cart"))
    }

    //fonction qui push le plat dans meal[]
    let pushMeal = () => {
      const meal: MealPrice = {id: this.meal.id, name: this.meal.label, quantity: this.qty.el.value, unitPrice: this.meal.priceDF}
      if (parseInt(meal.quantity,10)==0) return
      days.meal.push(meal)
    }   

    //fonction qui recup les vieilles données du jour en question
    
    let pushArrMeals = (oldData:Days | null) => {
      let verifieOldData = ()=>{
        if(oldData){
          let count:number = 0
          oldData.meal.forEach((meal:MealPrice) => {
            if(meal.name!==this.meal.label){
              days.meal.push(meal)
              count++
            }
          })
          return(count==0 && this.qty.el.value==0)?false:true
        }else{
          return(this.qty.el.value==0)?false:true
        }
      }
      if(!verifieOldData())return
      else pushMeal()
    }
    //fonction qui push days dans dayList[]
    //si qty.value==0
      //soit existingcart sans le jour en question (jour doit etre supp)
      //soit existingcart avec le jour (meal doit etre supp, jour s'il y a pas d'autre meal)
      //soit pas d'existingcart (return)
    let pushDays = ()=>{
      let oldData:Days | null
      if(existingCart){
        let checkCart = ():boolean=>{
          let checkMeal:boolean = false
          existingCart.daysList.forEach((day:Days)=>{
            if(day.day !== this.currentTab){
              daysList.push(day)
            }else{
              //oldData data du panier du jour de la tab
              oldData = day
              //on regarde si d'autre meal sont present au meme day
              checkMeal = day.meal.some((meal:MealPrice)=>{
                meal.name !== this.meal.label
              })
            }
          })
          return checkMeal
        }
        let res:boolean = checkCart()
        //s'il y a d'autre meal et qty 0 on push (plus tard pour meal qty 0)
        let data:MealPrice[]|null
        if(this.qty.el.value==0){
          //on doit supprimer le meal qui correspond au this.meal.label
          if(!oldData)return false
          data = oldData.meal.filter((meal:MealPrice) => {
            if(meal.name == this.meal.label){
              return false
            }
            return meal
          })
          if(!data[0] && !res){
            for(let i:number; i<daysList.length; i++){
              if(daysList[i].day==this.currentTab){
                delete daysList[i]
                return
              }
            }
            return
          }
          oldData.meal = data
          pushArrMeals(oldData)
        }else {
          pushArrMeals(oldData)
        }
  
      }else{
        if(this.qty.el.value==0){
          days=null
          return
        }else{
        pushArrMeals(null)
        }
      }
      if(days)daysList.push(days)
    }
    pushDays()
    
    let name:string
    this.user ? name = `${this.user.firstname} ${this.user.name}`: name = "anonymous"
    
    let cart = new Cart(this.day, 0, name, daysList)

    cart.priceTotal = this.totalPriceCart(cart)
    this.total = cart.priceTotal
    if(isNaN(this.total) || this.total == 0){
      this.removeCart()
      return console.log(`le panier a été réinitialisé!`)
    } 
    console.log(cart)
    sessionStorage.setItem("Cart", JSON.stringify(cart))
  }
}
