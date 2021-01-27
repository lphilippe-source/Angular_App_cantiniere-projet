import { Days } from "./Days";

  export class Cart {
    constructor(
      public dateAdd2Cart:string,
      public priceTotal:number,
      public userName:string,
      public daysList:Days[]){}
  } 