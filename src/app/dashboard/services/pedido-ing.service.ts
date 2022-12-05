import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoIngrediente } from '../interfaces/PedidoIngredientes.interface';
import { Observable, map } from 'rxjs';
import { ReciboPedido } from '../interfaces/reciboPedido.iterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PedidoIngService {
  constructor(private http: HttpClient) {}

  registroPedidoIng(
    pedidoingredientes: PedidoIngrediente
  ): Observable<PedidoIngrediente> {
    const urlRegistroPedidoIng = `${environment.apiUrl}pedido-ingredientes/pedido-ingrediente`;

    return this.http.post<PedidoIngrediente>(
      urlRegistroPedidoIng,
      pedidoingredientes
    );
  }

  registroReciboPedido(reciboPedido: ReciboPedido): Observable<ReciboPedido> {
    const urlReciboPedido = `${environment.apiUrl}recibos-pedidos/recibo-pedido`;

    return this.http.post<ReciboPedido>(urlReciboPedido, reciboPedido);
  }
  obtenerPedidoIng(): Observable<any> {
    const urlGetPedidoIng = `${environment.apiUrl}pedido-ingredientes/pedidos-ingredientes`;
    return this.http
      .get(urlGetPedidoIng)
      .pipe(map((res: any) => res.pedidosIngredientes as PedidoIngrediente[]));
  }

  obtenerRecibo(): Observable<any> {
    const urlGetRecibo = `${environment.apiUrl}recibos-pedidos/recibo-pedidos`;
    return this.http
      .get(urlGetRecibo)
      .pipe(map((res: any) => res.recibo_pedidos as ReciboPedido[]));
  }

  obtenerPedidoIngPorId(id: any): Observable<any> {
    const urlGetPedidoIng = `${environment.apiUrl}pedido-ingredientes/${id}`;
    return this.http.get<any>(urlGetPedidoIng);
  }
}
