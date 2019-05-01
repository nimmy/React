import React from 'react';

function onChanges() {
    console.log('Hovered');
}

function ToDo(props) {
    console.log(props);
    return (
        <li>
            <span>{props.id}</span>
            <label htmlFor={props.id}>
                <input id={props.id} type={props.type} onChange={onChanges} />
                <p>{props.taskItem}</p>            
            </label>
        </li>
            
    )
}

export default ToDo;