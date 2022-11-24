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
  log(x: NgModel){console.log(x);}
  kwota = 20;
  raty = 6;
  test ="";
  jobs =["Murarz", "Tynkarz", "Akrobata"];



  constructor(){}
  ngOnInit(): void{}
}
