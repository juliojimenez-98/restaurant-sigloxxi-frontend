import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './pages/comanda/comanda.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comanda',
        component: ComandaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCocineroRoutingModule { }
