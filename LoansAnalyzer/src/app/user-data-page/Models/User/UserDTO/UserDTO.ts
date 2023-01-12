import { JobDetailsDTO } from "./JobDetailsDTO";
import { GovernmentDocumentDTO } from "./GovernmentDocumentDTO";
import { UserInfo } from "src/app/Models/UserInfo/UserInfo";

export class UserDTO {
  constructor(
  public Id:string,
  public Name: string,
  public SurName: string,
  public Email: string,
  public BirthDate: string,
  public JobDetails: JobDetailsDTO,
  public GovernmentDocument: GovernmentDocumentDTO){
  }

  ToUserInfo():UserInfo{
    return new UserInfo(this.Id,this.Email,this.Name,this.SurName,this.BirthDate,this.JobDetails,this.GovernmentDocument);
  }
}
