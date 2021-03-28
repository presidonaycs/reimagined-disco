// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';

// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import Page37Form from './Page37Form';
import Page27Form from './Page27Form';
import ApprovalJourney from './ApprovalJourney';
import Imagez from './Imagez';
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import ItemRequest from './ItemRequest';



function Page27(prop) {
   

    return (
        <div className="page27">
         <div className='flex'>
       
             <div className="padding" style={{width:"100%"}}>
                 <Page27Form/>
                 <div className="marginBottom">
                     <ApprovalJourney/>
                 </div>
                 <div className=""><ItemRequest/></div>
             </div>
             <div style={{padding:""}}><CloseOutlined style={{fontSize:"30px", backgroundColor:"red", color:"white", padding:"5px", marginLeft:"15px"}} /></div>
         </div>
        </div>
    );
}

export default Page27;


