import { Component, OnInit, NgZone } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import {AppUser} from "../security/app-user";
import {AppUserAuth} from "../security/app-user-auth";
import {SecurityService} from "../shared/security/security.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private clientId = environment.clientId;
  private returnUrl: string | undefined;

  user: AppUser = new AppUser();
  securityObject: AppUserAuth | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AuthService,
    private _ngZone: NgZone,
    private securityService: SecurityService) { }

    ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')!;

      // @ts-ignore
      window.onGoogleLibraryLoad = () => {
        // @ts-ignore
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.HandleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true
        });
        // @ts-ignore
        google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
          { theme: "outline", size: "large", width: "100%" }
        );
        // @ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {});
      };
    }

    async HandleCredentialResponse(response: CredentialResponse) {

      this.securityObject = new AppUserAuth();
      this.securityService.login(response.credential)
        .subscribe(response => {
          localStorage.setItem("AuthObject", JSON.stringify(response))
          this.securityObject = response;
        });
      if(this.returnUrl){
        this._ngZone.run(()=>{
          this.router.navigateByUrl(this.returnUrl!);
        })
      }
  }
}
