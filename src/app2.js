import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";
import shortid from "shortid";
import Checkbox from "./Components/Checkbox";
import EditModal from './Components/Modal';

function App() {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [checkAll, setCheckAll] = useState(false);
    const [show, setShow] = useState(false);
    const [editedElement, setEditedElement] = useState(null);

    const counters = useRef({ total: 0, active: 0, done: 0 });

    const inputCb = (event) => setValue(event.target.value);

    // Добавление Todo

    const addNewTodo = () => {
        if (value.length) {
            const _todo = [
                ...todo,
                { done: false, id: shortid.generate(), title: value },
            ];
            count(_todo);
            setTodo(_todo);
            setValue("");
            Tabs('All')
        }
    };

    // Добавление по нажатию Enter

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTodo();
        }
    };

    // Изменение одного статуса

    const changeTodoStatus = (elem, check) => {
        const checked = check.target.checked;
        const changeOne = todo.map((item) =>
            item.id === elem.id ? { ...item, done: checked } : item
        );
        setTodo(changeOne);
        count(changeOne);

    };

    // Изменение всех статусов

    const changeAllTodoStatus = (e) => {
        const checked = e.target.checked;
        const changeAll = todo.map((item) => ({ ...item, done: checked }));
        setTodo(changeAll);
        setCheckAll(checked);
        count(changeAll);
    };

    // Проверка статуса

    useEffect(() => {
        let validate = checkAll;
        if (todo.length !== 0) todo.every((item) => (item.done ? (validate = true) : (validate = false)));
        else validate = false;
        setCheckAll(validate);
    }, [todo, value, checkAll]);

    // Active tab

    const getList = () => {
        return activeTab === 'Active' || activeTab === 'Complete'
            ? todo.filter(el => activeTab === 'Complete' ? el.done : !el.done) : todo;
    }

    const Tabs = (e) => {
        setActiveTab(e);
    };

    // Удаление Todo

    const deleteTodo = (id) => {
        const filteredTodo = todo.filter((elem) => elem.id !== id);
        setTodo(filteredTodo);
        count(filteredTodo);
    };

    // Удаление выполненых Todo

    const deleteAll = () => {
        const filteredAllTodo = todo.filter((item) => item.done !== true);
        setTodo(filteredAllTodo);
        count(filteredAllTodo);
    };

    // Count
    const count = (_todo = todo) => {
        const active = _todo.filter((item) => !item.done).length;
        const total = _todo.length;
        counters.current.total = total;
        counters.current.active = active;
        counters.current.done = total - active;
    };

    // Изменение задачи

    const openModal = (el) => {

        setEditedElement(el);
        setShow(true)
    };

    const closeModal = (id, value) => {

        setTodo(todo.map(item => item.id === id ? { ...item, title: value } : item))
        setShow(false)
    };

    return (
        <div className="todoapp" onKeyDown={handleKeyDown}>
            <header>
                <h1>todos</h1>
                <Checkbox
                    id="toggle-all"
                    className='toggle-all'
                    checked={checkAll}
                    onChange={changeAllTodoStatus} />
                <label htmlFor='toggle-all'></label>
                <Input
                    autoFocus={true}
                    placeholder="Add new todo"
                    value={value}
                    handler={inputCb}
                />
                <Button
                    className='btnAdd'
                    onClick={addNewTodo}
                    nameBtn="Add"></Button>
            </header>

            <TodoList
                activeTab={activeTab}
                todoTab={getList()}
                deleteTodo={deleteTodo}
                changeTodoStatus={changeTodoStatus}
                openModal={openModal}
            />
            <EditModal
                closeModal={closeModal}
                show={show}
                editedElement={editedElement} />

            <footer className="footer">
                <ul className="filters">

                    <Button
                        onClick={() => Tabs("All")}
                        nameBtn={`All (${counters.current.total})`}
                    />
                    <Button
                        onClick={() => Tabs("Active")}
                        nameBtn={`Active (${counters.current.active})`}
                    />
                    <Button
                        onClick={() => Tabs("Complete")}
                        nameBtn={`Complete (${counters.current.done})`}
                    />
                </ul>

                <Button
                    className='btnClear'
                    onClick={deleteAll}
                    nameBtn="Clear Completed" />
            </footer>
        </div>
    );
}

export default App;
