export class ErrorMessagesProvider{

  GetRequiredErrorMessage(field:string){
    switch (field){
      case "Name":
        return 'Należy podać imię';
      case "Surname":
        return 'Należy podać nazwisko';
      case "BirthDate":
        return 'Należy podać datę urodzenia';
      case "JobStartDate":
        return 'Należy podać datę rozpoczęcia pracy';
      case "JobType":
        return 'Należy podać datę urodzenia';
      case "GovDocumentType":
        return 'Należy wybrać typ dokumentu';
      case "GovDocumentNumber":
        return "Należy podać numer dokumentu";
    }
    return "";
  }

  GetPatternErrorMessage(field:string){
    switch (field){
      case "Name":
        return 'Imię powinno zawierać tylko litery';
      case "Surname":
        return 'Nazwisko może zawierać tylko litery';
      case "GovDocumentNumber":
        return 'Numer dokumentu może zawierać tylko litery'
    }
    return "";
  }

  GetMinLengthErrorMessage(field:string){
    switch (field){
      case "Name":
        return 'Imię powinno zawierać conajmniej 3 litery';
      case "Surname":
        return 'Nazwisko powinno zawierać conajmniej 3 litery';
      case "GovDocumentNumber":
        return 'numer dokumentu powinien posiadać conajmniej 12 cyfr';
    }
    return "";
  }

}
