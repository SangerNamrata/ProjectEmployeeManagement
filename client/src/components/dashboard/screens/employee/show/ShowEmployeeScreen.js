import React, {Component } from 'react';
//import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
//import classnames from "classnames";

export default class ShowEmployeeScreen extends Component {
  constructor(props) {
        super(props);

        this.state = {
          name: "",
          email: "",
          joindate: Date.now(),
          birthdate: null,
          address: "",
          aadharcardno: "",
          pancardno: "",
          salary: 0
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });

    }

    onSubmit = (e) => {
        e.preventDefault();


        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Join date: ${this.state.joindate}`);
        console.log(`Birthdate: ${this.state.birthdate}`);
        console.log(`Address: ${this.state.address}`);
        console.log(`Aadhar card no: ${this.state.aadharcardno}`);
        console.log(`Pan card no: ${this.state.pancardno}`);
        console.log(`Salary: ${this.state.salary}`);

        this.setState({
          name: "",
          email: "",
          joindate: Date.now(),
          birthdate: null,
          address: "",
          aadharcardno: "",
          pancardno: "",
          salary: 0
        })
    }


  render() {
    return (
      <div style={{marginTop: 10}}>
                <h3 style={{align: "left"}} className="classWhiteFont">Enter employee name</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Show employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
  };
}
