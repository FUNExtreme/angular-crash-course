import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  constructor() { }

  getValueAfter2Seconds(): string {
    return 'externalValue';
  }
}
