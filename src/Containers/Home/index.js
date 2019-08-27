import React, {Component} from 'react';
import '../App/App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div id="content" className={"table-responsive"}>
                    <div style={{display:"flex"}}>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
