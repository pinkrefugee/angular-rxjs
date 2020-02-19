import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { fromEvent, interval } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.featureService.valueSubject.subscribe(val => {
      console.log(val);
    });


    const clicks$ = fromEvent(document, 'click');
    const innerObservable$ = interval(1000);

    // clicks$.pipe(switchMap(event => innerObservable$))
    //   .subscribe(val => console.log(val));

    clicks$.pipe(mergeMap(event => innerObservable$))
      .subscribe(val => console.log(val));
  }

}
