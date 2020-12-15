import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { MovieI } from '../../models/movie';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  name;
  movies = [];
  moviesApi = [];
  selected : MovieI;
  click = false;

  constructor(private api: ApiService) {
   }

  ngOnInit(): void {
    this.api.getMovies().subscribe( data => {
      this.movies = data['docs'];
      this.moviesApi.push(this.movies);
    });
    console.log(this.moviesApi);
  }

  selectedMovie() {
    this.click = true;
    this.selected = this.name;
    console.log(this.selected);
  }

}
