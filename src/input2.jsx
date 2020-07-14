import React from "react";
import './index.css'

const Input = (props) => {
    const { enter, value, placeholder, handler } = props;

    return (
        <input
            className="new-todo"
            onKeyDown={enter}
            autoFocus
            value={value}
            placeholder={placeholder}
            onChange={(event) => handler(event)}
        />
    );
};

export default Input;
