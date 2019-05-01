import React from "react";


function QandA(props) {
    console.log(props);
    return (
        <div>
            <span>{props.id}</span>
            <a href={props.question}>{props.question}</a>
            <p >{props.answer}</p>
            <hr />
        </div>
    )
}
export default QandA;