import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from 'src/app/dashboard/interfaces/ingrediente.interface';
import { IngredientesService } from 'src/app/dashboard/services/ingredientes.service';
import { RecetasService } from '../../../services/recetas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.css'],
})
export class RegistroRecetasComponent implements OnInit {
  ingredientes: Ingrediente[] = [];
  arrayIngredientes: any[] = [];
  formRegistroReceta: FormGroup = this.fb.group({
    id_receta: [],
    nombre_prep: ['', [Validators.required]],
    tiempo_prep: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    prep: ['', [Validators.required]],
    id_ing: [1, [Validators.required]],
    ingredientes: [],
  });
  tipos: any[] = [
    { id: 1, nombre: 'Plato de Fondo' },
    { id: 2, nombre: 'Tragos' },
    { id: 3, nombre: 'Entrada' },
    { id: 4, nombre: 'Ensalada' },
    { id: 5, nombre: 'Postre' },
  ];
  showModal = false;
  constructor(
    private service: RecetasService,
    private ingService: IngredientesService,
    private fb: FormBuilder,
    private router: Router
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
    if (event.target.checked) this.arrayIngredientes.push(id); //If checked, add to array

    if (!event.target.checked && this.arrayIngredientes.indexOf(id) !== -1) {
      var index = this.arrayIngredientes.indexOf(id);
      this.arrayIngredientes.splice(index, 1);
    }
    this.formRegistroReceta.value.ingredientes = this.arrayIngredientes;

    console.log(this.formRegistroReceta.value.ingredientes);
  }

  isChecked(id: any) {
    {
      return this.arrayIngredientes.indexOf(id) != -1 ? true : false;
    }
  }

  closeModal() {
    this.showModal = !this.showModal;
    this.arrayIngredientes = [];
  }

  registrarReceta() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Registrando Plato',
      showConfirmButton: false,
    });
    this.service.registroReceta(this.formRegistroReceta.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.msg) {
          Swal.close();
          this.router.navigateByUrl('/admin/proveedores/lista-proveedores');

          Swal.fire(
            'Receta registrada',
            `La receta fue registrada con exito`,
            'success'
          );
        }
      },
      (error) => {
        Swal.close();
        if (error.error.errors) {
          Swal.fire(
            'Error al registrar la receta',
            `${error.error.errors[0].msg} `,
            'error'
          );
        } else {
          Swal.fire(
            'Error al registrar la receta',
            `${error.error.msg} `,
            'error'
          );
        }
        console.log(error);
      }
    );
  }
}
