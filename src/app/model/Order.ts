import { Quantity } from "./Quantity";
import { User } from "./User";

export interface OrderOut {
    id:number,
    creationDate:string,
    creationTime:{
        hour:number,
        minute:number,
        second:number,
        nano:number
    },
    status:number,
    user:User,
    // Je ne comprends pas pourquoi cet élément est optionnel mais je suis la base de donénes
    quantity?:Quantity[]
}

export interface OrderIn {
    userId:number,
    constraintId:number,
    quantity:Quantity[]
}