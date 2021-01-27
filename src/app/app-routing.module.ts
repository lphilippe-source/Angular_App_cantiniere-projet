import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gestion-user',
    loadChildren: () => import('./gestion-user/gestion-user.module').then( m => m.GestionUSerPageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'gestion-cagnotte/:id',
    loadChildren: () => import('./gestion-cagnotte/gestion-cagnotte.module').then( m => m.GestionCagnottePageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'menu-semaine',
    loadChildren: () => import('./menu-semaine/menu-semaine.module').then( m => m.MenuSemainePageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule),
    // canActivate:[AuthentificationGuard]
  },
  {
    path: 'gestion-commandes',
    loadChildren: () => import('./gestion-commandes/gestion-commandes.module').then( m => m.GestionCommandesPageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'modal',
    // Cette route devrait être supprimée? ne me désactive pas Dave... j'ai peur Dave
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'reinitialisation-mdp',
    loadChildren: () => import('./reinitialisation-mdp/reinitialisation-mdp.module').then( m => m.ReinitialisationMdpPageModule)
  },
  {
    path: 'infos-user',
    loadChildren: () => import('./infos-user/infos-user.module').then( m => m.InfosUserPageModule),
    canActivate:[AuthentificationGuard]
  },
  {
    path: 'edit-user/:id',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule),
    canActivate:[AuthentificationGuard]
  },
  {
    path: 'authentification/:originPage',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'user-commandes',
    loadChildren: () => import('./user-commandes/user-commandes.module').then( m => m.UserCommandesPageModule)
  }, 

  // Attention à bien toujours laisser ce wildcard à la fin, tout routing après sera annulé par celui-ci!
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal-meal-list',
    loadChildren: () => import('./modal-meal-list/modal-meal-list.module').then( m => m.ModalMealListPageModule)
  },
  {
    path: 'modal-gestion-commandes',
    loadChildren: () => import('./modal-gestion-commandes/modal-gestion-commandes.module').then( m => m.ModalGestionCommandesPageModule)
  }
  // Ne plus rien mettre ici
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }