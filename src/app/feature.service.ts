import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  valueObs: Observable<any>;
  valueSubject = new Subject<any>();
  constructor() {
    this.valueObs = this.valueSubject.asObservable();
  }

  setValue(n) {
    this.valueSubject.next(n);
  }
}
