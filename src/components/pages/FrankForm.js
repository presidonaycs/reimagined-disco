import React from 'react'

import { CloseOutlined } from '@ant-design/icons';
import { Form, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { IoMdClose } from 'react-icons/io';


function FrankForm(props) {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(props.show){

  return (

    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={props.handleClose} />
      <div className="modal-box" style={{ width: '100%', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        return(
       <div className="frank" style={{width:"100%"}}>
          <Form
            style={{ backgroundColor: "hsla(120,100%,50%,0)", width: "100%", margin: "0 auto" }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >

            <div style={{ display: "flex" }}>
              <div style={{  padding: "0 10px", width: "90%" }}>
                <div style={{backgroundColor: "white",}}>
                  <div style={{ display: "flex", justifyContent: "space-between",  alignItems: "center", boxShadow: " 0 5px rgba(0, 0, 0, 0.05)" }}>
                    <Form.Item
                      style={{ paddingTop: "0px", }}
                    >
                      <p style={{ fontSize: "11px", fontWeight: "600" }}>Please enter your password</p>
                    </Form.Item>
                    <div>
                      <img src="./../images/Emblem.jpg" className="formImage" />
                    </div>
                  </div>
                  <Form.Item
                  
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    style={{ padding: "10px 0", marginTop: "3px", }}
                  >
                    <Input.Password style={{ border: "none" }} />
                  </Form.Item>
                </div>

                <Form.Item style={{ marginTop: "10px" }}>
              <Button onClick={props.handleClose} type="primary" block htmlType="submit" style={{ backgroundColor: "#06aa46", color: "white", border: "1px solid  #06aa46" }} >
                Submit
              </Button>
            </Form.Item>
              </div>
             
              <div style={{ margin: "10px", marginLeft: "auto", marginTop:"0" }}>
                <CloseOutlined style={{ color: "white", backgroundColor: "red", fontSize: "26px", }} onClick={props.handleClosed}/>
              </div>
            </div>

           
          </Form>



        </div>

    )
      </div>

    </div>


  )
}
else
  return ""; 
}

export default FrankForm
