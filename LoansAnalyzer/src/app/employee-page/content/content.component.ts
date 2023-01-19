import { Component, Input } from '@angular/core';
import { InquiryInfo, OfferInfo } from 'src/app/Models/models';
import { EmployeePageService } from '../../services/employee-page.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() inquiryContent?: InquiryInfo | null;
  @Input() offerContent?: OfferInfo | null;
  @Input() service!: EmployeePageService;

  OnAccept(offerContent : OfferInfo) {
    this.service
      .ChangeOfferStatus({id: offerContent.offerID, employeeId: employeeId, status: 1})
      .subscribe({
        error: error => {
          console.error('There was an error!', error.message);
        }      
      })
    window.location.reload()
  }
  OnDecline(offerContent : OfferInfo) {
    this.service
      .ChangeOfferStatus({id: offerContent.offerID, employeeId: employeeId, status: 2})
      .subscribe({
        error: error => {
          console.error('There was an error!', error.message);
        }      
      })
    window.location.reload()
  }
  GetDocument(offerContent: OfferInfo) {
    this.service
    .GetDocument(offerContent.offerID)
    .subscribe({
      next: result => {
        window.open(result)
      },
      error: error => {
        console.error('There was an error!', error.message);
      }   
    })
  }  
}

const employeeId: string = JSON.parse(localStorage.getItem('AuthObject')!).id;