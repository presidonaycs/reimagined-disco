import React from 'react';
import { Link } from 'react-router-dom';

const Dash = (props) => {
  return (
      (props.user)?
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      
      <button onClick={props.handleLogout}>Log Out</button>
      <p><Link to='/Page10F'>View Page 10</Link></p>
    </div>
    :
    ""
  )
};

export default Dash;
