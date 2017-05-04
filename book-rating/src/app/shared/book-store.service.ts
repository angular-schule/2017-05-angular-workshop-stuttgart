import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from 'app/shared/book';

@Injectable()
export class BookStoreService {

  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  deleteAll(): Observable<any> {
    return this.http
      .delete(`https://book-monkey2-api.angular-buch.com/books`);
  }

  getAll(): Observable<Book[]> {

    const options = new RequestOptions({ headers: this.headers });

    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books', options)
      .map(response => response.json())
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating)
      ));
  }
}
