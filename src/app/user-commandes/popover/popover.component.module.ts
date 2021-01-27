import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { PopoverComponent } from "./popover.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      BrowserModule
    ],
    declarations: [PopoverComponent]
  })
  export class PopoverComponentModule {}