import React, {useState} from "react";

const TodoItem = (props) => {
    const {className, handler, el, key} = props;

    const [readOnly, setReadOnly] = useState(true);
    const [value, setValue] = useState(el.name);


    const handlerKeyDown = (evt) => {
        switch (evt.which) {
            case 13:
                console.log('key down Enter')
                blurHandler();
                break;
            case 27 :
                console.log('key down Esc')
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
        console.log('blurHandler')
        setReadOnly(!readOnly);
        handler(el, value);
    }
    const handlerChange = (evt) => {
        console.log('handlerChange')

        const str = evt.target.value;
        setValue([str]);
        console.log('@@@@@@@@@ ' + str);

    }

    return (
        <input
            type="text"
            // key={key}
            className={className}
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