import {UserAuthBase} from "../shared/security/user-auth-base";

export class AppUserAuth extends UserAuthBase{

  override canAccessBankPage = false;
  override canAccessAdditionalInfoForm = true;
  override canAccessInquiryForm = true;
  override canAccessLoginPage = true;


  override init(): void{
    super.init();

  }

  getPropertyValue(obj: any, key: string): boolean{
    return obj[key];
  }
}
