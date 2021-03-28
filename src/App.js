import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import IsLoading from './assets/IsLoading'
import ReactNotifications from 'react-notifications-component';
import ProtectedRoute from './routes/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { CookiesProvider } from "react-cookie";
import UserPortal from "./components/UserPortal"
import './index.css'
import Home from "./components/home/index"
import SwapTableContextProvider from './components/Contexts/SwapTableContext'

import "antd/dist/antd.css";

import './App.css';











function App() {

  
const history = createBrowserHistory();
return (
  
  <SwapTableContextProvider>
  	<Router history={history}>
  	  <div>
  	    <ReactNotifications />
  	    <Switch>
  	    
  	      <Route path="/" exact component={Home} />
  
  	      <ProtectedRoute path="/adminstore-portal" component={UserPortal} />
  	     {/* <Route render={() => <h1>Error 404. Page not found.</h1>} /> */}
  	    
  	    </Switch>
  	  </div>
  	</Router>
  </SwapTableContextProvider>
);

}


export default App;
