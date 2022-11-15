import { Plato } from '../../dashboard/interfaces/plato.interface';

export interface PedidoCliente {
  id_orden?: number;
  tiempo_espera: number;
  cant: number;
  estado: number;
  platos: Array<Array<Plato | number>>;
  id_mesa: number;
}
