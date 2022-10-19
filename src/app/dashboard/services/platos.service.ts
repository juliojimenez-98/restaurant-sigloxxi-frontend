import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';
import { Plato } from '../interfaces/plato.interface';

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  constructor(private http: HttpClient) {}

  registroPlatos(plato: Plato): Observable<Plato> {
    const urlRegistroPlatos = 'http://localhost:8080/api/platos/plato';

    return this.http.post<Plato>(urlRegistroPlatos, plato);
  }

  obtenerPlatos(tipo: any): Observable<any> {
    const urlGetPlatos = `http://localhost:8080/api/platos/platos/${tipo}`;
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }

  actualizarPlato(plato: Plato, id: number): Observable<Plato> {
    const urlActualizarPlato = `http://localhost:8080/api/platos/plato/${id}`;

    return this.http.put<Plato>(urlActualizarPlato, plato);
  }

  obtenerPlatoPorId(id: any): Observable<any> {
    const urlGetPlato = `http://localhost:8080/api/platos/plato/${id}`;
    return this.http.get<any>(urlGetPlato);
  }

  eliminarPlato(id: number): Observable<any> {
    const urlBorrarPlato = `http://localhost:8080/api/platos/plato/${id}`;
    return this.http.delete<any>(urlBorrarPlato);
  }

  uploadImage(id: any, image: File): Observable<any> {
    const formData = new FormData();

    formData.append('archivo', image);

    return this.http.put(
      `http://localhost:8080/api/uploads/plato/${id}`,
      formData
    );
  }
}
