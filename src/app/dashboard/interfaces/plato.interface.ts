import { Receta } from './receta.interface';
export interface Plato {
  id_plato?: number;
  desc: number;
  precio: number;
  img?: string;
  estado: number;
  id_receta: number;
  receta: Receta;
  recetum?: any;
}
