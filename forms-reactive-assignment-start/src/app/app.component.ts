import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['test', 'bananas'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)], this.asyncForbiddenNames),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.invalidProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if ( this.forbiddenUsernames.indexOf(control.value) !== -1 ) {
      return {'nameIsForbidden': true};
    } 
    return null;
  }

  asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'nameIsForbidden': true});
        }else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
