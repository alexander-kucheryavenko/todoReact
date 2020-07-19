import React, {useDebugValue, useState} from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
//import "../../App.css"
import "./list.css"


const TodoList = (props) => {
    const {todoList, changeItemStatus, deleteItem, editItem} = props;

    const [readOnlyState, setReadOnly] = React.useState(true);
    const [values, setValue] = React.useState('');

    const editItem2 = (event, id) => {
        console.log("double click");
        console.log(readOnlyState);
        setReadOnly(!readOnlyState);


    }
    const alert2 = (event, id) => {

        const str = event.target.value;
        console.log("alert2: " + str);
        setValue(str);

        console.log('values: ' + 'id: ' + id);

        if(event.key === 'Enter'){
            console.log("ooooooooo")

        }
        //todoList.map((el) => el.id === id ? el.name = values : el);
    }

    return(
        <div class="view">
            <ul className = "todo-list">
                {todoList.map((el) =>

                    <li className="todo-li" key={el.id}>
                        <div>
                            <Checkbox
                                className="toggle"
                                checked={el.status}
                                onChange={(check) => changeItemStatus(el, check)}
                            />

                            <span className="spanTodoName">{el.name}</span>

                            <Input
                                className="item"
                                value={el.name}
                                autoFocus={false}
                                readOnly={readOnlyState}
                                handler={(event) => alert2(event, el.id)}
                                doubleClick={(ondblclick) => editItem2(ondblclick, el.id)}
                            />
                        </div>

                        <Button
                            className="destroy"
                            onClick={(click) => deleteItem(el.id)}
                            name=""
                        />
                    </li>
                    )}
            </ul>

        </div>




    );
}
export default TodoList;