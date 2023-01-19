import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/Models/UserInfo/UserInfo';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  constructor(private router: Router,
    private _ngZone: NgZone) {}

    @Input() userInfo:UserInfo|null = null;
    @Output() close:  EventEmitter<any> = new EventEmitter();

    CloseMenu(){
        this.close.emit(null);
    }
}
