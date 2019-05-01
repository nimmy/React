import React from 'react';
import ToDo from './ToDo';
import todoData from './../JsonData/employee'

class ClassBasedTODOApp extends React.Component { 
    constructor() {
        super()
        this.state = {
            name:"Nimesh Mehra"
        }
    }
    render() {
        const makeToDoList = todoData.map(function (items, index) {
            return <ToDo key={items.id} id={items.id} taskItem={items.task} type={items.type} />
        });

        return (
            <div className="todo-container">
                <ul>
                    {makeToDoList}
                </ul>
            </div>
        )
    }
}

export default ClassBasedTODOApp;
