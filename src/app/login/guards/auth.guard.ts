import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthService } from '../services';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService
    .isAuthenticated()
    .pipe(map((isAuthenticated) => (isAuthenticated ? isAuthenticated : router.parseUrl('login'))));
};
