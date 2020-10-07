import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Task from "./components/Task";
import Register from "./components/Register";
import { Container, Row, Col } from "reactstrap";
import { isEmail } from "validator";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Task" component={Task} />
        <Route path="/Logout" component={Logout} />
        <Route path="/Register" component={Register} />
      </Switch>
    );
  }
}

const A = () => {
  return (
    <div>
      <h1>nishtha here</h1>
      <Link to="/b">B Component</Link>
    </div>
  );
};

const B = () => {
  return <h1>ashish here</h1>;
};

export default App;
