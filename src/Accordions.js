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
import Imagez from './Imagez';
import { Steps, Collapse } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';



function Accordions(prop) {
    const { Panel } = Collapse;

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

    return (
        <div className="page25">
        <Collapse accordion >
    <Panel showArrow={false} 
    // header={"Approval Journey"}
     key="1"
     collapsible={'header'}
     extra={<Button className="border" style={{color:"black", backgroundColor:"yellow", marginLeft:"50px"}}>View querries and responses</Button>}
     >

      <p>{text}</p>
    </Panel>
    
  </Collapse>,
        </div>
    );
}

export default Accordions;


