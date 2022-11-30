import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interfece';
import { Observable, map } from 'rxjs';
import { Reserva } from '../interfaces/reserva.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservarService {
  constructor(private http: HttpClient) {}

  registroCliente(cliente: Cliente): Observable<Cliente> {
    const urlRegistroCliente = `${environment.apiUrl}clientes/cliente`;

    return this.http.post<Cliente>(urlRegistroCliente, cliente);
  }

  registroReserva(reserva: Reserva): Observable<Reserva> {
    const urlRegistroReserva = `${environment.apiUrl}reserva/reserva`;

    return this.http.post<Reserva>(urlRegistroReserva, reserva);
  }

  obtenerClienteParaReserva(email: any): Observable<any> {
    const urlGetClienteReserva = `${environment.apiUrl}clientes/cliente/${email}`;
    return this.http.get<any>(urlGetClienteReserva);
  }

  getReservasPorEmail(email: string) {
    const urlGetReserva = `${environment.apiUrl}reserva/reserva/${email}`;
    return this.http
      .get(urlGetReserva)
      .pipe(map((res: any) => res.reservas as Reserva[]));
  }

  cancelarReserva(id: number, estado: number) {
    return this.http.put<any>(`${environment.apiUrl}reserva/cancelar/${id}`, {
      estado,
    });
  }

  confirmarReserva(id: number, estado: number) {
    return this.http.put<any>(`${environment.apiUrl}reserva/confirmar/${id}`, {
      estado,
    });
  }
}
