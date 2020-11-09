import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WellcomeComponent } from './components/home/wellcome/wellcome.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ArticleComponent } from './components/home/article/article.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BooksComponent } from './components/books/books.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WellcomeComponent,
    NavbarComponent,
    ArticleComponent,
    CharactersComponent,
    BooksComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
