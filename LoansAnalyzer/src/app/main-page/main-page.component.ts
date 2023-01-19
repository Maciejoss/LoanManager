import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Component, NgZone, OnInit, Input, Inject, EventEmitter } from '@angular/core';
import { GovernmentDocument, JobDetails, UserInfo } from '../models/models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  //Fields required for offers
  oferty:Offer[]=[];
  show=0;
  isChosenOffer=false;
  chosenOffer:Offer|undefined;


  constructor(private router: Router,
    private _ngZone: NgZone,
    private dialogRef:MatDialog) {
    }


    OpenDialog(index:number){
      const of = this.oferty;
      const dialog = this.dialogRef.open(OfferPopUpComponent,{data: {of,index}});
      dialog.componentInstance.onSubmitReason.subscribe((data) => {
        let index = data.index;
        let option = data.option;
        if(option==1)this.SubmitInquire();
        //i can see 'hello' from MatDialog
      });
    }

    SubmitInquire(){
      this.show=2;
    }

    //OnDialogClosed(result:any){}

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

  OpenSideMenu() {
    console.log(this.menuBtn);
    this.sideMenu?.classList.toggle('is-active');
    this.menuBtn?.classList.toggle('is-active');
  }

  //Basic Inquire Submition --- TO DO

  InquireSubmit(event:[number,number]){
    const amount = event[0];
    const instalments = event[1];
    const o1 = new Offer(1,amount,Math.round( amount/instalments*1000));
    const o2 = new Offer(2,amount,Math.round( amount/instalments*1000));
    const o3 = new Offer(3,amount,Math.round( amount/instalments*1000));
    this.oferty = [o1,o2,o3];
    this.show=1;
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

export class Offer{
  constructor(
    public instalments:number,
    public amount:number,
    public instalmentToPay:number
  )
  {}
}


@Component({
  selector: 'Offer-pop-up',
  templateUrl: './offer-pop-up.component.html',
  styleUrls: ['./main-page.component.css']
})
export class OfferPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<OfferPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if(this.data != undefined){
      this.offerIndex=data.index;
      this.chosenOffer = this.data.of[this.offerIndex!];
    }
  }

  offerIndex:number|undefined;
  chosenOffer : Offer|undefined;

  onSubmitReason = new EventEmitter();


  Cancel(): void {
    this.onSubmitReason.emit({option:0,index:this.offerIndex})
    this.dialogRef.close();
  }

  Confirm(): void {
    this.onSubmitReason.emit({option:1,index:this.offerIndex})
    this.dialogRef.close();
  }

  NextOffer():void{
    this.offerIndex = (this.offerIndex!+1)%3;
    console.log(this.offerIndex);
    this.chosenOffer = this.data.of[this.offerIndex!];
  }
  PrevOffer():void{
    this.offerIndex = (this.offerIndex!-1);
    if(this.offerIndex==-1)this.offerIndex=2;
    this.chosenOffer = this.data.of[this.offerIndex!];
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
