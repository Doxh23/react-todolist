import React from 'react'

export default function Form({clickHandler, inputRef}) {
    
    return (
        <div>
    <input type="text" ref={inputRef} placeholder="Write a new todo" />
  <button onClick={clickHandler} >add to Todolist</button> 
        </div>
    )
}
