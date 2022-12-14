import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { InicioHomeComponent } from './components/inicio-home/inicio-home.component';
import { UbicanosComponent } from './components/ubicanos/ubicanos.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { CartaComponent } from './components/carta/carta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReservaNextStepComponent } from './components/reserva-next-step/reserva-next-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    SvgIconComponent,
    InicioHomeComponent,
    UbicanosComponent,
    ReservarComponent,
    CartaComponent,
    ContactoComponent,
    ReservaNextStepComponent,
    MisReservasComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
})
export class HomePageModule {}
