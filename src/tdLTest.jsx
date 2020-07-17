import React from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import "./index.css";

const TodoList = (props) => {
    const { changeTodoStatus, todoTab, deleteTodo, openModal } = props;

    return (
        <div>
            <section className="main">
                <ul className="todo-list">
                    {todoTab.map((el) => (
                        <li className="todo-li" key={el.id}>
                            <Checkbox
                                className="toggle"
                                checked={el.done}
                                onChange={(check) => changeTodoStatus(el, check)}
                            />
                            <span className="todo-title" onDoubleClick={() => openModal(el)}>
                {el.title}
              </span>
                            <Button
                                className="destroy"
                                nameBtn=""
                                onClick={() => deleteTodo(el.id)}
                            ></Button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TodoList;
