import { CloseOutlined } from '@ant-design/icons';
import { Divider } from '@material-ui/core';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import imagg from './../../assets/images/user-avater.png'



function FrankForm(props) {




const handleClosed =()=>{
  props.accept();
  props.handleClose();


}


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (props.show) {

    return (

      <div className="overlay">
        <div className="modal-box" style={{ width: '100%', fontFamily: 'auto', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className="frank" style={{ width: "100%" }}>
            <Form
              style={{ backgroundColor: "hsla(120,100%,50%,0)", width: "100%",  }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >

              <div style={{ display: "flex", justifyContent:'center' }}>
                <div style={{ padding: "0 10px", width: "30%" }}>
                  <div style={{ backgroundColor: "white", }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Form.Item
                        style={{ paddingTop: "0px", }}
                      >
                        <p style={{ fontSize: "11px", fontWeight: "600" }}>Please enter your password</p>
                      </Form.Item>
                      <div>
                        <img src={imagg} className="formImage" />
                      </div>
                    </div>
                    <Divider/>
                    <Form.Item

                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                      style={{ padding: "10px 0", marginTop: "3px", }}
                    >
                      <Input.Password style={{ border: "none",textAlign:'center' }} />
                    </Form.Item>
                  </div>

                  <Form.Item style={{ marginTop: "10px" }}>
                    <Button onClick={handleClosed} type="primary" block  style={{ backgroundColor: "#06aa46", color: "white", border: "1px solid  #06aa46" }} >
                      Submit
                    </Button>
                  </Form.Item>
                </div>

                <div style={{ margin: "10px", marginTop: "0" }}>
                  <CloseOutlined style={{ color: "white", backgroundColor: "red", fontSize: "26px", }} onClick={props.handleClose} />
                </div>
              </div>


            </Form>



          </div>


        </div>

      </div>


    )
  }
  else
    return "";
}

export default FrankForm
