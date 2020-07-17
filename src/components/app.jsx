// eslint-disable-next-line no-unused-vars
import React from 'react'

import {INCREMENT, DECREMENT} from '../redux/action-types'

import * as actions from'../redux/actions'
export default class App extends React.Component {

    increment = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(actions.incrementCreator(number))
    }

    decrement = () => {
        const number = this.select.value * 1
        // 調用store方法更新狀態
        this.props.store.dispatch(actions.decrementCreator(number))

    }

    incrementOdd = () => {
        const number = this.select.value * 1
        const count = this.props.store.getState()

        if (count % 2 === 1)
            this.props.store.dispatch(actions.incrementCreator(number))
    }
    incrementIffAsync = () => {
        const number = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.incrementCreator(number))
        }, 1000)
    }


    render() {

        const count = this.props.store.getState()
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