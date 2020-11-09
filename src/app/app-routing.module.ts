import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BooksComponent } from './components/books/books.component';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'characters', component: CharactersComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
