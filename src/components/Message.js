import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
}

export default Message;