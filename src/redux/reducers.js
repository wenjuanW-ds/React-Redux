/*
包含多個reducer函數的模塊

 */

//接受的參數是固定的


import {INCREMENT, DECREMENT} from "./action-types";

export function counter(state = 0, action) {

    // return 新的狀態
    console.log('counter()', state,action)
    switch (action.type) {
        case 'INCREMENT':
            return state + action.data
        case 'DECREMENT':
            return state - action.data
        default:
            return state

    }



}