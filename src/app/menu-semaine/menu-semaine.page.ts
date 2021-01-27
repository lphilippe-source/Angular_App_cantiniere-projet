import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CantiniereAPIService } from '../cantiniere-api.service';
import moment from 'moment';
import { User } from '../model/User';
import { Image} from '../model/Image';
import { from } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { Meal } from '../model/Meal';
import { ConnexionService } from '../connexion.service';
import { MediaService } from '../media.service';
import { HIGH_SCREEN, INIT_MEAL, LOW_SCREEN } from '../constants';

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.page.html',
  styleUrls: ['./menu-semaine.page.scss'],
})
export class MenuSemainePage implements OnInit,AfterViewInit,OnDestroy {

week:number
isConnected:boolean
isLunchLady:boolean
user:User
token: string = sessionStorage.getItem("JWT")
weeklyMeals:Meal[] = Array()
imageMenu:string
imageMeal:string
colSize:string
subscription:any
day:string
disableSegment:boolean = false

  constructor(
    public modalCtrl:ModalController,
    public breakpointObserver:BreakpointObserver,
    private apiService:CantiniereAPIService,
    private renderer:Renderer2,
    private connexionService:ConnexionService,
    private media:MediaService
     ) { 
  }

  ngOnInit() {
    this.switchScreen()
    this.subscription = this.connexionService.isConnected$.subscribe((value:boolean)=>{
      this.isConnected = value
      this.isUserConnected()
      // console.log(`isConnected service: ${value}, isLunchLady: ${this.isLunchLady}`)
    })
  }

  ngAfterViewInit(){
    this.showMeal(this.showActualWeek())
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
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

  //tracker du ngFor
  trackByFn(index:number, item:ElementRef){
    return index
  }

  showActualWeek():number{
    if (moment().isoWeek()===53)return 1
    return moment().isoWeek()
  }

  //permet de supprimer un meal visible en front et update sa non-visibilité sur cette semaine en back
  deleteItem(item:ElementRef,index:number,id:number){
    
    let meal2Remove:Meal = this.weeklyMeals[index]
    let [...arr]:number[] = meal2Remove.availableForWeeks
    meal2Remove.availableForWeeks = arr.filter((weekNumber:number)=>weekNumber !== this.week)
    this.apiService.updateMeal(this.token,meal2Remove.id,meal2Remove)
    .subscribe((meal:Meal)=>{
      this.weeklyMeals[index]=meal2Remove
      const parent:ElementRef = this.renderer.parentNode(item)
      this.renderer.setStyle(parent,"display","none")
      console.log(`le meal ${meal.label} à bien été supprimé de la semaine: ${this.week}`)
    })
  }

  //media query pour les elements du tableau qui ne sont pas le dashboard (ngStyle)
  switchScreen(){
    this.media.switchScreen().subscribe((size :BreakpointState)=>{
        Object.entries(size.breakpoints).map(([key,val])=>{
        if(key===LOW_SCREEN && val===true){
          this.colSize = "320px"
        }
        if(key===HIGH_SCREEN && val===true){
          this.colSize = "250px"
        }
      })
    })
  }

  //on init le tableau de meal, la première valeur contient le dashboard
  showMeal(week:number){
    this.week = week
    if(this.weeklyMeals.length!==0) this.weeklyMeals.length=1
    else this.weeklyMeals[0]=INIT_MEAL
    const source$ = this.apiService.getMeal(week)
    from(source$)
    .pipe(
      mergeMap(from),
      filter((meal:Meal)=>meal.category!==5 && meal.category!==9)
    )
    .subscribe((meal:Meal)=>{
      this.apiService.getMealImg(meal.id)
      .subscribe((resultImg:Image)=>{
        meal.src=resultImg.image64
      })
      this.weeklyMeals.push(meal)        
    })
  }
  //recupère la date et check si on est en dehors de la semaine actuel(cantiniere) 
  getDate(dateEvent:any[]){
    let [date,fakeWeek] = dateEvent
    this.day = date
    fakeWeek!==this.showActualWeek()?this.disableSegment = true:this.disableSegment = false
  }

  //on envoie les props dans la modal
  async showModal(meal:ElementRef){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'meal': meal,
        'day':this.day,
        'disableSegmentLady':this.disableSegment
      }
    })
    return await modal.present()
  }
}
