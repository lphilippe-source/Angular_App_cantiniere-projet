import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuSemainePageRoutingModule } from './menu-semaine-routing.module';
import { MenuSemainePage } from './menu-semaine.page';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { LayoutModule} from '@angular/cdk/layout';
import { DashboardDirective } from './dashboard.directive'
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeekCountComponent } from './week-count/week-count.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemainePageRoutingModule,
    LayoutModule,
    SharedModulesModule
    ],
  declarations: [MenuSemainePage, DashboardDirective,DashboardComponent,WeekCountComponent],
  providers:[]
})
export class MenuSemainePageModule {}
