/*
包含所有的action creator
 */


import {DECREMENT, INCREMENT} from "./action-types";

export const increment = (number) =>  ({type:INCREMENT,data:number})
export const decrement = (number) =>  ({type:DECREMENT,data:number})
