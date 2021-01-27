import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Meal } from '../model/Meal';
import { from } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit, AfterViewInit {
user:User
isLunchLady:boolean
token:string
drink:Meal[]=[]
dessert:Meal[]=[]
weeklyMeals:Meal[]=[]

  constructor(private apiService: CantiniereAPIService,
    ) { }

  ngOnInit() {
    if(sessionStorage.getItem("User")){
    this.user = JSON.parse(sessionStorage.getItem("User"))
      this.isLunchLady = this.user.isLunchLady
      this.token = sessionStorage.getItem("JWT");
    }
  }
  ngAfterViewInit(){
    this.editMap(this.token)
    this.showMeal(this.showActualWeek())
  }

  showActualWeek():number{
    if (moment().isoWeek()===53)return 1
    return moment().isoWeek()
  }
  
  showMeal(week:number){
    const source$ = this.apiService.getMeal(week)
    from(source$)
    .pipe(
      mergeMap(from),
      filter((meal:Meal)=>meal.category!==5 && meal.category!==9))
    .subscribe((result:Meal)=>{
      this.weeklyMeals.push(result)
    })
  }

  editMap(token:string){
  const source$ = this.apiService.getMapContent(token)
    from(source$)
      .pipe(
        mergeMap(from),
        filter((meal:Meal)=>meal.category==5 || meal.category==9),
      )
      .subscribe((meal:Meal)=>{
        meal.category==5?this.dessert.push(meal):this.drink.push(meal)
    })
  }
}
