import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const urlLogin = `${environment.apiUrl}login`;

    const body = { email, password };

    return this.http.post(urlLogin, body);
  }

  estaAutenticado(): boolean {
    if (
      localStorage.getItem('token') === null ||
      !localStorage.getItem('token')
    ) {
      console.log('No Esta autenticado');
      return false;
    }
    return true;
  }

  cambiarPassword(password: string, id: number): Observable<any> {
    const urlRegistroUsuarios = `${environment.apiUrl}usuarios/changepass/${id}`;

    return this.http.put<any>(urlRegistroUsuarios, password);
  }
}
