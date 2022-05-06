import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthToken} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }
  // @ts-ignore
  login(username, password): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username: username,
      password: password
    })
  }
  register(username: string, firstName: string, lastName: string,
           password: string, email: string): Observable<AuthToken> {
    // @ts-ignore
    return this.http.post<AuthToken>(`${this.BASE_URL}/register/`, {
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    });
  }
}
