import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfferInfo } from '../Offers/Models/OfferInfo';

@Component({
  selector: 'app-offers-display',
  templateUrl: './offers-display.component.html',
  styleUrls: ['./offers-display.component.css']
})
export class OffersDisplayComponent {

  @Input() oferty:OfferInfo[]=[];
  @Output() offerChoosen: EventEmitter<number> = new EventEmitter();

  ChooseOffer(index:number){
    this.offerChoosen.emit(index);
  }
}
