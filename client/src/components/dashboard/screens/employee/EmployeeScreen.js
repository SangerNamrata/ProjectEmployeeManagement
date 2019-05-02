import React, {Component } from 'react';
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import InsertEmployeeScreen from "./insert/InsertEmployeeScreen"
import DeleteEmployeeScreen from "./delete/DeleteEmployeeScreen"
import ShowEmployeeScreen from "./show/ShowEmployeeScreen"

export default class EmployeeScreen extends Component {

  render() {
    return (

      <div className="container valign-wrapper">

        <Router>
        <div className="container">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/show" className="nav-link">Show Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/insert" className="nav-link">Insert employee</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/delete" className="nav-link">Delete employee</Link>
                </li>

              </ul>
            </div>
          <br/>
          <Route path="/show" component={ShowEmployeeScreen} />
          <Route path="/insert" component={InsertEmployeeScreen} />
          <Route path="/delete" component={DeleteEmployeeScreen} />
        </div>
      </Router>
      </div>
    )
  }
}
