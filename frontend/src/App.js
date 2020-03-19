import React, { memo, useEffect } from "react";
import { useInputValue, useTodos } from "./store";
import {AddTodo, TodoList}  from "./components";

const App = memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, getTodos, removeTodo } = useTodos();

  useEffect(() => getTodos());

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  const removeAndRetrieveTodos = idx => {
    removeTodo(idx);
  }

  return (
      <div className="main-container">
      <AddTodo 
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemRemove={idx => removeAndRetrieveTodos(idx)}
      />
      </div>
  );
});

export default App;
