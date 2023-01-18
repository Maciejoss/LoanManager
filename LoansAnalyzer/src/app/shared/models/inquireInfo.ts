import {UserInfo} from "./userInfo";

export class InquireInfo {
  constructor(public userInfo: UserInfo,
              instalments: Int16Array,
              amount: Int16Array
  ){}
}
