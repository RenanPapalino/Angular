export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public type: string[],
    public photo: string,
    public description: string
  ) {}
}
