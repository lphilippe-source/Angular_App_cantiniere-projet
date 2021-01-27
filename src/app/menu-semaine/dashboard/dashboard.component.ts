import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import moment from 'moment-timezone';
import { ModalMealListPage } from 'src/app/modal-meal-list/modal-meal-list.page';
import { Meal } from 'src/app/model/Meal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit,OnChanges {

  @Input('isLunchLady')isLunchLady:boolean
  @Input('week')week:number
  @Output()WeekChange = new EventEmitter()
  @Output()DisplayDate = new EventEmitter()
  @Input('weeklyMeals')weeklyMeals:Meal[]
  date:string
  dateOfDay:string
  timelapse:string
  constructor(public modalCtrl:ModalController) {
   }
  
  ngOnChanges(changes: SimpleChanges){
  }
  
  ngOnInit() {
    moment.locale('fr')
    this.setTime()
    
  }

  setTime(){
    this.dateOfDay = moment.tz("Europe/Paris").format(' dddd DD MMMM YYYY')
    this.date = moment.tz("Europe/Paris").week(this.week).day('lundi').format(' DD MMMM YYYY')
    this.timelapse = moment.tz("Europe/Paris").hour(10.5).fromNow()
    this.DisplayDate.emit([this.dateOfDay, this.week])
  }

  nextWeek(e:number){
    this.week=e
    this.WeekChange.emit(e)
    console.log(this.week)
    // this.DisplayDate.emit([this.dateOfDay, this.week])
  }

   //on envoie les props dans la modal
   async showMealList(){
    const modal = await this.modalCtrl.create({
      component: ModalMealListPage,
      componentProps: {
        'weeklyMeals':this.weeklyMeals,
        'week': this.week,
      }
    })
    return await modal.present()
  }
}
