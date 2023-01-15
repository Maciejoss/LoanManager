import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeInfo, OfferInfo } from 'src/app/models/models';
import { EmployeePageService } from 'src/app/services/employee-page.service';

@Component({
  selector: 'app-offer-table',
  templateUrl: './offer-table.component.html',
  styleUrls: ['./offer-table.component.css']
})
export class OfferTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'reviewer', 'state', 'action'];
  dataSource: any;
  offerData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() service!: EmployeePageService;

  @Output() childToParent = new EventEmitter<OfferInfo>();

  ngOnInit(): void {
    this.GetAllOffers();
  }

  GetAllOffers() {
    // data from server
    this.service.GetOffer().subscribe({
      next: result => {
        this.offerData = result;

        this.dataSource = new MatTableDataSource<OfferInfo>(this.offerData);
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('There was an error!', error.message);
      }            
    })
    // data from mocks
    // this.offerData = MOCK_OFFER_DATA

    // this.dataSource = new MatTableDataSource<OfferInfo>(this.offerData);
    // this.dataSource.paginator = this.paginator;
  }

  FilterChange(event: Event) {
    //TODO: fix filtering of all columns (currently only "state" is filtered)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OnSelect(element: OfferInfo) {
    this.childToParent.emit(element);
  }
}

// const MOCK_EMPLOYEE: EmployeeInfo = {
//   email: 'employeeEmail@gmail.com',
//   name: 'employeeName',
//   surname: 'employeeSurname',
// }

// const MOCK_OFFER_DATA: OfferInfo[] = [
//   { offerID: '1', percentage: '0.05', monthlyInstallment: '123', requestedValue: '4567', requestedPeriodInMonth: '12', statusDescription: 'Created', inquiryID: '4', createDate: '01.01.2023', updateDate: '01.01.2023', reviewer: MOCK_EMPLOYEE, documentLinkValidDate: '01.01.2023' },
//   { offerID: '2', percentage: '0.05', monthlyInstallment: '123', requestedValue: '4567', requestedPeriodInMonth: '12', statusDescription: 'Approved', inquiryID: '3', createDate: '01.01.2023', updateDate: '01.01.2023', reviewer: null, documentLinkValidDate: '01.01.2023' },
//   { offerID: '3', percentage: '0.05', monthlyInstallment: '123', requestedValue: '4567', requestedPeriodInMonth: '12', statusDescription: 'Declined', inquiryID: '2', createDate: '01.01.2023', updateDate: '01.01.2023', reviewer: MOCK_EMPLOYEE, documentLinkValidDate: '01.01.2023' },
// ]