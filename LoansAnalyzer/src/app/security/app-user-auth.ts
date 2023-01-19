import {UserAuthBase} from "../shared/security/user-auth-base";
import {userType} from "../shared/enums/userType";

export class AppUserAuth extends UserAuthBase{

  get canAccessInquiryForm(){
    return this.userClaims == userType.Client;
  }

  get canAccessBankPage(){
    return this.userClaims == userType.BankEmployee;
  }

  get canAccessLoginPage(){
    return true;
  }

  get canAccessAdditionalInfoForm(){
    return this.userClaims == userType.Client;
  }

  override init(): void{
    super.init();
  }

  getPropertyValue(obj: any, key: string): boolean{
    return obj[key];
  }
}
