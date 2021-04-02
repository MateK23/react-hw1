import React, { Component } from 'react';
import gradient from '../assets/css/linear_gradients.css'

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: ''
        }
    }

    bgSwitch = (value) => {
        this.setState({
            theme: this.state.theme = value
        })
        if (value === 1) {
            document.body.classList.remove('two');
            document.body.classList.remove('three');
            document.body.classList.remove('four');
            document.body.classList.add('one');
        }
        else if (value === 2) {
            document.body.classList.remove('one');
            document.body.classList.remove('three');
            document.body.classList.remove('four');
            document.body.classList.add('two');
        }
        else if (value === 3) {
            document.body.classList.remove('two');
            document.body.classList.remove('one');
            document.body.classList.remove('four');
            document.body.classList.add('three');
        }
        else if (value === 4) {
            document.body.classList.remove('two');
            document.body.classList.remove('three');
            document.body.classList.remove('one');
            document.body.classList.add('four');
        }


        // document.body.classList.add(gradient.one) არ იმუშავა ამან
    }

    render() {
        return (
            <div>
                <button className={gradient.oneBtn} onClick={() => this.bgSwitch(1)}>One</button>
                <button className={gradient.twoBtn} onClick={() => this.bgSwitch(2)}>Two</button>
                <button className={gradient.threeBtn} onClick={() => this.bgSwitch(3)}>Three</button>
                <button className={gradient.fourBtn} onClick={() => this.bgSwitch(4)}>Four</button>
            </div>
        )
    }
}

export default Theme;