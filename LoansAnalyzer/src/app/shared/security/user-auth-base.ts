export class UserAuthBase {
  userName: string = '';
  email: string = '';
  bearerToken: string = '';
  isAuthenticated: boolean = false;

  canAccessLoginPage: boolean = false;
  canAccessInquiryForm: boolean = false;
  canAccessAdditionalInfoForm: boolean = false;
  canAccessBankPage: boolean = false;

  init(): void{
    this.userName = '';
    this.bearerToken = '';
    this.isAuthenticated = false;

    this.canAccessLoginPage = false;
    this.canAccessAdditionalInfoForm = false;
    this.canAccessInquiryForm = false;
    this.canAccessBankPage = false;
  }
}
