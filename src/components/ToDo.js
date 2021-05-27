import React, { useState } from "react";







const ToDo = () => {
 
    const [item , updateItem] = useState();
    const [listItem , updateList] = useState();
     
    // let item = 'buy apple'

    const inputval = (e)=>{
         updateItem(e.target.value);
         console.log(e.target.value);
     }

     const addItem = ()=>{
    
        updateList(item);



     }

    return (
        <div className="form-div">
            <div className="todo-form">
                <h1>Todo App</h1>
                <div className="todo-input">
                    <input onChange={inputval} type="text" className="todo-control" name="todo" placeholder="Add your new todo" required="required" />
                    <button onClick={addItem}><i class="fas fa-plus"></i></button>
                </div>
                <ul className="todoList">
                <li>{listItem}<span className="icon" ><i class="fas fa-trash"></i></span></li>
      {/* <!-- data are comes from local storage --> */}
    </ul>
            </div>
        </div>
    )
}

export default ToDo;