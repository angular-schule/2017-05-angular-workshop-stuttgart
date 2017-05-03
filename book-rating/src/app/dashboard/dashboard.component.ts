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
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  books: Book[];

  @ViewChild(BookComponent)
  firstBookComponent: BookComponent;

  subscription: Subscription;

  constructor() { }

  ngOnInit() {

    // soll sortiert werden!
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3)
    ];
  }

  ngAfterViewInit() {
    this.subscription = this.firstBookComponent.rated.subscribe((book: Book) => {
      console.log(book);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
