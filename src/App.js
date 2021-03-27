import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import IsLoading from './assets/IsLoading'
import ReactNotifications from 'react-notifications-component';
import ProtectedRoute from './routes/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { CookiesProvider } from "react-cookie";
import "antd/dist/antd.css";

import './App.css';





const Home = lazy(() => import('./components/home/index'))
const UserPortal = lazy(() => import('./components/UserPortal'))





function App() {

  
const history = createBrowserHistory();
return (
  
  <Router history={history}>
    <div>
      <ReactNotifications /><Suspense fallback={<IsLoading/>}>
      <Switch>
      
        <Route path="/" exact component={Home} />

        <ProtectedRoute path="/facility-portal/" component={UserPortal} />
        {/* <Route render={() => <h1>Error 404. Page not found.</h1>} /> */}
      
      </Switch></Suspense>
    </div>
  </Router>
);

}


export default App;
