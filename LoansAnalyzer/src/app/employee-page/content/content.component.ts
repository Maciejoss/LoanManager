import { Component, Input } from '@angular/core';
import { InquiryInfo, OfferInfo } from 'src/app/models/models';
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
}

//TODO: replace this employeeId with real one after reciving it, after employee's log in
const employeeId: string = '3fa85f64-5717-4562-b3fc-2c963f66afa6';