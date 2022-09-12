import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './components/carta/carta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioHomeComponent } from './components/inicio-home/inicio-home.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { UbicanosComponent } from './components/ubicanos/ubicanos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: [
          { path: 'inicio', component: InicioHomeComponent },
          { path: 'reservar', component: ReservarComponent },
          { path: 'ubicanos', component: UbicanosComponent },
          { path: 'nuestra-carta', component: CartaComponent },
          { path: 'contacto', component: ContactoComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
