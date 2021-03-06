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

  subscription: Subscription;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => this.books = books);
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBookToList(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }
}
