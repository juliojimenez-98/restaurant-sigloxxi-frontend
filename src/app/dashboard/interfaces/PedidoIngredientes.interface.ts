export interface PedidoIngrediente {
  id_pedido?: number;
  fecha_despacho: string;
  cantidad: number;
  precio: number;
  estado?: number;
  id_proveedor: number;
  id_ing: number;
}
