import React, {useState} from 'react';
import './App.css';

import TodoList from "./components/List/todoList";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Checkbox from "./checkbox2";



function App() {
    //console.log("com App");
    const [todos, setTodos] = React.useState([]);  //содержит в себе список todos
    const [value, setValue] = useState("");  // хранит текущее значение input



    const inputItem = (event) => setValue(event.target.value); //здесь хранятся значения из input


    // функция нажатия на Enter
    const handleKeyDown = (e) =>{

        if(e.key === 'Enter'){
            //alert("press enter");
            //добавить вызов функции добавления элемента

            console.log()
            addNewTodoTest();
            setValue('');
        }
    }

    const addNewTodoTest = () => {

        if(value.trim() !== ''){
            setTodos([...todos, {id: 0, name: value, status: 0}]);
            for(let i = 0; i < todos.length; i++){
                console.log("Todos list:  ID = " + todos[i].id + " Name = " + todos[i].name + " Status = " + todos[i].status + " i = " + i);
            }
        }else return;

    }

    const bAllOnClick = () => {
        alert("all")
    }
    const bActiveOnClick = () => {
        alert("acvtive")
    }
    const bCompletedOnClick = () => {
        alert("completed")
    }
    const bClear = () => {
        alert("clear")
    }


  return (<div onKeyDown={handleKeyDown}>
          <header>
              <h1>Todos</h1>
              <Input
                  placeHolder = "Add new item"
                  value = {value}
                  handler={inputItem}/>

          </header>

          <div>
              <Checkbox/>
              <ul>
                  <TodoList todoList = {todos}/>
              </ul>
          </div>


           <footer>
               <Button
                   name = "All"
                   onClick = {bAllOnClick}     />
               <Button
                   name = "Active"
                   onClick = {bActiveOnClick}/>
               <Button
                   name = "Completed"
                   onClick = {bCompletedOnClick}/>
               <Button
                   name = "Clear components"
                   onClick = {bClear}/>
           </footer>
         </div>
  )
}

export default App;

