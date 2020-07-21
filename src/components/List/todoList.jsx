import React, {useDebugValue, useState} from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
//import "../../App.css"
import "./list.css"
import TodoItem from "../TodoItem/todoItem";


const TodoList = (props) => {
    const {todoList, changeItemStatus, deleteItem, handler, setValue} = props;
    /*const updateTodos = (el, value) => {
        console.log('todoList: updateTodos: el = ' + el.name + '@@ value = ' + value);
        const arr = todoList.map(element => element.id === el.id ? el.name = value : element);

        console.log('arr ====== ' +  arr);
        setValue(arr);
    }*/
    return(
        <>
            <ul className = "todo-list">
                {todoList.map((el) =>

                    <li className="todo-li" key={el.id}>
                        <div className="div-todo-item">
                            <Checkbox
                                className="toggle"
                                checked={el.status}
                                onChange={(check) => changeItemStatus(el, check)}
                            />
                            <TodoItem   
                                el={el}
                                handler={handler}
                            />
{/*
                            <span className="spanTodoName">{el.name}</span>

                            <Input

                                className="item"
                                value={el.name}
                                autoFocus={false}
                                readOnly={readOnly}

                                doubleClick={(event) => doubleClick(event)}
                            />
*/}
                        </div>

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

/*
const TodoItem = ({el, handler}) => {

    const [readOnly, setReadOnly] = useState(true);
    const [itemName, setItemName] = useState(el.name);

    const toggleReadOnly = () => {
        setReadOnly(!readOnly);
    }


    const handleOnChange = evt => {
        const {value} = evt.target;

        setItemName(value);
    }

    const onBlurHandler = () => {
        handler(itemName, el.id);
        toggleReadOnly();
    }

    const keyDownHandler = evt => {
        switch(evt.which) {
            case 13:
                handler(itemName, el.id);
                toggleReadOnly();
                console.log('@@@@@@@@@ enter click');
                break;
            case 27:
                setItemName(el.name);
                toggleReadOnly();
                console.log('@@@@@@@@@ esc click');
                break;
            default:
                break;
        }
    }

    return (
        <input
            type="text"
            readOnly={readOnly}
            onDoubleClick={toggleReadOnly}
            value={itemName}
            onChange={handleOnChange}
            onBlur={onBlurHandler}
            onKeyDown={keyDownHandler}
        />
    )
}
*/
export default TodoList;