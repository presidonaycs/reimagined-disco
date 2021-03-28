import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Select,Button, Collapse, Divider, DatePicker } from 'antd';
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
      
    <div style={{width:"30%"}} >

<div>
    <h3 style ={{borderBottom:"3px solid green"}}>Deposit Transaction</h3>
    <div>
       <div class="padding border">
       	<Select style={{width:"100%"}}>
       	    <Option></Option>
       	    <Option></Option>
       	    <Option></Option>
       	</Select>
       </div>
        <div class="padding border">
        	<DatePicker style={{width:"100%"}}/>
        </div>
       <div class="padding border">
       	<div>gjjahshh hhhshsb hhshhsh</div>
       </div>
    </div>
    <div>
          <p className="" style={{backgroundColor:"#D5FFD5", padding:"10px 20px", marginTop:"10px"}}><b>Deposit Transaction</b></p>
        </div>
</div>
    </div>

   
  );
};
export default Page12Cards
