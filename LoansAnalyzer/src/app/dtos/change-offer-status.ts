export class ChangeOfferStateDTO {
    constructor(
        public id: number,
        public employeeId: string,
        public status: number
    ) { }
}