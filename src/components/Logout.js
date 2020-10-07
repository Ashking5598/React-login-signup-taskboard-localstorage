import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div>
        <h5> you have been logged out</h5>
        <Link to="/">
          <span class="link"> Login again</span>
        </Link>
      </div>
    );
  }
}
