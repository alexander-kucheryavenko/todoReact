import React from "react";

const Button = (props) => {
    const { onClick, nameBtn, className } = props;

    return <button className={className} onClick={onClick}>{nameBtn}</button>;
};

export default Button;
