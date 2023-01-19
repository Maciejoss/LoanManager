import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { InquiryWithId } from "../Models/Inquiry/InquiryWithId";
import { Offer } from "../Models/Offer/Offer";

export class InquiryPostService{
  private static http:HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  private static readonly InquiryPost_URL = environment.apiUrl + 'Inquiry/SendInquiry';

  public static async PostInquiry(inquiry:InquiryWithId) : Promise<Offer>{
    try{
      var response = await this.http.post(this.InquiryPost_URL,inquiry,{observe: 'response'}).toPromise();
    }
    catch{
    }
    let o = new Offer(response?.body);

    return o;
  }
}
