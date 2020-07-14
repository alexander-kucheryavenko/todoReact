import React, {useState} from "react";
import {render} from "react-dom";

function List(props) {

    const [arr, arrPush] = React.useState([]);

    console.log("List component start")
    console.log("LIST START " + props.list);


    const listItem = newList.map((el) =>
        <li>{el}</li>
    );


    return (
        <div>
            <ul>{listItem}</ul>
            <ul></ul>
        </div>
    );
}
export default List;