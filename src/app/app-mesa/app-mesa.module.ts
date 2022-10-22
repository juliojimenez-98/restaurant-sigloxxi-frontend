import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMesaRoutingModule } from './app-mesa-routing.module';
import { AppMesaPageComponent } from './pages/app-mesa-page/app-mesa-page.component';
import { CartaMesaComponent } from './components/carta-mesa/carta-mesa.component';


@NgModule({
  declarations: [
    AppMesaPageComponent,
    CartaMesaComponent
  ],
  imports: [
    CommonModule,
    AppMesaRoutingModule
  ]
})
export class AppMesaModule { }
