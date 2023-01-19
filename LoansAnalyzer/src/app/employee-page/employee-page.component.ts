import { Component } from '@angular/core';
import { InquiryInfo, OfferInfo } from '../models/models';
import { EmployeePageService } from '../services/employee-page.service';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent {
  selectedInquiry?: InquiryInfo | null;
  selectedOffer?: OfferInfo | null;

  constructor(protected service : EmployeePageService) {}

  inquiryToContent(inquiry: InquiryInfo) {
    this.selectedOffer = null;
    this.selectedInquiry = inquiry;
  }

  offerToContent(offer: OfferInfo) {
    this.selectedInquiry = null;
    this.selectedOffer = offer;
  }
}