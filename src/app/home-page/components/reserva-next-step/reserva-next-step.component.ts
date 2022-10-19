import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-next-step',
  templateUrl: './reserva-next-step.component.html',
  styleUrls: ['./reserva-next-step.component.css'],
})
export class ReservaNextStepComponent implements OnInit {
  fechaReserva: string = '';
  formRegistroReserva: FormGroup = this.fb.group({
    id_reserva: [],
    cant_personas: ['', [Validators.required]],
    fecha_reserva: ['', [Validators.required]],
    hora_reserva: ['', [Validators.required]],
    id_cliente: ['', [Validators.required]],
  });
  cantidadPersonas: any[] = [
    { valor: 2, nombre: '2 Personas' },
    { valor: 4, nombre: '4 Personas' },
    { valor: 6, nombre: '6 Personas' },
    { valor: 8, nombre: '8 Personas' },
    { valor: 10, nombre: '10 Personas' },
    { valor: 12, nombre: '12 Personas' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  OnDateChange(event: any) {
    this.fechaReserva = `${event.date}-${event.month}-${event.year}`;
  }

  registroReserva() {
    this.formRegistroReserva.value.fecha_reserva = this.fechaReserva;
  }
}
