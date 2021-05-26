import React from "react";







const ToDo = () => {



    return (
        <div className="form-div">
            <div className="todo-form">
                <h1>Todo App</h1>
                <div className="todo-input">
                    <input type="text" className="todo-control" name="todo" placeholder="Add your new todo" required="required" />
                    <button ><i class="fas fa-plus"></i></button>
                </div>
                <ul class="todoList">
                <li>buy apple<span class="icon" ><i class="fas fa-trash"></i></span></li>
      {/* <!-- data are comes from local storage --> */}
    </ul>
            </div>
        </div>
    )
}

export default ToDo;