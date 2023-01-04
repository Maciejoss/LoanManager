import { Injectable } from '@angular/core';
import {AppUserAuth} from "../../security/app-user-auth";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private path = environment.apiUrl;
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private httpClient: HttpClient) { }

  login(credentials: string): Observable<AppUserAuth>{

    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post<AppUserAuth>(
      this.path + "User/LoginWithGoogle",
      JSON.stringify(credentials),
      { headers: header })
      .pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
        }),
      );
  }

  logout(): void{
    this.securityObject.init();
  }

}
