import React from "react";
import Employess from '../Employess/employess'
import Home from '../Home/index'
import {Route} from "react-router-dom";

export default () => {
    return <div>
        <Route exact path="/Employess" component={Employess}/>
        <Route exact path="/" component={Home}/>
    </div>
}