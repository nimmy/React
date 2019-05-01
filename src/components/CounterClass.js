import React from 'react';

class CounterClass extends React.Component { 
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.clickHandlerPlus = this.clickHandlerPlus.bind(this);
        this.clickHandlerMinus = this.clickHandlerMinus.bind(this);
    }

    clickHandlerPlus () {
        this.setState(previousState => {
            return {
                count : previousState.count + 1
            }
        })
    }

    clickHandlerMinus() {
        this.setState(previousState => {
            return {
                count: previousState.count -1
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button className="btn btn-success" onClick={this.clickHandlerPlus}>Positive</button>
                <button className="btn btn-denger"  onClick={this.clickHandlerMinus}>Nagitive</button>
            </div>
        )
    }
}

export default CounterClass;