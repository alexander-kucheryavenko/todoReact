import React from "react";
import Button from "../Button/button";
import {render} from "react-dom";

const List = (items = []) => {
        console.log(items.length);
        if (items.length > 0) {
                return (
                    <ul>
                            {
                                    items.map((el) =>
                                        <li>{el.name}</li>
                                    )
                            }
                    </ul>
                )
        } else {
                return null
        }


}

const Input = () => {

        const [list, setList] = React.useState([])

        const addToList = () => {
                console.log("addToList!");
                let newList = list;
                newList.push({id:0, name: "A_1", statusItem: 0})
                setList(newList);
                console.log(newList);
        }



        return(
            <>
                {/*<ListItem/>*/}
                <input onKeyUp={(event) => {
                    console.log(event.target.value);
                }} placeholder='Add todo'/>

                <button onClick = {(e) => {
                        addToList();
                        // return (<List item = {list}/>)
                }}>Add</button>


                    <List items={list} />
                </>
        )

}
export default Input;

const ListItem = () => {
        return (
            <li>list item</li>
        )
}




/* {list.map((el) => {
                    return (
                        <li>{el.id}</li>
                    )
                })}*/




/*import React from "react";
​
const Input = () => {
        const [list, setList] = React.useState([1, 2, 3]) //0: active, 1: completed
​
        const addToList = () => {
                setList([...list, 4])
        }
​
        return(
            <>
                <input onClick={() => addToList()} onKeyDown={(event) => {
                        console.log(event.target.value);
                }} placeholder='Add todo'/>
                        {list.map((el) => {
                                return (
                                    <li>{el}</li>
                                )
                        })}
             </>
        )
}
​
*/