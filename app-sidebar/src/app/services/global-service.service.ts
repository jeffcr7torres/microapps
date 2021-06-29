import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
itemValue=new BehaviorSubject(this.theItem);
  constructor() { }
  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    sessionStorage.setItem('theItem', value);
  }
 
  get theItem() {
    return sessionStorage.getItem('theItem');
  }

}
