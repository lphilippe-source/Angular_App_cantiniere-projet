import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private isConnectedSource = new BehaviorSubject<boolean>(false)
  isConnected$=this.isConnectedSource.asObservable()

  constructor() {}

  adminChange(value:boolean){
    this.isConnectedSource.next(value)
  }
}
