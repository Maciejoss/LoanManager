import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InquiryInfo } from 'src/app/Models/models';
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
