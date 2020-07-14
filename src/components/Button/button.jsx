import React from "react";

const Button = (props) =>{

    const {name, onClick} = props;

    console.log("Start component Button");


    return (<>
            <button onClick={onClick}>
                {name}
            </button>
        </>)
}


export default Button;