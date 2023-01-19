import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInfo } from 'src/app/Models/UserInfo/UserInfo';

@Component({
  selector: 'user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent {
  @Input() userInfo : UserInfo|undefined;
  @Output() GoToEditData = new EventEmitter();

  EditData(){
    this.GoToEditData.emit();
  }
}
