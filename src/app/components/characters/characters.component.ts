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
  frodo: CharactersI;
  aragorn: CharactersI;
  legolas: CharactersI;
  gimli: CharactersI;
  gandalf: CharactersI;
  gollum: CharactersI;
  charactersApi= [];
  characters= [];
  selected: CharactersI;
  click = false;
  constructor(private api: ApiService) {
    
   }

  ngOnInit(){
    this.api.getCharapters().subscribe( data => {
      this.characters = data['docs'];
      this.charactersApi.push(this.characters);
      this.frodo = this.selected = this.charactersApi[0].filter(x => x.name === "Frodo Baggins"),
      this.aragorn = this.selected = this.charactersApi[0].filter(x => x.name === "Aragorn II Elessar"),
      this.legolas = this.selected = this.charactersApi[0].filter(x => x.name === "Legolas"),
      this.gimli = this.selected = this.charactersApi[0].filter(x => x.name === "Gimli"),
      this.gandalf = this.selected = this.charactersApi[0].filter(x => x.name === "Gandalf"),
      this.gollum = this.selected = this.charactersApi[0].filter(x => x.name === "Gollum")
    });
    
  }
  selectedCharacter(){
    this.click = true;
    this.selected = this.name;
  }

  findCharacters(name){
    this.click = true;
    console.log(name)
    if (name === "Frodo"){
      this.selected = this.frodo[0];
    }
    else if (name === "Aragorn"){
      this.selected = this.aragorn[0];
    }
    else if (name === "Legolas"){
      this.selected = this.legolas[0];
    }
    else if (name === "Gimli"){
      this.selected = this.gimli[0];
    }
    else if (name === "Gandalf"){
      this.selected = this.gandalf[0];
    }
    else if (name === "Gollum"){
      this.selected = this.gollum[0];
    }
    else{
      console.log("no funciona")
    }
    
  }

  

}
