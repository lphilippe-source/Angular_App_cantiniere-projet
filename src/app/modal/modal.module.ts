import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
import { StrCutPipe } from './str-cut.pipe';
import { WalletDirective } from './wallet.directive';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalPageRoutingModule,
    FormsModule,
  ],
  declarations: [ModalPage, StrCutPipe, WalletDirective],
  providers:[
  ]
})
export class ModalPageModule {}
