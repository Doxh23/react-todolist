import React from "react";
import TodoList from "./TodoList";
function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button> add to do</button>
    <button> Clear completed to do</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
