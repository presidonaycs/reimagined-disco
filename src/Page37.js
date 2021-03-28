// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
 import Page37Form from './Page37Form';
 import Imagez from './Imagez'
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Page37(prop) {
   
  return (

    <div className="Page37 ">
 
<div className="padding">
    {/* <div>
        <div>
            <div>
                <p>Request for proposal for chemical flasks</p>
            </div>

            <div>
            <p className="bold">Memo initiation date: <p className="opacity">Jan 19 2020</p></p>
            <p className="bold">Memo initiator: <p className="opacity">Osagie Osaigbovo</p></p>
            </div>
        </div>
        <div>
            <div className="flex-between">
                <p>Cost implications</p>
                <p>Amount</p>
            </div>
            <a>Payment Approval</a>
        </div>
        <div>
           <p>Status</p> 
           <p>circle :</p>
           <p>In Review</p>
        </div>
        <div>
            stepz
        </div>
    </div> */}
     <div><CloseOutlined style={{fontSize:"25px", backgroundColor:"red", marginBottom:"10px", float:"right", color:"white", padding:"10px"}}/></div>
    <div className="colorW">
<Page37Form/>
<Imagez/>
    </div>
  
</div>

    </div>
  );
}

export default Page37;
