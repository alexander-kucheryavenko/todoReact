import React from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";

const TodoList = (props) => {
    const {todoList, changeItemStatus, deleteItem} = props;

    const finishItem = todoList.map((el) =>
        <div>
            <li key={el.id}>
                <Checkbox
                    checked = {el.status}
                    onChange = {(check) => changeItemStatus(el, check)}
                />
                <label>{el.name}</label>
                <Button
                    onClick = {(click) => deleteItem(el.id)}
                    name = "delele"
                />
            </li>
        </div>
    )

    return(
        <>
            {finishItem}
        </>
    );
}
export default TodoList;