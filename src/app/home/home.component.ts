import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val = 0;
  constructor(private featureService: FeatureService) { }


  ngOnInit() {
    // const obs$ = new Observable((observer) => {
    //   observer.next('Hi');
    //   observer.error('Bye');
    //   observer.complete();
    //   observer.next('Hi');
    // });
    // obs$.subscribe(val => console.log(val));

    // of('Hiya').subscribe(val => console.log(val));
    // const observable = Observable.create((source) => {
    //   source.next(Math.random());
    // });

    // observable.subscribe(v => console.log('consumer A: ' + v));
    // observable.subscribe(v => console.log('consumer B: ' + v));

    // const subject = new Subject();

    // subject.subscribe(v => console.log('consumer A: ' + v));
    // subject.subscribe(v => console.log('consumer B: ' + v));

    // subject.next(Math.random());

    // subject.subscribe(subject);
  }

  emitValue() {
    this.featureService.setValue(++this.val);
  }
}
