import React, {useState} from "react";

const TodoItem = (props) => {
    const {handler, el} = props;

    const [readOnly, setReadOnly] = useState(true);
    const [value, setValue] = useState(el.name);

    const handlerKeyDown = (evt) => {
        switch (evt.which) {
            case 13:
                blurHandler();
                break;
            case 27 :
                setValue(el.name);  // возвращает имя в первоначальное состояние
                break;
            default:
                break;
        }
    }

    const doubleClick = () => {
        setReadOnly(!readOnly);
    }

    const blurHandler = () => {
        if(!readOnly){
            setReadOnly(!readOnly);
        }
        handler(el, value);
    }
    const handlerChange = (evt) => {
        const str = evt.target.value;
        setValue([str]);
    }

    return (
        <input
            type="text"
            className={ !readOnly ? 'input-todo-item-edit' : 'input-todo-item'}
            value={value}
            onDoubleClick={doubleClick}
            readOnly={readOnly}
            onChange={handlerChange}
            onKeyDown={handlerKeyDown}
            onBlur={blurHandler}
        />
    )
}

export default TodoItem;