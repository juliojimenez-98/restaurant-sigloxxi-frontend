import { Plato } from '../../dashboard/interfaces/plato.interface';

export interface PedidoCliente {
  id_orden?: number;
  tiempo_espera: number;
  cant: number;
  estado: number;
  platos: Array<Array<any>>;
  bebestibles: Array<Array<any>>;
  total?:number
  id_mesa: number;
}


export interface PedioClienteActualizar {
  id_orden?: number;
  platos: any;
  bebestibles: any;
}

