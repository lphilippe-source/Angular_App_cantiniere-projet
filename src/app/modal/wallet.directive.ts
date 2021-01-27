import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Wallet]'
})
export class WalletDirective {

  @Input('Wallet')label:HTMLIonLabelElement

  constructor(
    private renderer:Renderer2,
    private el:ElementRef
  ) {
    console.log(this.label)
   }

}
