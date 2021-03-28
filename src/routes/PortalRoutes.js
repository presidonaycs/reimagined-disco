import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { pure } from 'recompose';
import ProtectedRoute from './ProtectedRoute';
//import Dashboard1 from '../components/Dashboard1'
import Dash from './../Dash'
import Page5 from '../components/Page5'
import Page6 from '../components/Page6'
import Page7 from '../components/Page7'
import Page8 from '../components/Page8'
import Page9 from '../components/Page9'
import Page19 from '../components/Page19'
import Page10 from '../components/Page10'
import Page11 from '../components/Page11'
import Page12 from '../components/Page12'
import Page41 from '../components/Page41';




// const Dashboard1 = lazy(() => import('../components/Dashboard1'))
// const RequestForm = lazy(() => import('../components/RequestForm'))
// const RequestReport = lazy(() => import('./../components/pages/RequestReport'))
// const ViewMemoForm = lazy(() => import('../components/pages/ViewMemoForm'))
// const RequestManagement8 = lazy(() => import('./../pages/RequestManagement8'))
// const  ReviewRequest = lazy(() => import('./../components/MaintenanceRequestManagement'))
// const Page6Final = lazy(() => import('./../components/Page6Final'))
// const  IsLoading = lazy(() => import('../assets/IsLoading'))
// const  FacMaintenance7 = lazy(() => import('./../components/pages/FacMaintenance7'))


const approvalSequence =3;





export default pure(() => (
  <Switch>
     <ProtectedRoute
      path='/adminstore-portal/inventory-manager/requisition'
      exact
    //  component={RequestMaintenance}
    component={Page5}
    />

    <ProtectedRoute
      path='/adminstore-portal/inventory-manager/review-request'
      exact
      component={Page6}
    />      
    <ProtectedRoute
      path='/adminstore-portal/inventory-manager/inventory'
      exact
    //  component={RequestMaintenance}
    component={Page7}
    />
    <ProtectedRoute
      path="/facility-portal/review-request"
      exact
      component={Page6}
    />
    <ProtectedRoute
      path="/adminstore-portal/warehouse-manager/requisition"
      exact
      component={Page9}

    />
    <ProtectedRoute
       path="/adminstore-portal/warehouse-manager/review-request"
       exact
       component={Page10}
    />
    <ProtectedRoute
      path="/adminstore-portal/request-report"
      exact
      component={Page12}
    />
    <ProtectedRoute
      path="/adminstore-portal/facility-settings"
      exact
      component={Page8}
    />

    <ProtectedRoute
      path="/facility-portal/view-memo-form"
      exact
      component={Dash}
    />
    <ProtectedRoute
      path="/facility-portal/Page41"
      exact
      component={Page41}
    />
    
      <Route render={() => <h1>Error 404. Page not founding.</h1>} />
    
  </Switch>
));
