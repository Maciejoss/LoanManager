import { Component } from '@angular/core';
import { GovernmentDocument } from '../Models/GovernmentDocument/GovernmentDocument';
import { JobDetails } from '../Models/JobDetails/JobDetails';
import { UserInfo } from '../Models/UserInfo/UserInfo';
import { ClientDataProviderService } from '../services/clientDataProvider.service';
import { GovernmentDocumentDTO } from './Models/User/UserDTO/GovernmentDocumentDTO';
import { JobDetailsDTO } from './Models/User/UserDTO/JobDetailsDTO';
import { UserDTO } from './Models/User/UserDTO/UserDTO';

@Component({
  selector: 'user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.css'],
})
export class UserDataPageComponent {
  user: UserInfo = new UserInfo(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "string",
    "string",
    "string",
    "2023-01-12T11:23:56.159Z",
    new JobDetails(
       0,
      "string",
      "string",
      "2023-01-12T11:23:56.159Z",
      null
    ),
    new GovernmentDocument(
      0,
      "string",
      "string",
      "string"
    ))
  Editting: boolean = false;

      constructor(){
        this.GetClientDataFromDatabase();
      }

  async GetClientDataFromDatabase(){
    this.user = await ClientDataProviderService.GetUserDataById("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    console.log(this.user);
  }

  OnClientDataSet(eventData: UserDTO){
    this.user = eventData.ToUserInfo();
    console.log(eventData);
    this.Editting=false;
  }

  OnClientDataDiscarded(){
    this.Editting=false;
  }

  OnEditData(){
    this.Editting=true;
  }
}


