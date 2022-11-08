import { Component, OnInit } from '@angular/core';
import { ReservarService } from '../../services/reservar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserva } from '../../interfaces/reserva.interface';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css'],
})
export class MisReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  formReservas: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
  });
  constructor(private servicio: ReservarService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  obtenerReservasPorEmail() {
    console.log(this.formReservas.value.email);
    this.servicio
      .getReservasPorEmail(this.formReservas.value.email)
      .subscribe((res) => {
        console.log(res);
        this.reservas = res;
      });
  }
}
