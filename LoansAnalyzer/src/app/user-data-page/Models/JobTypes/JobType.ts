export class JobType {
  public id: number;
  public name: string;
  public descripion: string;

  constructor(response: any) {
    this.id = response.id;
    this.name = response.name;
    this.descripion = response.description;
  }
}
