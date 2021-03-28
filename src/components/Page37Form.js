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
import { formatCountdown } from 'antd/lib/statistic/utils';
import { FormatColorReset } from '@material-ui/icons';
import http from './httpCommonAdmin'
// const [form] = Form.useForm();
// const formRef = React.createRef();

function Page37Form(prop) {
    const [form] = Form.useForm();
    // const formRef = React.createRef();
 const  [modalState, setModalState]= useState(10)
 const [inventoryItems, setInventoryItems]=useState([])
 
//    formRef.current.setFieldValue.Subject(
// prop.modalContent.subject
//     )
    const { Option } = Select;
    console.log(prop.modalContent)

    useEffect(()=>{
        // setModalState(prop.modalContent.subject)
        form.setFieldsValue({quantity:prop.modalContent?.quantity})
        // form.setFieldsValue({ItemName:prop.modalContent.ItemName})
        form.setFieldsValue({subject:prop.modalContent?.subject})
        form.setFieldsValue({requestInitiator:prop.modalContent?.memoInitiator})
        form.setFieldsValue({costImplication:prop.modalContent?.costImplication})
        // form.setFieldsValue({memoInitiationDate:prop.modalContent.memoInitiationDate})
        // form.setFieldsValue({expectedDate:prop.modalContent.expectedDate})


        
    },[prop.modalContent])


    useEffect(()=>{
        http.get('get-inventory-items')
        .then((res)=>setInventoryItems(res.data.data))
    }, [])


    return (
        
       
        // form.setFieldsValue({
           
           
        //   })

        <div className="page37Form">


   
   
            <Form
            form={form}
            //  ref={formRef}
                name="basic"
                initialValues={{ remember: true }}
                layout="vertical"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Subject"
                    name="subject"
                    bordered
                    rules={[{ required: true, message: 'Please input Subject!' }]}
                >
                    <Input 
                   
                    bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }}  />
                </Form.Item>

                <div className="flex" style={{ width: "100%", borderBottom:"1px solid #FFFFFF",   }} >
                    <Form.Item

                        label="Item name"
                        name="ItemName"
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
                            {inventoryItems?.map((item)=>(
                                <Option key={item.id} value={item.id}>{item.itemName}</Option>
                            ))
                                
                            }
                            
                            
                        </Select>
                    </Form.Item>


                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input Quantity!' }]}
                    style={{marginLeft:"20px"}}
                    >
                        <InputNumber defaultValue={prop.modalContent?.quantity} bordered={false} style={{ width: "100%",borderBottom: "1px solid #909090", }} />
                    </Form.Item>

                    <Form.Item
                        label="Expected Date"
                        name="expectedDate"
                        rules={[{ required: true, message: 'Please input Expected Date!' }]}
                    style={{ marginLeft:"20px"}}
                    >
                        <DatePicker defaultValue={prop.modalContent?.expectedDate}  style={{ width: "100%",border:"none", borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>
                </div>

                <div className="flex">
                    <Form.Item

                        label="Request Initiator"
                        name="requestInitiator"
                       
                        rules={[
                            {
                                required: true,
                                message: 'Please input Request Initiator!',
                            },
                        ]}
                    >
                        <Input defaultValue={prop.modalContent?.requestInitiator}  bordered={false}  style={{ width: "100%",border:"none",borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>


                    <Form.Item
                        label="Memo Initiation Date"
                        style={{marginLeft:"20px"}}
                        name="memoInitiationDate"
                        rules={[{ required: true, message: 'Please input Memo Initiation Date!' }]}
                    >
                           <DatePicker defaultValue={prop.modalContent?.memoInitiationDate}   style={{ width: "100%",border:"none", borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>

                    <Form.Item
                        label="Cost Implication"
                        style={{marginLeft:"20px"}}
                        name="costImplication"
                        rules={[{ required: true, message: 'Please input Cost Implication!' }]}
                    >
                          <Input defaultValue={prop.modalContent?.cost}   style={{ width: "100%",border:"none", borderBottom: "1px solid  #909090",  }} />
                    </Form.Item>
                </div>
                <div className="padding ">
                    <h4>Additional info</h4>
                    <p>Lorem ipsum bla bla</p>
                </div>

                <div className='' style={{width:"100%", marginTop:"25px"}}>
                        <Form.Item
                        name="uploadButton"
                      
                        rules={[{ required: true, message: 'Please input Subject!' }]}
                    >
                          <div className="">
                              <UploadButton p="Upload Supporting Documents" />
                          </div>
                    </Form.Item>
                          
                        </div>




            </Form>

        </div>
    );
}

export default Page37Form;


