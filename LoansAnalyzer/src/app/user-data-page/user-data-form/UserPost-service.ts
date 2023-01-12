import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserDTO } from "../Models/User/UserDTO/UserDTO";

export class UserPostService{
  private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private static readonly UserPost_URL = environment.apiUrl + 'User/UpdateUserData';

  public static async PostUser(user:UserDTO) : Promise<boolean>{
    let responseConfirm : boolean;
    try{
      await this.http.post(this.UserPost_URL,user,{observe: 'response'}).toPromise();
    }
    catch{
      return false;
    }
    return true;
  }
}
