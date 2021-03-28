import React, { useState,useContext, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select,Button, Collapse } from 'antd';
import Page8T1 from './Page8T1';
import Page8TT from './Page8TT';
import Page8T2 from './Page8T2';
import Page8T3 from './Page8T3';
import Page8T4 from './Page8T4';
import Page8T5 from './Page8T5';
// import {ThemeContext} from './ThemeContext'

const { Panel } = Collapse;

const Page8 = () => {
  // const{isOpen} = useContext(ThemeContext)
   
    const [change, setChange] = useState(true)
    const [key, setKey] = useState(0)
  
function callback(key) {
   setChange(!change)
   setKey(key)
  }

  return (
      
    <div style={{width:"100%", marginTop:"50px"}} >

        <Collapse accordion onChange={callback}>
    <Panel showArrow={false} 
   
    style={{backgroundColor:(key == 1 && !change)?"#D5FFD5":"white", marginBottom:"10px"}} 
    header={<p style={{fontWeight:(key == 1 && !change)?"bold":"normal"}}>MDA Request Approval Sequence</p>} key="1">
        
      <Page8T1 moduleName={'admin-inventory'}/>

    </Panel>

    <Panel showArrow={false} 
   
   style={{backgroundColor:(key == 2 && !change)?"#D5FFD5":"white", margin:"10px 0"}} 
   header={<p style={{fontWeight:(key == 2 && !change)?"bold":"normal"}}>Global Request Approval Sequence</p>} key="2">
       
     <Page8T1 moduleName={'admin-warehouse'}/>

   </Panel>

   <Panel showArrow={false} 
   
   style={{backgroundColor:(key == 3 && !change)?"#D5FFD5":"white", margin:"10px 0"}} 
   header={<p style={{fontWeight:(key == 3 && !change)?"bold":"normal"}}>Inventory Category</p>} key="3">
       
     <Page8TT/>

   </Panel>

   <Panel showArrow={false} 
   
   style={{backgroundColor:(key == 4 && !change)?"#D5FFD5":"white", margin:"10px 0"}} 
   header={<p style={{fontWeight:(key == 4 && !change)?"bold":"normal"}}>Low Threshold indicator</p>} key="4">
       
     <Page8T4/>

    </Panel>
    <Panel showArrow={false} 
   
   style={{backgroundColor:(key == 4 && !change)?"#D5FFD5":"white", margin:"10px 0"}} 
   header={<p style={{fontWeight:(key == 4 && !change)?"bold":"normal"}}>User Management</p>} key="5">
       
     <Page8T5/>

    </Panel>

   {/* <Panel showArrow={false} 
   
   style={{backgroundColor:(key == 1 && !change)?"#D5FFD5":"white", margin:"10px 0"}} 
   header={<p style={{fontWeight:(key == 1 && !change)?"bold":"normal"}}>Mallam</p>} key="1">
       
     <Page8T1/>

   </Panel> */}










    {/* <Panel showArrow={false} style={{backgroundColor:"white", margin:"10px 0"}} header="Global Request Approval Sequence" key="2">
     <Page8T2/>
    </Panel>
    <Panel showArrow={false} style={{backgroundColor:"white", margin:"10px 0"}} header="Inventory Category" key="3">
    <Page8T3/>
    </Panel>
    <Panel showArrow={false} style={{backgroundColor:"white", margin:"10px 0"}} header="Low Threshold indicator" key="4">
    <Page8T4/>
    </Panel> */}
  </Collapse>
       {/* <Button onClick={()=>{alert(isOpen)}}>click me</Button> */}
       {/* <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div>
       <div className="padding border marginBottom" style={{ backgroundColor: "white", }} >MDA approval request sequence</div> */}
    </div>

   
  );
};
export default Page8