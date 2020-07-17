import React from "react";
import ReactDOM, {render} from "react-dom"
import App from "./components/app";
import {Provider} from 'react-redux'
import store from './redux/store'



// 將store 傳給App


    ReactDOM.render((
        <Provider store={store}>
        <App/>
        </Provider>

), document.getElementById('root'))

