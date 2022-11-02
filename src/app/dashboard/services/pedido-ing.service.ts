import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoIngrediente } from '../interfaces/PedidoIngredientes.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoIngService {
  constructor(private http: HttpClient) {}

  registroPedidoIng(
    pedidoingredientes: PedidoIngrediente
  ): Observable<PedidoIngrediente> {
    const urlRegistroPedidoIng =
      'http://localhost:8080/api/pedido-ingredientes/pedido-ingrediente';

    return this.http.post<PedidoIngrediente>(
      urlRegistroPedidoIng,
      pedidoingredientes
    );
  }
  obtenerPedidoIng(): Observable<any> {
    const urlGetPedidoIng =
      'http://localhost:8080/api/pedido-ingredientes/pedidos-ingredientes';
    return this.http
      .get(urlGetPedidoIng)
      .pipe(map((res: any) => res.pedidosIngredientes as PedidoIngrediente[]));
  }

  // obtenerPedidoIngPorId(id: any): Observable<any> {
  //   const urlGetPedidoIng = `http://localhost:8080/api/pedidos-ingredientes/pedido-ingrediente${id}`;
  //   return this.http.get<any>(urlGetPedidoIng);
  // }
}
