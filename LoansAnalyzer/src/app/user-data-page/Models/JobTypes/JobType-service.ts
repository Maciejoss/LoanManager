import { HttpClient, HttpXhrBackend} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { JobType } from "./JobType";

export class JobTypeService {
constructor(){}

private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
private static readonly JobType_URL = environment.apiUrl + 'UserInfo/JobTypes';

static async PopulateJobsDropdown() : Promise<JobType[]>{

  let JobTypes:JobType[] = []

  let data = await this.http.get(this.JobType_URL).toPromise();

  (data as Object[]).forEach((element) => {
    JobTypes.push(new JobType(element));
  });

  return JobTypes;
}
}
