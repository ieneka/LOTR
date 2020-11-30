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
 books: BooksI;
 bookName: string[];
 bookIds: string[];
 name;
 book1 = false;
 book2 = false;
 book3 = false;
 selectedValue = "";

  constructor(private api: ApiService) {
    this.name = new FormControl('');
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.api.getBooks().subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.books = data['docs'];
      this.bookName = [this.books[0].name, this.books[1].name, this.books[2].name];
      this.bookIds = [this.books[0]._id, this.books[1]._id, this.books[2]._id];
    });
  }
  selectValue() {
    if (this.name.value === "The Fellowship Of The Ring"){
      this.book1 = true;
      this.book2 = false;
      this.book3 = false;
    }
    else if (this.name.value === "The Two Towers"){
      this.book1 = false;
      this.book2 = true;
      this.book3 = false;
    }
    else {
      this.book1 = false;
      this.book2 = false;
      this.book3 = true;
    }
  }
 

}
