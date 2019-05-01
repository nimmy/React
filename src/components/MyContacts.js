import React from 'react';
import ContactItems from "./ContactItems";

//class MyContacts applicationCache
function MyContacts() {
//class MyContacts extends Component {
    return (
        <div className="container">
            <h1>My Contact App</h1>
            ******************************************************************************
            <ContactItems name="Ram" salary="60000" email="Ram@gmail.com" contact="9998887770" married="Yes" />
            <ContactItems name="Bob" salary="50000" email="bob32@gmail.com" contact="9876543210" married="No"/>
            <ContactItems name="Jai" salary="70000" email="jai87@gmail.com" contact="9843256789" married="Yes"/>
            <ContactItems name="Shayam" salary="80000" email="shyamjaiswal@gmail.com" contact="0987612345" married="No" />
            ******************************************************************************
            <h1>Question Bank</h1>
            ******************************************************************************
        </div>
    )
}

export default MyContacts;