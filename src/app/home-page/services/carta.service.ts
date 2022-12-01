import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Plato } from 'src/app/dashboard/interfaces/plato.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  constructor(private http: HttpClient) {}

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = `${environment.apiUrl}platos/platos`;
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }
}
