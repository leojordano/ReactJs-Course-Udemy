import React from "react";
import { connect } from 'react-redux'
import { setText, addTodo } from '../actions'

const  TodoForm = ({ text, setText, addTodo }) => {
    return(
        <form
          className='row'
          onSubmit={e => {
            e.preventDefault()
            addTodo(text)
          }}> 
            <div className='input-field col s10'>
              <label htmlFor="todo-input">Novo Todo</label>
              <input id='todo-input' value={text} type='text' onChange={e => setText(e.target.value)} />
            </div>

            <div className='input-field col s2'>
              <button className='btn waves-effect waves-light' type='button' onClick={() => addTodo(text)}>Salvar</button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
  return {
    text: state.text
  }
}

const mapDispatchToProps = { setText, addTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)