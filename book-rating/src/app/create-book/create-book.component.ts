import { Book } from 'app/shared/book';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent {
  book: Book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}
