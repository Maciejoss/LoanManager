import { UserInfo } from "src/app/Models/UserInfo/UserInfo";

export class InquiryInfo {
  constructor(
    public userInfo: UserInfo,
    public instalments: number,
    public amount: number
    ){}
}
