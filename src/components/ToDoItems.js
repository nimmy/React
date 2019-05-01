import React from 'react';
import ToDo from './ToDo';
import todoData from './../JsonData/employee';

function ToDoItems() {
    const todoMap = todoData.map(function (item) {
        return <ToDo key={item.id} id={item.id} taskItem={item.task} type={item.type} />
    })
    return (
        <div className="todo-container">
            <ul>
                {todoMap}
            </ul>
        </div>
    )
}

export default ToDoItems;