import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent, OfferPopUpComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InquireFormComponent } from './inquire-form/inquire-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { OAuthModule } from 'angular-oauth2-oidc';
import { UserDataPageComponent } from './user-data-page/user-data-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';;
import { MatNativeDateModule } from '@angular/material/core';
import { MyInquiresPageComponent } from './my-inquires-page/my-inquires-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserDataFormComponent } from './user-data-page/user-data-form/user-data-form.component';
import { MatSelectModule } from '@angular/material/select';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { InquiryTableComponent } from './employee-page/inquiry-table/inquiry-table.component';
import { OfferTableComponent } from './employee-page/offer-table/offer-table.component';
import { ContentComponent } from './employee-page/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    InquireFormComponent,
    UserDataPageComponent,
    MyInquiresPageComponent,
    OfferPopUpComponent,
    UserDataFormComponent,
    EmployeePageComponent,
    InquiryTableComponent,
    OfferTableComponent,
    ContentComponent
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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
