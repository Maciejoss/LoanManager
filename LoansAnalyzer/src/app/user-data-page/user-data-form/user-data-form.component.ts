import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobType } from '../Models/JobTypes/JobType';
import { IdType } from '../Models/IdTypes/IdType';
import { IdTypeService } from '../Models/IdTypes/IdType-service';
import { JobTypeService } from '../Models/JobTypes/JobType-service';
import { ErrorMessagesProvider } from './ErrorMessagesProvider';
import { UserDTO } from '../Models/User/UserDTO';
import { UserPostService } from './UserPost-service';
import { JobDetails } from 'src/app/user-data-page/Models/User/JobDetails';
import { GovernmentDocument } from 'src/app/user-data-page/Models/User/GovernmentDocument';


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

    if (this.saveError == false) {

      let GovernmentDocumentTypeId = this.idTypes.find((obj) => {
        return obj.name === this.GovDocumentTypeControl.value;
      })!.id;
      let GovernmentDocumentDescription = this.idTypes.find((obj) => {
        return obj.name === this.GovDocumentTypeControl.value;
      })!.descripion;

      let JobDetailsTypeId = this.jobTypes.find((obj) => {
        return obj.name === this.JobTypeControl.value;
      })!.id;
      let JobDetailsDescription = this.jobTypes.find((obj) => {
        return obj.name === this.JobTypeControl.value;
      })!.descripion;

      let UserInfo = new UserDTO(
        "id",
        "email",
        this.NameControl.value!,
        this.SurNameControl.value!,
        this.BirthDateControl.value!,
        new JobDetails(
          JobDetailsTypeId,
          this.JobEndDateControl.value!,
          JobDetailsDescription,
          this.JobStartDateControl.value!,
          this.JobEndDateControl.value!
        ),
        new GovernmentDocument(
          GovernmentDocumentTypeId,
          this.GovDocumentTypeControl.value!,
          GovernmentDocumentDescription,
          this.GovDocumentNumberControl.value!
        )
      );

      console.log(UserPostService.PostUser(UserInfo));
    }
  }

  DiscardForm() {
    window.location.reload();
  }
}
