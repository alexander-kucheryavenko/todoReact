import React from "react";
import "../../App.css"

const Checkbox = (props) => {
    const {id,checked, onChange, className} = props;

    return(
        <input
            id={id}
            className={className}
            type='checkbox'
            checked={checked}
            onChange={onChange}/>
    )
}
export default Checkbox;
