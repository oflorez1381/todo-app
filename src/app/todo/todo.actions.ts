import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';
export const EDIT_TODO = '[TODO] Edit Todo';
export const DELETE_TODO = '[TODO] Delete Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Todo';

export class AddTodoAction implements Action {
  readonly type: string = ADD_TODO;
  constructor(public text: string) {}
}

export class EditTodoAction implements Action {
  readonly type: string = EDIT_TODO;
  constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type: string = DELETE_TODO;
  constructor(public id: number) {}
}

export class ToggleTodoAction implements Action {
  readonly type: string = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type: string = TOGGLE_ALL_TODO;
  constructor(public completed: boolean) {}
}

export type Actions = AddTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      ToggleTodoAction |
                      ToggleAllTodoAction;
