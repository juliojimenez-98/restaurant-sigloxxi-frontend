import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor(private http: HttpClient) { }
}

  //  registroPlatos(receta: Receta): Observable<Receta> {
  //    const urlRegistroPlatos = 'http://localhost:8080/api/platos/plato';

  //    return this.http.post<Receta>(urlRegistroPlatos, receta);
  //  }