import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, value: 0 }
    }

    // counter(value) {
    //     this.setState((state, props) => ({
    //         count: state.count + value
    //     }));
    // }

    counter = (value) => {
        this.setState({
            count: this.state.count + value
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.counter(1)}>+1</button>
                <button onClick={() => this.counter(5)}>+5</button>
                <button onClick={() => this.counter(100)}>+100</button>
                <button onClick={() => this.counter(-100)}>-100</button>
                <button onClick={() => this.counter(-5)}>-5</button>
                <button onClick={() => this.counter(-1)}>-1</button>

                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default Counter;