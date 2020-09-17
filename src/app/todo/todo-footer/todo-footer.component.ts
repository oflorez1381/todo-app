import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.ValidFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.ValidFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.currentFilter = state.filter;
    });
  }

  changeFilter(filter: fromFilter.ValidFilters) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }
}
