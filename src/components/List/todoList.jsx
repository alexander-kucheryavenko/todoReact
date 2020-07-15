import React from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";

const TodoList = (props) => {
    const {todoList, changeItemStatus} = props;

    const finishItem = todoList.map((el) =>
        <div>
            <li key={el.id}>
                <Checkbox
                    checked = {el.status}
                    onChange = {(check) => changeItemStatus(el, check)}
                />
                <label>{el.name}</label>
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