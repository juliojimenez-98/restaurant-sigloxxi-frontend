import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../interfaces/ingrediente.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  
  constructor(private http: HttpClient) {}

  registroIngrediente(ingredientes: Ingrediente): Observable<Ingrediente> {
    const urlRegistroIngredientes =
      'http://localhost:8080/api/ingredientes/ingrediente';

    return this.http.post<Ingrediente>(urlRegistroIngredientes, ingredientes);
  }

  obtenerIngrediente(): Observable<any> {
    const urlGetIngredientes =
      'http://localhost:8080/api/ingredientes/ingredientes';
    return this.http
      .get(urlGetIngredientes)
      .pipe(map((res: any) => res.ingrediente as Ingrediente[]));
  }

  actualizarIngrediente(ingrediente: Ingrediente, id: number): Observable<Ingrediente> {
    const urlActualizarIngrediente = `http://localhost:8080/api/ingredientes/ingrediente/${id}`;

    return this.http.put<Ingrediente>(urlActualizarIngrediente, ingrediente);
  }

  obtenerIngredientePorId(id: number): Observable<any> {
    const urlGetIngrediente = `http://localhost:8080/api/ingredientes/ingrediente/${id}`;
    return this.http.get<any>(urlGetIngrediente);
  }

  eliminarIngrediente(id: number): Observable<any> {
    const urlBorrarIngrediente = `http://localhost:8080/api/ingredientes/ingrediente/${id}`;
    return this.http.delete<any>(urlBorrarIngrediente);
  }
}
