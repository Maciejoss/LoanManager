import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private securityService: SecurityService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let claimType: string = route.data["claimType"];

    let isAuthenticated = this.securityService.securityObject.isAuthenticated;
    let canAccess = this.securityService.securityObject.getPropertyValue(this.securityService.securityObject, claimType);

    return isAuthenticated && canAccess;
  }

}
