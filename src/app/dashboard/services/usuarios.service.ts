import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  registroUsuarios(user: Usuario): Observable<Usuario> {
    const urlRegistroUsuarios = 'http://localhost:8080/api/usuarios/usuario';

    return this.http.post<Usuario>(urlRegistroUsuarios, user);
  }
}
