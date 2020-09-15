import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';

export class AddTodoAction implements Action {
  readonly type: string = ADD_TODO;
  constructor(public text: string) {}
}

export type Actions = AddTodoAction;
