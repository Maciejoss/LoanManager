import { UserDTO } from "../UserDTO/UserDTO";
import { UserInfo } from "src/app/Models/UserInfo/UserInfo";
import { JobDetails } from "src/app/Models/JobDetails/JobDetails";
import { GovernmentDocument } from "src/app/Models/GovernmentDocument/GovernmentDocument";

export class UserResponse {
  public Id:string;
  public Name: string|null;
  public SurName: string|null;
  public Email: string;
  public BirthDate: string|null;
  public JobDetails: JobDetails|null;
  public GovernmentDocument: GovernmentDocument|null

  constructor(response:any){
    console.log(response);
    this.Id = response.id;
    this.Name = response.name;
    this.SurName = response.surname;
    this.Email = response.email;
    this.BirthDate = response.birthDate;
    this.JobDetails = null;
    this.GovernmentDocument = null;
  }

  ToUserInfo(): UserInfo{
    return new UserInfo(this.Id,this.Email,this.Name,this.SurName,this.BirthDate,this.JobDetails,this.GovernmentDocument!);
  }
}
