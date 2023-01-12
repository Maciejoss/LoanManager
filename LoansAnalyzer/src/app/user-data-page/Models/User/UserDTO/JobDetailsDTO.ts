export class JobDetailsDTO{
  constructor(
    public TypeId: number,
    public Name: string|null,
    public Description: string,
    public StartDate: string|null,
    public EndDate?: string|null,
  ){}
}
