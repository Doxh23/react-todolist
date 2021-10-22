import React,{useRef,useState} from "react";
import Todolist from "./Todolist";
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const datatodo = []
  const inputRef = useRef();
  const [todos,settodos] = useState(datatodo)
console.log(useState(datatodo))
  function clickHandler() {
    let name = inputRef.current;
    if(name.value){
    const completelist = [...todos,{id:uuidv4(), name: name.value, complete:false }]
    settodos(completelist)
    console.log(todos)
    name.value = ""
    }
  
     
    
    
  }
  
  function togglechk(id){
    const newdata = [...todos]
   const data2 = newdata.find(data => data.id === id)
     data2.complete = !data2.complete
     settodos(newdata)
 }




  return (
  
     <>
     <header>
  <h3>My Todo App</h3>
  </header>
  <Form clickHandler={clickHandler} inputRef={inputRef} />
 <Todolist todos={todos} settodos={settodos} togglechk={togglechk}  />
  </>
  );
}

export default App;
