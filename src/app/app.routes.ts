import { Routes } from '@angular/router';
import { authGuard } from './login/guards';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main').then((m) => m.MainPage),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login').then((m) => m.LoginPage),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
