import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isDisabled = true;

  onUpdate(event: any){
    if(!event.target.value.null){
      this.isDisabled = false;
    }
  }

  resetField(){
    this.username = '';
  }
}
