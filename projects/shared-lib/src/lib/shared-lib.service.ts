import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() { }

  private sharedDataSubject = new BehaviorSubject<string>('');
  sharedData$ = this.sharedDataSubject.asObservable();

  setData(data: string) {
    this.sharedDataSubject.next(data);
  }
}
