import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import ProjectScreen from "./screens/project/ProjectScreen"
import EmployeeScreen from "./screens/employee/EmployeeScreen"
import CustomerScreen from "./screens/customer/CustomerScreen"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container valign-wrapper">

        <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link to="/" className="navbar-brand"><b>Hey there,</b> {user.name.split(" ")[0]}</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                   <Link to="/screens/project" className="nav-link">Project</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/screens/employee" className="nav-link">Employee</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/screens/customer" className="nav-link">Customer</Link>
                </li>

                <li>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Dashboard} />
          <Route path="/screens/project" component={ProjectScreen} />
          <Route path="/screens/employee" component={EmployeeScreen} />
          <Route path="/screens/customer" component={CustomerScreen} />
        </div>
      </Router>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
