import * as si from 'seamless-immutable';

export interface IAppState {

  counterState?: CounterState;

  // booksState?: BookState
  // TODO: weitere reducer
}

export type CounterState = si.Immutable<{
  current: number // !
}>;

// TODO: BookState



/* BEISPIEL

{
  counterState: {
    current: 0
  },
  booksState: {
    books: []
  }
  router: any
}


*/
