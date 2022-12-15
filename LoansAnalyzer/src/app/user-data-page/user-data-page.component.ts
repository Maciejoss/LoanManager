import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserInfo, JobDetails, GovernmentDocument } from '../main-page/main-page.component';

@Component({
  selector: 'user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.css']
})
export class UserDataPageComponent {

  private path = environment.apiUrl;
  readonly jobType_URL = this.path+'UserInfo/JobTypes';
  readonly idType_URL = this.path+'UserInfo/GovernmentDocumentTypes';

  hide=true;
  saveError=false;
  saveSuccess=false;

  NameControl = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+"), Validators.minLength(3)]);
  SurNameControl = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+"), Validators.minLength(3)]);
  BirthDateControl = new FormControl('', [Validators.required]);
  JobTypeControl = new FormControl('', [Validators.required]);
  JobStartDateControl = new FormControl('', [Validators.required]);
  JobEndDateControl = new FormControl('', []);
  GovDocumentTypeControl = new FormControl('', [Validators.required]);
  GovDocumentNumberControl = new FormControl('', [Validators.required, Validators.pattern("[1-9]+"), Validators.minLength(12)]);

  getNameErrorMessage( ) {
    if (this.NameControl.hasError('required')) return 'Należy podać imię';
    if (this.NameControl.hasError('pattern')) return 'Imię powinno zawierać tylko litery';
    if (this.NameControl.hasError('minlength')) return 'Imię powinno zawierać conajmniej 3 litery';
    return '';
  }

  getSurNameErrorMessage( ) {
    if (this.SurNameControl.hasError('required')) return 'Należy podać nazwisko';
    if (this.SurNameControl.hasError('pattern')) return 'Nazwisko może zawierać tylko litery';
    if (this.SurNameControl.hasError('minlength')) return 'Nazwisko powinno zawierać conajmniej 3 litery';
    return  '';
  }

  getBirthDateErrorMessage( ) {
    if (this.BirthDateControl.hasError('required')) return 'Należy podać datę urodzenia';
    return'';
  }
  getJobStartDateErrorMessage( ) {
    if (this.JobStartDateControl.hasError('required')) return 'Należy podać datę rozpoczęcia pracy';
    return'';
  }
  getJobTypeErrorMessage( ) {
    if (this.JobTypeControl.hasError('required')) return 'Należy się zatrudnić';
    return'';
  }
  getGovDocumentTypeErrorMessage( ) {
    if (this.GovDocumentTypeControl.hasError('required')) return 'Należy wybrac typ dokumentu';
    return'';
  }

  getGovDocumentNumberErrorMessage( ) {
    if (this.GovDocumentNumberControl.hasError('required')) return 'Należy podać numer dokumentu';
    if (this.GovDocumentNumberControl.hasError('minlength')) return 'numer dokumentu powinien posiadać conajmniej 12 cyfr';
    return this.GovDocumentNumberControl.hasError('pattern') ? 'Numer dokumentu może zawierać tylko litery' : '';
  }

