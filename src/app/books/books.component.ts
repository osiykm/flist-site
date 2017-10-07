import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from '../objects/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('http://localhost:5050/books').subscribe((res: Response) => {
      this.books = res.json()['_embedded'].books;
    });
  }
}
