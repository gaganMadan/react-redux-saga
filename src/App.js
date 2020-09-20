import React, { Component }  from "react";
import "./style.css";

import { Provider } from 'react-redux';

import store from './store'
import Home from './Home'


export default () => 
    <Provider store={store}>
        <Home />
    </Provider>


