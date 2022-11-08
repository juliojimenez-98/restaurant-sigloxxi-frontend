import { Cliente } from './cliente.interfece';
export interface Reserva {
  fecha_reserva: string;
  hora_reserva: string;
  id_cliente: number;
  estado: number;
  cant_personas: number;
  cliente?: Cliente;
}
