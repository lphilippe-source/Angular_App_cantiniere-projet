import { Meal } from "./Meal";

export interface Menu{
    id: number
    description?: string
    label: string
    status: number
    imageId: number
    priceDF: number
    availableForWeeks:number[]
    meals:Meal[]
  }