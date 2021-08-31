import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Login } from './../../pages/request/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ApiCaller {

  server: string = '';

  constructor(private http: HttpClient) {}

  header(): any {

    return new HttpHeaders({

      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    });

  }

  login(credential): Observable<Object> {
    const payload: Login = credential;
    const connector = this.http.post(`${this.server}`, JSON.stringify(payload));
    return connector;
  }

  post(body, url: any) {
    const requestInformation = this.http.post(
      `${this.server}/${url}`,
      JSON.stringify(body)
    );

    return requestInformation;
  }

  get(url) {
    const requestInformation = this.http.get(`${this.server}/${url}`);

    return requestInformation;
  }
}
