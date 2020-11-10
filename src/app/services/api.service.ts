import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksI } from '../models/books';
import { ChapterI } from '../models/chapter-i';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://the-one-api.dev/v2';

  constructor(private http: HttpClient) {
    console.log('service ready');
  }

  getBooks(): Observable<BooksI>{
    const urlApi = this.urlApi + '/book';
    return this.http.get<BooksI>(urlApi);
  }

  // tslint:disable-next-line: typedef
  getBooksId(id){
    const urlApi = this.urlApi + '/book' + id;
    return this.http.get(urlApi);
  }

  getChapter(name): Observable<ChapterI>{
    const urlApi = this.urlApi + '/book' + name + '/chapter';
    return this.http.get<ChapterI>(urlApi);
  }

}
