import { NgRedux } from '@angular-redux/store';

import { IAppState } from './../_reducers/types';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterActions {

  static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
  static DECREMENT_COUNTER = 'DECREMENT_COUNTER';
  static RESET_COUNTER = 'RESET_COUNTER';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
  }

  decrement() {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT_COUNTER });
  }

  reset() {
    this.ngRedux.dispatch({ type: CounterActions.RESET_COUNTER });
  }
}
