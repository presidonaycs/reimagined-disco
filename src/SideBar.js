// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
 import Stepz from './Stepz';
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { CiCircleOutlined,} from '@ant-design/icons';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function SideBar(prop) {
   
  return (

    <div className="Page37">
 
<div className="sideBar">
        <div className="border" style={{backgroundColor:"white", marginBottom:"10px" }}>
            <div style={{ padding:"10px", borderBottom:"2px solid red"}}>
                <p>Request for proposal for chemical flasks for secondary school labs</p>
            </div>

            <div className="padding">
            <span className="bold">Memo initiation date: <span className="opacity">Jan 19 2020</span></span>
            <p className="bold"><span>Memo initiator: </span><span className="opacity">Osagie Osaigbovo</span></p>
            </div>
        </div>
        <div className="marginBottom padding border">
            <div style={{borderBottom:"2px solid red"}}>
                <p>Cost implications</p>
                <p>Amount</p>
            </div>
            <div className="flex">
                <a>Payment Approval</a>
                <img src = "./Images/logo512.png" width= "5" height="5" />
            </div>
        </div>
        <div className="padding border">
          
           <div className="flex">
           <p>Status :</p> 
               <p style={{marginLeft:"5px"}}><CiCircleOutlined style={{fontSize:"10px", backgroundColor:"red"}}/> </p>
               <p>In Review</p>
           </div>
        </div>
        <div className='padding border'>
            <p className="border padding">Approval Journey</p>
            <Stepz/>
        </div>
    </div>
  

    </div>
  );
}

export default SideBar;
