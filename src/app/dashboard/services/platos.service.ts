import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';
import { Plato } from '../interfaces/plato.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  constructor(private http: HttpClient) {}

  registroPlatos(plato: Plato): Observable<Plato> {
    const urlRegistroPlatos = `${environment.apiUrl}platos/plato`;

    return this.http.post<Plato>(urlRegistroPlatos, plato);
  }

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = `${environment.apiUrl}platos/platos`;
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }

  actualizarPlato(plato: Plato, id: number): Observable<Plato> {
    const urlActualizarPlato = `${environment.apiUrl}platos/plato/${id}`;

    return this.http.put<Plato>(urlActualizarPlato, plato);
  }

  obtenerPlatoPorId(id: any): Observable<any> {
    const urlGetPlato = `${environment.apiUrl}platos/plato/${id}`;
    return this.http.get<any>(urlGetPlato);
  }

  eliminarPlato(id: number): Observable<any> {
    const urlBorrarPlato = `${environment.apiUrl}platos/plato/${id}`;
    return this.http.delete<any>(urlBorrarPlato);
  }

  uploadImage(id: any, image: File): Observable<any> {
    const formData = new FormData();

    formData.append('archivo', image);

    return this.http.put(`${environment.apiUrl}uploads/plato/${id}`, formData);
  }

  getPlatosBuscar(nombre_prep: string) {
    const urlGetPlatos = `${environment.apiUrl}buscar/platos/${nombre_prep}`;
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.results as Plato[]));
  }
}
