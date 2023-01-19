import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferInfo } from '../Offers/Models/OfferInfo';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if(this.data != undefined){
      this.offerIndex=data.index;
      this.chosenOffer = this.data.of[this.offerIndex!];
    }
  }

  offerIndex:number|undefined;
  chosenOffer : OfferInfo|undefined;

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
