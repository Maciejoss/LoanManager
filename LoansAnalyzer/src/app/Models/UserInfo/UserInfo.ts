import { GovernmentDocument } from '../GovernmentDocument/GovernmentDocument';
import { JobDetails } from '../JobDetails/JobDetails';

export class UserInfo {
  constructor(public ub: string, //unique userID
  public Email: string|null,
  public Name: string|null,
  public SurName: string|null,
  public BirthDate: string|null,
  public JobDetails: JobDetails|null,
  public GovernmentDocument: GovernmentDocument|null){
  }
}
