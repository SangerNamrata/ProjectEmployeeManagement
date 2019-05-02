import React, {Component } from 'react';

export default class InsertEmployeeScreen extends Component {
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

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangeJoindate = (e) => {
        this.setState({
            joindate: e.target.value
        });
    }

    onChangeBirthdate = (e) => {
        this.setState({
            birthdate: e.target.value
        });
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        });
    }

    onChangeAadharcardno = (e) => {
        this.setState({
            aadharcardno: e.target.value
        });
    }

    onChangePancardno = (e) => {
        this.setState({
            pancardno: e.target.value
        });
    }

    onChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
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
                <h3 style={{align: "left"}} className="classWhiteFont">Insert new employee</h3>
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
                        <label>Email: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Insert new employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
  }
}
