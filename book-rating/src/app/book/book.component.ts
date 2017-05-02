import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  get stars(): number[] {
    return new Array(
      this.book.rating);
  };

  constructor() { }

  ngOnInit() {
  }
}
