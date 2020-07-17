import React from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
//import "../../App.css"
import "./list.css"


const TodoList = (props) => {
    const {todoList, changeItemStatus, deleteItem} = props;

    return(
        <div class="view">
            <ul className = "todo-list">
                {todoList.map((el) =>
                    <li className="todo-li" key={el.id}>
                        <div>
                            <Checkbox
                                className="toggle"
                                checked = {el.status}
                                onChange = {(check) => changeItemStatus(el, check)}
                            />
                            <span className="spanTodoName">{el.name}</span>
                        </div>

                        <Button
                            className = "destroy"
                            onClick = {(click) => deleteItem(el.id)}
                            name = ""
                        />
                    </li>
                )}
            </ul>

        </div>




    );
}
export default TodoList;