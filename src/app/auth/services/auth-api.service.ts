import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  authUrl = `http://localhost:3000/auth`;

  constructor(
    private http: HttpClient,
  ) { }

  login(body) {
    return this.http.post(`${this.authUrl}/login`, body);
  }

  userInfo() {
    return this.http.get(`${this.authUrl}/infoById`);
  }
}
