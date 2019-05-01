import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MyContacts'
import MyContacts from './components/MyContacts';
import QuestionBank from './components/QuestionBank';
import ToDoItems from './components/ToDoItems';
import Products from './components/Products';
import WelcomeMsgClassBased from './components/WelcomeMsgClassBased';
import ClassBasedToDoApp from './components/ClassbasedTODOApp';
import CounterClass from './components/CounterClass';
import SearchLinkedIn from './components/SearchLinkedIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          ***************************************************
          <MyContacts />
          ***************************************************
          <QuestionBank />   
          ***************************************************
           <h1>ToDo Items</h1>
          ***************************************************
          <ToDoItems />
          ***************************************************
          <h1>Products</h1>
          ***************************************************
          <Products />
          ***************************************************
          <WelcomeMsgClassBased />
          ***************************************************
          <ClassBasedToDoApp />
          ***************************************************
          <CounterClass />
          ***************************************************
          <SearchLinkedIn />
        </header>
      </div>
    );
  }
}

export default App;
