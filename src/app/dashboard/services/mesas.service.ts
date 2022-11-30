import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesa } from '../interfaces/mesa.interface';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  constructor(private http: HttpClient) {}

  registroMesa(mesa: Mesa): Observable<Mesa> {
    const urlRegistroMesas = `${environment.apiUrl}mesas/mesa`;

    return this.http.post<Mesa>(urlRegistroMesas, mesa);
  }

  obtenerMesas(): Observable<any> {
    const urlGetMesas = `${environment.apiUrl}mesas/mesas`;
    return this.http
      .get(urlGetMesas)
      .pipe(map((res: any) => res.mesas as Mesa[]));
  }
}
