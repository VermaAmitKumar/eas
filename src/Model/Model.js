    import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from 'mdbreact';

class ModalPage extends Component {
    state = {
        options: [
            {
                text: "Option 1",
                value: "1"
            },
            {
                text: "Option 2",
                value: "2"
            },
            {
                text: "Option 3",
                value: "3"
            }
        ]
    };

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.modal} toggle={() => this.props.toggle()} position="top[">
                    <MDBModalHeader toggle={() => this.props.toggle()}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        <div className="md-form">
                            <label htmlFor="materialLoginFormEmail">Full Name</label>
                            <input type="email" id="materialLoginFormEmail" className="form-control"/>
                        </div>
                        <div className="md-form">
                            <label htmlFor="materialLoginFormEmail">Email</label>
                            <input type="email" id="materialLoginFormEmail" className="form-control"/>
                        </div>
                        <div className="md-form">
                            <label htmlFor="materialLoginFormEmail">Password</label>
                            <input type="email" id="materialLoginFormEmail" className="form-control"/>
                        </div>
                        <div className="md-form">
                            <label htmlFor="materialLoginFormEmail">Gender</label>
                            <input type="email" id="materialLoginFormEmail" className="form-control"/>
                        </div>
                        <div className="md-form">
                            <label htmlFor="materialLoginFormEmail">Role</label>
                            <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={() => this.props.toggle()}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={() => this.props.toggle()}>Done</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;