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
  lotr1 = false;
  lotr2 = false;
  lotr3 =false;
  hobbit1 = false;
  hobbit2 = false;
  hobbit3 = false

  constructor(private api: ApiService) {
   }

  ngOnInit(): void {
    this.api.getMovies().subscribe( data => {
      this.movies = data['docs'];
      this.moviesApi.push(this.movies);
      this.moviesApi[0].splice(0,1);
      this.moviesApi[0].splice(0,1);
      this.moviesApi[0].reverse();
    });
    console.log(this.moviesApi);
  }

  selectedMovie() {
    this.click = true;
    this.selected = this.name;
    console.log(this.selected);
    this.lotr1 = false;
    this.lotr2 = false;
    this.lotr3 =false;
    this.hobbit1 = false;
    this.hobbit2 = false;
    this.hobbit3 = false
    if (this.selected._id === "5cd95395de30eff6ebccde58"){
      this.hobbit1 = true;
    }
    else if(this.selected._id === "5cd95395de30eff6ebccde59"){
      this.hobbit2 = true;
    }
    else if(this.selected._id === "5cd95395de30eff6ebccde5a"){
      this.hobbit3 = true;
    }
    else if(this.selected._id === "5cd95395de30eff6ebccde5b"){
      this.lotr2 = true;
    }
    else if(this.selected._id === "5cd95395de30eff6ebccde5c"){
      this.lotr1 = true;
    }
    else if(this.selected._id === "5cd95395de30eff6ebccde5d"){
      this.lotr3 = true;
    }
  }


}
