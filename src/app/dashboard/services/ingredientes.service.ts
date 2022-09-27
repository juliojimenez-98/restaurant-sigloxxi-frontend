import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../interfaces/ingrediente.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  eliminarIngrediente(id: any) {
    throw new Error('Method not implemented.');
  }
  obtenerIngredientesPorId: any;
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
}
