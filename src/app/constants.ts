import { Meal } from "./model/Meal"

export const DAYS:[string,string,string,string,string] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
export const LOW_SCREEN= '(max-width:767px)'
export const HIGH_SCREEN = '(min-width:768px)'
export const INIT_MEAL:Meal={
    id:null,
    src:null,
    label: "menu",
    status: null,
    imageId: null,
    priceDF: null,
    availableForWeeks:[],
    ingredients:[]
  }