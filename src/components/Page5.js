import React, { useState, useEffect,useContext } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Select,Button, Collapse, Divider } from 'antd';
import { DeleteOutlined, UploadOutlined, CheckCircleOutlined} from '@ant-design/icons';
import Page8T1 from './Page8T1';
import Page8T2 from './Page8T2';
import Page8T3 from './Page8T3';
import Page8T4 from './Page8T4';
import Page5F from './Page5F';
import Page5F2 from './Page5F2';
import Page5F3 from './Page5F3';
import Side from './Side';
import DevTrain from './DevTrain';


import {SwapTableContext} from './Contexts/SwapTableContext'

const { Panel } = Collapse;
const { Option } = Select;








const Page5 = () => {
    // const { show5F1} = useContext(Page5Cont)
  const {table6, table10,handleTable6,handleTable10,
          show5F1,show5F2,show5F3,handleShow5F1,handleShow5F2,handleShow5F3,
          table5, table5A
  
  }  = useContext(SwapTableContext)
  // const {show5F1} = useContext(Page5Context)
const [selekt, setSelekt] = React.useState('');


console.log(selekt)

   const handleSelect = (sel) =>{
     console.log(sel)
      setSelekt(sel);
   }
   
  return (
      
 
      <div style={{marginTop:"100px", width:"100%",}} >
      <div style={{display:"flex"}}>
      <div style={{width:"25%"}}>
      <Side handleSelect={handleSelect}/>
      </div>
      <div style={{width:"75%"}}>
      <div style={{marginBottom:"90px"}}>
        {(show5F1)&& <Page5F select={selekt}/>}
        {(show5F2)&& <Page5F2 select={selekt}/>}
        {(show5F3)&& <Page5F3 select={selekt}/>}
      </div>
      <div className="width">
         { (table5) ?
         
         <DevTrain requestColor="white"
         approveColor="transparent"
         />
        :
       <DevTrain 
       requestColor="transparent"
       approveColor="white"
       />}
    	</div>
      </div>
      
      </div>
  

    </div>
 

   
  );
};
export default Page5
