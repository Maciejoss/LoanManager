import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InquireFormComponent } from './inquire-form/inquire-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageComponent } from './home-page/home-page.component';
import { SideMenuComponent } from './home-page/side-menu/side-menu.component';
import { InquireFormLoggedComponent } from './inquire-form-logged/inquire-form-logged.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
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
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    NgbModule,
    OAuthModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
