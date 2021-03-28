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
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import UploadButton from './UploadButton'



function Pagw42(prop) {
    const { TextArea } = Input;

    return (
        <div className="page42 flex">
            <div style={{width:"100%"}}>
                <div className="padding" style={{ backgroundColor: "lightgreen", color: "black" }}>Request Approval</div>
                <div>
                    <TextArea bordered={false} rows={5}>
    
                    </TextArea>
                </div>
                <Form>
                    <div className="  padding">
                        <div className='' style={{width:"100%"}}>
                        <Form.Item
                        name="uploadButton"
                        style={{borderBottom:"1px solid", paddingBottom:"10px"}}
                        rules={[{ required: true, message: 'Please input Subject!' }]}
                    >
                          <UploadButton p = "Upload Supporting Document" />
                    </Form.Item>
                          
                        </div>
                        <div  className=' flex' style={{width:"100%", justifyContent:"end"}}>
                        <Form.Item
    
                    >
                          <Button htmlType block style={{ backgroundColor: "green", color: "white", marginRight:"10px", padding:"0 20px" }}>Submit Request</Button>
                    </Form.Item>
                          
                        </div>
                    </div>
                </Form>
            </div>
            <div>
                <div  style={{width:"100%", margin:"0 15px"}}>
                    {/* <Button style={{backgroundColor:"red", border:"none"}}><CloseOutlined style={{color:"white", fontSize:"20px", fontWeight:"bold"}}/></Button> */}
                    <CloseOutlined className="padding" style={{color:"white", fontSize:"20px", fontWeight:"bold", backgroundColor:"red"}}/>
                </div>
            </div>

        </div>
    );
}

export default Pagw42;


