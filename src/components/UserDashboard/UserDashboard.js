import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
function UserDashboard(props) {
  return (
    <div className="container">
      <div className="msg">
        <h1>Welcome </h1> 
      </div>    <br/>
      <div className="gotoButton">
      <span>
        <button><Link to="/AudioPageL1">Sign up</Link></button>
      </span>
      </div>
    </div>
  );
}

export default UserDashboard;