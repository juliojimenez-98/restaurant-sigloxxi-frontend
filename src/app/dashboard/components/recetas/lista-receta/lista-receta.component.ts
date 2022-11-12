import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service';
import { Receta } from '../../../interfaces/receta.interface';
import { IngredientesService } from '../../../services/ingredientes.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-receta',
  templateUrl: './lista-receta.component.html',
  styleUrls: ['./lista-receta.component.css'],
})
export class ListaRecetaComponent implements OnInit {
  recetas: Receta[] = [];
  formRecetas: FormGroup = this.fb.group({
    nombre_prep: ['', [Validators.required]],
  });
  item: any;

  constructor(private servicio: RecetasService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.servicio.obtenerRecetas().subscribe((res: any) => {
      this.recetas = res;

      console.log(res);
    });
  }

  obtenerRecetasBuscar() {
    console.log(this.formRecetas.value.nombre_prep);
    this.servicio
      .getRecetasBuscar(this.formRecetas.value.nombre_prep)
      .subscribe((res) => {
        console.log(res);
        this.recetas = res;
      });
  }
}
