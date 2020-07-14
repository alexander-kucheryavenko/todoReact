import React, {useState} from 'react';
import './App.css';

import TodoList from "./components/List/todoList";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Checkbox from "./checkbox2";



function App() {
    //console.log("com App");
    var count = 0;

    const [todos, setTodos] = React.useState([]);  //содержит в себе список todos
    const [value, setValue] = React.useState('');  // хранит текущее значение input
    const [buttonSelect, setButton] = React.useState('');

    //создать здесь конст для выбранной кнопки (all, comle, active)


    const inputItem = (event) => setValue(event.target.value); //здесь хранятся значения из input


    // функция нажатия на Enter
    const handleKeyDown = (e) =>{

        if(e.key === 'Enter'){
            //alert("press enter");
            //добавить вызов функции добавления элемента

            console.log()
            addNewTodoTest(count);
            setValue('');
        }
    }

    const addNewTodoTest = (count) => {

        console.log("Count = " + count);

        if(value.trim() !== ''){
            setTodos([...todos, {id: 0, name: value, status: count}]);
            for(let i = 0; i < todos.length; i++){
                console.log("Todos list:  ID = " + todos[i].id + " Name = " + todos[i].name + " Status = " + todos[i].status + " i = " + i);
            }

            if(count === 0){
                count++;
            }else count--;



        }else return;

    }

    const bAllOnClick = () => {
        setButton('all')
    }
    const bActiveOnClick = () => {
        setButton('active')
    }
    const bCompletedOnClick = () => {
        setButton('completed')
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
              <TodoList
                  todoList = {todos}
                  state = {buttonSelect}
              />
          </div>


           <footer>
               <Button
                   name = "All"
                   onClick = {bAllOnClick}/>
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

