import { Component } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Ces variables vont être utilisées par le header et vont être passées dans les cas où le onInit ne se déclenche pas
  isConnected: boolean = false;
  avatar: string;
  isLunchLady : boolean = false;
  user:User;

  constructor(private service:CantiniereAPIService) { }

  ionViewWillEnter() {
    
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
    let token = sessionStorage.getItem("JWT");
    if (token) {
      this.isConnected = true;
      // Le sessionStorage ne pouvant contenir que des string, les infos de l'user sont au format JSON stringifié, qu'il faut donc parser pour les récupérer
      this.user = JSON.parse(sessionStorage.getItem("User"));
      this.isLunchLady = this.user.isLunchLady;
      // L'avatar est soit directement présent dans la DB, soit en string par 64bits
      this.avatar = this.service.BASE_URL;
      let image = (this.user.image.imagePath) ? this.user.image.imagePath : this.user.image.image64;
      this.avatar += image;
    }
    else {
      this.isConnected = false;
      this.avatar = "assets/images/guest.png";
    }
  }
}







