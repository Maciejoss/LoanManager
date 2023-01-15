import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobType } from '../Models/JobTypes/JobType';
import { IdType } from '../Models/IdTypes/IdType';
import { IdTypeService } from '../Models/IdTypes/IdType-service';
import { JobTypeService } from '../Models/JobTypes/JobType-service';
import { ErrorMessagesProvider } from './ErrorMessagesProvider';
import { GovernmentDocument, JobDetails, UserInfo } from 'src/app/models/models';


@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent {

  hide = true;
  saveError = false;
  saveSuccess = false;

  jobTypes: JobType[] = [];
  idTypes: IdType[] = [];
  userInfo: UserInfo;
  emptyUser: UserInfo;
  filledUser: UserInfo;

  errorMessagesProvider = new ErrorMessagesProvider();

  async GetIdDropdownOptions(){
    this.idTypes = await IdTypeService.PopulateIdsDropdown();
  }

  async GetJobDropdownOptions(){
    this.jobTypes = await JobTypeService.PopulateJobsDropdown();
  }

  constructor() {

    this.GetIdDropdownOptions();
    this.GetJobDropdownOptions();

    this.emptyUser = new UserInfo(
      '123',
      'e-mail',
      null,
      null,
      null,
      new JobDetails('123', 1111, null, 'Director', null, null),
      new GovernmentDocument('123', 1111, null, 'DrivingLicense', null)
    );

    this.filledUser = new UserInfo(
      '123',
      'e-mail',
      'Maciej',
      'Placek',
      'data',
      new JobDetails('123', 123, 'dokument', 'Director', 'null', 'null'),
      new GovernmentDocument('123', 123, 'null', 'DrivingLicense', 'null')
    );

    this.userInfo = this.filledUser;
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

  getErrorMessage(fieldName:string,control:FormControl){
    if(control.hasError('required'))return this.errorMessagesProvider.GetRequiredErrorMessage(fieldName);
    if(control.hasError('pattern'))return this.errorMessagesProvider.GetPatternErrorMessage(fieldName);
    if(control.hasError('minlength'))return this.errorMessagesProvider.GetMinLengthErrorMessage(fieldName);
    return '';
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


    this.userInfo.name = this.NameControl.value!;
    this.userInfo.surname = this.SurNameControl.value!;

    this.userInfo.birthDate = this.BirthDateControl.value!;

    this.userInfo.jobDetails.name = this.JobTypeControl.value!;

    this.userInfo.jobDetails.startDate = this.JobStartDateControl.value!;

    this.userInfo.jobDetails.endDate = this.JobEndDateControl.value!;

    this.userInfo.governmentDocument.name = this.GovDocumentTypeControl.value!;

    this.userInfo.governmentDocument.number = this.GovDocumentNumberControl.value!;

    if (this.saveError == false) {
      this.saveSuccess = true;

      this.userInfo.governmentDocument.typeId = this.idTypes.find((obj) => {
        return obj.name === this.userInfo.governmentDocument.name;
      })!.id;
      this.userInfo.governmentDocument.description = this.idTypes.find((obj) => {
        return obj.name === this.userInfo.governmentDocument.name;
      })!.descripion;

      this.userInfo.jobDetails.typeId = this.jobTypes.find((obj) => {
        return obj.name === this.userInfo.jobDetails.name;
      })!.id;
      this.userInfo.jobDetails.description = this.jobTypes.find((obj) => {
        return obj.name === this.userInfo.jobDetails.name;
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
}
