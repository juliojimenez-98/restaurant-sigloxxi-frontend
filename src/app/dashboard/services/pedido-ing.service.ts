import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoIngrediente } from '../interfaces/PedidoIngredientes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoIngService {
  constructor(private http: HttpClient) {}

  registroPedidoIng(
    pedidoingrediente: PedidoIngrediente
  ): Observable<PedidoIngrediente> {
    const urlRegistroPedidoIng = 'http://localhost:8080/api/';

    return this.http.post<PedidoIngrediente>(
      urlRegistroPedidoIng,
      pedidoingrediente
    );
  }
  obtenerPedidoIngPorId(id: any): Observable<any> {
    const urlGetPedidoIng = `http://localhost:8080/api/${id}`;
    return this.http.get<any>(urlGetPedidoIng);
  }
}
