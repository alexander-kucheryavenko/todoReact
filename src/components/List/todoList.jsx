import React from "react";


const TodoList = (props) => {
   // console.log("com Todolist");

    //let arr = props.todoList;
    return(
        props.todoList.map(el =>

            <li>{el.name}</li>)
    )
}

export default TodoList;