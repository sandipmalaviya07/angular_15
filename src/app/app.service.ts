import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  private message = new BehaviorSubject<string>('Initial message!!!');
  getMessage = this.message.asObservable();
 
  constructor() {  }

  setMessage(message: string) {
    this.message.next(message)
  }

}
