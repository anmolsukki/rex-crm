import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class LogOut extends Component {
    constructor (props) {
        super (props)
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userRole")
        let loggedIn = true
        if (token == null && userId == null) {
          loggedIn = false
        }
        // For remove log-out Token
        localStorage.removeItem("token")
        localStorage.removeItem("userRole")
        localStorage.removeItem("roleId");
        
        this.state ={
          loggedIn
        }
    }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />
    }
    
    return (
      <div className="animated fadeIn" style={{textAlign: "center"}}>
        <h1>You are succesfully logged out!</h1>
        <Link to="/login">Login Again</Link>
      </div>
    );
  }
}

export default LogOut;
