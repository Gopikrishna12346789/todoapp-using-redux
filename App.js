
import { useCallback, useState,useEffect,useRef ,useContext} from "react";
import React from "react";


import Todos from './components/Todos'


import  AddTodo  from './components/AddTodo.js';

function App(){
  return(
    <>
    <h1>learn about redux </h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App;