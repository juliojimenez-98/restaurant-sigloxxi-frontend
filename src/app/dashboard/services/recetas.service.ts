import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  constructor(private http: HttpClient) {}

  obtenerRecetas(): Observable<any> {
    const urlGetRecetas = 'http://localhost:8080/api/recetas/recetas';
    return this.http
      .get(urlGetRecetas)
      .pipe(map((res: any) => res.recetas as any[]));
  }

  obtenerRecetaPorId(id: number): Observable<any> {
    const urlGetReceta = `http://localhost:8080/api/recetas/receta/${id}`;
    return this.http.get<any>(urlGetReceta);
  }

  registroReceta(receta: Receta): Observable<Receta> {
    const urlRegistroReceta = 'http://localhost:8080/api/recetas/receta';

    return this.http.post<Receta>(urlRegistroReceta, receta);
  }
  getRecetasBuscar(nombre_prep: string) {
    const urlGetRecetas = `http://localhost:8080/api/buscar/recetas/${nombre_prep}`;
    return this.http
      .get(urlGetRecetas)
      .pipe(map((res: any) => res.results as Receta[]));
  }
}
