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

  private headers = new HttpHeaders({
    "Authorization": "Bearer " + "PRgx0gTyJZnerSL41Kzv",
    "Content-Type": "application/json"
    }
  );
  
  constructor(private http: HttpClient) {
    
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

  getMovies(){
    const urlApi = this.urlApi + '/movie';
    return this.http.get(urlApi, {headers: this.headers});
  }

}
