import Message from './components/Message'
import Counter from './components/Counter'
import Theme from './components/Theme'
import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Message header="გამარჯობა" description="ეს არის პროგრამის მოკლე აღწერა" />
                <hr></hr>
                <Counter/>
                <Theme/>
            </div>
        )
    }
}

export default MainPage;

