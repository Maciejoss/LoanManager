import { HttpClient, HttpXhrBackend} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IdType } from "./IdType";

export class IdTypeService {
constructor(){}

private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
private static readonly idType_URL = environment.apiUrl + 'UserInfo/GovernmentDocumentTypes';

static async PopulateIdsDropdown() : Promise<IdType[]>{

  let IdTypes:IdType[] = []

  let data = await this.http.get(this.idType_URL).toPromise();

  (data as Object[]).forEach((element) => {
    IdTypes.push(new IdType(element));
  });

  return IdTypes;
}
}
