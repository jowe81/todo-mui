import { 
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material';

function TodoItem({todo, deleteTodo, completeTodo}) {

  const onDelete = () => deleteTodo(todo.id);
  const toggleComplete = () => completeTodo(todo.id);
  const completeStyle = todo.complete ? {textDecoration: "line-through"} : {};

  return (
    <ListItem divider>
      <Checkbox
        onClick={toggleComplete}
        value={todo.complete}
      />
      <ListItemText primary={todo.title} sx={completeStyle}/>
      <ListItemSecondaryAction>
        <IconButton 
          aria-label="delete today"
          onClick={onDelete}
        >
          <DeleteOutlined></DeleteOutlined>
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  );
}
export default TodoItem;