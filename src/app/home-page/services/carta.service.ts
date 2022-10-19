import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  constructor(private http: HttpClient) {}

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = 'http://localhost:8080/api/platos/platos';
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }
}
