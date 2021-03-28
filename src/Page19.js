

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Select, Form, Space, Alert, InputNumber, DatePicker, Upload } from 'antd';
import {BrowserRouter, useLocation,Link } from "react-router-dom"
import Page37Form from './Page37Form';
import Imagez from './Imagez';
import { Steps, Divider } from 'antd';
import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Page19(prop) {
    const { Option } = Select;

    return (
        <div className="page19 padding" style={{padding:"0 30px"}}>


             {/* <div><CloseOutlined style={{fontSize:"25px", backgroundColor:"red", marginBottom:"10px", float:"right", color:"white", padding:"10px"}}/></div> */}
             {/* <Link to = "/page25">
       <Button style={{backgroundColor:"#06aa46"}}>Next</Button> 
    </Link>  */}
           <Page37Form/>
           <Imagez/>
           <div className="flex" style={{marginTop:"10px"}}>
               <Button block style={{backgroundColor:"green", color:"white", width:"100%"}}>Save Request</Button>
               <Button block style={{backgroundColor:"green", color:"white", width:"100%", marginLeft:"10px"}}>Submit Request</Button>
           </div>
        </div>
    );
}

export default Page19;


