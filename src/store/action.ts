import { Todo } from "../models";

interface ActionWithNoPayload<Type extends string> {
  type: Type;
}

interface ActionWithPayload<Type extends string, Payload> {
  type: Type;
  payload: Payload;
}

type Action<
  Type extends string,
  Payload = undefined
> = Payload extends undefined
  ? ActionWithNoPayload<Type>
  : ActionWithPayload<Type, Payload>;

export const ADD_TODO_INTENT = "Add Todo Intent";
export type AddTodoIntentAction = Action<typeof ADD_TODO_INTENT, Todo>;
export const createAddTodoIntentAction = (todo: Todo): AddTodoIntentAction => ({
  type: ADD_TODO_INTENT,
  payload: todo
});

export const REMOVE_TODO_INTENT = "Remove Todo Intent";
export type RemoveTodoAction = Action<typeof REMOVE_TODO_INTENT, number>;
export const createRemoveTodoIntentAction = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO_INTENT,
  payload: id
});
