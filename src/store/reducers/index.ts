import { combineReducers } from "redux";
import { createSelector } from "reselect";
import * as fromTodos from "./todos";

export interface AppState {
  todos: fromTodos.TodoState;
}

export const appReducer = combineReducers<AppState>({
  todos: fromTodos.todoReducer
});

// Todos selectors
export const getTodosState = (state: AppState): fromTodos.TodoState =>
  state.todos;
export const getTodoList = createSelector(
  getTodosState,
  fromTodos.getTodos
);
export const getTodoLoading = createSelector(
  getTodosState,
  fromTodos.getLoading
);
