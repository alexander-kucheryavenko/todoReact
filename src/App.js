import React, {useEffect, useState} from 'react';
import './App.css';

import TodoList from "./components/List/todoList";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Checkbox from "./checkbox2";

var count = 1;

function App() {
    const [todos, setTodos] = React.useState([]);  //содержит в себе список todos первоначальный
    const [value, setValue] = React.useState('');  // хранит текущее значение input
    const [stateButton, setStateButton] = React.useState('All');
    const [checkAll, setCheckAll] = React.useState(false);

    const setTab = (e) => {   //установка текущего таба
        setStateButton(e);
    }
    const inputItem = (event) => setValue(event.target.value); //здесь хранятся значения из input

    // изменение статуса выбранных элементов
    const changeItemStatus = (item, check) => {
        console.log(item.id + " " + item.name);
        const newStatus = check.target.checked;
        const newTodoList = todos.map((el) => el.id === item.id ? {...el, status: newStatus} : el);
        setTodos(newTodoList);

        console.log("Вызов метода countActive: ");
        countActive(todos);
        // здесь будет изменение общего количества элементов (counter)
    }


    //счетчик для подчета колличества active item
    const countActive = (list) => {
        const arr = list.filter((el) => el.status !== true).length;
        console.log('@@@@' , arr);


    }

    useEffect(() => {
        const isCheckedAll = (el) => {
            return el.status
        }
        if(todos.length !== 0){
            let every = todos.every(isCheckedAll)
            if (every) {
                setCheckAll(true)
            } else {
                setCheckAll(false)
            }
        } else setCheckAll(false);
    },[todos, checkAll] );


    //изменение статусов всех элементов
    const changeAllStatus = (check) => {
        const newStatus = check.target.checked;
        if(newStatus){  //если true, то ищем элементы false и меняем на true
            console.log(todos);
            const arr = todos.map(el => el.status !== true ? {...el, status: true} : el);
            setTodos(arr);
            setCheckAll(true);
        }else {  //иначе, ищем элементы true и меняем на false
            const arr = todos.map(el => el.status !== false ? {...el, status: false} : el);
            setTodos(arr);
            setCheckAll(false);
        }
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

    //метод фильтрует список todos, присваивает выбранные элементы новому массиву и обновляет todos
    const bClear = () => {
        const arr = todos.filter((el) => el.status !== true);
        setTodos(arr);
    }

    const deleteItem = (id) => {
            const arr = todos.filter((el) => el.id !== id);
            setTodos(arr);
    }


  return (<div onKeyDown={handleKeyDown}>
          <header>
              <h1>Todos</h1>
              <Checkbox
                  checked={checkAll}
                  onChange = {(check) => changeAllStatus(check)}
              />
              <Input
                  placeHolder = "Add new item"
                  value = {value}
                  handler={inputItem}/>

          </header>

          <div>
              <TodoList
                  todoList = {getList()}
                  changeItemStatus = {changeItemStatus}
                  deleteItem = {deleteItem}
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

