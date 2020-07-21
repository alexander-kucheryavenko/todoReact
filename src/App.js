import React, {useEffect, useRef, useState} from 'react';
import './App.css';

import TodoList from "./components/List/todoList";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Checkbox from "./components/Checkbox/checkbox";


var count = 1; // counter for id items

function App() {
    const [todos, setTodos] = React.useState([]);  //list todo items
    const [value, setValue] = React.useState('');  // values from input
    const [currentTab, setTabs] = React.useState('All');  // current Tab
    const [checkAll, setCheckAll] = React.useState(false);  // for checkbox (choose all)

    const [readOnly, setReadOnly] = React.useState(true); // for todolist component
    const [newValue, setNewValue] = React.useState('');  // values from input

    const container = useRef({all: 0, active: 0, done: 0});  // for item counter

    // set current Tab
    const setTab = (e) => {
        setTabs(e);
    }

    // values from input
    const inputItem = (event) => setValue(event.target.value);

    //change the status of selected items
    const changeItemStatus = (item, check) => {
        const newStatus = check.target.checked;
        const newTodoList = todos.map((el) => el.id === item.id ? {...el, status: newStatus} : el);
        setTodos(newTodoList);
        counter(newTodoList);
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

    },[todos, checkAll, value, container] );

    const counter = (arr) => {
        const all = arr.length;
        const active = arr.filter(el => !el.status).length;
        const completed = arr.filter(el => el.status).length;

        container.current.all = all;
        container.current.active = active;
        container.current.done = completed;
    }

    // change the statuses of all elements
    const changeAllStatus = (check) => {
        const newStatus = check.target.checked;
        let arr = [];

        if(newStatus){  //если true, то ищем элементы false и меняем на true
            arr = todos.map(el => el.status !== true ? {...el, status: true} : el);
            setTodos(arr);
            setCheckAll(true);
        }else {  //иначе, ищем элементы true и меняем на false
            arr = todos.map(el => el.status !== false ? {...el, status: false} : el);
            setTodos(arr);
            setCheckAll(false);
        }
        counter(arr);
    }

    // метод возвращает лист todos в зависимости от текущего таба
    // the function returns a list depending on the current tab
    const getList = () => {
        return currentTab === 'Active' || currentTab === 'Completed'
            ? todos.filter(el => currentTab === 'Completed' ? el.status : !el.status) : todos;
    }


    // click handling 'enter'
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            addNewTodoTest();  //создание нового элемента
            setValue('');
        }
    }


    // create new todo items
    const addNewTodoTest = () => {
        if(value.trim() !== ''){
            const arr = [...todos, {id: count, name: value, status: false}];
            setTodos([...todos, arr])

            setTodos(arr);
            count++;
            counter(arr);
        }else return;
    }

    // set Tabs on buttons
    const bAllOnClick = () => {
       setTab('All');
    }
    const bActiveOnClick = () => {
        setTab('Active');
    }
    const bCompletedOnClick = () => {
        setTab('Completed');
    }

    //remove all items
    const bClear = () => {
        const arr = todos.filter((el) => el.status !== true);
        setTodos(arr);
        counter(arr);
    }

    // remove one item
    const deleteItem = (id) => {
            const arr = todos.filter((el) => el.id !== id);
            setTodos(arr);
            counter(arr);
    }

    const updateTodos = (el, value) => {
        console.log('todoList: updateTodos: el = ' + el.name + '@@ value = ' + value);
        const arr = todos.map(element => element.id === el.id ? {...el, name: value} : element);

        console.log('arr ====== ' +  arr);
        setTodos(arr);
    }


    /*const saveNewInput = () => {
        console.log('@@@@@@@@@ save newInput');

        const arr = todos.map(el)

    }*/



  return (
      <section class="todoapp" onKeyDown={handleKeyDown}>
          <div>
              <header className="head">

                  <h1>Todos</h1>
                  <div className="divHead">
                      <Checkbox
                          className="toggle"
                          checked={checkAll}
                          onChange = {(check) => changeAllStatus(check)}
                      />
                      <Input
                          className = "new-todo"
                          placeHolder = "What needs to be done?"
                          autoFocus = {true}
                          value = {value}
                          handler={inputItem}
                      />
                  </div>
              </header>

              <section class="main">

                <TodoList
                    todoList = {getList()}
                    changeItemStatus = {changeItemStatus}
                    deleteItem = {deleteItem}
                    handler = {updateTodos}
                />

                <footer class="footer">
                      <div>
                          <ul className="filters">
                              <li>
                                  <Button
                                      name = {"All " + container.current.all}
                                      onClick = {bAllOnClick}
                                  />
                                  <Button
                                      name = {"Active " + container.current.active}
                                      onClick = {bActiveOnClick}
                                  />
                                  <Button
                                      name = {"Completed " + container.current.done}
                                      onClick = {bCompletedOnClick}
                                  />
                                  <li className="clear-comp">
                                      <Button
                                          name = "Clear components"
                                          onClick = {bClear}/>
                                  </li>
                              </li>
                          </ul>
                      </div>

                  </footer>

              </section>
          </div>
      </section>
  )
}

export default App;

