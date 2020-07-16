import React from "react";
import "../../App.css"

const Button = (props) =>{

    const {name, onClick, className} = props;

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