  SubmitForm(){
    this.saveError=false;

      if(this.edits[0] && this.NameControl.valid) this.SaveData(0,this.NameControl.value!);
      if(this.userInfo.Name==null) this.saveError = true;

      if(this.edits[1] && this.SurNameControl.valid)this.SaveData(1,this.SurNameControl.value!);
      if(this.userInfo.SurName==null) this.saveError = true;

      if(this.edits[2] && this.BirthDateControl.valid)this.SaveData(2,this.BirthDateControl.value!);
      if(this.userInfo.BirthDate==null) this.saveError = true;

      if(this.edits[3] && this.JobTypeControl.valid)this.SaveData(3,this.JobTypeControl.value!);
      if(this.userInfo.JobDetails.Name==null) this.saveError = true;

      if(this.edits[4] && this.JobStartDateControl.valid)this.SaveData(4,this.JobStartDateControl.value!);
      if(this.userInfo.JobDetails.StartDate==null) this.saveError = true;

      if(this.edits[5])this.SaveData(5,this.JobStartDateControl.value!);

      if(this.edits[6] && this.GovDocumentTypeControl.valid)this.SaveData(6,this.GovDocumentTypeControl.value!);
      if(this.userInfo.GovernmentDocument.Name==null) this.saveError = true;

      if(this.edits[7] && this.GovDocumentNumberControl.valid)this.SaveData(7,this.GovDocumentNumberControl.value!);
      if(this.userInfo.GovernmentDocument.Number==null) this.saveError = true;

      if(this.saveError==false){
        this.saveSuccess=true;



      this.userInfo.GovernmentDocument.TypeId = this.idds.find((obj)=>{return obj.name===this.userInfo.GovernmentDocument.Name})!.id;
      this.userInfo.GovernmentDocument.Description = this.idds.find((obj)=>{return obj.name===this.userInfo.GovernmentDocument.Name})!.descripion;

      this.userInfo.JobDetails.TypeId = this.jobbs.find((obj)=>{return obj.name===this.userInfo.JobDetails.Name})!.id;
      this.userInfo.JobDetails.Description = this.jobbs.find((obj)=>{return obj.name===this.userInfo.JobDetails.Name})!.descripion;


        //update Original UserData
        //update Database

        console.log(JSON.stringify(this.userInfo));
        console.log(this.userInfo);
      }
  }

  DiscardForm(){
    window.location.reload();
  }


  jobbs:JobType[] = [];
  idds:IdType[] = [];
  edits:boolean[];
  userInfo:UserInfo;
  emptyUser:UserInfo;
  filledUser:UserInfo;


  constructor(private http: HttpClient){
    this.http.get(this.jobType_URL).subscribe(
      data=>{
        (data as Object[]).forEach((element) =>{  this.jobbs.push(new JobType(element));});
      }
    );

    this.http.get(this.idType_URL).subscribe(
      data=>{
        (data as Object[]).forEach((element) =>{  this.idds.push(new IdType(element));});
      }
    );

    this.emptyUser = new UserInfo(
      "123","e-mail",null,null,null,
      new JobDetails("123",1111,null,"Director",null,null),
      new GovernmentDocument("123",1111,null,"DrivingLicense",null));

    this.filledUser = new UserInfo(
        "123","e-mail","Maciej","Placek","data",
        new JobDetails("123",123,"dokument","Director","null","null"),
        new GovernmentDocument("123",123,"null","DrivingLicense","null"));

    this.userInfo=this.filledUser;

    if(this.userInfo.Name==null)this.edits=[true,true,true,true,true,true,true,true]
    else this.edits=[false,false,false,false,false,false,false,false]

  }



  EnableEdit(index:any,){
    this.edits[index]=true;
  }
  DisableEdit(index:any,){
    this.edits[index]=false;
  }
  SaveData(index:any,value:string){
    switch(index){
      case 0:
        this.userInfo.Name=value;
        break;
      case 1:
        this.userInfo.SurName=value;
        break;
      case 2:
        this.userInfo.BirthDate=value;
        break;
      case 3:
        this.userInfo.JobDetails.Name=value;
        break;
      case 4:
        this.userInfo.JobDetails.StartDate=value;
        break;
      case 5:
        this.userInfo.JobDetails.EndDate=value;
        break;
      case 6:
        this.userInfo.GovernmentDocument.Name=value;
        break;
      case 7:
        this.userInfo.GovernmentDocument.Number=value;
       break;
    }

    this.DisableEdit(index);
  }

}

export class JobType {

  public id: number;
  public name: string;
  public descripion: string;

  constructor( response: any){
    this.id = response.id;
    this.name = response.name;
    this.descripion = response.description;
  }
}

export class IdType{
  public id: number;
  public name: string;
  public descripion: string;

  constructor( response: any){
    this.id = response.id;
    this.name = response.name;
    this.descripion = response.description;
  }
}

