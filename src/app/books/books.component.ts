import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Book} from '../objects/book';
import {HttpService} from '../http.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  page: any;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.httpService.getBooks(+params.get('page')).then((res: Response) => {
          this.books = res.json()['_embedded'].books;
          this.page = res.json()['page'];
        }
      ));
  }
}
