import { PedidoIngrediente } from './PedidoIngredientes.interface';
export interface ReciboPedido {
  estado: number;
  cantidad: number;
  fecha_recibo: string;
  detalle: string;
  id_pedido: number;
  pedido_ing: PedidoIngrediente;
}
