import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Login from '../Login/index'
import TopNavBar from '../TopNavBar'
import SideNavBar from '../SideNavBar'
import Routes from '../Routes/'

// const PrivateRoute = ({component: ComponentToRender, ...rest}) => {
//     return <Router {...rest} rende={(props => {
//         console.log("loging");
//         return <ComponentToRender {...props}/>
//     })}>
//     </Router>
// }

class App extends Component {
    constructor(props) {
        super(props);
    }
    LogOutButtonHandler =(e)=>{
        debugger
        localStorage.removeItem("Token")
    }
    render() {
        let logging = localStorage.getItem("Token")
        return (
            <Router>
                {(!logging)
                    ?
                    <Route exact component={Login}/>
                    :
                    <div className="wrapper">
                        <SideNavBar LogOutButtonHandler={()=>this.LogOutButtonHandler()}/>
                        <div id="content">
                            <TopNavBar/>
                            <Routes/>
                        </div>
                    </div>
                }
            </Router>
        );
    }
}

export default App;
