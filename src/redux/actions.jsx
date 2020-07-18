/*
包含所有的action creator
 */


import {DECREMENT, INCREMENT} from "./action-types";
//同步action 返回对象
export const increment = (number) =>  ({type:INCREMENT,data:number})
export const decrement = (number) =>  ({type:DECREMENT,data:number})

//异步action 返回函数
export  const incrementAsync = (number) => {
    return dispatch => {
        // 异步代码
        setTimeout(() =>{

            dispatch(increment(number))
        },1000)
    }
}