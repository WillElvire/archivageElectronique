import { Component, OnInit } from '@angular/core';

import { ApiCaller } from 'src/app/services/api';
export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Credential: User = {
    lastname: null,
    firstname: null,
    email: null,
    password: null,
  };

  error: boolean = false;

  constructor(private api: ApiCaller) {}

  ngOnInit(): void {}

  Login() {
    if (this.Credential.email == null) {
      this.error = true;

      setTimeout(() => {
        this.error = false;
      }, 1500);
      return;
    }

    this.api.post(this.Credential, 'path to your register').subscribe(
      (user) => {
        console.log(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
