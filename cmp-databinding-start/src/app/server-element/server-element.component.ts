import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit  } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  // @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('Contructor called');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

}
