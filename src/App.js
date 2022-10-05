import './App.css';
import Header from "./My-component/Header";
import Footer from "./My-component/Footer";
import Addtodo from './My-component/Addtodo';
import {Todos} from "./My-component/Todos";
import React, { useState } from 'react';

function App() {
 const onDelete =(todo) =>{
    console.log("I am Deleted",todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, settodos] = useState(
[
    {
      sno : 1,
      title : "Goto Market",
      desc : "Go to market  to Buy Dress for brother."
    },
    {
      sno : 2,
      title : "Goto School",
      desc : "Go  to School for Studies."
    }
    ,  {
      sno : 3,
      title : "Goto Station",
      desc : "Go  to Station for Met with brother."
    }
  ]
  )
  return (
  <>
 <Header title="Todos-List" search={false}/>
 <Addtodo/>
<Todos todos = {todos} onDelete ={onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
