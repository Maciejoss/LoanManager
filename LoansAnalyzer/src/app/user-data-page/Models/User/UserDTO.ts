import { JobDetails } from "./JobDetails";
import { GovernmentDocument } from "./GovernmentDocument";

export class UserDTO {
  constructor(
  public Id:string,
  public Email: string,
  public Name: string,
  public SurName: string,
  public BirthDate: string,
  public JobDetails: JobDetails,
  public GovernmentDocument: GovernmentDocument){
  }
}
