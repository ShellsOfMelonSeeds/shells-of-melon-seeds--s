import React, { Component, Fragment } from "react";

import { Route } from "react-router-dom"

import Min from "./min/min.jsx"
import carList from './carList/carlist.jsx'
import Login from "./login/login.jsx"
import register from './login/register.jsx'
import cardata from './carList/cardata.jsx'
import minNone from './minnone/minNone.jsx'
import mindata from './min/mindata.jsx'


import Homepage from './home/index'

import ClassiFication from './classification/index'

class App extends Component {
    render() {
        return (
            <Fragment>
                
                <Route path='/home' component={Homepage}></Route>
                <Route path="/classification" component={ClassiFication}></Route>
                <Route path="/min" component={Min}></Route>
                <Route path="/minnone" component={minNone}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={register}></Route>
                <Route path="/car" component={carList}></Route>
                <Route path="/cardata" component={cardata}></Route>
                <Route path="/mindata" component={mindata}></Route>
            </Fragment>
        )
    }
}
export default App;