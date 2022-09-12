import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mesa } from '../interfaces/mesa.interface';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  constructor(private http: HttpClient) {}

  registroMesa(mesa: Mesa): Observable<Mesa> {
    const urlRegistroMesas = 'http://localhost:8080/api/mesas/mesa';

    return this.http.post<Mesa>(urlRegistroMesas, mesa);
  }

  obtenerMesas(): Observable<any> {
    const urlGetMesas = 'http://localhost:8080/api/mesas/mesas';
    return this.http
      .get(urlGetMesas)
      .pipe(map((res: any) => res.mesas as Mesa[]));
  }
}
