import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.css']
})
export class RegistroRecetasComponent implements OnInit {

  tipos: any[] = [
    {id:1, nombre:"Plato de Fondo"},
    {id:2, nombre:"Tragos"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
