import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksI } from 'src/app/models/books';
import { ChapterI } from 'src/app/models/chapter-i';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 books: [];
 name;
 book1 = false;
 book2 = false;
 book3 = false;
 book4 = false;
 book5 = false;
 book6 = false;
 book7 = false;
 book8 = false;
 selectedValue : BooksI;
 booksApi = [];
 click = false;
 hobit1 = {_id:"5cf58080b53e011a64671585", name:"The Hobbit, Part One"}
 hobit2 = {_id:"5cf58080b53e011a64671586", name:"The Hobbit, Part Two"}
 silmarilion = {_id:"5cf58080b53e011a64671587", name:"The Silmarillion"};
 children = {_id:"5cf58080b53e011a64671588", name:"The Children of Húrin"};
 beren = {_id:"5cf58080b53e011a64671589", name:"Beren and Lúthien "};

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getBooks().subscribe( data => {
      this.books = data['docs'];
      this.booksApi.push(this.books);
      this.booksApi[0].push(this.hobit1,this.hobit2, this.silmarilion, this.children, this.beren);
      
    });
    console.log(this.booksApi)
  }
  selectValue() {
    this.click = true;
    this.selectedValue = this.name;
    console.log(this.selectedValue)
    if (this.selectedValue.name === "The Fellowship Of The Ring"){
      this.book1 = true;
      this.book2 = false;
      this.book3 = false;
      this.book4 = false;
      this.book5 = false;
      this.book6 = false;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Two Towers"){
      this.book1 = false;
      this.book2 = true;
      this.book3 = false;
      this.book4 = false;
      this.book5 = false;
      this.book6 = false;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Return Of The King"){
      this.book1 = false;
      this.book2 = false;
      this.book3 = true;
      this.book4 = false;
      this.book5 = false;
      this.book6 = false;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Hobbit, Part One"){
      this.book1 = false;
      this.book2 = false;
      this.book3 = false;
      this.book4 = true;
      this.book5 = false;
      this.book6 = false;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Hobbit, Part Two"){
      this.book1 = false;
      this.book2 = false;
      this.book3 = false;
      this.book4 = false;
      this.book5 = true;
      this.book6 = false;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Silmarillion"){
      this.book1 = false;
      this.book2 = false;
      this.book3 = false;
      this.book4 = false;
      this.book5 = false;
      this.book6 = true;
      this.book7 = false;
      this.book8 = false;
    }
    else if (this.selectedValue.name === "The Children of Húrin"){
      this.book1 = false;
      this.book2 = false;
      this.book3 = false;
      this.book4 = false;
      this.book5 = false;
      this.book6 = false;
      this.book7 = true;
      this.book8 = false;
    }
    else{
      this.book1 = false;
      this.book2 = false;
      this.book3 = false;
      this.book4 = false;
      this.book5 = false;
      this.book6 = false;
      this.book7 = false;
      this.book8 = true;
    }
  }
 

}
