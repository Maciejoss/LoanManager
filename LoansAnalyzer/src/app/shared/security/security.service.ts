import { Injectable } from '@angular/core';
import {AppUserAuth} from "../../security/app-user-auth";
import {AppUser} from "../../security/app-user";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  securityObject: AppUserAuth = new AppUserAuth()

  login(entity: AppUser): Observable<AppUserAuth>{
    this.securityObject.userName = entity.userName;
    this.securityObject.email = entity.email;

    // check user type to check if it's employee or not
    this.securityObject.canAccessLoginPage = true;
    this.securityObject.canAccessInquiryForm = true;
    this.securityObject.canAccessAdditionalInfoForm = true;

    return of(this.securityObject);
  }

  logout(): void{
    this.securityObject.init();
  }

}
