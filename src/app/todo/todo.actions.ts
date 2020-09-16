import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const EDIT_TODO = '[TODO] Edit Todo';
export const DELETE_TODO = '[TODO] Delete Todo';

export class AddTodoAction implements Action {
  readonly type: string = ADD_TODO;
  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type: string = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class EditTodoAction implements Action {
  readonly type: string = EDIT_TODO;
  constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type: string = DELETE_TODO;
  constructor(public id: number) {}
}

export type Actions = AddTodoAction |
                      ToggleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction;
