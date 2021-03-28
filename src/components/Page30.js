// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
 import Page30Form from './Page30Form';
 import Imagez from './Imagez'
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import ApprovalJourney from './ApprovalJourney';
import Stepz from './Stepz';
import ApprovalOnly from './ApprovalOnly';
import Side from './Side';



function Page30(prop) {
   
  return (

    <div className="Page30 ">
 
<div className="padding flex-between">
   
     {/* <div><CloseOutlined style={{fontSize:"25px", backgroundColor:"red", marginBottom:"10px", float:"right", color:"white", padding:"10px"}}/></div> */}
    <div style={{width:"20%"}}>
      <Side/>
      <Stepz/>
    </div>
    
    
    <div style={{width:"75%"}} className="colorW">
<Page30Form/>
<Imagez/>
<ApprovalOnly/>
    </div>
  
</div>

    </div>
  );
}

export default Page30;
