import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import {Todo} from '../model/todo.model';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [
  ]
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filter: fromFilter.ValidFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
