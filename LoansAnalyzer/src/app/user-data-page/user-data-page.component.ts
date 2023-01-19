import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {UserInfo} from "../shared/models/userInfo";
import {JobDetails} from "../shared/models/jobDetails";
import {GovernmentDocument} from "../shared/models/governmentDocument";
import {SecurityService} from "../shared/security/security.service";
import {AppUserAuth} from "../security/app-user-auth";
import {tap} from "rxjs";
import {userType} from "../shared/enums/userType";

@Component({
  selector: 'user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.css'],
})
export class UserDataPageComponent {
  // Paths for API
  private path = environment.apiUrl;
  readonly jobType_URL = this.path + 'UserInfo/JobTypes';
  readonly idType_URL = this.path + 'UserInfo/GovernmentDocumentTypes';

  hide = true;
  saveError = false;
  saveSuccess = false;

  jobbs: JobType[] = [];
  idds: IdType[] = [];
  userInfo: UserInfo;
  emptyUser: UserInfo;

  constructor(private http: HttpClient,
    private securityService: SecurityService
  ) {

    this.http.get(this.jobType_URL).subscribe((data) => {
      (data as Object[]).forEach((element) => {
        this.jobbs.push(new JobType(element));
      });
    });

    this.http.get(this.idType_URL).subscribe((data) => {
      (data as Object[]).forEach((element) => {
        this.idds.push(new IdType(element));
      });
    });

    this.emptyUser = new UserInfo(
      '123',
      'e-mail',
      null,
      null,
      null,
      new JobDetails('123', 1111, null, 'Director', null, null),
      new GovernmentDocument('123', 1111, null, 'DrivingLicense', null)
    );
    this.userInfo = this.emptyUser;
  }


  //Form Controls

  NameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z]+'),
    Validators.minLength(3),
  ]);
  SurNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z]+'),
    Validators.minLength(3),
  ]);
  BirthDateControl = new FormControl('', [Validators.required]);
  JobTypeControl = new FormControl('', [Validators.required]);
  JobStartDateControl = new FormControl('', [Validators.required]);
  JobEndDateControl = new FormControl('', []);
  GovDocumentTypeControl = new FormControl('', [Validators.required]);
  GovDocumentNumberControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+'),
    Validators.minLength(12),
  ]);


  //Error messages

  getNameErrorMessage() {
    if (this.NameControl.hasError('required')) return 'Należy podać imię';
    if (this.NameControl.hasError('pattern'))
      return 'Imię powinno zawierać tylko litery';
    if (this.NameControl.hasError('minlength'))
      return 'Imię powinno zawierać conajmniej 3 litery';
    return '';
  }

  getSurNameErrorMessage() {
    if (this.SurNameControl.hasError('required'))
      return 'Należy podać nazwisko';
    if (this.SurNameControl.hasError('pattern'))
      return 'Nazwisko może zawierać tylko litery';
    if (this.SurNameControl.hasError('minlength'))
      return 'Nazwisko powinno zawierać conajmniej 3 litery';
    return '';
  }

  getBirthDateErrorMessage() {
    if (this.BirthDateControl.hasError('required'))
      return 'Należy podać datę urodzenia';
    return '';
  }
  getJobStartDateErrorMessage() {
    if (this.JobStartDateControl.hasError('required'))
      return 'Należy podać datę rozpoczęcia pracy';
    return '';
  }
  getJobTypeErrorMessage() {
    if (this.JobTypeControl.hasError('required')) return 'Należy się zatrudnić';
    return '';
  }
  getGovDocumentTypeErrorMessage() {
    if (this.GovDocumentTypeControl.hasError('required'))
      return 'Należy wybrac typ dokumentu';
    return '';
  }

  getGovDocumentNumberErrorMessage() {
    if (this.GovDocumentNumberControl.hasError('required'))
      return 'Należy podać numer dokumentu';
    if (this.GovDocumentNumberControl.hasError('minlength'))
      return 'numer dokumentu powinien posiadać conajmniej 12 cyfr';
    return this.GovDocumentNumberControl.hasError('pattern')
      ? 'Numer dokumentu może zawierać tylko litery'
      : '';
  }
  // Form submission function
  SubmitForm() {
    this.saveError=true;
    if(this.NameControl.valid&&
      this.SurNameControl.valid&&
      this.BirthDateControl.valid&&
      this.JobTypeControl.valid&&
      this.JobStartDateControl.valid&&
      this.JobEndDateControl.valid&&
      this.GovDocumentTypeControl.valid&&
      this.GovDocumentNumberControl.valid
      )this.saveError=false;


    this.userInfo.Name = this.NameControl.value!;
    this.userInfo.SurName = this.SurNameControl.value!;
    this.userInfo.BirthDate = this.BirthDateControl.value!;
    this.userInfo.JobDetails.Name = this.JobTypeControl.value!;
    this.userInfo.JobDetails.StartDate = this.JobStartDateControl.value!;
    this.userInfo.JobDetails.EndDate = this.JobEndDateControl.value!;
    this.userInfo.GovernmentDocument.Name = this.GovDocumentTypeControl.value!;
    this.userInfo.GovernmentDocument.Number = this.GovDocumentNumberControl.value!;

    if (!this.saveError) {
      this.saveSuccess = true;

      this.userInfo.GovernmentDocument.TypeId = this.idds.find((obj) => {
        return obj.name === this.userInfo.GovernmentDocument.Name;
      })!.id;
      this.userInfo.GovernmentDocument.Description = this.idds.find((obj) => {
        return obj.name === this.userInfo.GovernmentDocument.Name;
      })!.descripion;

      this.userInfo.JobDetails.TypeId = this.jobbs.find((obj) => {
        return obj.name === this.userInfo.JobDetails.Name;
      })!.id;
      this.userInfo.JobDetails.Description = this.jobbs.find((obj) => {
        return obj.name === this.userInfo.JobDetails.Name;
      })!.descripion;

      //update Original UserData

      //update Database

      console.log(JSON.stringify(this.userInfo));
      console.log(this.userInfo);
    }
  }

  DiscardForm() {
    window.location.reload();
  }

  handleFormSubmit(){
    const userInfoUrl = this.path + '/' + this.securityService.securityObject.id + '/additionalInfo';

    this.http.post<UserInfo>(
      this.path + "User/LoginWithGoogle",
      JSON.stringify(this.userInfo),
      { headers: new HttpHeaders().set('Content-type', 'application/json') });
  }

}

export class JobType {
  public id: number;
  public name: string;
  public descripion: string;

  constructor(response: any) {
    this.id = response.id;
    this.name = response.name;
    this.descripion = response.description;
  }
}

export class IdType {
  public id: number;
  public name: string;
  public descripion: string;

  constructor(response: any) {
    this.id = response.id;
    this.name = response.name;
    this.descripion = response.description;
  }
}
