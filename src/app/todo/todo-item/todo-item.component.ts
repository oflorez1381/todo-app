import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {DeleteTodoAction, EditTodoAction, ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textInputRef') textInputRef: ElementRef;

  checkField: FormControl;
  textInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkField.valueChanges.subscribe( () => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.editing = true;
    setTimeout( () => { this.textInputRef.nativeElement.select(); }, 1);
  }

  finishEdition() {
    this.editing = false;

    if (this.textInput.invalid || (this.textInput.value === this.todo.text)) { return; }

    const action = new EditTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
