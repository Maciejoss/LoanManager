import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OfferInfo } from 'src/app/Models/models';
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