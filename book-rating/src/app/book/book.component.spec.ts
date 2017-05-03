import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from 'app/shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    // component.book = new Book('', '', ''); // SET the @Input !
    // fixture.detectChanges();
  });

  it('should forward calls to book.rateUp (stubs)', () => {

    let bookWasRatedUp = false;

    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 0,
      rateUp: () => { bookWasRatedUp = true; },
      rateDown: () => {}
    };

    component.rateUp();
    expect(bookWasRatedUp).toBe(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
