import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../objects/book';
import {Category} from '../objects/category';
import {Author} from '../objects/author';
import {Response} from '@angular/http';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  categories: Category[];
  author: Author;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.get(this.book._links['categories']['href']).then((res: Response) =>
      this.categories = res.json()['_embedded']['categories'] as Category[]);
    this.http.get(this.book._links['author']['href'])
      .then((res: Response) => this.author = res.json());

  }

  deleted() {
    this.http.delete(this.book._links['self']['href'])
      .then((res: Response) => {
        location.reload();
      });
  }

  published() {
    this.book.status = 'PUBLISHED';
    this.http.patch(this.book._links['self']['href'], this.book).then();
  }
}
