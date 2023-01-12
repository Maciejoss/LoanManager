import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirm-pop-up',
  templateUrl: './confirm-pop-up.component.html',
  styleUrls: ['./confirm-pop-up.component.css']
})
export class ConfirmPopUpComponent {
  onCloseReason = new EventEmitter<boolean>();

  constructor(public dialogRef: MatDialogRef<ConfirmPopUpComponent >){}

  Cancel(){
    this.onCloseReason.emit(false);
    this.dialogRef.close();
  }
  Save(){
    this.onCloseReason.emit(true);
    this.dialogRef.close();
  }
}
