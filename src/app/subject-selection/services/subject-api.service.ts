import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService {
  authUrl = `http://localhost:3000/subjects`;

  constructor(
    private http: HttpClient,
  ) { }

  getSubject() {
    return this.http.get(`${this.authUrl}/bySpecialty`);
  }
}
