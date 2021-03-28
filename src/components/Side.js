import React, { useState, useEffect,useContext } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select,Button } from 'antd';
import { DeleteOutlined, UploadOutlined, CheckCircleOutlined} from '@ant-design/icons';
import {SwapTableContext} from './Contexts/SwapTableContext'

const Side = (props) => {
    const { Option } = Select;

    const [selekt, setSelekt] = React.useState('')



    const handleSelect=(index)=>{

      handleSideValue(index)
     console.log(index)
      //props.handleSelect(value);
    }

    const {sideValue, handleSideValue} = useContext(SwapTableContext)


  return (
      
    <div style={{ paddingBottom:"10px"}} >
        <Form style={{}}
    layout="vertical"
>
    <div className="border padding"  style={{ marginBottom:"10px", backgroundColor:"white"}}>
    <Form.Item
                                    label="Select Request Type "
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Item Name!',
                                        },
                                    ]}
                                >
                                    <Select
                                        bordered={false}
                                        showSearch
                                       
                                          // onChange={(text,index)=>{console.log(index)}}
                                        onChange={(text,index)=>{handleSelect(index)}}
                                        style={{border:"none", borderBottom:"1px solid"}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option  key="12" value="1">Item Requisition</Option>
                                        <Option key="13" value="2">Add Item</Option>
                                        <Option key="14" value="3">Update Item</Option>

                                      
                                    </Select>
                                    <Input   onChange={(text,index)=>{console.log(index)}} style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                </Form.Item>
                               
                                <div style={{backgroundColor:"white"}} >
                                    <p style={{display:"flex", }}><b style={{marginRight:"10px"}}>Memo initiation date:</b> <p>Jan 19 2021</p></p>
                                    <p style={{display:"flex",}}><b style={{marginRight:"10px"}}>memo initiator:</b> <p>Osagie</p></p>
                                </div>
                               
    </div>
    <div className="border" style={{margin:"10px 0", backgroundColor:"white", padding:"10px"}}>
                                    <div className="flex-between">
                                        <div > 
                                            <p className="padding"><b>Cost implication</b></p>
                                            <p style={{padding:"0 10px"}}>0.00</p>
                                        </div>
                                        <div>
                                            <p className="padding" style={{textAlign:"right"}}><b>[N]</b></p>
                                            <div className="flex">
                                                <a  style={{textDecorationLine:"underline"}}>Payment Approval</a>
                                                <UploadOutlined style={{marginTop:"5px", marginLeft:"5px"}} />
                                            </div>
                                        </div>
                                    </div>
                                 
                                    
                                   
                                </div>
                                <div className="flex border padding"  style={{margin:"10px 0", marginBottom:"0px", backgroundColor:"white"}}>
                                    <p>Status</p>
                                    <div><CheckCircleOutlined style={{marginLeft:"5px"}} /></div>
                                </div>
</Form>
    </div>

   
  );
};
export default Side
