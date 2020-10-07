import React, { Component } from "react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button
} from "reactstrap";
import { isEmail } from "validator";
import "./register.css";
import { Redirect, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.firstName === "")
      errors.firstName = "First Name can not be blank.";
    if (data.lastName === "") errors.lastName = "Last Name can not be blank.";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords must match.";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);

      //Call an api here
      //Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div class="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <h4>Sign Up !</h4>
            <br />
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              value={data.firstName}
              invalid={errors.firstName ? true : false}
              name="firstName"
              onChange={this.handleChange}
              required
            />
            <FormFeedback>{errors.firstName}</FormFeedback>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={data.lastName}
              invalid={errors.lastName ? true : false}
              name="lastName"
              onChange={this.handleChange}
              required
            />
            <FormFeedback>{errors.lastName}</FormFeedback>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              value={data.email}
              invalid={errors.email ? true : false}
              name="email"
              onChange={this.handleChange}
              required
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              value={data.password}
              type="password"
              name="password"
              invalid={errors.password ? true : false}
              onChange={this.handleChange}
              required
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              value={data.confirmPassword}
              type="password"
              name="confirmPassword"
              invalid={errors.confirmPassword ? true : false}
              onChange={this.handleChange}
              required
            />
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>
          <br />
          <Button color="primary">Submit</Button>
          <div class="signup-link">
            Already Member?{" "}
            <Link to="/">
              <span class="link">Login now</span>
            </Link>
          </div>

          <br />
        </Form>
      </div>
    );
  }
}

export default Register;
