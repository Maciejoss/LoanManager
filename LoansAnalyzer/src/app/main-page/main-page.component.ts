import { Component, NgZone, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,
    private service: AuthService,
    private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  userInfo : UserInfo|null = new UserInfo(
  "Maciej","Placek","Imie","pikczer","piątek",
  new JobDetails("",123,"","","",""),
  new GovernmentDocument("",123,"","",""));

  public logout(){
    this.service.signOutExternal();
    this.userInfo = null;
  }

  public login(){
    this.service.signOutExternal();
    this._ngZone.run(() => {
      this.router.navigate(['login-page']).then(() => window.location.reload());
    })
  }

  menuBtn = document.querySelector('.hamburger');
  sideMenu = document.querySelector('side-menu');

  ngAfterViewChecked(): void {
    this.menuBtn = document.querySelector('.hamburger');
    this.sideMenu = document.querySelector('.side-menu');
  }

  OpenSideMenu(){
    console.log(this.menuBtn);
    this.sideMenu?.classList.toggle('is-active');
    this.menuBtn?.classList.toggle('is-active');
  }

}

export class UserInfo {
  constructor(public ub: string, //unique userID
  public Email: string|null,
  public Name: string|null,
  public SurName: string|null,
  public BirthDate: string|null,
  public JobDetails: JobDetails,
  public GovernmentDocument: GovernmentDocument){
  }
}

export class JobDetails{
  constructor(
    public Id: string,
    public TypeId: number,
    public Name: string|null,
    public Description: string,
    public StartDate: string|null,
    public EndDate?: string|null,
  ){}
}

export class GovernmentDocument{
  constructor(
    public Id: string,
    public TypeId: number,
    public Name: string|null,
    public Description: string,
    public Number: string|null
  ){}
}

export class InquireInfo {
  constructor(public userInfo: UserInfo,
    instalments: Int16Array,
    amount: Int16Array
    ){
  }

}

