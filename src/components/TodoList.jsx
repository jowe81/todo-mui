import { List, Paper } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList({todos, deleteTodo, completeTodo}) {
  return (
    <Paper>
      <List>
        {todos.map(item => (
          <TodoItem
            todo={item}
            key={item.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          >
          </TodoItem>
        ))}
      </List>
    </Paper>
  )
}
export default TodoList;