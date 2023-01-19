export class InquiryWithId {
  constructor(
      public clientID: string,
      public value: number,
      public installmentsNumber: number,
      public startDate: string,
  ) { }
}
