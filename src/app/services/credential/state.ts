import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { storage } from './../storage/index';
import { User } from './../../pages/request/register/register.component';
import { StateService } from './store';
import { CredentialService } from '.';


interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthStateService extends StateService<AuthState> {

  user$: Observable<User> = this.select(state => state.user);

  token$: Observable<string> = this.select(state => state.token);


  constructor( private storage: storage, private credentials: CredentialService) {
    super(initialState);
  }

  setUser(user: User) {
    this.setState({ user })
  }

  setToken(token: string) {
    this.setState({ token })
  }

  removeUser(user: User) {
    this.setState({ user: null });
  }
}
