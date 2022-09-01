import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  registroUsuarios() {
    const urlRegistroUsuarios = 'http://localhost:8080/api/usuarios/usuario';

    return this.http.post(urlRegistroUsuarios, {});
  }
}
