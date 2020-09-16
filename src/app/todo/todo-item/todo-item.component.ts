import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.checkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout( () => { this.textInputRef.nativeElement.select(); }, 1);
  }

  finishEdition() {
    this.editing = false;
  }
}
