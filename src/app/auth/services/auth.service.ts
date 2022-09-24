import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const urlLogin = 'http://localhost:8080/api/login';

    const body = { email, password };

    return this.http.post(urlLogin, body);
  }

  estaAutenticado(): boolean {
    if (localStorage.getItem('token') === null) {
      console.log('No Esta autenticado');
      return false;
    }
    return true;
  }
}
