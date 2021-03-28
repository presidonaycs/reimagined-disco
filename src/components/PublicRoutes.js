import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
      
          return <Component {...rest} {...props} />
      }
    } />
  )
}

export default PublicRoutes;
