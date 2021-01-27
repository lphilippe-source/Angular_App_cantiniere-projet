import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let role = JSON.parse(sessionStorage.getItem("User"));
    // Si l'utilisateur n'est pas connecté ou n'a pas le rôle de cantinière, on le renvoie vers l'accueil
    if (role) {
      if (role.isLunchLady) {
        return true;
      }
      else {
        return this.router.createUrlTree(['/home']);
      }
    }
    else {
      return this.router.createUrlTree(['/home']);
    }
  }
}
