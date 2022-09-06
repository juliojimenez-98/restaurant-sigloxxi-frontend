import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rol } from '../interfaces/rol.interface';
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

  obtenerRolesUsuarios(): Observable<any> {
    const urlGetUsuarios = 'http://localhost:8080/api/usuarios/roles';
    return this.http
      .get(urlGetUsuarios)
      .pipe(map((res: any) => res.roles as Rol[]));
  }

  obtenerUsuarios(): Observable<any> {
    const urlGetUsuarios = 'http://localhost:8080/api/usuarios/usuarios';
    return this.http
      .get(urlGetUsuarios)
      .pipe(map((res: any) => res.usuarios as Usuario[]));
  }
}
