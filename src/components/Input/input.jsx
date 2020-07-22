import React from "react";
import "../../App.css"

const Input = (props) => {
    const {value, placeHolder, handler, className, autoFocus, readOnly,doubleClick, el} = props;

    const _doubleClick = () => {
        try {
            doubleClick(el);
        }catch (e) {
            return;
        }
    }

    return (
        <>
            <input
                className={className}
                value={value}
                autoFocus = {autoFocus}
                onChange={(event) => handler(event)}
                placeholder={placeHolder}
                readOnly={readOnly}
                onDoubleClick={_doubleClick}
            />
        </>
    )
}
export default Input;

















/*const _App = () => {

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
}*/






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