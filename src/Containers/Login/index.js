import React, {Component} from 'react'
import './style.css'

class Login extends Component {
    constructor(props) {
        super(props);
    }
    LoginButtonHandler(e){
        e.preventDefault()
        localStorage.setItem("Token","demo")
        this.props.history.push("/")
    }
    render() {
        return <div className="w3layouts-main">
            <div className="bg-layer">
                <div className="header-main">
                    <div className="main-icon">
                        <span className="fa fa-eercast"></span>
                    </div>
                    <div className="header-left-bottom">
                        <form  method="post">
                            <div className="icon1">
                                <span className="fa fa-user"></span>
                                <input type="email" placeholder="Email Address" required=""/>
                            </div>
                            <div className="icon1">
                                <span className="fa fa-lock"></span>
                                <input type="password" placeholder="Password" required=""/>
                            </div>
                            <div className="login-check">
                                <label className="checkbox"><input type="checkbox" name="checkbox"
                                                                   checked=""/><i> </i> Keep
                                    me logged in</label>
                            </div>
                            <div className="bottom">
                                <button className="btn" onClick={this.LoginButtonHandler.bind(this)}>Log In</button>
                            </div>
                            <div className="links">
                                <p><a href="#">Forgot Password?</a></p>
                                <p className="right"><a href="#">New User? Register</a></p>
                                <div className="clear"></div>
                            </div>
                        </form>
                    </div>
                    <div className="social">
                        <ul>
                            <li>or login using :</li>
                            <li><a href="#" className="facebook"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="#" className="twitter"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="#" className="google"><span className="fa fa-google-plus"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login