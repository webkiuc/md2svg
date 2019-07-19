import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import { Route, withRouter, Router, BrowserRouter  } from "react-router-dom";

class App extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home} />
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) { 
    return { }
}

export default connect(
    mapStateToProps,
    { }
    )(App);
