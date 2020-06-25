import React from 'react';
import './App.css';

import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import { toggleTodo } from './actions'

import { connect } from "react-redux";

const todoApp = ({ todos, toggleTodo })  => {
    return (
      <div className='App'>
        <h1>Todo App</h1>
        
        <TodoForm  onAddTodo={newTodo => this.onAddTodo(newTodo)}/>

        <ul className='collection'>
          {todos.map((todo,index) => <TodoList 
              toggleTodo={() => toggleTodo(todo)} 
              key={index} 
              todo={todo}/>)}
        </ul>
      </div>
    )
  }

  function mapStateToProps(state) {
    return {
      todos: state.todos
    }
  }

  const mapDispatchToProps = { toggleTodo }

  export default connect(mapStateToProps, mapDispatchToProps)(todoApp)
