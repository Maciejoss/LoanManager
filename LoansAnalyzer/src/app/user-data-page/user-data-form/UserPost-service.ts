import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserDTO } from "../Models/User/UserDTO";

export class UserPostService{
  private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private static readonly UserPost_URL = environment.apiUrl + 'User/UpdateUserData';

  public static async PostUser(user:UserDTO){
    this.http.post<UserDTO>(this.UserPost_URL,user).subscribe((response)=>{console.log(response)});
  }
}
