import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service';
import { Receta } from '../../../interfaces/receta.interface';
import { IngredientesService } from '../../../services/ingredientes.service';

@Component({
  selector: 'app-lista-receta',
  templateUrl: './lista-receta.component.html',
  styleUrls: ['./lista-receta.component.css'],
})
export class ListaRecetaComponent implements OnInit {
  recetas: Receta[] = [];
item: any;

  constructor(private servicio: RecetasService) {}

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.servicio.obtenerRecetas().subscribe((res: any) => {
      this.recetas = res;

      console.log(res);
      
    });
  }

}
