import { Meal } from "./Meal";
import { Menu } from "./Menu";

export interface Quantity {
    id?: number,
    quantity: number,
    meal?: Meal,
    mealId?:number,
    menu?: Menu,
    menuId?:number
}