import React from 'react';

class WelcomeMsgClassBased extends React.Component{
    render() {
        return (
            <div>
                <Header username="Username" />
                <Greeting />
            </div>
    
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <p>Welocme in Class based component, {this.props.username}</p>
        )
    }
}

class Greeting extends React.Component {
    render() { 
        const date = new Date();
        const hours = date.getHours();
        let getCurrentTime;
        if (hours < 12) {
            getCurrentTime = "Good Morning";
        } else if (hours > 12 && hours < 17) {
            getCurrentTime = "Good Afternoon";
        } else {
            getCurrentTime = "Good Evening";
        }
        return (
            <div>{getCurrentTime} to you sir or mam</div>
        )
    }
}
export default WelcomeMsgClassBased;