import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { OrderIn } from '../model/Order';
import { User } from '../model/User';
import { MypopComponent } from './mypop/mypop.component';
import { ToastController } from '@ionic/angular';
import { ToastUtils } from '../utils/ToastUtils';
import { ConnexionService } from '../connexion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Ces variables vont être bindées dans le template afin d'afficher :
  // - d'une part un header différent selon que l'utilisateur est authentifié ou non
  // - les infos de cet utilisateur (nom/prénom/avatar)
  @Input() user: User;
  @Input() avatar: string = "assets/images/guest.png";
  @Input() isConnected: boolean;
  // Les trois variables ci-dessus doivent être lues par la page Home, je n'ai pas trouvé d'autres moyens pour que cette page réinitialise ce composant Header
  currentPopover;

  constructor(
    private popoverController: PopoverController,
    private service: CantiniereAPIService,
    private route: Router,
    private connexionService: ConnexionService
  ) { }

  ngOnInit() {
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
    let token: string = sessionStorage.getItem("JWT");
    if (token) {
      this.isConnected = true;
      // Le sessionStorage ne pouvant contenir que des string, les infos de l'user sont au format JSON stringifié, qu'il faut donc parser pour les récupérer
      this.user = JSON.parse(sessionStorage.getItem("User"));
  
      // Si un base64 est présent dans la DB, c'est que l'image a été uploadée et on prend sa valeur en priorité. Sinon, l'avatar sera celui par défaut présent en DB
      if (this.user.image.image64){
        this.avatar = this.user.image.image64;
      }
      else {
        this.avatar = this.service.BASE_URL + this.user.image.imagePath;
      }
    }
    else {
      this.isConnected = false;
    }
    //modification du 14/01/21 ajout de connexionService pour observer isConnected et bind pour menuSemaine
    console.log(`header connected: ${this.isConnected}`)
    this.connexionService.adminChange(this.isConnected)
  }

  async menuPopover(ev: any) {
    // Le PopOver permet d'ouvrir un menu sur le clique de l'icône burger sur portable
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'headerPopover',
      event: ev,
      translucent: true,
      componentProps: {
        // On doit passer ces deux valeurs pour que le PopOver les affiche
        "isConnected": this.isConnected,
        "user": this.user
      }
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  disconnect() {
    sessionStorage.removeItem("JWT");
    sessionStorage.removeItem("User");
    this.avatar = "assets/images/guest.png";
    this.isConnected = false;
    if (this.route.url === "/home") {
      location.reload();
    }
    else {
      this.route.navigate(["home"]);
    }
  }

}

