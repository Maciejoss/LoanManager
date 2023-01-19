import { MainPageComponent } from './main-page/main-page.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataPageComponent } from './user-data-page/user-data-page.component';
import { MyInquiresPageComponent } from './my-inquires-page/my-inquires-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

const routes: Routes = [
  { path: 'employee-page', component: EmployeePageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'user-data-page', component: UserDataPageComponent},
  { path: 'my-inquires-page', component: MyInquiresPageComponent},
  { path: '',   redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
