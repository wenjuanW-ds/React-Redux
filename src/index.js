import React from "react";
import ReactDOM, {render} from "react-dom"
import App from "./components/app";
import {createStore} from "redux";
import {counter} from'./redux/reducers'

import store from './redux/store'


// 將store 傳給App

function Render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}


//初始化渲染

Render()

// 訂閲監聽 store中的狀態變化了 就會自動調用重繪

store.subscribe(Render)
