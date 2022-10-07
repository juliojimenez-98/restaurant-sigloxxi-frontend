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
  arrayIngredientes: any[] = [];
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

  obtenerIngredientes() {
    this.ingService.obtenerIngrediente().subscribe((res) => {
      this.ingredientes = res;
    });
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  checkboxChanged(event: any, id: any) {
    console.log(event.target.checked);
    if (event.target.checked) this.arrayIngredientes.push(id); //If checked, add to array
    console.log(this.arrayIngredientes);

    if (!event.target.checked && this.arrayIngredientes.indexOf(id) !== -1) {
      var index = this.arrayIngredientes.indexOf(id);
      this.arrayIngredientes.splice(index, 1);
    }
  }
}
