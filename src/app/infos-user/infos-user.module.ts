import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosUserPageRoutingModule } from './infos-user-routing.module';

import { InfosUserPage } from './infos-user.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosUserPageRoutingModule,
    SharedModulesModule
  ],
  declarations: [InfosUserPage]
})
export class InfosUserPageModule {}
