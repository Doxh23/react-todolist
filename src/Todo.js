import React from 'react'
export default function todo({togglechk,todo}) {
    function handletodo(){
      togglechk(todo.id)

      }
    return (
        <>
             <li>
          <input type="checkbox"  onClick={handletodo}  defaultChecked={todo.complete} /> {todo.name}
          
        </li>
        </>
    )
}
