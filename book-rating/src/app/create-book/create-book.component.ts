import { ViewChild } from '@angular/core';
import { Book } from 'app/shared/book';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent {
  book: Book = Book.empty();

  @ViewChild(NgForm)
  createBookForm: NgForm;

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.createBookForm.reset(this.book);
  }
}
