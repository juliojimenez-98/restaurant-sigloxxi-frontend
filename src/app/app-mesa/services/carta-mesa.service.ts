import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Plato } from '../../dashboard/interfaces/plato.interface';
import { PedidoCliente } from '../interfaces/pedidoCliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartaMesaService {
  constructor(private http: HttpClient) {}

  obtenerPlatos(): Observable<any> {
    const urlGetPlatos = `${environment.apiUrl}platos/platos`;
    return this.http
      .get(urlGetPlatos)
      .pipe(map((res: any) => res.platos as Plato[]));
  }

  registroPedidoCliente(
    pedidoCliente: PedidoCliente
  ): Observable<PedidoCliente> {
    const urlPedidoCLienteRegistro = `${environment.apiUrl}pedidos-clientes/pedido_cliente`;

    return this.http.post<PedidoCliente>(
      urlPedidoCLienteRegistro,
      pedidoCliente
    );
  }

  obtenerPedidoMesa(id: number): Observable<any> {
    const urlObtenerPedido = `${environment.apiUrl}pedidos-clientes/${id}`;
    return this.http
      .get(urlObtenerPedido)
      .pipe(map((res: any) => res.findPedido as PedidoCliente));
  }

  obtenerPedidos(): Observable<any> {
    const urlObtenerPedido = `${environment.apiUrl}pedidos-clientes/pedidos/comanda`;
    return this.http
      .get(urlObtenerPedido)
      .pipe(map((res: any) => res.pedidos as PedidoCliente));
  }

  webPayPagar(monto:any): Observable<any> {
    const urlWebPay = `http://localhost:8080/api/webpay/pagar`;

    var headers={
      'Content-Type': 'application/json',
      "Tbk-Api-Key-Idt": "597055555532",
      "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
    }

    var body = {
      buy_order: 'ordenCompra12345678',
      session_id: 'sesion1234557545',
      amount: monto,
      return_url: `${environment.apiUrlFront}/app-mesa/pagado`,
    };
     return this.http.post(urlWebPay,body,{headers:headers})
     ;
  }
}
