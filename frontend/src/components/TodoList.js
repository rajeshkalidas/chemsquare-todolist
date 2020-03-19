import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }} class="inner-container">
        <List >
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(todo.id + 1)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
