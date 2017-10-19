import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClarityModule} from 'clarity-angular';
import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {CategoriesComponent} from './categories/categories.component';
import {AuthorsComponent} from './authors/authors.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProgramsComponent} from './programs/programs.component';
import {BookComponent} from './book/book.component';
import {HttpService} from './http.service';
import {BookEditComponent} from './modals/book-edit/book-edit.component';
import { BookCategoriesComponent } from './book-categories/book-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    CategoriesComponent,
    AuthorsComponent,
    TasksComponent,
    ProgramsComponent,
    BookComponent,
    BookEditComponent,
    BookCategoriesComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    ROUTING
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
