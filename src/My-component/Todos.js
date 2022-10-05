import React from 'react'
import Todo_item from './Todo_item'

export const Todos = (props) => {
  return (
    <div className='container'>
    <h3 className='text-center mt-5'>Todos List</h3>
    {props.todos.length === 0 ?"No todos to Display":
    props.todos.map((todo)=>{
        return  <Todo_item todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
    })}

    </div>
  )
}

