import React from 'react'

const TodoList = ({todo, toggleTodo}) => {
    return (
        <li 
         onClick={() => toggleTodo(todo)} 
            className='collection-item'
            style={{
                textDecoration: todo.done ? 'line-through' : null,
            }}
         >
            {todo.text}
        </li>
    )
}

export default TodoList