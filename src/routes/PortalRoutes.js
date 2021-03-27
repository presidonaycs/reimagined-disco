import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { pure } from 'recompose';
import ProtectedRoute from './ProtectedRoute';
import Dashboard1 from '../components/Dashboard1'
import Report from './../components/pages/Report'
import Cookies from "universal-cookie"


const cookie = new Cookies();
// const Dashboard1 = lazy(() => import('../components/Dashboard1'))
const RequestForm = lazy(() => import('../components/RequestForm'))
const RequestReport = lazy(() => import('./../components/pages/RequestReport'))
const ViewMemoForm = lazy(() => import('../components/pages/ViewMemoForm'))
const RequestManagement8 = lazy(() => import('./../pages/RequestManagement8'))
const  ReviewRequest = lazy(() => import('./../components/MaintenanceRequestManagement'))
const Page6Final = lazy(() => import('./../components/Page6Final'))
const  IsLoading = lazy(() => import('../assets/IsLoading'))
const  FacMaintenance7 = lazy(() => import('./../components/pages/FacMaintenance7'))
const  logout = lazy(() => import('./Logout'))
const Home = lazy(() => import('./../components/home/index'))
const Tech24 = lazy(() => import('./../components/pages/TechnicalReviewModal24'))



var approvalSequence =parseInt(cookie.get("userSequence"));
console.log(cookie.get("firstName"))
console.log(cookie.get("userSequence"))




export default pure(() => (
  <Switch>
    <ProtectedRoute
      path="/facility-portal/"
      exact
      component={Dashboard1}
    />
    <Suspense fallback={<IsLoading/>}>
      
    <ProtectedRoute
      path="/facility-portal/request-maintainance"
      exact
    //  component={RequestMaintenance}
    component={RequestForm}
    />
    <ProtectedRoute
      path="/facility-portal/review-request"
      exact
      component={approvalSequence>5?RequestManagement8:ReviewRequest}
    />
    <ProtectedRoute
      path="/facility-portal/manage-request"
      exact
      component={FacMaintenance7}

    />
    <ProtectedRoute
       path="/facility-portal/request-report"
       exact
       component={Report}
    />
    <ProtectedRoute
      path="/facility-portal/facility-settings"
      exact
      component={Page6Final}
    />
    <ProtectedRoute
      path="/facility-portal/facility-pop-menu"
      exact
      component={RequestManagement8}
    />

    <ProtectedRoute
      path="/facility-portal/view-memo-form"
      exact
      component={ViewMemoForm}
    />

    <ProtectedRoute
      path='/'
      exact
      component={Home}
    />
    
    </Suspense>
  <Route render={() => <h1>Error 404. Page not found.</h1>} />
    
  </Switch>
));
