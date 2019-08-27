import React, {Component} from 'react';
import '../App/App.css';
import {MDBBtn} from 'mdbreact';
import ViewEmploye from './viewEmploye/index'
import ModalPage from "../Model/Model";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
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
                <div id="content" className={"table-responsive"}>
                    <MDBBtn onClick={this.toggle.bind(this)}>Add Employee</MDBBtn>
                    <ViewEmploye/>
                </div>
            </>
        );
    }
}

export default Employee;
