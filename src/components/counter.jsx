import React from 'react'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    increment = () => {
        const number = this.select.value * 1
        this.props.increment(number)
    }

    decrement = () => {
        const number = this.select.value * 1
        // 調用store方法更新狀態
        this.props.decrement(number)

    }

    incrementOdd = () => {
        const number = this.select.value * 1
        const count = this.props.count

        if (count % 2 === 1)
            this.props.increment(number)
    }
    incrementIffAsync = () => {
        const number = this.select.value * 1
        setTimeout(() => {
            this.props.increment(number)
        }, 1000)
    }


    render() {

        const {count} = this.props

        return (
            <div>
                <p>count {count} times</p>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;

                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementOdd}>increment iff odd</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementIffAsync}>increment async</button>

            </div>
        )
    }
}


