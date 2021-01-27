import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GestionCagnottePage } from '../gestion-cagnotte/gestion-cagnotte.page';
import { Router, RouterLink } from '@angular/router';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.page.html',
  styleUrls: ['./gestion-user.page.scss'],
})
export class GestionUSerPage implements OnInit,AfterViewInit {
  user:User
  token:string
  Users:User
  isLunchLady:boolean
  constructor(
    private modalCtrl:ModalController,
    private service:CantiniereAPIService
  ) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showUserList()
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

  showUserList(){
    this.service.findAllUser(this.token).subscribe((user:User)=>{
      console.log(user)
      this.Users=user
    })
  }

    searchUser(searchBar:any){ 
    let i
    let input:string = searchBar.value
    input=input.toLowerCase(); 
    let x:any = document.getElementsByClassName('contents'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="ion-row";                  
        } 
    } 
  } 

  refresh(): void {
    window.location.reload();
}

}
