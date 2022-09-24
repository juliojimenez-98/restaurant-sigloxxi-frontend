import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate {
  constructor(private loginService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.loginService.estaAutenticado()) {
      return true;
    }
    Swal.fire('Inicia Sesión', 'No estás autenticado', 'warning');
    this.router.navigate(['/auth/login']);
    return false;
  }
}
