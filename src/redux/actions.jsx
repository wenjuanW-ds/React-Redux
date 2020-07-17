/*
包含所有的action creator
 */


import {DECREMENT, INCREMENT} from "./action-types";

export const incrementCreator = (number) =>  ({type:INCREMENT,data:number})
export const decrementCreator = (number) =>  ({type:DECREMENT,data:number})
