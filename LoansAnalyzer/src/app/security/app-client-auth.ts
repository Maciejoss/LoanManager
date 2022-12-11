import {UserAuthBase} from "../shared/security/user-auth-base";

export class AppClientAuth extends UserAuthBase{

  override canAccessBankPage = false;
  override canAccessAdditionalInfoForm = true;
  override canAccessInquiryForm = true;
  override canAccessLoginPage = true;


  override init(): void{
    super.init();

  }
}
