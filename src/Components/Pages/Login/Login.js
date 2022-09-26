import React from "react"
import "./login.css"

import LoginLogo from "../../Images/login.svg"

const Login = () => {
  return (
    <div className="DefaultContentHolder container">
      <div className="LoginWrapper">
        <div className="loginImage">
          <img src={LoginLogo} alt="" />
        </div>
        <div className="loginContent">
          <h2 className="lHeading"> Welcome Back User</h2>
          <form>
            <label htmlFor="">Enter UserName</label>
            <br />
            <input
              className="lInputer"
              type="text"
              placeholder="eg - johnWick@456"
            />
            <br />
            <label htmlFor="">Enter Password</label>
            <br />
            <input
              className="lInputer"
              type="text"
              placeholder="At least 8 characters"
            />
            <br />
            <a href="#" className="forgot">
              Forgot Password?
            </a>
            <br />
            <button className="lButton">Get Me In</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login
