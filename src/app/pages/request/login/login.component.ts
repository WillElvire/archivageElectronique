import { Component, OnInit } from '@angular/core';
import { ApiCaller } from 'src/app/services/api';
import { CredentialService } from 'src/app/services/credential';
import { User } from './../register/register.component';
import { AuthStateService } from './../../../services/credential/state';
export interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  Credential:Login = null;


  constructor(private api: ApiCaller, private credentials: CredentialService ,private authStateService:AuthStateService) {

    this.Credential = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  Login() {

    this.api.login(this.Credential).subscribe(

      (user:User) => {

        const payload = { user: { ...user },};

        this.credentials.setCredentials(payload);

        this.authStateService.setUser(payload.user);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
