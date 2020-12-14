import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { MovieI } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  name;
  movies: MovieI;
  selected;
  nomitations;
  wins;
  revenue;
  budget;
  tomatoes;
  time;
  id ;

  constructor(private api: ApiService) {
    this.name = new FormControl('');
   }

  ngOnInit(): void {
    this.api.getMovies().subscribe( data => {
      this.movies = data['docs'];
    });
    console.log(this.movies)
  }

  selectedMovie() {
    console.log(this.name.value);
      this.nomitations = this.selected.academyAwardNominations;
      this.wins = this.selected.academyAwardWins;
      this.revenue = this.selected.boxOfficeRevenueInMillions;
      this.budget = this.selected.budgetInMillions;
      this.tomatoes = this.selected.rottenTomatesScore;
      this.time = this.selected.runtimeInMinutes;
  }

}
