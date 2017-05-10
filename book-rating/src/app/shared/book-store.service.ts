import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

import { Book } from 'app/shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) {
  }

  deleteAll(): Observable<any> {
    return this.http
      .delete(`https://book-monkey2-api.angular-buch.com/books`);
  }

  private errorHandler(error: Error | any): Observable<any> {
    console.log('*** TEST ***', error);
    return Observable.throw(error);
  }

  getAll(): Observable<Book[]> {

    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books')
      .map(response => response.json())
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating)
      ))
      .retry(5)
      .catch(this.errorHandler);
  }
}
