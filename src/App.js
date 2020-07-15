import React, {useState} from 'react';
import './App.css';

import TodoList from "./components/List/todoList";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Checkbox from "./checkbox2";

var count = 1;

function App() {

    //console.log("com App");

    const [todos, setTodos] = React.useState([]);  //содержит в себе список todos первоначальный
    const [value, setValue] = React.useState('');  // хранит текущее значение input
    const [stateButton, setStateButton] = React.useState('All');
    //const [todosFilter, setTodosFltr] = React.useState([]);

    /*const filterList = () => {  //метод изменения вывода списка в  зависимости от таба (НЕ РАБОТАЕТ)

        if(stateButton === 'Active'){
            setTodosFltr([todos.filter(el => el.status === 'Active')]);  //заменить arr на массив todosFltr

            for(let i = 0; i < todosFilter.length; i++){
                console.log("TodosFilter listActive:  ID = " + todosFilter[i].id + " Name = " + todosFilter[i].name + " Status = " + todosFilter[i].status + " i = " + i);
            }
        }
        if(stateButton === 'Completed'){
            setTodosFltr([todos.filter(el => el.status === 'Completed')]);
        }
        if(stateButton === 'All'){
            setTodosFltr([todos]);
        }

    }*/


    const setTab = (e) => {   //установка текущего таба     //работает
        setStateButton(e);
    }

    const inputItem = (event) => setValue(event.target.value); //здесь хранятся значения из input


    const changeItemStatus= (item, check) => {  //

        console.log(item.id + " " + item.name);
        const newStatus = check.target.checked;
        const newTodoList = todos.map((el) => el.id === item.id ? {...el, status: newStatus} : el);
        setTodos(newTodoList);
        // здесь будет изменение общего количества элементов (counter)
    }


    // метод возвращает лист todos в зависимости от текущего таба
    const getList = () => {
        return stateButton === 'Active' || stateButton === 'Completed'
            ? todos.filter(el => stateButton === 'Completed' ? el.status : !el.status) : todos;
    }



    // функция нажатия на Enter
    const handleKeyDown = (e) =>{

        if(e.key === 'Enter'){
            addNewTodoTest();  //создание нового элемента
            //filterList();   //
            setValue('');
        }
    }

    // создание нового элемента для todos
    const addNewTodoTest = () => {
        if(value.trim() !== ''){
            setTodos([...todos, {id: count, name: value, status: false}]);
           /* for(let i = 0; i < todos.length; i++){
                console.log("App.js: AddNewTodo: Todos list:  ID = " + todos[i].id + " Name = " + todos[i].name + " Status = " + todos[i].status + " i = " + i);
                console.log(" .... ")
                console.log(" .... ")
            }*/
            count++;

        }else return;

    }


    // обработка нажатия кнопок установления табов
    const bAllOnClick = () => {
       setTab('All');

    }
    const bActiveOnClick = () => {
        setTab('Active');
    }
    const bCompletedOnClick = () => {
        setTab('Completed');
    }


    const bClear = () => {
        // здесь будет метод для удаления всех элементов из списка со статусом true

        const arr = todos.map(el => el.status !== false ? el.delete : el);   //проверить на работоспособность!!

        setTodos(arr);
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
                  todoList = {getList()}
                  changeItemStatus = {changeItemStatus}

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

