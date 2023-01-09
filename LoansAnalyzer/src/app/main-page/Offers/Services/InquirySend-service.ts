import { OfferInfo } from '../Models/OfferInfo';
import { InquiryInfo } from '../Models/InquiryInfo';

export class InquirySendService{
  static async SendInquires(inquiry: InquiryInfo) : Promise<OfferInfo[]>{
    const o1 = new OfferInfo(1,inquiry.amount,Math.round( inquiry.amount/inquiry.instalments*1000));
    const o2 = new OfferInfo(2,inquiry.amount,Math.round( inquiry.amount/inquiry.instalments*1000));
    const o3 = new OfferInfo(3,inquiry.amount,Math.round( inquiry.amount/inquiry.instalments*1000));
    return [o1,o2,o3];
  }
}
