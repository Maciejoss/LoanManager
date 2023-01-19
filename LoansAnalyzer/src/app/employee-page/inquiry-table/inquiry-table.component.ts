import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InquiryInfo, UserInfo } from 'src/app/models/models';
import { EmployeePageService } from 'src/app/services/employee-page.service';

@Component({
  selector: 'app-inquiry-table',
  templateUrl: './inquiry-table.component.html',
  styleUrls: ['./inquiry-table.component.css']
})
export class InquiryTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: any;
  inquiryData: any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() service!: EmployeePageService;

  @Output() childToParent = new EventEmitter<InquiryInfo>();

  ngOnInit(): void {
    this.GetAllInquiries();
  }

  GetAllInquiries() {
    // data from server
    this.service.GetInquiry().subscribe({
      next: result => {
        this.inquiryData = result;

        this.dataSource = new MatTableDataSource<InquiryInfo>(this.inquiryData);
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('There was an error!', error.message);
      }      
    })
    // data from mocks
    // this.inquiryData = MOCK_INQUIRY_DATA
    
    // this.dataSource = new MatTableDataSource<InquiryInfo>(this.inquiryData);
    // this.dataSource.paginator = this.paginator;
  }

  FilterChange(event: Event) {
    //TODO: fix filtering of all columns (currently only "state" is filtered)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OnSelect(element: InquiryInfo) {
    this.childToParent.emit(element);
  }
}

// const MOCK_USER_INFO1: UserInfo = {
//   ub: 'ub',
//   Email: 'userEmail1@gmail.com',
//   Name: 'userName1',
//   Surname: 'userSurname1',
//   BirthDate: '18.11.2001',
//   JobDetails: {
//     Id: 'jobDetailsId',
//     TypeId: 1234,
//     Name: 'jobDetailsName',
//     Description: 'jobDetailsDescription',
//     StartDate: '01.02.2022',
//   },
//   GovernmentDocument: {
//     Id: 'governmentDocumentId',
//     TypeId: 5678,
//     Name: 'governmentDocumentName',
//     Description: 'governmentDocumentDescription',
//     Number: 'governmentDocumentNumber'
//   }
// }

// const MOCK_USER_INFO2: UserInfo = {
//   ub: 'ub',
//   Email: 'userEmail2@gmail.com',
//   Name: 'userName2',
//   Surname: 'userSurname2',
//   BirthDate: '18.11.2001',
//   JobDetails: {
//     Id: 'jobDetailsId',
//     TypeId: 1234,
//     Name: 'jobDetailsName',
//     Description: 'jobDetailsDescription',
//     StartDate: '01.02.2022',
//   },
//   GovernmentDocument: {
//     Id: 'governmentDocumentId',
//     TypeId: 5678,
//     Name: 'governmentDocumentName',
//     Description: 'governmentDocumentDescription',
//     Number: 'governmentDocumentNumber'
//   }
// }

// const MOCK_INQUIRY_DATA: InquiryInfo[] = [
//   { inquiryID: '1', userInfo: MOCK_USER_INFO1, value: '100', instalmentsNumber: '6', startDate: '02.01.2023', endDate: '01.06.2023', state: '0', stateDescription: 'Created' },
//   { inquiryID: '2', userInfo: MOCK_USER_INFO1, value: '5000', instalmentsNumber: '36', startDate: '01.01.2023', endDate: '01.06.2023', state: '1', stateDescription: 'ChosenByClient' },
//   { inquiryID: '3', userInfo: MOCK_USER_INFO2, value: '23232', instalmentsNumber: '26', startDate: '01.03.2023', endDate: '01.06.2023', state: '1', stateDescription: 'ChosenByClient' },
//   { inquiryID: '4', userInfo: MOCK_USER_INFO1, value: '15', instalmentsNumber: '16', startDate: '01.01.2024', endDate: '01.06.2023', state: '0', stateDescription: 'Created' },
//   { inquiryID: '5', userInfo: MOCK_USER_INFO2, value: '70750', instalmentsNumber: '62', startDate: '01.12.2023', endDate: '01.06.2023', state: '1', stateDescription: 'ChosenByClient' },
//   { inquiryID: '6', userInfo: MOCK_USER_INFO2, value: '1000000', instalmentsNumber: '126', startDate: '01.01.2023', endDate: '01.06.2023', state: '0', stateDescription: 'Created' },
// ];