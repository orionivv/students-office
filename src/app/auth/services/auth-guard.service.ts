import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private cookie: CookieService,
    private router: Router,
  ) { }

  getPermissions() {
    const check = this.cookie.check('isActive');
    if (!check) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canLoad(route: Route) {
    return this.getPermissions();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getPermissions();
  }
}
