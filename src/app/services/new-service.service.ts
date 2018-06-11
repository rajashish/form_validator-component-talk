import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  public newSubject = new Subject<any>();

  constructor() { }

  addData(data){
    // data.image="default-crib";
  

    this.newSubject.next(data);
  }
}
