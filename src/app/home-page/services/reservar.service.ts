import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interfece';
import { Observable } from 'rxjs';
import { Reserva } from '../interfaces/reserva.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservarService {
  constructor(private http: HttpClient) {}

  registroCliente(cliente: Cliente): Observable<Cliente> {
    const urlRegistroCliente = 'http://localhost:8080/api/clientes/cliente';

    return this.http.post<Cliente>(urlRegistroCliente, cliente);
  }
  registroReserva(reserva: Reserva): Observable<Reserva> {
    const urlRegistroReserva = 'http://localhost:8080/api/reservas/reserva';

    return this.http.post<Reserva>(urlRegistroReserva, reserva);
  }
}
