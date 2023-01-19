import {UserAuthBase} from "../shared/security/user-auth-base";
import {userType} from "../shared/enums/userType";

export class AppUserAuth extends UserAuthBase{

  get canAccessLoginPage(){
    return true;
  }

  get canAccessInquiryForm(){
    return this.userClaims == userType.Client;
  }

  get canAccessAdditionalInfoForm(){
    return this.userClaims == userType.Client;
  }

  get canAccessMyInquiriesPage(){
    return this.userClaims == userType.Client;
  }

  get canAccessBankPage(){
    return this.userClaims == userType.BankEmployee;
  }

  get canAccessEmployeePage(){
    return this.userClaims == userType.BankEmployee;
  }


  override init(): void{
    super.init();
  }

  getPropertyValue(obj: any, key: string): boolean{
    return obj[key];
  }
}
