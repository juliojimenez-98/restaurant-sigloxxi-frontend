import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReservarService } from '../../services/reservar.service';

@Component({
  selector: 'app-reserva-next-step',
  templateUrl: './reserva-next-step.component.html',
  styleUrls: ['./reserva-next-step.component.css'],
})
export class ReservaNextStepComponent implements OnInit {
  fechaReserva: string = '';
  email: any = '';
  cel: any = '';
  idCliente: number = 0;
  formRegistroReserva: FormGroup = this.fb.group({
    id_reserva: [],
    cant_personas: [0, [Validators.required]],
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
  constructor(
    private fb: FormBuilder,
    private service: ReservarService,
    private router: Router
  ) {
    this.email = localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.obtenerClienteParaReserva();
  }

  obtenerClienteParaReserva() {
    this.service.obtenerClienteParaReserva(this.email).subscribe((res: any) => {
      this.idCliente = res.findCliente.id_cliente;
      console.log(this.idCliente);
    });
  }

  OnDateChange(event: any) {
    this.fechaReserva = `${event.year}-${event.month}-${event.date}`;
  }

  registroReserva() {
    this.formRegistroReserva.value.fecha_reserva = this.fechaReserva;
    this.formRegistroReserva.value.id_cliente = this.idCliente;
    this.formRegistroReserva.value.cant_personas = parseInt(
      this.formRegistroReserva.value.cant_personas
    );
    this.service
      .registroReserva(this.formRegistroReserva.value)
      .subscribe((res: any) => {
        if (res.msg === 'ok') {
          Swal.fire(
            'Registro de reserva exitosa',
            'La reserva se ha registrado con éxito, recibirás un correo con la información de la reserva',
            'success'
          );
          this.router.navigateByUrl('/home/inicio');
        }
      });
  }
}
