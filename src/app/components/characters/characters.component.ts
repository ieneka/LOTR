import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { CharactersI } from '../../models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  name;
  characters: CharactersI;
  constructor(private api: ApiService) {
    this.name = new FormControl('');
   }

  ngOnInit(){
    this.api.getCharapters().subscribe( data => {
      this.characters = data['docs'];
      console.log(data)
    });
  }

}
