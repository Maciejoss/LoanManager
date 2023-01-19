import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ChangeOfferStateDTO } from "../dtos/change-offer-status";
import { InquiryInfo, OfferInfo } from "../Models/models";

@Injectable({
    providedIn: 'root'
  })
export class EmployeePageService {
    private path = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    GetInquiry(): Observable<InquiryInfo[]> {
        return this.httpClient.get<InquiryInfo[]>(this.path + 'Inquiry');
    }

    GetOffer(): Observable<OfferInfo[]> {
        return this.httpClient.get<OfferInfo[]>(this.path + 'Offer');
    }

    ChangeOfferStatus(body: ChangeOfferStateDTO): Observable<any> {
        const header = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post(this.path + 'Offer/Change/State', JSON.stringify(body), {headers: header});
    }

    GetDocument(id: number): Observable<string> {
        return this.httpClient.get(this.path + `Offer/${id}/document`, {responseType: 'text'})
    }
}