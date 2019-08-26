import React, {Component} from 'react';
import './App.css';
import {MDBBtn} from 'mdbreact';
import ModalPage from './Model/Model'
import ViewEmploye from './viewEmploye/index'
import { NavLink} from "react-router-dom";

// const PrivateRoute = ({component: ComponentToRender, ...rest}) => {
//     return <Router {...rest} rende={(props => {
//         console.log("loging");
//         return <ComponentToRender {...props}/>
//     })}>
//     </Router>
// }

class App extends Component {
    state = {
        modal: false
    }

    toggle() {
        let modalNumber = 'modal'
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <>
                <ModalPage toggle={this.toggle.bind(this)} modal={this.state.modal}/>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <img width={"100%"} alt={"logo"}
                                 src={"https://www.freelogoservices.com/api/main/ph/zjHl2lgef9cYrQL0JFa7kzbw2vuGrxRLmh7P3zt9OXdE9g5shnN1i...Bv9ettdV9dsBUGw0pYZJdj13oyDN9Qzxdk"}/>
                        </div>
                        <ul className="list-unstyled components">
                            <li className="active">
                                <NavLink to="/" >
                                    <i className="fas fa-home"></i> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Employess">
                                    <i className="fas fa-briefcase"></i> Employess
                                </NavLink>
                                {/*<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"*/}
                                {/*className="dropdown-toggle">*/}
                                {/*<i className="fas fa-copy"></i> Pages*/}
                                {/*</a>*/}
                                {/*<ul className="collapse list-unstyled" id="pageSubmenu">*/}
                                {/*<li>*/}
                                {/*<a href="#">Page 1</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*<a href="#">Page 2</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*<a href="#">Page 3</a>*/}
                                {/*</li>*/}
                                {/*</ul>*/}
                            </li>
                            <li>
                                <NavLink to="/role">
                                    <i className="fas fa-image"></i> Role
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="ProjectClientDetail">
                                    <i className="fas fa-question"></i> Project Client Detail
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projectDetail">
                                    <i className="fas fa-paper-plane"></i> Project Details
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button type="button" id="sidebarCollapse" className="btn btn-info btn-infoTogglew">
                                    <i className="fas fa-align-left"></i>
                                    <span>Toggle Sidebar</span>
                                </button>
                                <button className="btn btn-dark d-inline-block d-lg-none ml-auto " type="button"
                                        data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <i className="fas fa-align-justify"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div id="content" className={"table-responsive"}>
                            <MDBBtn onClick={this.toggle.bind(this)}>Add Employee</MDBBtn>
                            <ViewEmploye/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
