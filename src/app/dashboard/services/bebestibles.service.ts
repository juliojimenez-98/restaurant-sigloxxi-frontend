import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bebestible } from '../interfaces/bebestible.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BebestiblesService {
  constructor(private http: HttpClient) {}

  registroBebestible(bebestibles: Bebestible): Observable<Bebestible> {
    const urlRegistroBebestibles = `${environment.apiUrl}bebestibles/bebestible`;

    return this.http.post<Bebestible>(urlRegistroBebestibles, bebestibles);
  }
  obtenerBebestible(): Observable<any> {
    const urlGetBebestibles = `${environment.apiUrl}bebestibles/bebestibles`;
    return this.http
      .get(urlGetBebestibles)
      .pipe(map((res: any) => res.bebestibles as Bebestible[]));
  }
  obtenerBebestiblePaginado(limite: number, desde: number): Observable<any> {
    const urlGetBebestibles = `${environment.apiUrl}bebestibles/bebestibles/${limite}/${desde}`;
    return this.http
      .get(urlGetBebestibles)
      .pipe(map((res: any) => res.Bebestible as Bebestible[]));
  }
  actualizarBebestible(
    bebestible: Bebestible,
    id: number
  ): Observable<Bebestible> {
    const urlActualizarBebestible = `${environment.apiUrl}bebestibles/bebestible/${id}`;

    return this.http.put<Bebestible>(urlActualizarBebestible, bebestible);
  }
  obtenerBebestiblePorId(id: any): Observable<any> {
    const urlGetBebestible = `${environment.apiUrl}bebestibles/bebestible/${id}`;
    return this.http.get<any>(urlGetBebestible);
  }

  eliminarBebestible(id: number): Observable<any> {
    const urlBorrarBebestible = `${environment.apiUrl}bebestibles/bebestible/${id}`;
    return this.http.delete<any>(urlBorrarBebestible);
  }

  getBebestiblesBuscar(nombre: string) {
    const urlGetBebestibles = `${environment.apiUrl}buscar/bebestibles/${nombre}`;
    return this.http
      .get(urlGetBebestibles)
      .pipe(map((res: any) => res.results as Bebestible[]));
  }

  uploadImage(id: any, image: File): Observable<any> {
    const formData = new FormData();

    formData.append('archivo', image);

    return this.http.put(`${environment.apiUrl}uploads/bebestibles/${id}`, formData);
  }
}
