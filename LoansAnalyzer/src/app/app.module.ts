import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent} from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InquireFormComponent } from './main-page/inquiry-form/inquire-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { OAuthModule } from 'angular-oauth2-oidc';
import { UserDataPageComponent } from './user-data-page/user-data-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';;
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MyInquiresPageComponent } from './my-inquires-page/my-inquires-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserDataFormComponent } from './user-data-page/user-data-form/user-data-form.component';
import { PopUpComponent } from './main-page/pop-up/pop-up.component';
import { SideMenuComponent } from './main-page/side-menu/side-menu.component';
import { OffersDisplayComponent } from './main-page/offers-display/offers-display.component';
import { UserDataDisplayComponent } from './user-data-page/user-data-display/user-data-display.component';
import {MatListModule} from '@angular/material/list';
import { ConfirmPopUpComponent } from './user-data-page/user-data-form/confirm-pop-up/confirm-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    InquireFormComponent,
    UserDataPageComponent,
    MyInquiresPageComponent,
    UserDataFormComponent,
    PopUpComponent,
    SideMenuComponent,
    OffersDisplayComponent,
    UserDataDisplayComponent,
    ConfirmPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    OAuthModule.forRoot(),
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
