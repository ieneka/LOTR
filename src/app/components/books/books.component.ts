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
 chapters: ChapterI;
 name;

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

  // tslint:disable-next-line: typedef
  getChapters(name){
    const code = '5cf5805fb53e011a6467158';
    if (name === this.bookName[0]){
      this.api.getChapter(code + '2').subscribe( data => {
        console.log(data);
        this.chapters = data;
      });
    }else if (name === this.bookName[1]){
      this.api.getChapter(code + '3').subscribe( data => {
        this.chapters = data;
      });
    }else{
      this.api.getChapter(code + '4').subscribe( data => {
        console.log(data);
      });
    }
    console.log(this.chapters);
  }

}
