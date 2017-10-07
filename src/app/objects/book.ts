import {Author} from './author';
import {Category} from './category';

export class Book {
  name: String;
  description: String;
  url: String;
  author: Author;
  categories: Category[];
  added: Date;
  created: Date;
  updated: Date;
  size: Number;
  chapters: Number;
  status: String;
  commentary: String;
  _links: any;
}
