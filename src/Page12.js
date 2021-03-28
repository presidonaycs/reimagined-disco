import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Select,Button, Collapse, Divider } from 'antd';
import { DeleteOutlined, UploadOutlined, CheckCircleOutlined} from '@ant-design/icons';
import Page12Cards from './Page12Cards';
import DevTrain11 from './DevTrain11';
import Page12Check from './Page12Check';
import Page12Select from './Page12Select';
import Page5F from './Page5F';
import Side from './Side';
import DevTrain12 from './DevTrain12';

const { Panel } = Collapse;
const { Option } = Select;
const Page12 = () => {
   
   
  return (
      
    <div >

<div className="flex" style={{justifyContent:"space-between"}}>
  <Page12Cards/>
  <Page12Cards/>
  <Page12Cards/>
  <Page12Cards/>
</div>
<div>
  <DevTrain12/>
</div>
<div className="flex-between">
  <Page12Check/>
  <Page12Check/>
  <Page12Check/>
  <Page12Check/>
  <Page12Select/>
</div>

    </div>

   
  );
};
export default Page12
