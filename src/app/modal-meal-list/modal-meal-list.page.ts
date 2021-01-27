import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { Meal } from '../model/Meal';
import { Image} from '../model/Image';
import { from } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-modal-meal-list',
  templateUrl: './modal-meal-list.page.html',
  styleUrls: ['./modal-meal-list.page.scss'],
})
export class ModalMealListPage implements OnInit {

  @Input('week')week:number
  @Input('weeklyMeals')weeklyMeals:Meal[]
  select:boolean = false
  token: string = sessionStorage.getItem("JWT")
  mealList:Meal[]=[]

  constructor(
    public modalCtrl:ModalController,
    private service:CantiniereAPIService,
    private renderer:Renderer2
    ){}
  
  ngOnInit() {
    this.showMealList()
    const modal = document.body.querySelector(".modal-wrapper")
    console.log(modal)
    this.renderer.setStyle(modal,"width","400px")
  }

  //affiche la liste des meals possible
  showMealList(){
    const source$ = this.service.getMapContent(this.token)
    from(source$)
    .pipe(
      mergeMap(from),
      filter((meal:Meal)=>meal.category!==5 && meal.category!==9)
    )
    .subscribe((meal:Meal)=>{
      this.mealList.push(meal)
    })
  }
  // tracker du for
  trackByFn(index:number, item:ElementRef){
    return index
  }
  //permet d'ajouter des meals: update en back et refresh en front
  showCheck(e,body:Meal,index:number){
    this.select = true
    e.target.checked=true
    let availableForWeeks = body.availableForWeeks.filter((week:number)=>week !== this.week)
    availableForWeeks.push(this.week)
    body.availableForWeeks = availableForWeeks
    this.service.updateMeal(this.token,body.id,body)
    .subscribe((meal:Meal)=>{
      let [id] = this.weeklyMeals.filter((meal:Meal)=>meal.id == body.id)
      // if(!id){
        this.service.getMealImg(body.id)
          .subscribe((resultImg:Image)=>{
          body.src=resultImg.image64
        })
        this.weeklyMeals.push(body)
        console.log(`le plat ${body.label} a bien été ajouté sur la semaine: ${this.week}`)
      // }else{
      //   console.log(`le plat ${body.label} est disponible pour la semaine ${this.week}!`)
      // }
    })
  }

  dismiss(){
    this.modalCtrl.dismiss()
  }
}
