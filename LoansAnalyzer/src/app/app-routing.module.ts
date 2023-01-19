import { MainPageComponent } from './main-page/main-page.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import { UserDataPageComponent } from './user-data-page/user-data-page.component';
import { MyInquiresPageComponent } from './my-inquires-page/my-inquires-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

const routes: Routes = [
  { path: 'main-page',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    data: {claimType: 'canAccessInquiryForm'}
  },
  { path: 'login-page',
    component: LoginPageComponent,
  },
  { path: 'user-data-page',
    component: UserDataPageComponent,
    canActivate: [AuthGuard],
    data: {claimType: 'canAccessAdditionalInfoForm'}
  },
  { path: 'employee-page',
    component: EmployeePageComponent,
    canActivate: [AuthGuard],
    data: {claimType: 'canAccessEmployeePage'}
  },
  { path: 'my-inquires-page',
    component: MyInquiresPageComponent,
    canActivate: [AuthGuard],
    data: {claimType: 'canAccessMyInquiriesPage'}
  },
  { path: '',   redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
