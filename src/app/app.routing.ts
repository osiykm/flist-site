import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthorsComponent} from './authors/authors.component';
import {CategoriesComponent} from './categories/categories.component';
import {BooksComponent} from './books/books.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'books', component: BooksComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
