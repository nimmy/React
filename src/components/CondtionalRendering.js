import React from  'react';


class UserLoggedInOut extends React.Component{
    constructor(){
        super();
        this.state = {
            isUserLoggedIn : true
        }
        this.checkStatus = this.checkStatus.bind(this);
    }

    checkStatus() {
        this.setState(prevState => {
            return{
                isUserLoggedIn : !prevState.isUserLoggedIn
            }
        })
    }

    render(){
        let buttonText = this.state.isUserLoggedIn? "LOG IN" : "LOG OUT" 
        return(
            <div>
                <button onClick={this.checkStatus}>{buttonText}</button>
            </div>
        )
    }

}

export default UserLoggedInOut;