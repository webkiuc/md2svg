import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

class Header extends React.Component {
    componentWillReceiveProps(props) {} 

    render() {
        return <div className="">
            <nav className="header-main navbar navbar-expand-md">
                <div className="menu-btn">
                    <i className="fab fa-battle-net"></i>
                </div>
                <Link to="/" title="Dyna Mediation">
                    <div className="logo">
                        <span>Markdown To SVG</span>
                    </div>
                </Link>
                {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                
                {/* <div id="navbarCollapse" className="collapse navbar-collapse">
                     <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">File</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Configuration</a>
                                <a href="#" className="dropdown-item">Datastructure</a>
                                <a href="#" className="dropdown-item">Lookup</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">Logout</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">View</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Fault Management</a>
                                <a href="#" className="dropdown-item">Configuration Management</a>
                                <a href="#" className="dropdown-item">User Management (for admin)</a>
                                <a href="#" className="dropdown-item">Reporting Application</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Edit Profile</a>
                                <a href="#" className="dropdown-item">View Profile</a>
                                <a href="#" className="dropdown-item">Change Password</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Help</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">About DynaMediation</a>
                            </div>
                        </li>
            </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Admin</a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>*/}
            </nav>
        </div>

    }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(
    mapStateToProps,
    { }
)(Header));