import React from 'react';
import { Table, Tag, Space, Button,Badge, Input } from 'antd';
import DevTrain from './DevTrain'
import Page5 from './Page5'
import Page5F from './Page5F';
import Side from './Side';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SearchOutlined,
    PlusOutlined  } from '@ant-design/icons';





const Page9 = () => {
   

  return (
      
    <div style={{}}>
         <div style={{marginTop:"100px", width:"100%", }} >
<div style={{display:"flex"}}>
<div style={{width:"28%"}}>
    <Side modulename = 'admin-warehouse'/>
</div>
<div style={{width:"72%"}}>
    <div style={{marginBottom:"50px"}}>
        <Page5F modulename ='admin-warehouse'/>
    </div>
    <DevTrain modulename ='admin-warehouse'/>
</div>

</div>

    </div>
    </div>

   
  );
};
export default Page9