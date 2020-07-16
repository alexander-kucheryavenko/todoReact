import React from "react";
import "../../App.css"

const Checkbox = (props) => {

    const {checked, onChange, className} = props;
    return(
        <input className={className} type='checkbox' checked={checked} onChange={onChange}/>
    )
}
export default Checkbox;
