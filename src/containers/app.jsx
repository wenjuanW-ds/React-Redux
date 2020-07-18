import React from "react";
import {connect} from 'react-redux' // ----------->  connect react component  with redux  pass propTypes
import {increment, decrement, incrementAsync} from '../redux/actions'
import Counter from '../components/counter'

// pass props


export default connect(
    state => ({count:state}),
    {increment, decrement,incrementAsync}  // 解構屬性 傳入組件

)(Counter)