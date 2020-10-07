import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Task from "./Task.css";
import ToDo from "./ToDo/ToDo.css";
import TodoList from "./ToDo/TodoList";

export default class task extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }
    this.state = {
      loggedin
    };
  }
  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <header>
          <div className="logo">
            <h2>TaskBoard</h2>
          </div>
          <ul>
          
            <img src="https://picsum.photos/200/300?random=1"/>

            
            <li>
              {" "}
              <Link to="/Logout">Logout</Link>
            </li>
            <li className="close"> X</li>
          </ul>
          <div className="menu">Menu</div>
        </header>
        <section>
          <TodoList />
        </section>
      </div>
    );
  }
}
