export class GovernmentDocument{
  constructor(
    public TypeId: number,
    public Name: string|null,
    public Description: string,
    public Number: string|null
  ){}
}
