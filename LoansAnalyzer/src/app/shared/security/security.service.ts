import { Injectable } from '@angular/core';
import {AppClientAuth} from "../../security/app-client-auth";
import {AppClient} from "../../security/app-client";
import {Observable} from "rxjs/internal/Observable";
import {UserAuthBase} from "./user-auth-base";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  securityObject: AppClientAuth = new AppClientAuth()

  login(entity: AppClient): Observable<AppClientAuth>{
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
