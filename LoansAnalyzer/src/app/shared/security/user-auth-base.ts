import {userType} from "../enums/userType"

export class UserAuthBase {
  name: string = '';
  surname: string = '';
  email: string = '';
  userClaims: userType | undefined;
  bearerToken: string = '';
  isAuthenticated: boolean = false;


  init(): void{
    this.name = '';
    this.surname = '';
    this.email= '';
    this.bearerToken = '';
    this.isAuthenticated = false;
  }
}
