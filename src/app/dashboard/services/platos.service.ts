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

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = 'http://localhost:8080/api/platos/platos';
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }
}
