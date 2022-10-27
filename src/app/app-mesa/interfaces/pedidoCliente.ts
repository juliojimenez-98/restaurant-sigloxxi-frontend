import { Plato } from '../../dashboard/interfaces/plato.interface';

export interface PedidoCliente {
  id_orden?: number;
  tiempo_espera: number;
  cant: number;
  estado: number;
  platos: Plato[];
  id_mesa: number;
}
