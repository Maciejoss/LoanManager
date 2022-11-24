import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginPageComponent } from './login-page/login-page.component';
import { InquireFormComponent } from './inquire-form/inquire-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageComponent } from './home-page/home-page.component';
import { SideMenuComponent } from './home-page/side-menu/side-menu.component';
import { InquireFormLoggedComponent } from './inquire-form-logged/inquire-form-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InquireFormComponent,
    HomePageComponent,
    SideMenuComponent,
    InquireFormLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatSliderModule,
    OAuthModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
