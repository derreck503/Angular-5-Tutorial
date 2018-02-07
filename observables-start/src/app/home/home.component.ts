import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/rx';
import 'rxjs/rx';
import { Observer } from 'rxjs/Observer';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: Number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create( 
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package'); 
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000)
        setTimeout(() => {
          observer.complete();
        }, 5000)
        setTimeout(() => {
          observer.next('third package');
        }, 6000)
    });
    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )

  }

}
