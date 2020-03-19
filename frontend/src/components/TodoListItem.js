import React, { memo } from "react";

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = memo(props => (
  <ListItem divider={props.divider}>
    <ListItemText primary={props.todoName} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

export default TodoListItem;
