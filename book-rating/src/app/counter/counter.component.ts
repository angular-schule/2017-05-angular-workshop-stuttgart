import { CounterActions } from './../_actions/counter.actions';
import { IAppState } from './../_reducers/types';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CounterState } from '../_reducers/types';
import { select } from '@angular-redux/store';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // :-)
})
export class CounterComponent {

  @select()
  counterState$: Observable<CounterState>;

  // @select(['counterState', 'current'])
  // current$: Observable<number>;

  constructor(public actions: CounterActions) { }
}
