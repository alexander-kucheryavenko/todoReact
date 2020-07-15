import React from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";


const TodoList = (props) => {

    const {todoList, changeItemStatus} = props;

    /*for(let i = 0; i < todoList.length; i++){
        console.log("TodoList: props:   ID = " + todoList[i].id + " Name = " + todoList[i].name + " Status = " + todoList[i].status + " i = " + i);
    }*/

    //console.log("TODOLIST:  Todolist toString: " + todoList);

    //console.log("Start TodoList");


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

   // const finishArr = listItem.map ...  присваиваем конечному массиву Массив-переменную и уже это массив выводим на экран
    //вместе с чекбоксами    <div>
    //                         <Checkbox />
    //                         <label>{el.name}</label>
    //                       </div>



    return(
        <>
            {finishItem}
        </>
    );
}

export default TodoList;