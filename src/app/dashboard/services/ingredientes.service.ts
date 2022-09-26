import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../interfaces/ingrediente.interface';
import { Observable } from 'rxjs';

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
}
