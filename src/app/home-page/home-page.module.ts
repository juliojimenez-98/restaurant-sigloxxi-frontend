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
    ContactoComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
