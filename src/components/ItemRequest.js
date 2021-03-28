// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';

// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import Page37Form from './Page37Form';
import Page25Form from './Page25Form';
import ApprovalJourney from './ApprovalJourney';
import Imagez from './Imagez';
// import { Steps, Input } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import UploadButton from './UploadButton'



function ItemRequest(prop) {
    const { TextArea } = Input;

    return (
        <div className="itemRequest">
            <div className="padding" style={{ backgroundColor: "#D5FFD5", color: "black", fontWeight:"bold" }}>Item Withdraw Request</div>
            <div>
                <TextArea rows={5}>

                </TextArea>
            </div>
            <div className="flex-between  flex-align">
                <div className='' style={{width:"100%",}}>
                    <UploadButton p = "Upload Supporting Documents" />
                </div>
                <div  className=' flex' style={{width:"100%", justifyContent:"end"}}>
                    <Button style={{ backgroundColor: "green", color: "white", marginRight:"10px", padding:"0 20px" }}>Approve</Button>
                    <Button style={{ backgroundColor: " #43425D", color: "white", marginRight:"10px", padding:"0 20px" }}>Clear Entry</Button>
                    <Button style={{ backgroundColor: "#BCBCBC", color: "white", marginRight:"10px", padding:"0 20px" }}>Close</Button>
                </div>
            </div>

        </div>
    );
}

export default ItemRequest;


