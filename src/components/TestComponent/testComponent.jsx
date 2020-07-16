import React from "react";

const TestComponent = (props) => {

    const {all, active, done} = props;

    return(
        <ul>
            <li>
                All = {all}
            </li>
            <li>
                Active = {active}
            </li>
            <li>
                Done = {done}
            </li>
        </ul>

    )
}
export default TestComponent;