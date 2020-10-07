import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedin
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const useremail = localStorage.getItem("email");
    const userpassword = localStorage.getItem("password");
    const { username, password } = this.state;
    //logic
    if (username === useremail && password === userpassword) {
      localStorage.setItem("token", "dhsgdfsgdhsd");
      this.setState({
        loggedin: true
      });
    } else {
      alert("Username or password not match");
    }
  }
  render() {
    if (this.state.loggedin) {
      return <Redirect to="/Task" />;
    }
    return (
      <div class="container">
        <h3>login</h3>

        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />

          <br />

          <br />
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <br />
          <br />

          <input type="submit" />

          <br />
          <div class="signup-link">
            Not a member?{" "}
            <Link to="/Register">
              <span class="link"> Signup now</span>
            </Link>
          </div>

          <br />
        </form>
      </div>
    );
  }
}
