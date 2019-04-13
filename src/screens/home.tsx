import React from "react";
import { createStructuredSelector } from "reselect";
import { AppState, getTodoList } from "../store/reducers";
import { Todo } from "../models";
import { connect } from "react-redux";

interface HomeScreenProps {
  todos: Todo[];
}

export const homeScreenSelector = createStructuredSelector<
  AppState,
  HomeScreenProps
>({
  todos: getTodoList
});

export const HomeScreen = ({ todos }: HomeScreenProps) => (
  <div>
    this is the homescreen you can now dow something with your todos
    <ul>
      {todos.map(todo => (
        <li>{todo.summary}</li>
      ))}
    </ul>
  </div>
);

export default connect(homeScreenSelector)(HomeScreen);
