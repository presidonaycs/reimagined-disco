// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';



function Page24(prop) {
    const { Option } = Select;
    return (
        <div className="page24" style={{backgroundColor:"#4AD991", borderRadius:"5px", padding:"20px", color:"white", maxWidth:"350px", display:"flex", flexDirection:"column", alignItems:"center"}}>
 <img src="./Images/logo512.png" width="30" height="30" />
 <h2 style={{marginTop:"10px", color:"white"}}>Hello Osagie!</h2>
 <p style={{marginTop:"15px", fontWeight:"bold"}}>Your set up successfully submitted</p>
 <Button block style={{
     
     borderRadius:"20px",
     fontWeight:"bold", border:"none", color:"white", marginTop:"20px", backgroundColor:"#1C811C"}}>Continue</Button>

        </div>
    );
}

export default Page24;


