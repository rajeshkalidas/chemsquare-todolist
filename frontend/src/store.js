import { useState } from "react";

import axios from 'axios';

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    }
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: addtodoValue => {
      if (addtodoValue !== "") {
        axios.post('/saveTodo',{
          addtodo:addtodoValue
        })
        .then((response)=> {
          //console.log(response);
        })
        .catch((error)=> {
          console.log("error to save", error)
        })
      }
    },
    getTodos: () => {
      axios.get('/getTodo')
      .then((response)=> {
        let todos = JSON.parse(JSON.stringify(response.data))
        setTodos(todos.result)
        //console.log(todos.message)
      })
      .catch((error)=> {
        console.log("error to save", error)
      })
    },
    removeTodo: idx => {
      console.log(idx)
      axios.get('/deleteTodo',{
        params: {
          rowId: idx - 1
        }
      })
      .then((response)=> {
        console.log(response);
      })
      .catch((error)=> {
        console.log("error to save", error)
      })
    }
  };
};
