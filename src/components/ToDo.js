import React, { useState } from "react";
import LiList from './liList'







const ToDo = () => {

    const [item, updateItem] = useState("");
    const [listItem, updateList] = useState([]);


    const inputval = (e) => {
        updateItem(e.target.value);
    }

    const addItem = () => {

        updateList((prevalue)=>{

            return[...prevalue,  item]
        });
        
        updateItem('');


    }

    const deleteItem = (id)=>{

        console.log('ok ');
        updateList((prevalue)=>{

            return prevalue.filter((arrElem , index)=>{
                return index !== id;
            })
        })
    }

    return (
        <div className="form-div">
            <div className="todo-form">
                <h1>Todo App</h1>
                <div className="todo-input">
                    <input onChange={inputval} type="text" value={item} className="todo-control" name="todo" placeholder="Add your new todo" required="required" />
                    <button onClick={addItem}><i className="fas fa-plus"></i></button>
                </div>
                <ul className="todoList">
                   
                    {/* <!-- data are comes from local storage --> */}
                   { listItem.map((val,index)=>{
                   
                        return <LiList 
                           key = {index}
                           id = {index}
                           text = {val}
                           onSelect={deleteItem  }/>;
                    })}

                </ul> 
            </div>
        </div>
    )
}

export default ToDo;