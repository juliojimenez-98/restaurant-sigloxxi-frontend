import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rol } from '../interfaces/rol.interface';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioRoles } from '../interfaces/usuarioRoles.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  registroUsuarios(user: Usuario): Observable<Usuario> {
    const urlRegistroUsuarios = 'http://localhost:8080/api/usuarios/usuario';

    return this.http.post<Usuario>(urlRegistroUsuarios, user);
  }

  actualizarRolesUsuarios(
    userRoles: UsuarioRoles,
    id: number
  ): Observable<UsuarioRoles> {
    const urlRegistroUsuarios = `http://localhost:8080/api/usuarios/usuario/${id}`;

    return this.http.put<UsuarioRoles>(urlRegistroUsuarios, userRoles);
  }

  actualizarUsuarios(usuario: Usuario, id: number): Observable<UsuarioRoles> {
    const urlRegistroUsuarios = `http://localhost:8080/api/usuarios/usuario/${id}`;

    return this.http.put<UsuarioRoles>(urlRegistroUsuarios, usuario);
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

  obtenerUsuariosPorId(id: number): Observable<any> {
    const urlGetUsuarios = `http://localhost:8080/api/usuarios/usuario/${id}`;
    return this.http.get<any>(urlGetUsuarios);
  }

  eliminarUsuario(id: number): Observable<any> {
    const urlGetUsuarios = `http://localhost:8080/api/usuarios/usuario/${id}`;
    return this.http.delete<any>(urlGetUsuarios);
  }
}
