import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../interfaces/ingrediente.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngredientesService {
  constructor(private http: HttpClient) {}

  registroIngrediente(ingredientes: Ingrediente): Observable<Ingrediente> {
    const urlRegistroIngredientes = `${environment.apiUrl}ingredientes/ingrediente`;

    return this.http.post<Ingrediente>(urlRegistroIngredientes, ingredientes);
  }

  obtenerIngrediente(): Observable<any> {
    const urlGetIngredientes = `${environment.apiUrl}ingredientes/ingredientes`;
    return this.http
      .get(urlGetIngredientes)
      .pipe(map((res: any) => res.ingrediente as Ingrediente[]));
  }

  obtenerIngredientePaginado(limite: number, desde: number): Observable<any> {
    const urlGetIngredientes = `${environment.apiUrl}ingredientes/ingredientes/${limite}/${desde}`;
    return this.http
      .get(urlGetIngredientes)
      .pipe(map((res: any) => res.ingrediente as Ingrediente[]));
  }

  actualizarIngrediente(
    ingrediente: Ingrediente,
    id: number
  ): Observable<Ingrediente> {
    const urlActualizarIngrediente = `${environment.apiUrl}ingredientes/ingrediente/${id}`;

    return this.http.put<Ingrediente>(urlActualizarIngrediente, ingrediente);
  }

  obtenerIngredientePorId(id: any): Observable<any> {
    const urlGetIngrediente = `${environment.apiUrl}ingredientes/ingrediente/${id}`;
    return this.http.get<any>(urlGetIngrediente);
  }

  eliminarIngrediente(id: number): Observable<any> {
    const urlBorrarIngrediente = `${environment.apiUrl}ingredientes/ingrediente/${id}`;
    return this.http.delete<any>(urlBorrarIngrediente);
  }

  getIngredientesBuscar(nombre: string) {
    const urlGetIngredientes = `${environment.apiUrl}buscar/ingredientes/${nombre}`;
    return this.http
      .get(urlGetIngredientes)
      .pipe(map((res: any) => res.results as Ingrediente[]));
  }
}
