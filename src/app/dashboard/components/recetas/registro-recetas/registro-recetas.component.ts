import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from 'src/app/dashboard/interfaces/ingrediente.interface';
import { IngredientesService } from 'src/app/dashboard/services/ingredientes.service';

@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.css'],
})
export class RegistroRecetasComponent implements OnInit {
  ingredientes: Ingrediente[] = [];
  formRegistroReceta: FormGroup = this.fb.group({
    ingredientes: [],
  });
  tipos: any[] = [
    { id: 1, nombre: 'Plato de Fondo' },
    { id: 2, nombre: 'Tragos' },
  ];
  showModal = false;
  constructor(
    private ingService: IngredientesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.obtenerIngredientes();
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  ingredientesArray() {
    console.log(this.formRegistroReceta.value);
  }

  obtenerIngredientes() {
    this.ingService.obtenerIngrediente().subscribe((res) => {
      console.log(res);
      this.ingredientes = res;
    });
  }
}
