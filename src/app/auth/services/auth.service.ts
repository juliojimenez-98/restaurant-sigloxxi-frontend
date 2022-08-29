import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(rut: string, password: string) {
    const urlLogin = 'http://localhost:8080/api/login';

    const body = { rut, password };

    return this.http.post(urlLogin, body);
  }
}
