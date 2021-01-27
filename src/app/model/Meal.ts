import { Ingredient } from "./Ingredient";

export interface Meal {
    id: number
    description?:string
    src?:string
    label: string
    status: number
    imageId: number
    priceDF: number
    availableForWeeks: number[]
    ingredients:Ingredient[]
    isAvailable?:boolean
    category?:number
  }