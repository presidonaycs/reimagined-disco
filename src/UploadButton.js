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
import { Steps, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, UploadOutlined, SmileOutlined } from '@ant-design/icons';
import ItemRequest from './ItemRequest';



function UploadButton(prop) {


    return (
        <div style={{ width:"100%"}}>
            <Upload >
                <Button className="border" style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", backgroundColor:"#EFD66BF2", color:"black" }} block icon={<UploadOutlined />}> {prop.p}</Button>
            </Upload>
        </div>
    );
}

export default UploadButton;


