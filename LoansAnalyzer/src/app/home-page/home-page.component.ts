import { Component, Input, AfterViewChecked } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewChecked {

  menuBtn = document.querySelector('.hamburger');
  sideMenu = document.querySelector('side-menu');

  ngAfterViewChecked(): void {
    this.menuBtn = document.querySelector('.hamburger');
    this.sideMenu = document.querySelector('.side-menu');
  }
  @Input() message :any;




  OpenSideMenu(){
    console.log(this.menuBtn);
    this.sideMenu?.classList.toggle('is-active');
    this.menuBtn?.classList.toggle('is-active');
  }


}
