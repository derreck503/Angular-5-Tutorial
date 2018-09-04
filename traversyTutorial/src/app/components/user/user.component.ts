import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ng onnit');
    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Write Code', 'Listen to music', 'Watch movies'];
    this.hello = 'hello';
  }

  addHobby(hobby: string) {
    console.log('adding ', hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby: string) {
    console.log('deleting ', hobby);
    this.hobbies = this.hobbies.filter(hobbie => hobbie !== hobby);
    return false;
  }

  onClick() {
    console.log('clicked');
    this.name = 'Steve Jobs';
    this.hobbies.push('new hobby');
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}
