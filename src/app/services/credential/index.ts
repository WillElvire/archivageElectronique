import { Injectable } from '@angular/core';
import { storage } from './../storage/index';
import { User } from './../../pages/request/register/register.component';



export interface Credentials {

  user: User;

}


@Injectable({
  providedIn: 'root',
})
export class CredentialService {

  private _credentials: Credentials | null = null;

  constructor(private storage: storage) {

      const [token, user]  : any  = this.storage.GetItems(['user'])

      this._credentials = {user: user?.value }
  }

  /**
   * Checks is the user is authenticated.
   *
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
      return !!this._credentials;
  }

  /**
   * Gets the user credentials.
   *
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
      return this._credentials;
  }


  /**
   * Gets the user access token
   *
   * @param credentials string
   */
  public getUser() {
      return this.isAuthenticated() ? this._credentials.user : null;
  }

  /**
   * Sets the user credentials.
   *
   * @param credentials The user credentials.
   */
  setCredentials(credentials?: Credentials) {

      this._credentials = credentials;

      if (credentials) {
          this.storage.StoreArray([{key:'user',value: JSON.stringify(credentials.user)}]);
      } else {
          this.storage.StoreArray([{key:'user',value: JSON.stringify(credentials.user)}]);
      }
  }

}
