export interface PedidoIngrediente {
  id_pedido?: number;
  fecha_despacho: string;
  cantidad: number;
  precio: number;
  id_proveedor: number;
  id_ing: number;
}
