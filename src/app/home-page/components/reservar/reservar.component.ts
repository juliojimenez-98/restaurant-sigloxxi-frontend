import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservarService } from '../../services/reservar.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
})
export class ReservarComponent implements OnInit {
  formRegistroCliente: FormGroup = this.fb.group({
    id_cliente: [],
    nombre: ['', [Validators.required]],
    appa: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cel: ['', [Validators.required]],
  });
  nextStep: boolean = false;
  minDate: Date;
  maxDate: Date;
  openTab = 1;

  constructor(private fb: FormBuilder, private service: ReservarService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    localStorage.clear();
  }
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  registrarCliente() {
    this.service
      .registroCliente(this.formRegistroCliente.value)
      .subscribe((res: any) => {
        if (res.msg === 'ok') {
          console.log(res);
          localStorage.setItem('email', res.email);
          this.nextStep = true;
        }
      });
  }
}
