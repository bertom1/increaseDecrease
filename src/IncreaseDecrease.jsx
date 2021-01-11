import React from 'react'

class IncreaseDecrease extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.num
        }
      }
    increase = () => {
        let num = this.state.amount
        this.setState({amount: num + 1})
    }
    decrease = () => {
        let num = this.state.amount
        if (num === 0) {
            window.alert("cannot go below 0")
            return;
        }
        this.setState({amount: num - 1})
    }
    render() {
        return <div>
            <button type = "button" onClick = {this.increase}>Increment</button>
            <button type = "button" onClick = {this.decrease}>Decrement</button>
            <p>{this.state.amount}</p>
        </div>
    }
}

export default IncreaseDecrease;