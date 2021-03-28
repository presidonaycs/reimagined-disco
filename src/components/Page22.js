// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Modal, Alert, InputNumber, DatePicker, Upload } from 'antd';
import {UseHistory} from 'react-router-dom'
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import Page41 from './Page41'
import {ModalContext} from './Contexts/ModalContext'



function Page22(prop) {
    const {handleShow6, show6,handleShow22, show22} = useContext(ModalContext)
    const history = useHistory();

//     const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    handleShow22();
    handleShow6();
  };

//   const handleOk = () => {
//     handleShow6();
//     handleShow22();

//   };

//   const handleCancel = () => {
//     handleShow6();
//     handleShow22();
//   };
  
    const { Option } = Select;
    const [password, setPassword] = useState(false)

    const onFinish = (values) => {
      showModal()
       
        // setFormData(values)
       
       
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect (()=>{
        
            if (password==true) {
                // alert("baddesty")
                // history.push("/facility-portal/Page41")
                showModal();
            }
           
        
     
    } , [password]);
   
    return (
        <div className="page23 padding " >
 
 
 <Form
//  style={{backgroundColor:"red"}}
 onFinish={onFinish}
 onFinishFailed={onFinishFailed}
 >

     <div className="flex-align-top" style={{maxWidth:"400px"}}>
         <div style={{width:"100%"}}>
             <div style={{padding:"3px"}} className="flex-between flex-align ">
                 <p style={{ fontWeight:"bold", }}>Please enter your password to approve</p>
                 <div style={{}}>
                     <img src="./Images/logo512.png" width="30" height="30" style={{borderRadius:"50%", marginBottom:""}}  />
                 </div>
             </div>
             <Divider style={{margin:"5px 0"}}/>
            <Form.Item
            //  label="Password"
             name="password"
             rules={[
                 {
                     required: true,
                     message: 'Please input Password!',
                 },
             ]}>
                <div style={{padding:"5px 0"}}>
                    <Input style={{border:"none", marginTop:"10px", padding:"5px"}}/>
                </div>
            </Form.Item>
            <Button htmlType block style={{  
                 fontWeight:"bold", border:"none", color:"white", marginTop:"10px", backgroundColor:"#1C811C"}}>Continue</Button>
         </div>
         {/* <div style={{padding:""}}><CloseOutlined style={{fontSize:"30px", backgroundColor:"red", color:"white", padding:"5px", marginLeft:"15px"}} /></div> */}
     </div>
 </Form>

 <Modal 
style={{backgroundColor:"transparent"}}
width="40%"
// confirmLoading
// okButtonProps={onclick=()=>{alert("How far")}}
footer={false}
okText={<p style={{maxWidth:"100px"}}>Boss</p>}
closeIcon={<CloseOutlined style={{fontSize:"25px", backgroundColor:"red",  color:"white", padding:"10px"}}/>}
 visible={show22} >
       <Page41/>
      </Modal>

        </div>
    );
}

export default Page22;


