export class Category {
  name: String;
  code: String;


  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.code = obj && obj.name || null;
  }
}
