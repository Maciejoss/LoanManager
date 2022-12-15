import { Component,OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserInfo } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-inquire-form',
  templateUrl: './inquire-form.component.html',
  styleUrls: ['./inquire-form.component.css']
})
export class InquireFormComponent {
  @Input() message :any;

  kwota:number;
  raty = 6;

  constructor(){
    this.kwota=5;
  }
}
