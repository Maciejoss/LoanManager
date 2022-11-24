import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inquire-form-logged',
  templateUrl: './inquire-form-logged.component.html',
  styleUrls: ['../inquire-form/inquire-form.component.css']
})
export class InquireFormLoggedComponent {
  @Input() message :any;
  log(x: NgModel){console.log(x);}
  kwota = 20;
  raty = 6;
  test ="";
  jobs =["Murarz", "Tynkarz", "Akrobata"];



  constructor(){}
  ngOnInit(): void{}
}
