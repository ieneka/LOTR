import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  name;
  movies: string[];
  constructor(private api: ApiService) {
    this.name = new FormControl('');
   }

  ngOnInit(): void {
    this.api.getMovies().subscribe( data => {
      console.log(data)
    });
  }

}
