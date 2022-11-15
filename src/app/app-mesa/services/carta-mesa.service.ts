import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Plato } from '../../dashboard/interfaces/plato.interface';
import { PedidoCliente } from '../interfaces/pedidoCliente';

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

  registroPedidoCliente(
    pedidoCliente: PedidoCliente
  ): Observable<PedidoCliente> {
    const urlPedidoCLienteRegistro =
      'http://localhost:8080/api/pedidos-clientes/pedido_cliente';

    return this.http.post<PedidoCliente>(
      urlPedidoCLienteRegistro,
      pedidoCliente
    );
  }

  obtenerPedidoMesa(id: number): Observable<any> {
    const urlObtenerPedido = `http://localhost:8080/api/pedidos-clientes/${id}`;
    return this.http
      .get(urlObtenerPedido)
      .pipe(map((res: any) => res.findPedido as PedidoCliente));
  }

  obtenerPedidos(): Observable<any> {
    const urlObtenerPedido = `http://localhost:8080/api/pedidos-clientes/pedidos/comanda`;
    return this.http
      .get(urlObtenerPedido)
      .pipe(map((res: any) => res.pedidos as PedidoCliente));
  }
}
