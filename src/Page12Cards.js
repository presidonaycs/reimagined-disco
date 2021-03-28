import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Select,Button, Collapse, Divider } from 'antd';
import { DeleteOutlined, UploadOutlined, CheckCircleOutlined} from '@ant-design/icons';
import Page8T1 from './Page8T1';
import Page8T2 from './Page8T2';
import Page8T3 from './Page8T3';
import Page8T4 from './Page8T4';
import Page5F from './Page5F';
import Side from './Side';
import DevTrain from './DevTrain';

const { Panel } = Collapse;
const { Option } = Select;
const Page12Cards = () => {
   
   
  return (
      
    <div className=" border" style={{width:"24.5%", }} >

<div style ={{borderBottom:"3px solid green", padding:"0 15px"}}>
    <div className="flex-between" style={{marginBottom:"15px"}}>
    	<p>Deposit TRansaction</p>
    	<img src = "./Images/logo512.png" width="25" height="25" />
    </div>
    <h2><b>1234</b></h2>
</div>
<div>
    <ul style={{listStyle:"none", padding:"0 15px"}}>
        <li className="border padding" style={{borderLeft:"none", borderRight:"none"}}>22</li>
        <li className="border padding" style={{borderLeft:"none", borderRight:"none"}}  >2</li>
        <li className="border padding" style={{borderLeft:"none", borderRight:"none"}}>20</li>
    </ul>
</div>
    </div>

   
  );
};
export default Page12Cards
