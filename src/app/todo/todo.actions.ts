import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';

export class AddTodoAction implements Action {
  readonly type: string = ADD_TODO;
  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type: string = TOGGLE_TODO;
  constructor(public id: number) {}
}

export type Actions = AddTodoAction |
                      ToggleTodoAction;
