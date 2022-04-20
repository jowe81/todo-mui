import logo from './logo.svg';
import { useState } from 'react';
import {
  AppBar,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';
import {v4 as uuid} from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const initialState = [
  {
    id: 1,
    title: 'Make todo app',
    complete: false,
  },
  {
    id: 2,
    title: 'Make food',
    complete:false,
  }
];

function App() {
  const [todos, setTodos] = useState(initialState);

  const addTodo = e => {
    e.preventDefault();
    if (!e.target.todoTitle.value) return;
    setTodos([...todos, 
      {
        id: uuid(),
        title: e.target.todoTitle.value,
        complete: false,
      }
    ])
    e.target.reset(); //Reset form
  }

  const deleteTodo = id => {
    setTodos(
      todos.filter(item=>item.id!==id)
    )
  }

  const completeTodo = id => {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return {...item, complete: !item.complete};
      }
      return item;
    })
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Paper elevation={0}>
        <AppBar 
          color="primary"
          position="static"
        >
          <Toolbar>
            <Typography variant="h4">
              My amazing todo app
            </Typography>
          </Toolbar>        
        </AppBar>
        <AddTodo addTodo={addTodo}>

        </AddTodo>
        <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}>

        </TodoList>
      </Paper>
    </div>
  );
}

export default App;
