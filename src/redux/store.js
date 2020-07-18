import {counter} from "./reducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
// 生成Store 對象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))//应用异步中间件
)  // 内部會第一次調用 redux函數 得到初始state

console.log(store, store.getState())

export default store