import React from "react";
import Button from "../Button/button";
import {render} from "react-dom";
import List from "../List/list";
import Button2 from "../Button/button";

/*const List = (items = []) => {
        console.log(items.length);
        if (items.length > 0) {
                return (
                    <ul>
                            {
                                    items.map((el) =>
                                        <li>{el.name}</li>
                                    )
                            }
                    </ul>
                )
        } else {
                return null
        }

}*/





const _App = () => {

    const [todos, setTodos] = React.useState([]);  //содержит в себе список todos

    const addNewTodo = (value) => {             //метод обновляет массив элементов todos
        setTodos([...todos, {text: value}])
    }


    return( //
        //возвращает от инпута новые туду
        //передает в компонент туду массив с todos созданный в App
        <>
            <_Input addNewTodo={addNewTodo} />
            <_TodoList  todos={todos}/>
            </>
    )
}

const _TodoList = props => {
    return props.todos.map(todo => <div>{todo}</div>)  //отрисовывает элементы arr, которые передали из App в отдельных элементах
}

const _Input = (props) => {  //

    const  keyDownHandler = () => {  //при нажатии клавиши энтер считывает из инпута значение и вызывает метед из родит компонента addNewTodo
        if ('enter') {
            props.addNewTodo('input value')
        }
    }

    return (  // при отпускании кнопки вызывает метод, которому передает текст из инпута Созданного ЗДЕСЬ
        <div onKeyDown={keyDownHandler}>
            <input type="text"/>
        </div>
    )
}




















const Input = () => {

        const [listItem, setList] = React.useState([])


        /*const addToList = () => {
                console.log("addToList!");
                console.log("list item = " + listItem);
                /*let newList = list;
                newList.push({id:0, name: "A_1", statusItem: 0})
                setList(newList);
                console.log(newList);
        }*/

        return(
            <>

                <input onKeyUp={(event) => {
                    console.log(event.target.value);

                    listItem.push(...listItem, text);
                    console.log("list item = " + listItem);

                }} placeholder='Add todo'/>

                <button onClick = {(e) => {
                        //addToList();
                        // return (<List item = {list}/>)
                }}>Add</button>


                <List list = {listItem} />

                </>
        )

}
export default Input;










/*const ListItem = () => {
        return (
            <li>list item</li>
        )
}*/




/* {list.map((el) => {
                    return (
                        <li>{el.id}</li>
                    )
                })}*/




/*import React from "react";
​
const Input = () => {
        const [list, setList] = React.useState([1, 2, 3]) //0: active, 1: completed
​
        const addToList = () => {
                setList([...list, 4])
        }
​
        return(
            <>
                <input onClick={() => addToList()} onKeyDown={(event) => {
                        console.log(event.target.value);
                }} placeholder='Add todo'/>
                        {list.map((el) => {
                                return (
                                    <li>{el}</li>
                                )
                        })}
             </>
        )
}
​
*/