import React from 'react'
import Todo from './Todo'
export default function Todolist({todos,togglechk}) {

    return (
        <>
      <ul>
        {todos.map((todo)=>
         <Todo key={todo.id} todo={todo} togglechk={togglechk} />
        
       )}
      </ul>
        </>
    )
}
