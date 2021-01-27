import { Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-infos-user',
  templateUrl: './infos-user.page.html',
  styleUrls: ['./infos-user.page.scss'],
})
export class InfosUserPage {

  constructor(private service: CantiniereAPIService) {}

  user: User
  baseUrl = this.service.BASE_URL

  ngOnInit() {}

  ionViewWillEnter(){
    // recuperation de l'user stocké en storage, gère également le rafraichissment quand on revient après modifications de l'user
    this.user = JSON.parse(sessionStorage.getItem("User"))
  }

}