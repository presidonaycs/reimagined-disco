// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';



function DeletableTable(prop) {
    const [formData, setFormData] = useState({})
    const { TextArea } = Input;
    const layout = {
        // labelCol: {
        //   span: 4,
        // },
        // wrapperCol: {
        //   span: 16,
        // },
      };

    const onFinish = (values) => {
        console.log('Success:', values);
        setFormData(values)

        prop.handleHold(values)
        // formData = values
        // console.log('Success:', formData);

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (

    <div>
   <Form
layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Item Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Item Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input Description!',
          },
        ]}
      >
       <TextArea rows={4} />
      </Form.Item>

      <div style={{display:"flex", justifyContent:"space-between"}}>
          <Form.Item
           label="Amount"
           name="amount" 
           rules={[
            {
              required: true,
              message: 'Please input Amount!',
            },
          ]}
           >
      <Input />
          </Form.Item>
          <Form.Item
           label="Quantity"
           name="quantity" 
           rules={[
            {
              required: true,
              message: 'Please input quantity!',
            },
          ]}
           >
      <Input />
          </Form.Item>
      </div>


      <div style={{display:""}}>
          <Form.Item>
            <Button block htmlType="submit"  style={{backgroundColor:"#06aa46", color:"white", width:"100%"}} >
              Save Record
            </Button>
          </Form.Item>

          {/* <Form.Item >
            <Button  block htmlType="submit"  style={{backgroundColor:"ash", color:"black",  width:"100%"}}>
              Cancel
            </Button>
          </Form.Item> */}
      </div>
    </Form>
    </div>
  );
}

export default DeletableTable;
