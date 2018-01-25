import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisabled = true;
  logs = [];

  toggle(){
    this.isDisabled = !this.isDisabled;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());

  }

}
