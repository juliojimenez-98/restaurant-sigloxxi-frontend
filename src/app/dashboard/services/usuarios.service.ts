import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from '../interfaces/rol.interface';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioRoles } from '../interfaces/usuarioRoles.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  registroUsuarios(user: Usuario): Observable<Usuario> {
    const urlRegistroUsuarios = `${environment.apiUrl}usuarios/usuario`;

    return this.http.post<Usuario>(urlRegistroUsuarios, user);
  }

  actualizarRolesUsuarios(
    userRoles: UsuarioRoles,
    id: number
  ): Observable<UsuarioRoles> {
    const urlRegistroUsuarios = `${environment.apiUrl}usuarios/usuario/${id}`;

    return this.http.put<UsuarioRoles>(urlRegistroUsuarios, userRoles);
  }

  actualizarUsuarios(usuario: Usuario, id: number): Observable<UsuarioRoles> {
    const urlRegistroUsuarios = `${environment.apiUrl}usuarios/usuario/${id}`;

    return this.http.put<UsuarioRoles>(urlRegistroUsuarios, usuario);
  }

  obtenerRolesUsuarios(): Observable<any> {
    const urlGetUsuarios = `${environment.apiUrl}usuarios/roles`;
    return this.http
      .get(urlGetUsuarios)
      .pipe(map((res: any) => res.roles as Rol[]));
  }

  obtenerUsuarios(): Observable<any> {
    const urlGetUsuarios = `${environment.apiUrl}usuarios/usuarios`;
    return this.http
      .get(urlGetUsuarios)
      .pipe(map((res: any) => res.usuarios as Usuario[]));
  }

  obtenerUsuariosPorId(id: number): Observable<any> {
    const urlGetUsuarios = `${environment.apiUrl}usuarios/usuario/${id}`;
    return this.http.get<any>(urlGetUsuarios);
  }

  eliminarUsuario(id: number): Observable<any> {
    const urlGetUsuarios = `${environment.apiUrl}usuarios/usuario/${id}`;
    return this.http.delete<any>(urlGetUsuarios);
  }

  getUsuariosBuscar(nombre: string) {
    const urlGetUsuarios = `${environment.apiUrl}buscar/usuarios/${nombre}`;
    return this.http
      .get(urlGetUsuarios)
      .pipe(map((res: any) => res.results as Usuario[]));
  }
}
