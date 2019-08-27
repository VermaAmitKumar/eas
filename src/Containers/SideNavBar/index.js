import React from "react";
import _ from "lodash";
import Menu from "../Menues";
import {Link} from "react-router-dom";

const ImageLogo = require('../../assets/Image/zjHl2lgef9cYrQL0JFa7kzbw2vuGrxRLmh7P3zt9OXdE9g5shnN1i...Bv9ettdV9dsBUGw0pYZJdj13oyDN9Qzxdk')

export default (props) => {
    return <nav id="sidebar">
        <div className="sidebar-header">
            <img width={"100%"} alt={"logo"}
                 src={ImageLogo}/>
        </div>
        <ul className="list-unstyled components">
            {_.map(Menu, (data, key) => {
                return <li className="active" key={key}>
                    <Link to={data.path}>
                        <i className={data.iconName}></i> {data.name}
                    </Link>
                </li>
            })}
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                   className="dropdown-toggle">
                    <i className="fa fa-copy"></i>
                    Profile
                </a>
                <ul className="collapse list-unstyled " id="pageSubmenu">
                    <li>
                        <a href="#" className={'active'}>Profile</a>
                    </li>
                    <li>
                        <a href="#" className={'active'} onClick={(e) => props.LogOutButtonHandler(this)}>Logout</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
}