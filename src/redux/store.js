import {counter} from "./reducers";
import {createStore} from "redux";

// 生成Store 對象
const store = createStore(counter)  // 内部會第一次調用 redux函數 得到初始state
console.log(store, store.getState())

export default store