import React from "react";

const Button = (props) =>{

    const {name, onClick, counter} = props;

    return (<>
            <button onClick={onClick}>
                {name}
            </button>
        </>)
}


export default Button;