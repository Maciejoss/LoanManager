import { Component, EventEmitter, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GovernmentDocument } from '../Models/GovernmentDocument/GovernmentDocument';
import { JobDetails } from '../Models/JobDetails/JobDetails';
import { UserInfo } from '../Models/UserInfo/UserInfo';
import { InquiryInfo } from './Offers/Models/InquiryInfo';
import { OfferInfo } from './Offers/Models/OfferInfo';
import { InquirySendService } from './Offers/Services/InquirySend-service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  //Fields required for offers
  oferty:OfferInfo[]=[];
  show=0;
  isChosenOffer=false;
  chosenOffer:OfferInfo|undefined;

  constructor(private dialogRef:MatDialog) {}

    OpenDialog(index:number){
      const of = this.oferty;
      const dialog = this.dialogRef.open(PopUpComponent,{data: {of,index}});
      dialog.componentInstance.onSubmitReason.subscribe((data) => {
        let option = data.option;
        if(option==1)this.SubmitInquire();
      });
    }

    SubmitInquire(){
      this.show=2;
    }

    //OnDialogClosed(result:any){}

    //Basic user info --- TO DO
  userInfo : UserInfo|null = new UserInfo(
  "Maciej","Placek","Imie","pikczer","piątek",
  new JobDetails(123,"","","",""),
  new GovernmentDocument(123,"","",""));

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

  async InquireSubmit(event:[number,number]){
    let inquiry = new InquiryInfo(this.userInfo!,event[0],event[1]);
    this.oferty = await InquirySendService.SendInquires(inquiry);
    this.show=1;
  }

  //Offers choice
  ChooseOffer(o:OfferInfo){
    this.chosenOffer=o;
    this.isChosenOffer=true;
  }
  LeaveOffer(){
    this.isChosenOffer=false;
  }
  ApplyForALoan(o:OfferInfo){
    // TO DO
  }

}

