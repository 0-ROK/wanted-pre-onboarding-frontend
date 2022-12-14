import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { ToDoItem, UpdateTodoPayload } from "../hooks/useTodo";

interface TodoListProps {
  todos: Array<ToDoItem>;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, payload: UpdateTodoPayload) => void;
  setEditTodoItem: (state: ToDoItem | false) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  updateTodo,
  setEditTodoItem,
}) => {
  return (
    <List sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <>
                <Button
                  variant="outlined"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditTodoItem(todo);
                  }}
                >
                  수정
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(todo.id);
                  }}
                >
                  삭제
                </Button>
              </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isCompleted}
                  tabIndex={-1}
                  disableRipple
                  onChange={(e) => {
                    e.preventDefault();
                    updateTodo(todo.id, {
                      todo: todo.todo,
                      isCompleted: !todo.isCompleted,
                    });
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={todo.todo} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
