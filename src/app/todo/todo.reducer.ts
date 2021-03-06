import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {

  switch (action.type) {
    case fromTodo.ADD_TODO:
      if (action instanceof fromTodo.AddTodoAction) {
        const todo = new Todo(action.text);
        return [...state, todo];
      }
      return state;
    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (!(action instanceof fromTodo.ToggleTodoAction) || todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        if (action instanceof fromTodo.ToggleAllTodoAction) {
          return {
            ...todoEdit,
            completed: action.completed
          };
        }
      });
    case fromTodo.EDIT_TODO:
      return state.map(todoEdit => {
        if (action instanceof fromTodo.EditTodoAction && todoEdit.id === action.id) {
          return {
            ...todoEdit,
            text: action.text
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.DELETE_TODO:
      return state.filter(todoEdit => action instanceof fromTodo.DeleteTodoAction && todoEdit.id !== action.id);
    case fromTodo.DELETE_ALL_COMPLETED_TODO:
      return state.filter(todoEdit => !todoEdit.completed);
    default:
      return state;
  }
}
