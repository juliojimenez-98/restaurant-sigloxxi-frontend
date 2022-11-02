import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bebestible } from '../interfaces/bebestible.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebestiblesService {
  constructor(private http: HttpClient) {}

  registroBebestible(bebestibles: Bebestible): Observable<Bebestible> {
    const urlRegistroBebestibles =
      'http://localhost:8080/api/bebestibles/bebestible';

    return this.http.post<Bebestible>(urlRegistroBebestibles, bebestibles);
  }
  obtenerBebestible(): Observable<any> {
    const urlGetBebestibles =
      'http://localhost:8080/api/bebestibles/bebestibles';
    return this.http
      .get(urlGetBebestibles)
      .pipe(map((res: any) => res.bebestibles as Bebestible[]));
  }
  obtenerBebestiblePaginado(limite: number, desde: number): Observable<any> {
    const urlGetBebestibles = `http://localhost:8080/api/bebestibles/bebestibles/${limite}/${desde}`;
    return this.http
      .get(urlGetBebestibles)
      .pipe(map((res: any) => res.Bebestible as Bebestible[]));
  }
  actualizarBebestible(
    bebestible: Bebestible,
    id: number
  ): Observable<Bebestible> {
    const urlActualizarBebestible = `http://localhost:8080/api/bebestibles/bebestible/${id}`;

    return this.http.put<Bebestible>(urlActualizarBebestible, bebestible);
  }
  obtenerBebestiblePorId(id: any): Observable<any> {
    const urlGetBebestible = `http://localhost:8080/api/bebestibles/bebestible/${id}`;
    return this.http.get<any>(urlGetBebestible);
  }

  eliminarBebestible(id: number): Observable<any> {
    const urlBorrarBebestible = `http://localhost:8080/api/bebestibles/bebestible/${id}`;
    return this.http.delete<any>(urlBorrarBebestible);
  }

}
