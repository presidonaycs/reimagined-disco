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
import UploadButton from './UploadButton';



function Page29Form(prop) {
    const { Option } = Select;
    return (
        <div className="page37Form">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                layout="vertical"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Subject"
                    name="Subject"
                    bordered
                    rules={[{ required: true, message: 'Please input Subject!' }]}
                >
                    <Input bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }}  />
                </Form.Item>

                <div className="flex" style={{ width: "100%", borderBottom:"1px solid #FFFFFF",   }} >
                    <Form.Item

                        label="Item name"
                        name="Item name"
                        bordered
                        rules={[
                            {
                                required: true,
                                message: 'Please input Item name!',
                            },
                        ]}
                    >
                        <Select
                            bordered={false}
                            showSearch
                            style={{ borderBottom: "1px solid #909090", }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item
                        label="Quantity"
                        name="Quantity"
                        rules={[{ required: true, message: 'Please input Quantity!' }]}
                    style={{marginLeft:"20px"}}
                    >
                        <InputNumber bordered={false} style={{ width: "100%",borderBottom: "1px solid #909090", }} />
                    </Form.Item>

                    <Form.Item
                        label="Expected Date"
                        name="Expected Date"
                        rules={[{ required: true, message: 'Please input Expected Date!' }]}
                    style={{ marginLeft:"20px"}}
                    >
                        <DatePicker  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>
                </div>

                <div className="flex">
                    <Form.Item

                        label="Request Initiator"
                        name="Request Initiator"
                       
                        rules={[
                            {
                                required: true,
                                message: 'Please input Request Initiator!',
                            },
                        ]}
                    >
                        <Input bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>


                    <Form.Item
                        label="Memo Initiation Date"
                        style={{marginLeft:"20px"}}
                        name="Memo Initiation Date"
                        rules={[{ required: true, message: 'Please input Memo Initiation Date!' }]}
                    >
                        <Input bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }}  />
                    </Form.Item>

                    <Form.Item
                        label="Expected Date"
                        style={{marginLeft:"20px"}}
                        name="Expected Date"
                        rules={[{ required: true, message: 'Please input Cost IMplication!' }]}
                    >
                        <Input bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }}  />
                    </Form.Item>
                </div>
                <div className="padding ">
                    <h4>Additional info</h4>
                    <p>Lorem ipsum bla bla</p>
                </div>

                <div className='' style={{width:"100%", marginTop:"25px"}}>
                        <Form.Item
                        name="uploadButton"
                        style={{borderBottom:"1px solid"}}
                        rules={[{ required: true, message: 'Please input Subject!' }]}
                    >
                          <div className="border">
                              <UploadButton />
                          </div>
                    </Form.Item>
                          
                        </div>




            </Form>

        </div>
    );
}

export default Page29Form;


