import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

  return (
// (props.user)&&


    <div>
      <h1>Login</h1>
      <p><Link to='/dashboard'>View Dashboard</Link></p>
      <p>Logged in status: {props.user.toString()}</p>
      <button onClick={props.handleLogin}>Log In</button>
    </div>
  )
};

export default Login;
