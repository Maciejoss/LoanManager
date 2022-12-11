import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private clientId = environment.clientId;

  constructor(
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone) { }

    ngOnInit(): void {
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
      await this.service.LoginWithGoogle(response.credential).subscribe(
        (x:any) => {
          localStorage.setItem("token", x.token);
          this._ngZone.run(() => {
            this.router.navigate(['/main-page']);
          })},
        );
  }
}
