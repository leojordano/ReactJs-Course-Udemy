import React from 'react';
import './App.css';

import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

export default class todoApp extends React.Component {
  state = {
    todos: ['Lavar a louça', 'estudar', 'escrever'],
  }

  onAddTodo(newTodo) {
    const { todos } = this.state
    this.setState({ todos: [...todos, newTodo] })
  }

  render() {
    const { todos } = this.state

    return (
      <div className='App'>
        <h1>Todo App</h1>
        
        <TodoForm  onAddTodo={newTodo => this.onAddTodo(newTodo)}/>

        <ul>
          {todos.map((todo,index) => <TodoList key={index} todo={todo} />)}
        </ul>
      </div>
    )
  }
}
