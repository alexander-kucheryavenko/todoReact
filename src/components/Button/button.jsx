import React from "react";
import "../../App.css"

const Button = (props) =>{
    console.log(props);
    const {name, onClick, className} = props;

    console.log(onClick);
    return (<>
            <button
                className={className}
                onClick={onClick}
                >
                {name}
            </button>
        </>)
}


export default Button;