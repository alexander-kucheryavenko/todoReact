import React from "react";

const Button = (props) =>{
    console.log("Start component Button");


    return (<>
            <button onClick={props.click}>
                {props.name}
            </button>
        </>)
}


export default Button;