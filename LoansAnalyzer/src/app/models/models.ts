
export class UserInfo {
    constructor(
        public ub: string, //unique userID
        public email: string | null,
        public name: string | null,
        public surname: string | null,
        public birthDate: string | null,
        public jobDetails: JobDetails,
        public governmentDocument: GovernmentDocument) { }
}

export class EmployeeInfo {
    constructor(
        public email: string,
        public name: string,
        public surname: string,
    ) { }
}

export class JobDetails {
    constructor(
        public id: string,
        public typeId: number,
        public name: string | null,
        public description: string,
        public startDate: string | null,
        public endDate?: string | null,
    ) { }
}

export class GovernmentDocument {
    constructor(
        public id: string,
        public typeId: number,
        public name: string | null,
        public description: string,
        public number: string | null
    ) { }
}

export class InquiryInfo {
    constructor(
        public inquiryID: number,
        public client: UserInfo,
        public value: string,
        public instalmentsNumber: string,
        public startDate: string,
        public endDate: string,
    ) { }
}

export class OfferInfo {
    constructor(
        public offerID: number,
        public percentage: string,
        public monthlyInstallment: string,
        public requestedValue: string,
        public requestedPeriodInMonth: string,
        public statusDescription: string,
        public inquiryID: number,
        public createDate: string,
        public updateDate: string,
        public reviewer: EmployeeInfo | null,
        //TODO: add document link
        public documentLinkValidDate: string
    ) { }
}

