import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private http: HttpClient) {}

  registroProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const urlRegistroProveedor =
      'http://localhost:8080/api/proveedores/proveedor';

    return this.http.post<Proveedor>(urlRegistroProveedor, proveedor);
  }

  obtenerProveedores(): Observable<any> {
    const urlGetProveedores =
      'http://localhost:8080/api/proveedores/proveedores';
    return this.http
      .get(urlGetProveedores)
      .pipe(map((res: any) => res.proveedores as Proveedor[]));
  }

  obtenerProveedorPorId(id: any): Observable<any> {
    const urlGetProveedor = `http://localhost:8080/api/proveedores/proveedor/${id}`;
    return this.http.get<any>(urlGetProveedor);
  }

  actualizarProveedor(proveedor: Proveedor, id: number): Observable<Proveedor> {
    const urlActualizarProveedor = `http://localhost:8080/api/proveedores/proveedor/${id}`;

    return this.http.put<Proveedor>(urlActualizarProveedor, proveedor);
  }

  eliminarProveedor(id: number): Observable<any> {
    const urlBorrarProveedor = `http://localhost:8080/api/proveedores/proveedor/${id}`;
    return this.http.delete<any>(urlBorrarProveedor);
  }

  getProveedoresBuscar(nombre: string) {
    const urlGetProveedores = `http://localhost:8080/api/buscar/proveedores/${nombre}`;
    return this.http
      .get(urlGetProveedores)
      .pipe(map((res: any) => res.result as Proveedor[]));
  }
}
