import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'advanced'

  onSubmit(form: Form) {
    console.log(form.value.password);
  }
}
