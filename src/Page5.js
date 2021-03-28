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
import DevTrainContextProvider from './DevTrainContext'

const { Panel } = Collapse;
const { Option } = Select;



const Page5 = () => {
  
   
  return (
      
    <div >
<div style={{display:"flex"}}>
<div style={{width:"25%"}}>
    <Side/>
</div>
<div style={{width:"75%"}}>
    <div style={{marginBottom:"90px"}}>
        <Page5F/>
    </div>
    <DevTrain/>
</div>

</div>

    </div>

   
  );
};
export default Page5
