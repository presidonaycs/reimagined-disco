import React from 'react';
import { Link } from 'react-router-dom';

const Land = (props) => {
  return (
    <div>
      <h1>Landing</h1>
      <p>Secret Page</p>
      
      {/* <button onClick={props.handleLogout}>Log Out</button> */}
      <p><Link to='/dashboard'>Dashboard</Link></p>
    </div>
  )
};

export default Land;
