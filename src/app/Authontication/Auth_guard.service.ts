import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './Auth.service';

@Injectable()
export class AuthGuard implements  CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
     return this.authService.isAuthtication().
     then( (heIsLogin: boolean) => {
          if (heIsLogin) {
            return true;
          } else {
            this.router.navigate(['/login']);
          }
     });

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {
    return this.canActivate(childRoute, state);
  }

}
