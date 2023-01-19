export class Offer {
      public createDate: string;
      public documentLink: string | null;
      public documentLinkValidDate: string;
      public inquiryID: number;
      public monthlyInstallment : number;
      public offerID: number;
      public percentage: number;
      public requestedPeriodInMonth: number;
      public requestedValue: number;
      public reviewer : string|null;
      public statusDescription: string;
      public statusID: number;
      public updateDate: string;

      constructor(response:any){
        this.createDate = response.createDate;
        this.documentLink = response.documentLink;
        this.documentLinkValidDate = response.documentLinkValidDate;
        this.inquiryID = response.inquiryID;
        this.monthlyInstallment = response.monthlyInstallment;
        this.offerID = response.offerID;
        this.percentage = response.percentage;
        this.requestedPeriodInMonth = response.requestedPeriodInMonth;
        this.requestedValue = response.requestedValue;
        this.reviewer = response.reviewer;
        this.statusDescription = response.statusDescription;
        this.statusID = response.statusID;
        this.updateDate = response.updateDate;
      }
}
