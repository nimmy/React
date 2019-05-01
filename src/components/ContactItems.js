import React from "react";

function ContactItems(props) { 
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Salary: {props.salary}</p>
            <a href={"mailto:"+ props.email}>{props.email}</a>
            <p>Contact No: {props.contact}</p>
            <p>Married Status: {props.married}</p>
        </div>
    )
}

export default ContactItems;