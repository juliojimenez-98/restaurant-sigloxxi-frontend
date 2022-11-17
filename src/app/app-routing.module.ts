import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/pages/change-password/change-password.component';
import { ValidarTokenGuard } from './guard/validar-token.guard';
import { AppMesaPageComponent } from './app-mesa/pages/app-mesa-page/app-mesa-page.component';

const routes: Routes = [
  {
    path: 'changepass',
    component: ChangePasswordComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [ValidarTokenGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'app-mesa',
    loadChildren: () =>
      import('./app-mesa/app-mesa.module').then((m) => m.AppMesaModule),
  },
  {
    path: 'app-cocinero',
    loadChildren: () =>
      import('./app-cocinero/app-cocinero.module').then((m) => m.AppCocineroModule),
  },
  {
    path: '',
    redirectTo: '/home/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
