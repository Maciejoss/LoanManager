import { Component, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import {Offer} from "../shared/models/offer";
import {UserInfo} from "../shared/models/userInfo";
import {JobDetails} from "../shared/models/jobDetails";
import {GovernmentDocument} from "../shared/models/governmentDocument";

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
    private _ngZone: NgZone,) {
    }

    //Basic user info --- TO DO
  userInfo : UserInfo|null = new UserInfo(
  "Maciej","Placek","Imie","pikczer","piątek",
  new JobDetails("",123,"","","",""),
  new GovernmentDocument("",123,"","",""));

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






