import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserInfo } from "../Models/UserInfo/UserInfo";
import { UserDTO } from "../user-data-page/Models/User/UserDTO/UserDTO";
import { UserResponse } from "../user-data-page/Models/User/UserResponse/UserResponse";

export class ClientDataProviderService{

  private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
private static readonly idType_URL = environment.apiUrl + 'User';

  static async GetUserDataById(id:string): Promise<UserInfo>{
    let data = await this.http.get(this.idType_URL+"/"+id).toPromise();
    let userInfo = new UserResponse(data);
    return userInfo.ToUserInfo();
  }
}
