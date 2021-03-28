
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';

import FormInfo from './FormInfo';

import Check from './Check';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import ApprovalJourney from './ApprovalJourney';



function DeletableTable() {
//     const [hold, setHold] = useState()
// const holder = (values)=>{
//     setHold(values);
   
    // console.log(hold)

// }
// handlePopulate = ()=>{
       
// }

  return (
    <div style={{ border:"2px solid", padding:"30px"}}>
   {/* <div style={{width:"30%"}}>
       <FormInfo handleHold = {holder}/>
   </div> */}
   <div >
        <ApprovalJourney />
   </div>
    </div>
  );
}

export default DeletableTable;
