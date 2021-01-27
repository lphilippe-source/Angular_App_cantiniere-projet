import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Image } from './model/Image';
import { OrderIn } from './model/Order';
import { Meal } from './model/Meal';

const BASE_URL = "http://212.227.203.194:8080/lunchtime/"

@Injectable({
  providedIn: 'root'
})
export class CantiniereAPIService {

  public BASE_URL = BASE_URL

  constructor(private http: HttpClient) { }

  forgotPassword(email: string) {
    return this.http.post(BASE_URL + "forgotpassword?email=" + email, { observe: "response" })
  }

  findUser(id: number, token: string) {

    let options = {
      headers: { "Authorization": token }
    }

    return this.http.get(BASE_URL + "user/find/" + id, options)
  }

  findAllUser(token: string) {
    let options = {
      headers: { "Authorization": token }
    }

    return this.http.get(BASE_URL + "user/findall", options);
  }

  findImg(id: number, token: string) {
    let options = {
      headers: { "Authorization": token }
    }

    return this.http.get(BASE_URL + "user/findimg/" + id, options);
  }
  getMapContent(token:string){
    let options = {
      headers: {"Authorization": token}
    }
    return this.http.get(BASE_URL + "meal/findall",options)
  }
  getMenu(){
    return this.http.get(BASE_URL + "menu/findallavailablefortoday")
  }
  getMeal(week: number) {
    return this.http.get(BASE_URL + "meal/findallavailableforweek/" + week)
  }
  getMenuImg(id: number) {
    return this.http.get(BASE_URL + "menu/findimg/" + id)
  }
  getMealImg(id: number) {
    return this.http.get(BASE_URL + "meal/findimg/" + id)
  }
  updateMenuImage(id:number, body){
    return this.http.patch(BASE_URL + "menu/updateimg/"+ id, body)
  }
  updateMeal(token:string,id:number,body:Meal){
    let options={
      headers: {"Authorization": token}
    }
    return this.http.patch(BASE_URL + "meal/update/" + id, body, options)
  }
  
  updateUser(user: any, token: string) {
    let options = {
      headers: { "Authorization": token }
    }

    return this.http.patch(BASE_URL + "user/update/" + user.id, user, { headers: options.headers, observe: "response" })
  }

  updateUserImg(userId: number, imageBase64: string, token: string) {
    let options = {
      headers: { "Authorization": token }
    }

    let image: Image = { imagePath: "img/0default.png", image64: imageBase64 }

    return this.http.patch(BASE_URL + "user/updateimg/" + userId, image, { headers: options.headers })
  }

  register(user: User) {
    return this.http.put(BASE_URL + "user/register", user);
  }

  authentification(emailP: string, passwordP: string) {
    let credentials = {
      email: emailP,
      password: passwordP
    };
    return this.http.post(BASE_URL + "login", credentials, { observe: "response" });
  }

  addOrder(token: string, order: OrderIn) {
    let options = {
      headers: { "Authorization": token }
    };

    return this.http.put(BASE_URL + "order/add", order, options);
  }

  findAllOrdersForOneUser(token: string, id: number) {
    let options = {
      headers: { "Authorization": token }
    };

    return this.http.get(BASE_URL + "order/findallforuser/" + id, options);
  }

  findAllOrders(token: string) {
    let options = {
      headers: { "Authorization": token }
    };

    return this.http.get(BASE_URL + "order/findall/", options);
  }

  findAllConstraints() {
    return this.http.get(BASE_URL + "constraint/findall");
  }

  computePrice(token: string, id: number, constraintId: number) {
    let options = {
      headers: { "Authorization": token }
    };
    return this.http.get(BASE_URL + `order/computeprice/${id}/${constraintId}`, options);
  }


}