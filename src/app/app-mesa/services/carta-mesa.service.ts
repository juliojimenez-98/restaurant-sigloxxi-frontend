import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Plato } from '../../dashboard/interfaces/plato.interface';

@Injectable({
  providedIn: 'root',
})
export class CartaMesaService {
  constructor(private http: HttpClient) {}

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = 'http://localhost:8080/api/platos/platos';
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }
}
