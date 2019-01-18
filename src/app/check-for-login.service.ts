import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckForLoginService {
  check: boolean;
  constructor() {
   }
   checkLog() {
    if (localStorage.getItem('currentUser')) {
     return this.check = true;
    } else if (!localStorage.getItem('currentUser')) {
    return  this.check = false;
    }
   }
  }
