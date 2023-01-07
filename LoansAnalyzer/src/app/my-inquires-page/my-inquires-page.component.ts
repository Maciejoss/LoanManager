import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {InquiryStatus} from '../my-inquires-page/inquiry-status.component'

@Component({
  selector: 'my-inquires-page',
  templateUrl: './my-inquires-page.component.html',
  styleUrls: ['./my-inquires-page.component.css']
})
export class MyInquiresPageComponent implements AfterViewInit{

  dataSource: MatTableDataSource<Inquiry>;
  displayedColumns: string[] = ['bankName','amount','instalments','instalmentValue','submissionDate','submissionButton'];
  InquiryStatus=InquiryStatus;

  @ViewChild(MatPaginator ) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(){
    this.InquiresList = [];
    for (let i = 1; i < 31; i++) {
      this.InquiresList.push(new Inquiry("Bank Macieja",i,i,i,new Date('December '+i+', 1995 03:24:00'),InquiryStatus.pending));
    }
    this.PageInquires = this.InquiresList.slice(0,10);
    this.dataSource = new MatTableDataSource(this.InquiresList);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  InquiresList:Inquiry[];
  PageInquires:Inquiry[];
  ChoosenInquiry:Inquiry|undefined;

  pageSize:number = 10;
  pageIndex:number = 0;


  ChooseLatestInquiry(){
    let latestInquiry = this.InquiresList[0];
    this.InquiresList.forEach(inquiry => {
      if(inquiry.submissionDate<latestInquiry.submissionDate)latestInquiry=inquiry;
    });
    this.ChooseInquiry(latestInquiry);
  }

  ChooseInquiry(inquiry:Inquiry){
    this.ChoosenInquiry=inquiry;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export class Inquiry{
  constructor(
    public bankName:string,
    public instalments:number,
    public amount:number,
    public instalmentValue:number,
    public submissionDate:Date,
    public status:InquiryStatus
  )
  {}
}


