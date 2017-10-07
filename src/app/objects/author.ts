export class Author {
  name: String;
  url: String;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.url = obj && obj.url || null;
  }
}
