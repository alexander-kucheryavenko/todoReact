import React from "react";

const Button = (props) =>{
    const click = () =>{
        console.log("Click!")
    }

    return (<>
            <button onClick={click}>
                {props.name}
            </button>
        </>)
}



export default Button;