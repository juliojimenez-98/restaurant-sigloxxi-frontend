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
  ingRecetas: any = [];
  ingsDentro: any[] = [[]];

  constructor(
    private servicio: RecetasService,
    private servicioIng: IngredientesService
  ) {}

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.servicio.obtenerRecetas().subscribe((res: any) => {
      this.recetas = res;
      res.map((e: any) => {
        this.ingRecetas = JSON.parse(e.ingredientes);
        // console.log(this.ingRecetas);
        for (const key in this.ingRecetas) {
          if (Object.prototype.hasOwnProperty.call(this.ingRecetas, key)) {
            const element = this.ingRecetas[key];
            console.log(element);
          }
        }
        this.servicioIng
          .obtenerIngredientePorId(this.ingRecetas[0])
          .subscribe((res: any) => {
            // console.log(res);
            this.ingsDentro.push(res);
            // console.log(this.ingsDentro);
          });
      });
    });
  }
}
