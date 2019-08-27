import React from "react";

export default  () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info btn-infoTogglew">
                <i className="fa fa-align-justify"></i>
            </button>

            <button className="btn btn-dark d-inline-block d-lg-none ml-auto " type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <i className="fa fa-align-justify"></i>
            </button>

            {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*<ul className="nav navbar-nav ml-auto">*/}
            {/*{_.map(Menu, (data, key) => {*/}
            {/*return <li className="nav-item active">*/}
            {/*<Link to={data.path} className="nav-link" >{data.name}</Link>*/}
            {/*</li>*/}
            {/*})}*/}
            {/*</ul>*/}
            {/*</div>*/}
        </div>
    </nav>
}