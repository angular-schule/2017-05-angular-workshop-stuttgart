import * as si from 'seamless-immutable';
import { Book } from '../shared/book';

export interface IAppState {

  counterState?: CounterState;
  booksState?: BookState;
  // TODO: weitere reducer
}

export type CounterState = si.Immutable<{
  current: number // !
}>;

export type BookState = si.Immutable<{
  books: Book[];
  isLoading: boolean;
}>;
