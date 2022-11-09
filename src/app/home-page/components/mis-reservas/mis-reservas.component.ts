import { Component, OnInit } from '@angular/core';
import { ReservarService } from '../../services/reservar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserva } from '../../interfaces/reserva.interface';
import Swal from 'sweetalert2';

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

  cancelar(idReserva: number) {
    Swal.fire({
      title: 'Estás segur@?',
      text: 'Cancelarás esta reserva',
      icon: 'warning',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonColor: '#2dd36f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar reserva',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.cancelarReserva(idReserva, 0).subscribe((res) => {
          console.log(res);
          if (res.msg === 'ok') {
            Swal.fire({
              title: 'Reserva cancelada',
              text: 'Su reserva fue cancelada',
              icon: 'success',
              heightAuto: false,
            });
          }
        });
      }
    });
  }
}
