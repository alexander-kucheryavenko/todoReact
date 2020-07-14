import React from "react";
import Input from "../Input/input";
import Checkbox from "../Checkbox/checkbox";


const TodoList = (props) => {

    const {todoList, state} = props;

    //console.log("Start TodoList");

    let listItem = [];

    if(state == 'all'|| state == ''){
        listItem = todoList;
    }

    if(state == 'active'){
        alert('TODO active');

        todoList.map((el) => {
            if(el.status == 0){
                listItem.push(el);
            }
        });
    }
    if(state == 'completed'){
        todoList.map((el) => {
            if(el.status == 1){
                listItem.push(el);
            }
        });
    }


    const finishItem = listItem.map((el) =>
        <div>
            <Checkbox />
            <label>{el.name}</label>
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