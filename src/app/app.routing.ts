import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthorsComponent} from './authors/authors.component';
import {CategoriesComponent} from './categories/categories.component';
import {BooksComponent} from './books/books.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProgramsComponent} from './programs/programs.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'books', component: BooksComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'programs', component: ProgramsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
