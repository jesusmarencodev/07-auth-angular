import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../enum/auth-status.enum';

export const PrivateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.authStatus());
  if (authService.authStatus() === AuthStatus.authenticated) return true;

  router.navigateByUrl('/auth/login');
  return false;
};
