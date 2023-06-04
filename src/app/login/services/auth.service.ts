import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isAuthenticated(): Observable<boolean> {
    return of(false);
  }
}
