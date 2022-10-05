import { Ingrediente } from './ingrediente.interface';

export interface Receta {
  id_receta?: number;
  nombre_prep: string;
  prep: string;
  tiempo_prep: number;
  id_ing?: number;
  ingredientes: Ingrediente[];
}
