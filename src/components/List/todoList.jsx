import React, {useDebugValue, useState} from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
//import "../../App.css"
import "./list.css"
import TodoItem from "../TodoItem/todoItem";


const TodoList = (props) => {
    const {todoList, changeItemStatus, deleteItem, handler} = props;

    return(
        <>
            <ul className = "todo-list">
                {todoList.map((el) =>
                    <li className="todo-li" key={el.id}>
                        <label className="todo-label">
                            <Checkbox
                                className="toggle"
                                checked={el.status}
                                onChange={(check) => changeItemStatus(el, check)}
                            />
                            <span className="todo-span"></span>
                        </label>
                        <TodoItem
                            el={el}
                            handler={handler}
                        />

                        <Button
                            className="destroy"
                            onClick={(click) => deleteItem(el.id)}
                            name=""
                        />

                    </li>
                    )}
            </ul>

        </>

    );
}

export default TodoList;