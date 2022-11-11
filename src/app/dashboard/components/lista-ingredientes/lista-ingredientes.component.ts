import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente.interface';
import { IngredientesService } from '../../services/ingredientes.service';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-ingredientes',
  templateUrl: './lista-ingredientes.component.html',
  styleUrls: ['./lista-ingredientes.component.css'],
})
export class ListaIngredientesComponent implements OnInit {
  ingredientes: Ingrediente[] = [];
  formIngredientes: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });
  limite: number = 0;
  desde: number = 10;
  btnActivo: boolean = false;

  constructor(private servicio: IngredientesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerIngredientesPaginado();
  }

  obtenerIngredientesPaginado() {
    this.servicio
      .obtenerIngredientePaginado(this.limite, this.desde)
      .subscribe((res) => {
        this.ingredientes = res;
        if (this.ingredientes.length === 0) {
          this.btnActivo = false;
        }
      });
  }

  btnSiguiente(valor: number) {
    this.limite = this.limite + valor;
    this.obtenerIngredientesPaginado();
    console.log(this.limite);
  }
  btnAnterior(valor: number) {
    this.limite = this.limite - valor;
    this.obtenerIngredientesPaginado();
    console.log(this.limite);
    if (this.limite === 0) {
      this.btnActivo = false;
    }
    if (this.limite > 0) {
      this.btnActivo = true;
    }
  }

  eliminarIngrediente(id: any) {
    Swal.fire({
      title: 'Seguro quieres eliminar el Ingrediente?',
      text: 'Eliminarás el Ingrediente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'No, Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarIngrediente(id).subscribe((res) => {
          this.obtenerIngredientesPaginado();
        });
        Swal.fire(
          'Borrado',
          'El ingrediente ha sido eliminado de la base de datos con éxito',
          'success'
        );
      }
    });
  }

  obtenerIngredientes() {
    console.log(this.formIngredientes.value.nombre);
    this.servicio
      .getIngredientesBuscar(this.formIngredientes.value.nombre)
      .subscribe((res) => {
        console.log(res);
        this.ingredientes = res;
      });
  }
}
