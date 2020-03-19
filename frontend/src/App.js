import React, { memo } from "react";
import { useInputValue, useTodos } from "./store";
import {AddTodo, TodoList}  from "./components";

const App = memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, getTodos, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
    getTodos();
  };

  const removeAndRetrieveTodos = idx => {
    removeTodo(idx);
    getTodos()
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