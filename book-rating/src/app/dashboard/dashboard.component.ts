import { Observable } from 'rxjs/Observable';
import { BookStoreService } from './../shared/book-store.service';
import { BookComponent } from './../book/book.component';
import { ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Book } from '../shared/book';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  books$: Observable<Book[]>;

  subscription: Subscription;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => this.books = books);

    this.books$ = this.bs.getAll()

      // this.bs.deleteAll().subscribe();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBookToList(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }
}
