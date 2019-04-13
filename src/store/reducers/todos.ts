import { Todo } from "../../models";
import { AddTodoIntentAction, RemoveTodoAction } from "../action";

export interface TodoState {
  todos: Todo[];
  loading: boolean;
}

export type TodoStateActions = AddTodoIntentAction | RemoveTodoAction;

const INITIAL_STATE: TodoState = {
  todos: [{ completed: false, summary: "this is a task", id: 1 }],
  loading: false
};

export const todoReducer = (
  state = INITIAL_STATE,
  action: TodoStateActions
): TodoState => {
  switch (action) {
    default:
      return state;
  }
};

export const getTodos = (state: TodoState) => state.todos;
export const getLoading = (state: TodoState) => state.loading;

export default todoReducer;
