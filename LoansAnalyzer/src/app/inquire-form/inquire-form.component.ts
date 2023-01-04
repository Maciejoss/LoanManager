
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inquire-form',
  templateUrl: './inquire-form.component.html',
  styleUrls: ['./inquire-form.component.css']
})
export class InquireFormComponent {

  @Output()
  status = new EventEmitter<[number, number]>();

  kwota =5;
  raty = 6;

  SubmitInquire(){
      this.status.emit([this.kwota,this.raty]);
  }

}
