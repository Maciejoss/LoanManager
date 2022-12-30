import { Component, NgZone, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  //Fields required for offers
  oferty:Offer[]=[];
  show=false;
  isChosenOffer=false;
  chosenOffer:Offer|undefined;


  constructor(private router: Router,
    private service: AuthService,
    private _ngZone: NgZone,) {
    }

    //Basic user info --- TO DO
  userInfo : UserInfo|null = new UserInfo(
  "Maciej","Placek","Imie","pikczer","piątek",
  new JobDetails("",123,"","","",""),
  new GovernmentDocument("",123,"","",""));

    //Log in/out

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

  //Opening side menu

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

  //Basic Inquire Submition --- TO DO

  InquireSubmit(event:[number,number]){
    const amount = event[0];
    const instalments = event[1];
    const o1 = new Offer(instalments,amount,Math.round( amount/instalments*1000));
    const o2 = new Offer(instalments,amount,Math.round( amount/instalments*1000));
    const o3 = new Offer(instalments,amount,Math.round( amount/instalments*1000));
    this.oferty = [o1,o2,o3];
    this.show=true;
  }

  //Offers choice
  ChooseOffer(o:Offer){
    this.chosenOffer=o;
    this.isChosenOffer=true;
  }
  LeaveOffer(){
    this.isChosenOffer=false;
  }
  ApplyForALoan(o:Offer){
    // TO DO
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
    ){}
}

export class Offer{
  constructor(
    public instalments:number,
    public amount:number,
    public instalmentToPay:number
  )
  {}
}

