import { Component, Input, OnInit } from '@angular/core';
import { CantiniereAPIService } from 'src/app/cantiniere-api.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() order: any;
  @Input() token: string;
  price: number;
  VAT: number;
  elements: any[] = [];
  constructor(private service:CantiniereAPIService) { }

  ngOnInit() {
    this.service.findAllConstraints().subscribe(res => {
      this.VAT = res[0].rateVAT;
      this.service.computePrice(this.token, this.order.order.id, res[0].id).subscribe((res2: any) => {
        this.price = res2.priceVAT.toFixed(2);
        this.order.order.quantity.forEach(element => {
          if (element.meal) {
            element.meal.price = (element.meal.priceDF * (1 + this.VAT * 0.01)).toFixed(2);
            this.elements.push(element.meal);
          }
          if (element.menu) {
            element.menu.price = (element.menu.priceDT * (1 + this.VAT * 0.01)).toFixed(2);
            this.elements.push(element.menu);
          }
        });
      });
    });
  }

}
