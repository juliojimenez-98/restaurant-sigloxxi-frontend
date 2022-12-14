import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private http: HttpClient) {}

  registroProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const urlRegistroProveedor = `${environment.apiUrl}proveedores/proveedor`;

    return this.http.post<Proveedor>(urlRegistroProveedor, proveedor);
  }

  obtenerProveedores(): Observable<any> {
    const urlGetProveedores = `${environment.apiUrl}proveedores/proveedores`;
    return this.http
      .get(urlGetProveedores)
      .pipe(map((res: any) => res.proveedores as Proveedor[]));
  }

  obtenerProveedorPorId(id: any): Observable<any> {
    const urlGetProveedor = `${environment.apiUrl}proveedores/proveedor/${id}`;
    return this.http.get<any>(urlGetProveedor);
  }

  actualizarProveedor(proveedor: Proveedor, id: number): Observable<Proveedor> {
    const urlActualizarProveedor = `${environment.apiUrl}proveedores/proveedor/${id}`;

    return this.http.put<Proveedor>(urlActualizarProveedor, proveedor);
  }

  eliminarProveedor(id: number): Observable<any> {
    const urlBorrarProveedor = `${environment.apiUrl}proveedores/proveedor/${id}`;
    return this.http.delete<any>(urlBorrarProveedor);
  }

  getProveedoresBuscar(nombre: string) {
    const urlGetProveedores = `${environment.apiUrl}buscar/proveedores/${nombre}`;
    return this.http
      .get(urlGetProveedores)
      .pipe(map((res: any) => res.result as Proveedor[]));
  }
}
